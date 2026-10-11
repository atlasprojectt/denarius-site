// Denarius engine — the model plan (pure, no I/O). The core of the simulation
// (PRD P18, founder-directed 2026-10-07): where a scope's API spend closes
// when the CEO plans model swaps from a given day ("from day 11, what goes to
// Opus goes to Sonnet"). Spend already on the books is locked: a plan only
// reprices the REMAINING days. Volume holds at the scope's linear pace per
// model (observed tokens ÷ elapsed days, the run-rate the team evaluation
// uses); only the price changes, at each model's list price on each future
// date. It states a financial what-if, never technical equivalence between
// models. USD in, USD out: the caller converts at the frozen FX and adds seats
// (invariant #4). No plan before the day-5 guard lifts (invariant #5).

import { isCollecting } from "./budget";
import { deriveCost, type ModelPrice } from "./derive";

export type PlanUsage = {
  date: string;
  provider: string;
  model: string;
  inputTokens: number;
  outputTokens: number;
  derivedCost: number | null;
  uncosted?: boolean;
};

export type ModelRef = { provider: string; model: string };

/** From `startDay` (1-based day of the period) on, the tokens that would go to
 *  `from` go to `to`. Swaps apply in day order, so they chain: Opus → Sonnet
 *  on day 11, then Sonnet → Haiku on day 21, moves both to Haiku. */
export type ModelSwap = { from: ModelRef; to: ModelRef; startDay: number };

export type PlanPeriod = {
  dayOfPeriod: number;
  daysInPeriod: number;
  /** yyyy-mm-dd, first day of the period. */
  monthStart: string;
};

/** One model's money in the plan. null = uncosted (no applicable price). */
export type PlanModelLine = ModelRef & {
  /** On the books, day 1 through today. */
  realizedUsd: number | null;
  /** Remaining days, no swaps. */
  currentPaceUsd: number | null;
  /** Remaining days, with the swaps (cost lands on the model that receives the tokens). */
  plannedUsd: number | null;
};

/** A stretch of days with one constant model mix, for the "which model, which
 *  days" strip. Models are ordered by the stretch's cost, largest first. */
export type PlanSegment = {
  kind: "realized" | "planned";
  startDay: number;
  endDay: number;
  models: ModelRef[];
  usd: number | null;
};

export type ModelPlan =
  | { status: "collecting" }
  | {
      status: "ready";
      realizedUsd: number | null;
      currentPaceCloseUsd: number | null;
      planCloseUsd: number | null;
      /** planClose − currentPaceClose: negative = the plan spends less. */
      deltaUsd: number | null;
      byModel: PlanModelLine[];
      segments: PlanSegment[];
      /** True when any figure is null because a model has no price. */
      uncosted: boolean;
    };

type Tokens = { input: number; output: number };

const DATE = /^\d{4}-\d{2}-\d{2}$/;
const DAY_MS = 86_400_000;
const keyOf = (ref: ModelRef) => `${ref.provider}:${ref.model}`;
const validCount = (n: number) => Number.isFinite(n) && n >= 0;

function refOf(key: string): ModelRef {
  const at = key.indexOf(":");
  return { provider: key.slice(0, at), model: key.slice(at + 1) };
}

function sumOrNull(values: (number | null)[]): number | null {
  let total = 0;
  for (const value of values) {
    if (value === null) return null;
    total += value;
  }
  return total;
}

function validate(input: {
  usage: PlanUsage[];
  period: PlanPeriod;
  swaps: ModelSwap[];
}): void {
  const { usage, period, swaps } = input;
  const { dayOfPeriod, daysInPeriod, monthStart } = period;
  if (!DATE.test(monthStart) || Number.isNaN(Date.parse(`${monthStart}T00:00:00Z`))) {
    throw new Error("Invalid plan period start");
  }
  if (
    !Number.isInteger(daysInPeriod) ||
    daysInPeriod < 1 ||
    !Number.isInteger(dayOfPeriod) ||
    dayOfPeriod < 1 ||
    dayOfPeriod > daysInPeriod
  ) {
    throw new Error("Invalid plan period days");
  }
  const today = dateOf(monthStart, dayOfPeriod);
  for (const row of usage) {
    if (
      !DATE.test(row.date) ||
      row.date < monthStart ||
      row.date > today ||
      !row.provider ||
      !row.model ||
      !validCount(row.inputTokens) ||
      !validCount(row.outputTokens) ||
      (row.derivedCost !== null && !validCount(row.derivedCost))
    ) {
      throw new Error("Invalid plan usage");
    }
  }
  for (const swap of swaps) {
    if (
      !swap.from.provider ||
      !swap.from.model ||
      !swap.to.provider ||
      !swap.to.model ||
      keyOf(swap.from) === keyOf(swap.to)
    ) {
      throw new Error("Invalid model swap");
    }
    // The past is locked: a swap can only start on a day still to come.
    if (!Number.isInteger(swap.startDay) || swap.startDay <= dayOfPeriod || swap.startDay > daysInPeriod) {
      throw new Error("A model swap must start on a remaining day of the period");
    }
  }
}

/** The yyyy-mm-dd date of a 1-based day of the period. */
export function dateOf(monthStart: string, day: number): string {
  return new Date(Date.parse(`${monthStart}T00:00:00Z`) + (day - 1) * DAY_MS)
    .toISOString()
    .slice(0, 10);
}

/** The daily token mix on `day`: the base pace with every swap that has
 *  started by then applied, in day order. */
function mixOn(day: number, base: Map<string, Tokens>, swaps: ModelSwap[]): Map<string, Tokens> {
  const mix = new Map([...base].map(([key, tokens]) => [key, { ...tokens }]));
  for (const swap of swaps) {
    if (swap.startDay > day) break;
    const moving = mix.get(keyOf(swap.from));
    if (!moving) continue;
    mix.delete(keyOf(swap.from));
    const target = mix.get(keyOf(swap.to)) ?? { input: 0, output: 0 };
    mix.set(keyOf(swap.to), {
      input: target.input + moving.input,
      output: target.output + moving.output,
    });
  }
  return mix;
}

function dayCost(date: string, key: string, tokens: Tokens, prices: ModelPrice[]): number | null {
  if (tokens.input === 0 && tokens.output === 0) return 0;
  const cost = deriveCost(
    { ...refOf(key), date, inputTokens: tokens.input, outputTokens: tokens.output },
    prices,
  );
  return cost.uncosted ? null : cost.cost;
}

function addTo(totals: Map<string, number | null>, key: string, cost: number | null): void {
  const current = totals.has(key) ? totals.get(key)! : 0;
  totals.set(key, current === null || cost === null ? null : current + cost);
}

function orderedRefs(costs: Map<string, number | null>): ModelRef[] {
  return [...costs.entries()]
    .sort(([, a], [, b]) => (b ?? 0) - (a ?? 0))
    .map(([key]) => refOf(key));
}

export function buildModelPlan(input: {
  usage: PlanUsage[];
  prices: ModelPrice[];
  period: PlanPeriod;
  swaps: ModelSwap[];
}): ModelPlan {
  validate(input);
  const { usage, prices, period } = input;
  if (isCollecting(period.dayOfPeriod)) return { status: "collecting" };

  const swaps = [...input.swaps].sort((a, b) => a.startDay - b.startDay);
  const realized = new Map<string, number | null>();
  const observed = new Map<string, Tokens>();
  for (const row of usage) {
    const key = keyOf(row);
    addTo(realized, key, row.uncosted ? null : row.derivedCost);
    const tokens = observed.get(key) ?? { input: 0, output: 0 };
    observed.set(key, {
      input: tokens.input + row.inputTokens,
      output: tokens.output + row.outputTokens,
    });
  }

  // Linear pace: tokens over ELAPSED days, the same base as the run-rate.
  const base = new Map(
    [...observed].map(([key, tokens]) => [
      key,
      { input: tokens.input / period.dayOfPeriod, output: tokens.output / period.dayOfPeriod },
    ]),
  );

  const currentPace = new Map<string, number | null>([...base.keys()].map((key) => [key, 0]));
  const planned = new Map<string, number | null>();
  const segments: PlanSegment[] = [];
  if (usage.length > 0) {
    segments.push({
      kind: "realized",
      startDay: 1,
      endDay: period.dayOfPeriod,
      models: orderedRefs(realized),
      usd: sumOrNull([...realized.values()]),
    });
  }

  let segment: { startDay: number; costs: Map<string, number | null> } | null = null;
  const closeSegment = (endDay: number) => {
    if (segment === null) return;
    segments.push({
      kind: "planned",
      startDay: segment.startDay,
      endDay,
      models: orderedRefs(segment.costs),
      usd: sumOrNull([...segment.costs.values()]),
    });
  };

  for (let day = period.dayOfPeriod + 1; day <= period.daysInPeriod; day++) {
    const date = dateOf(period.monthStart, day);
    for (const [key, tokens] of base) addTo(currentPace, key, dayCost(date, key, tokens, prices));
    if (segment === null || swaps.some((swap) => swap.startDay === day)) {
      closeSegment(day - 1);
      segment = { startDay: day, costs: new Map() };
    }
    for (const [key, tokens] of mixOn(day, base, swaps)) {
      const cost = dayCost(date, key, tokens, prices);
      addTo(planned, key, cost);
      addTo(segment.costs, key, cost);
    }
  }
  closeSegment(period.daysInPeriod);

  const keys = [...new Set([...realized.keys(), ...planned.keys()])];
  const byModel: PlanModelLine[] = keys.map((key) => ({
    ...refOf(key),
    realizedUsd: realized.has(key) ? realized.get(key)! : 0,
    currentPaceUsd: currentPace.has(key) ? currentPace.get(key)! : 0,
    plannedUsd: planned.has(key) ? planned.get(key)! : 0,
  }));
  byModel.sort(
    (a, b) =>
      (b.realizedUsd ?? 0) + (b.plannedUsd ?? 0) - ((a.realizedUsd ?? 0) + (a.plannedUsd ?? 0)),
  );

  const realizedUsd = sumOrNull([...realized.values()]);
  const currentPaceRest = sumOrNull([...currentPace.values()]);
  const plannedRest = sumOrNull([...planned.values()]);
  const currentPaceCloseUsd =
    realizedUsd === null || currentPaceRest === null ? null : realizedUsd + currentPaceRest;
  const planCloseUsd =
    realizedUsd === null || plannedRest === null ? null : realizedUsd + plannedRest;
  const deltaUsd =
    planCloseUsd === null || currentPaceCloseUsd === null ? null : planCloseUsd - currentPaceCloseUsd;

  return {
    status: "ready",
    realizedUsd,
    currentPaceCloseUsd,
    planCloseUsd,
    deltaUsd,
    byModel,
    segments,
    uncosted: [realizedUsd, currentPaceCloseUsd, planCloseUsd].includes(null),
  };
}
