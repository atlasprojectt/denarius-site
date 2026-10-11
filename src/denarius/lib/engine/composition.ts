// Denarius engine — where the money goes (pure, no I/O). The Composição
// answer (PRD P18, issue F6): spend per vendor first, then each subscription
// and each API project/workspace, with models only as detail. API figures are
// provider-REPORTED USD (cost_daily, the headline truth); seats are the daily
// accrual in display currency. They are summed only under the frozen period
// FX — without it the total is null, never a seats-only figure (invariant #4).

import type { FrozenFx } from "./money-model";
import type { Period } from "./period";

export type Vendor = "openai" | "anthropic" | "other";

/** Subscriptions are free-text tool names; the vendor is read from the name.
 *  Anything not clearly OpenAI or Anthropic stays "other", never guessed. */
export function vendorOfTool(tool: string): Vendor {
  const name = tool.toLocaleLowerCase("pt-BR");
  if (/chatgpt|openai|codex/.test(name)) return "openai";
  if (/claude|anthropic/.test(name)) return "anthropic";
  return "other";
}

export type CostRow = {
  date: string;
  provider: string;
  /** OpenAI project or Anthropic workspace; "" when the provider reports none. */
  projectId: string;
  amountUsd: number;
};

export type SeatLine = {
  id: string;
  tool: string;
  seatCount: number;
  unitPrice: number;
  teamName: string | null;
  /** Accrued so far this period, display currency. */
  accrued: number;
};

export type ProjectTeam = {
  provider: string;
  projectId: string;
  teamName: string;
};

export type CompositionItem =
  | {
      kind: "subscription";
      id: string;
      vendor: Vendor;
      label: string;
      seatCount: number;
      unitPrice: number;
      /** null = company-wide subscription. */
      teamName: string | null;
      display: number;
    }
  | {
      kind: "api";
      id: string;
      vendor: Vendor;
      projectId: string;
      /** null = the project is not mapped to a team (Sem time). */
      teamName: string | null;
      usd: number;
      display: number | null;
      /** Change X the same days of the previous month; null without a base. */
      deltaPct: number | null;
    };

export type VendorTotal = {
  vendor: Vendor;
  apiUsd: number;
  apiDisplay: number | null;
  seatsDisplay: number;
  /** API + seats in display currency; null when API spend has no FX. */
  totalDisplay: number | null;
  /** Share of the company total; null when the total is undefined. */
  share: number | null;
  /** API change X the same days of the previous month; null without a base. */
  apiDeltaPct: number | null;
};

export type Composition = {
  totalDisplay: number | null;
  apiUsd: number;
  seatsDisplay: number;
  vendors: VendorTotal[];
  items: CompositionItem[];
};

const DAY_MS = 86_400_000;
const VENDOR_ORDER: Vendor[] = ["openai", "anthropic", "other"];

/** The previous month's days 1..N, N = today's day clamped to that month's
 *  length: the "same point of last month" every delta compares against. */
export function previousWindow(period: Pick<Period, "year" | "month" | "dayOfPeriod">): {
  start: string;
  end: string;
} {
  const startMs = Date.UTC(period.year, period.month - 2, 1);
  const lastDay = new Date(Date.UTC(period.year, period.month - 1, 0)).getUTCDate();
  const endMs = startMs + (Math.min(period.dayOfPeriod, lastDay) - 1) * DAY_MS;
  const iso = (ms: number) => new Date(ms).toISOString().slice(0, 10);
  return { start: iso(startMs), end: iso(endMs) };
}

function asVendor(provider: string): Vendor {
  return provider === "openai" || provider === "anthropic" ? provider : "other";
}

function change(current: number, previous: number | undefined): number | null {
  if (previous === undefined || previous <= 0) return null;
  return (current - previous) / previous;
}

function sumBy(rows: CostRow[], key: (row: CostRow) => string): Map<string, number> {
  const totals = new Map<string, number>();
  for (const row of rows) totals.set(key(row), (totals.get(key(row)) ?? 0) + row.amountUsd);
  return totals;
}

export function buildComposition(input: {
  cost: CostRow[];
  previousCost: CostRow[];
  seats: SeatLine[];
  projectTeams: ProjectTeam[];
  fx: FrozenFx | null;
}): Composition {
  const { cost, previousCost, seats, projectTeams, fx } = input;
  const toDisplay = (usd: number) => (fx === null ? null : usd * fx.rate);
  const projectKey = (row: { provider: string; projectId: string }) => `${row.provider}:${row.projectId}`;

  const apiByVendor = sumBy(cost, (row) => asVendor(row.provider));
  const previousByVendor = sumBy(previousCost, (row) => asVendor(row.provider));
  const apiByProject = sumBy(cost, projectKey);
  const previousByProject = sumBy(previousCost, projectKey);
  const teamByProject = new Map(projectTeams.map((p) => [projectKey(p), p.teamName]));

  const seatsByVendor = new Map<Vendor, number>();
  for (const seat of seats) {
    const vendor = vendorOfTool(seat.tool);
    seatsByVendor.set(vendor, (seatsByVendor.get(vendor) ?? 0) + seat.accrued);
  }

  const apiUsd = [...apiByVendor.values()].reduce((sum, usd) => sum + usd, 0);
  const seatsDisplay = seats.reduce((sum, seat) => sum + seat.accrued, 0);
  const apiTotalDisplay = toDisplay(apiUsd);
  const totalDisplay =
    apiTotalDisplay !== null ? apiTotalDisplay + seatsDisplay : apiUsd > 0 ? null : seatsDisplay;

  const vendors: VendorTotal[] = VENDOR_ORDER.flatMap((vendor) => {
    const vendorApiUsd = apiByVendor.get(vendor) ?? 0;
    const vendorSeats = seatsByVendor.get(vendor) ?? 0;
    if (vendorApiUsd === 0 && vendorSeats === 0) return [];
    const apiDisplay = toDisplay(vendorApiUsd);
    const vendorTotal =
      apiDisplay !== null ? apiDisplay + vendorSeats : vendorApiUsd > 0 ? null : vendorSeats;
    return [
      {
        vendor,
        apiUsd: vendorApiUsd,
        apiDisplay,
        seatsDisplay: vendorSeats,
        totalDisplay: vendorTotal,
        share:
          vendorTotal !== null && totalDisplay !== null && totalDisplay > 0
            ? vendorTotal / totalDisplay
            : null,
        apiDeltaPct: vendorApiUsd > 0 ? change(vendorApiUsd, previousByVendor.get(vendor)) : null,
      },
    ];
  });
  // Largest vendor first; ties keep VENDOR_ORDER (the sort is stable). Without
  // FX a vendor's API USD stands in, as for the items below.
  vendors.sort((a, b) => (b.totalDisplay ?? b.apiUsd) - (a.totalDisplay ?? a.apiUsd));

  const items: CompositionItem[] = [
    ...seats.map(
      (seat): CompositionItem => ({
        kind: "subscription",
        id: seat.id,
        vendor: vendorOfTool(seat.tool),
        label: seat.tool,
        seatCount: seat.seatCount,
        unitPrice: seat.unitPrice,
        teamName: seat.teamName,
        display: seat.accrued,
      }),
    ),
    ...[...apiByProject.entries()].map(([key, usd]): CompositionItem => {
      const at = key.indexOf(":");
      const provider = key.slice(0, at);
      const projectId = key.slice(at + 1);
      return {
        kind: "api",
        id: key,
        vendor: asVendor(provider),
        projectId,
        teamName: teamByProject.get(key) ?? null,
        usd,
        display: toDisplay(usd),
        deltaPct: change(usd, previousByProject.get(key)),
      };
    }),
  ];
  // Largest first; without FX an API item sorts by its USD value, which keeps
  // the order stable without pretending a conversion happened.
  const weight = (item: CompositionItem) =>
    item.kind === "subscription" ? item.display : (item.display ?? item.usd);
  items.sort((a, b) => weight(b) - weight(a));

  return { totalDisplay, apiUsd, seatsDisplay, vendors, items };
}

export type ModelUsageRow = {
  provider: string;
  projectId: string;
  model: string;
  inputTokens: number;
  outputTokens: number;
  derivedCost: number | null;
  uncosted: boolean;
};

export type ModelLine = {
  provider: string;
  model: string;
  tokens: number;
  /** Token-derived USD; null when the model has no price (uncosted). */
  derivedUsd: number | null;
};

/** The models inside one vendor, or inside one of its projects: the detail
 *  layer of Composição. Costed models by spend, unpriced ones last. */
export function modelLines(
  rows: ModelUsageRow[],
  scope: { provider: string; projectId?: string },
): ModelLine[] {
  const lines = new Map<string, ModelLine>();
  for (const row of rows) {
    if (row.provider !== scope.provider) continue;
    if (scope.projectId !== undefined && row.projectId !== scope.projectId) continue;
    const line = lines.get(row.model) ?? { provider: row.provider, model: row.model, tokens: 0, derivedUsd: 0 };
    line.tokens += row.inputTokens + row.outputTokens;
    line.derivedUsd =
      line.derivedUsd === null || row.uncosted || row.derivedCost === null
        ? null
        : line.derivedUsd + row.derivedCost;
    lines.set(row.model, line);
  }
  return [...lines.values()].sort((a, b) => {
    if ((a.derivedUsd === null) !== (b.derivedUsd === null)) return a.derivedUsd === null ? 1 : -1;
    return (b.derivedUsd ?? 0) - (a.derivedUsd ?? 0);
  });
}
