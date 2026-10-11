"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, PiggyBankIcon } from "@hugeicons/core-free-icons";

import { InfoTip } from "@/denarius/components/domain/info-tip";
import { Notice } from "@/denarius/components/domain/notice";
import { StatusPill } from "@/denarius/components/domain/status-pill";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/denarius/components/ui/card";
import type { ModelPrice } from "@/denarius/lib/engine/derive";
import type { CatalogModel } from "@/denarius/lib/engine/model-catalog";
import type { PlanPeriod, PlanUsage } from "@/denarius/lib/engine/model-plan";
import { draftSwap, simulateTeam, type TeamSimulation } from "@/denarius/lib/engine/team-simulation";
import type { VerdictStatus } from "@/denarius/lib/engine/verdict";
import { modelLabel } from "@/denarius/lib/model-label";
import { signedPercent } from "@/denarius/lib/format";
import { money, signedMoney } from "@/denarius/lib/money";
import { cn } from "@/denarius/lib/utils";
import { CloseBar } from "./close-bar";
import { PlanLevers, type PlannedSwap } from "./plan-levers";
import { PlanTimeline } from "./plan-timeline";

type Ready = Extract<TeamSimulation, { status: "ready" }>;

const copy = {
  title: "Projeção do mês",
  description: "Onde o mês do time fecha com o seu plano.",
  approx: "≈",
  lead: {
    saves: "a menos no mês",
    spends: "a mais no mês",
    target: "a economizar para fechar no orçamento",
    room: "de folga no orçamento",
  },
  versusPace: (pct: string) => `${pct} X ritmo atual`,
  noAttribution: "Nenhum gasto de API está atribuído a este time ainda.",
  assign: "Atribuir gasto",
  closeTitle: "Fechamento",
  kpi: {
    pace: "Ritmo atual",
    plan: "Com o plano",
    budget: "Orçamento do time",
  },
  versusBudget: (delta: string) => `${delta} X orçamento`,
  noPlan: "sem trocas ainda",
  orgFootnote: (close: string, delta: string) => `Empresa com o plano: ≈ ${close} (≈ ${delta} X orçamento).`,
  timeline: "Qual modelo, em que dias",
  close: "Onde o mês fecha",
  closeInfoLabel: "Sobre onde o mês fecha",
  closeInfo:
    "O que já foi gasto em API, o resto do mês de cada modelo no plano e os assentos somam o fechamento. A linha marca o orçamento; a tracejada, o ritmo atual.",
  collectingTitle: "Coletando ritmo",
  collectingBody:
    "A simulação abre no dia 5 do período, quando já há ritmo para projetar o fechamento de cada time.",
  uncostedTitle: "Modelo sem preço no catálogo",
  uncostedBody: (models: string) =>
    `Este time usa ${models}, sem preço de tabela. Sem preço não há como projetar o fechamento, e nenhum número é estimado no lugar.`,
};

export type SimulationWorkbenchProps = {
  team: { id: string; name: string; budget: number; seatAccrued: number; lacksAttribution: boolean };
  currency: string;
  fxRate: number;
  period: PlanPeriod;
  usage: PlanUsage[];
  prices: ModelPrice[];
  /** The price list in force today, most expensive first. */
  catalog: CatalogModel[];
  org: { projection: number; budget: number } | null;
};

/** A card section: a `label-caps` heading with an optional info tip, 12px
 *  above its content. Sections are split by hairlines in the card. */
function Section({
  title,
  info,
  children,
}: {
  title: string;
  info?: { label: string; text: string };
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3 py-6 first:pt-0 last:pb-0">
      <div className="flex items-center gap-1.5">
        <h3 className="label-caps text-muted-foreground">{title}</h3>
        {info && <InfoTip label={info.label}>{info.text}</InfoTip>}
      </div>
      {children}
    </section>
  );
}

/** One side of the close, as a filled tile (DESIGN.md › KPI: caption over
 *  metric), with its distance to the budget under it. The simulated figure
 *  wears the violet wash. */
function KpiTile({
  label,
  value,
  note,
  simulated = false,
}: {
  label: string;
  value: string;
  note?: string;
  simulated?: boolean;
}) {
  return (
    <dl
      className={cn(
        "min-w-0 rounded-md p-4 transition-colors duration-(--motion-duration-max) ease-(--motion-ease-standard)",
        simulated ? "bg-sim-soft" : "bg-surface-control",
      )}
    >
      <dt className="truncate text-xs text-ink-secondary">{label}</dt>
      <dd className="mt-1 truncate text-lg font-medium tabular-nums">{value}</dd>
      {note && <dd className="mt-0.5 truncate text-xs text-ink-secondary">{note}</dd>}
    </dl>
  );
}

/** The result of the plan: the answer first, then the close's figures, which
 *  model runs on which days, and what the close is made of. */
function ProjectionCard({
  simulation,
  changed,
  currency,
  period,
  catalog,
  lacksAttribution,
}: {
  simulation: Ready;
  changed: boolean;
  currency: string;
  period: PlanPeriod;
  catalog: CatalogModel[];
  lacksAttribution: boolean;
}) {
  // The plan's close read as a budget status, with the product's fixed labels.
  const status: VerdictStatus =
    simulation.planMargin >= 0 ? "green" : simulation.spent >= simulation.budget ? "red" : "amber";
  const pct = (value: number | null) => (value === null ? null : copy.versusPace(signedPercent(value)));
  // The answer leads (PRD P18): with a plan, how much it saves; before one,
  // how much the budget asks to cut, or the headroom left.
  const lead = changed
    ? {
        approx: true,
        value: money(Math.abs(simulation.planDelta), currency),
        suffix: simulation.planDelta <= 0 ? copy.lead.saves : copy.lead.spends,
        detail: pct(simulation.planDeltaPct),
      }
    : simulation.baselineMargin < 0
      ? {
          approx: false,
          value: money(-simulation.baselineMargin, currency),
          suffix: copy.lead.target,
          detail: pct(simulation.budgetGapPct),
        }
      : { approx: false, value: money(simulation.baselineMargin, currency), suffix: copy.lead.room, detail: null };

  return (
    <Card aria-labelledby="simulation-projection-title" className="gap-6 lg:col-span-7">
      <CardHeader>
        <CardTitle as="h2" id="simulation-projection-title" className="flex items-center gap-2">
          <HugeiconsIcon icon={PiggyBankIcon} className="size-4 text-ink-faint" aria-hidden />
          {copy.title}
        </CardTitle>
        <CardDescription>{copy.description}</CardDescription>
        <CardAction>
          <StatusPill status={status} />
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-col divide-y divide-border">
        <div className="min-w-0 pb-6" aria-live="polite">
          <p className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1 text-display-sm font-normal tabular-nums [overflow-wrap:anywhere]">
            <span>
              {lead.approx && <span className="text-sim-ink">{copy.approx} </span>}
              {lead.value}
            </span>
            <span className="text-base font-normal tracking-normal text-ink-secondary">{lead.suffix}</span>
          </p>
          {lead.detail && (
            <p className="mt-1 text-xs text-muted-foreground tabular-nums">{lead.detail}</p>
          )}
          {lacksAttribution && (
            <p className="mt-3 text-xs text-muted-foreground">
              {copy.noAttribution}{" "}
              <Link href="/ajustes/atribuicao" className="font-medium text-foreground underline underline-offset-4">
                {copy.assign}
              </Link>
            </p>
          )}
        </div>

        {/* The close is a pair, from the current pace to the plan
            (founder-directed 2026-10-10); the budget only supports the
            comparison, so it is a caption line, not a third figure. Neutral
            ink (principle #5): the status lives on the pill. */}
        <Section title={copy.closeTitle}>
          <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center">
            <KpiTile
              label={copy.kpi.pace}
              value={money(simulation.baselineClose, currency)}
              note={copy.versusBudget(signedMoney(-simulation.baselineMargin, currency))}
            />
            <span className="justify-self-center">
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                className={cn(
                  "size-5 rotate-90 transition-colors duration-(--motion-duration-max) ease-(--motion-ease-standard) sm:rotate-0",
                  changed ? "text-sim-ink" : "text-ink-faint",
                )}
                aria-hidden
              />
            </span>
            <KpiTile
              label={copy.kpi.plan}
              value={changed ? `${copy.approx} ${money(simulation.planClose, currency)}` : "—"}
              note={
                changed
                  ? `${copy.approx} ${copy.versusBudget(signedMoney(-simulation.planMargin, currency))}`
                  : copy.noPlan
              }
              simulated={changed}
            />
          </div>
          <p className="text-xs text-muted-foreground tabular-nums">
            {copy.kpi.budget}{" "}
            <span className="font-medium text-ink-secondary">{money(simulation.budget, currency)}</span>
          </p>
          {changed && simulation.org && (
            <p className="text-xs text-muted-foreground tabular-nums">
              {copy.orgFootnote(
                money(simulation.org.close, currency),
                signedMoney(-simulation.org.margin, currency),
              )}
            </p>
          )}
        </Section>

        {simulation.hasApi && (
          <Section title={copy.timeline}>
            <PlanTimeline segments={simulation.segments} daysInPeriod={period.daysInPeriod} catalog={catalog} />
          </Section>
        )}

        <Section title={copy.close} info={{ label: copy.closeInfoLabel, text: copy.closeInfo }}>
          <CloseBar simulation={simulation} catalog={catalog} currency={currency} changed={changed} />
        </Section>
      </CardContent>
    </Card>
  );
}

/** One team's simulation (PRD P18) as two cards (founder-directed
 *  2026-10-10): the projection on the left, the plan on the right,
 *  recomputed on every change by the pure engine
 *  (lib/engine/team-simulation.ts). No LLM, no round-trip; simulated figures
 *  carry "≈" and the violet domain. */
export function SimulationWorkbench({
  team,
  currency,
  fxRate,
  period,
  usage,
  prices,
  catalog,
  org,
}: SimulationWorkbenchProps) {
  const [swaps, setSwaps] = useState<PlannedSwap[]>([]);
  const [volume, setVolume] = useState(0);
  const nextId = useRef(1);

  const simulation = useMemo(
    () =>
      simulateTeam({
        usage,
        prices,
        period,
        swaps,
        volumeChange: volume,
        fxRate,
        team: { budget: team.budget, seatAccrued: team.seatAccrued },
        org,
      }),
    [usage, prices, period, swaps, volume, fxRate, team.budget, team.seatAccrued, org],
  );

  if (simulation.status === "collecting") {
    return <Notice title={copy.collectingTitle}>{copy.collectingBody}</Notice>;
  }
  if (simulation.status === "uncosted") {
    return (
      <Notice tone="amber" title={copy.uncostedTitle}>
        {copy.uncostedBody(simulation.models.map((ref) => modelLabel(ref.model)).join(", "))}
      </Notice>
    );
  }

  const changed = swaps.length > 0 || volume !== 0;
  // Over budget at the current pace the next swap steps down the price list;
  // with headroom it steps up (PRD P18: fechar dentro / usar a folga).
  const draft = draftSwap({
    segments: simulation.segments,
    swaps,
    catalog,
    period,
    direction: simulation.baselineMargin < 0 ? "cheaper" : "stronger",
  });

  return (
    <div className="grid gap-4 lg:grid-cols-12 lg:items-start">
      <ProjectionCard
        simulation={simulation}
        changed={changed}
        currency={currency}
        period={period}
        catalog={catalog}
        lacksAttribution={team.lacksAttribution}
      />
      <PlanLevers
        className="lg:col-span-5"
        simulation={simulation}
        swaps={swaps}
        volume={volume}
        canAdd={draft !== null}
        catalog={catalog}
        period={period}
        currency={currency}
        onAdd={() => {
          if (draft === null) return;
          setSwaps((current) => [...current, { ...draft, id: nextId.current++ }]);
        }}
        onUpdate={(next) =>
          setSwaps((current) => current.map((swap) => (swap.id === next.id ? next : swap)))
        }
        onRemove={(id) => setSwaps((current) => current.filter((swap) => swap.id !== id))}
        onReset={() => {
          setSwaps([]);
          setVolume(0);
        }}
        onVolumeChange={setVolume}
      />
    </div>
  );
}
