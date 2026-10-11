// Denarius engine — the team simulation (pure, no I/O). The Simulação screen
// (PRD P18): where one team's month closes, in the display currency, when the
// CEO plans model swaps and changes the API volume over the remaining days.
// The model plan prices the API part in USD; this adds the team's seats (they
// run on at their own linear pace, a swap never touches them), converts at
// the frozen FX (invariant #4), and measures the close against the team's
// budget and, 1:1, the company's. With no swaps and no volume change the close
// is the team's run-rate projection, the same number Times shows. Spend
// already on the books is locked; the system points, the CEO decides.

import { runRate } from "./budget";
import type { ModelPrice } from "./derive";
import { rankPrice, type CatalogModel } from "./model-catalog";
import {
  buildModelPlan,
  type ModelRef,
  type ModelSwap,
  type PlanPeriod,
  type PlanSegment,
  type PlanUsage,
} from "./model-plan";

export type TeamSimulationInput = {
  usage: PlanUsage[];
  prices: ModelPrice[];
  period: PlanPeriod;
  swaps: ModelSwap[];
  /** Change to the API token volume over the remaining days, −1..1:
   *  −0.3 = 30% fewer tokens, −1 = no API use until the close. */
  volumeChange: number;
  /** The period's frozen FX, display currency per USD. */
  fxRate: number;
  /** Budget and seats accrued so far, display currency. */
  team: { budget: number; seatAccrued: number };
  /** The company close at the current pace and its budget; the team's change
   *  flows into it 1:1. null without an org budget or before day 5. */
  org: { projection: number; budget: number } | null;
};

export type SimulatedModel = ModelRef & { amount: number };
export type SimulatedSegment = PlanSegment & { amount: number };

export type BreakEven = {
  /** The volume change that lands the close on the budget, clamped to −1..1.
   *  null when the team has no API spend left to change. */
  change: number | null;
  /** False when even no API use at all closes above the budget. */
  reachable: boolean;
};

export type TeamSimulation =
  | { status: "collecting" }
  | { status: "uncosted"; models: ModelRef[] }
  | {
      status: "ready";
      budget: number;
      /** Seats accrued plus API on the books, today. */
      spent: number;
      seatAccrued: number;
      seatClose: number;
      /** API on the books, display currency. */
      realizedApi: number;
      /** No swaps, no volume change: the team's projection. */
      baselineClose: number;
      planClose: number;
      /** planClose − baselineClose: negative = the plan spends less. */
      planDelta: number;
      /** planDelta as a share of the current-pace close (−0.44 = 44% less);
       *  null when the current pace closes at zero. */
      planDeltaPct: number | null;
      /** The change to the current-pace close that lands it on the budget, as
       *  a share of that close (−0.33 = cut 33%; positive = headroom). null
       *  when the current pace closes at zero. */
      budgetGapPct: number | null;
      /** What each swap adds to the plan, in the order given (negative =
       *  it saves). Swaps chain, so each is measured on top of the ones that
       *  start before it, at the current volume; null when that stage cannot
       *  be priced. With volumeEffect they add up to planDelta. */
      swapEffects: (number | null)[];
      /** What the volume change adds on top of the swaps (negative = it
       *  saves). */
      volumeEffect: number;
      /** budget − close: positive = inside the budget. */
      baselineMargin: number;
      planMargin: number;
      /** The API still to come under the plan, per model, most costly first. */
      models: SimulatedModel[];
      segments: SimulatedSegment[];
      /** Every model the plan touches (used this month or a swap target):
       *  what a swap can move from. */
      sources: ModelRef[];
      breakEven: BreakEven;
      org: { close: number; budget: number; margin: number } | null;
      hasApi: boolean;
    };

export const VOLUME_MIN = -1;
export const VOLUME_MAX = 1;

export function simulateTeam(input: TeamSimulationInput): TeamSimulation {
  const { volumeChange, fxRate, team, period } = input;
  if (!Number.isFinite(volumeChange) || volumeChange < VOLUME_MIN || volumeChange > VOLUME_MAX) {
    throw new Error("Invalid volume change");
  }
  if (!Number.isFinite(fxRate) || fxRate <= 0) throw new Error("Invalid FX rate");

  const plan = buildModelPlan({
    usage: input.usage,
    prices: input.prices,
    period,
    swaps: input.swaps,
  });
  if (plan.status === "collecting") return { status: "collecting" };
  if (
    plan.uncosted ||
    plan.realizedUsd === null ||
    plan.currentPaceCloseUsd === null ||
    plan.planCloseUsd === null
  ) {
    return {
      status: "uncosted",
      models: plan.byModel
        .filter((line) => line.realizedUsd === null || line.plannedUsd === null)
        .map(({ provider, model }) => ({ provider, model })),
    };
  }

  const factor = 1 + volumeChange;
  const seatClose = runRate(team.seatAccrued, period);
  const realizedApi = plan.realizedUsd * fxRate;
  const restAtPace = (plan.planCloseUsd - plan.realizedUsd) * fxRate;
  const baselineClose = seatClose + plan.currentPaceCloseUsd * fxRate;
  const planClose = seatClose + realizedApi + restAtPace * factor;
  const planDelta = planClose - baselineClose;
  const share = (value: number) => (baselineClose > 0 ? value / baselineClose : null);
  // Each swap's part of the plan, in day order: the close with it and every
  // swap that starts before it, minus the close without it. The stages add up
  // to the swaps' whole effect; the volume change is measured on top.
  const order = input.swaps
    .map((swap, index) => ({ swap, index }))
    .sort((x, y) => x.swap.startDay - y.swap.startDay || x.index - y.index);
  const swapEffects: (number | null)[] = input.swaps.map(() => null);
  let previous: number | null = baselineClose;
  order.forEach((_, position) => {
    const stage = buildModelPlan({
      usage: input.usage,
      prices: input.prices,
      period,
      swaps: order.slice(0, position + 1).map((entry) => entry.swap),
    });
    const close =
      stage.status === "ready" && stage.planCloseUsd !== null
        ? seatClose + stage.planCloseUsd * fxRate
        : null;
    swapEffects[order[position].index] = close === null || previous === null ? null : close - previous;
    previous = close;
  });

  const room = team.budget - seatClose - realizedApi;
  const breakEven: BreakEven =
    restAtPace <= 0
      ? { change: null, reachable: room >= 0 }
      : (() => {
          const raw = room / restAtPace - 1;
          return {
            change: Math.max(VOLUME_MIN, Math.min(VOLUME_MAX, raw)),
            reachable: raw >= VOLUME_MIN,
          };
        })();

  return {
    status: "ready",
    budget: team.budget,
    spent: team.seatAccrued + realizedApi,
    seatAccrued: team.seatAccrued,
    seatClose,
    realizedApi,
    baselineClose,
    planClose,
    planDelta,
    planDeltaPct: share(planDelta),
    budgetGapPct: share(team.budget - baselineClose),
    swapEffects,
    volumeEffect: restAtPace * volumeChange,
    baselineMargin: team.budget - baselineClose,
    planMargin: team.budget - planClose,
    models: plan.byModel
      .map((line) => ({
        provider: line.provider,
        model: line.model,
        amount: (line.plannedUsd ?? 0) * fxRate * factor,
      }))
      .filter((line) => line.amount > 0)
      .sort((a, b) => b.amount - a.amount),
    segments: plan.segments.map((segment) => ({
      ...segment,
      amount: (segment.usd ?? 0) * fxRate * (segment.kind === "planned" ? factor : 1),
    })),
    sources: plan.byModel.map(({ provider, model }) => ({ provider, model })),
    breakEven,
    org:
      input.org === null
        ? null
        : {
            close: input.org.projection + planDelta,
            budget: input.org.budget,
            margin: input.org.budget - (input.org.projection + planDelta),
          },
    hasApi: input.usage.length > 0,
  };
}

const sameRef = (a: ModelRef, b: ModelRef) => a.provider === b.provider && a.model === b.model;

/** The default target for a swap away from `from`: the next model down the
 *  price list (or up, to use headroom) within the same provider. null when
 *  the provider has nothing in that direction. */
export function nextModel(
  from: ModelRef,
  catalog: CatalogModel[],
  direction: "cheaper" | "stronger",
): CatalogModel | null {
  const source = catalog.find((model) => sameRef(model, from));
  if (!source) return null;
  const price = rankPrice(source);
  const family = catalog.filter((model) => model.provider === from.provider && !sameRef(model, from));
  const candidates =
    direction === "cheaper"
      ? family.filter((model) => rankPrice(model) < price)
      : family.filter((model) => rankPrice(model) > price).reverse();
  return candidates[0] ?? null;
}

/** The swap "Adicionar troca" starts from: tomorrow for the first one, then
 *  halfway through what is left after the last; moving the most costly model
 *  of that stretch one step down the price list (or up, with headroom). null
 *  when no day is left or no model has a step to take. */
export function draftSwap(input: {
  segments: PlanSegment[];
  swaps: ModelSwap[];
  catalog: CatalogModel[];
  period: PlanPeriod;
  direction: "cheaper" | "stronger";
}): ModelSwap | null {
  const { segments, swaps, catalog, period, direction } = input;
  if (period.dayOfPeriod >= period.daysInPeriod) return null;
  const lastStart = swaps.reduce((last, swap) => Math.max(last, swap.startDay), 0);
  const startDay =
    lastStart === 0
      ? period.dayOfPeriod + 1
      : Math.min(period.daysInPeriod, lastStart + Math.max(1, Math.ceil((period.daysInPeriod - lastStart) / 2)));
  const stretch = segments.find(
    (segment) => segment.kind === "planned" && segment.startDay <= startDay && startDay <= segment.endDay,
  );
  for (const from of stretch?.models ?? []) {
    const to = nextModel(from, catalog, direction);
    if (to) return { from, to: { provider: to.provider, model: to.model }, startDay };
  }
  return null;
}
