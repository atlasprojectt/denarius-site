"use client";

import { useMemo, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { domainIcons } from "@/denarius/components/domain/domain-icons";
import { Button } from "@/denarius/components/ui/button";
import { Label } from "@/denarius/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/denarius/components/ui/select";
import { compareModel, type ComparisonUsage } from "@/denarius/lib/engine/model-comparison";
import type { ModelPrice } from "@/denarius/lib/engine/derive";
import type { PlanPeriod } from "@/denarius/lib/engine/model-plan";
import { signedPercent } from "@/denarius/lib/format";
import { money, signedMoney } from "@/denarius/lib/money";

const copy = {
  action: "Comparar",
  actionLabel: (model: string) => `Comparar ${model}`,
  source: "Modelo de origem",
  alternative: "Modelo alternativo",
  current: "Custo até hoje",
  equivalent: "Teria custado no alternativo",
  delta: "Diferença até hoje",
  deltaPct: "Diferença percentual",
  budget: "Encaixe no orçamento",
  projected: "Fechamento se trocar amanhã",
  unavailable: "Indisponível",
  noAlternatives: "Não há outro modelo precificado neste período.",
  under: "Dentro do orçamento",
  over: "Acima do orçamento",
  unknown: "Sem dados suficientes",
  economics: "Economia de uso",
  totalTokens: "Tokens totais",
  mix: "Participação input / output",
  perMillion: "Custo/1M tokens",
  coverageLabel: "Cobertura",
  coverage: (days: number) => `${days} ${days === 1 ? "dia observado" : "dias observados"}`,
  coverageComplete: (days: number, expected: number) => `${days} de ${expected} dias observados — cobertura completa`,
  coveragePartial: (days: number, expected: number) => `${days} de ${expected} dias observados — cobertura parcial`,
  methodology: (period: string) => `Metodologia · período de ${period}: custo derivado = Σ(tokens × preço vigente na data), em US$; custo/1M = derivado ÷ tokens × 1M. Sem contagem de requests na fonte — custo por chamada indisponível. Total reportado pelo provedor está no resumo da tela (grão por provedor, não por modelo).`,
  collecting: "Coletando ritmo…",
  collectingNote: "Projeção de fechamento disponível a partir do dia 5 do período.",
  staleNote: (stamp: string) => `Dados de ${stamp}.`,
  noBudgetNote: "Sem orçamento ou câmbio congelado — o encaixe no orçamento fica indisponível.",
  fxNote: (rate: string, date: string) => `Convertido pelo câmbio congelado do período (${rate}/US$, capturado em ${date}).`,
  fxMissingNote: "Câmbio do período indisponível — valores exibidos em US$ (originais), sem conversão estimada.",
  uncostedNote: "Modelo sem preço cadastrado — o custo equivalente fica indisponível em vez de estimado.",
  partialNote: "Cobertura parcial do período — o fechamento projetado fica indisponível.",
  disclaimer: "A comparação usa o mesmo volume observado e não representa equivalência técnica entre modelos.",
};

/** Everything the comparison needs about one model row, built server-side. */
export type ComparisonSource = {
  provider: string;
  model: string;
  usage: ComparisonUsage[];
  prices: ModelPrice[];
  budgetUsd?: number | null;
  projectedCostUsd?: number | null;
  expectedDays?: number;
  currency: string;
  fxRate: number | null;
  fxDate: string | null;
  lastSyncAt?: string | null;
  dayOfPeriod?: number;
  period?: PlanPeriod;
  periodLabel: string;
  economics: {
    derivedCostUsd: number | null;
    costPerMillionUsd: number | null;
    uncosted: boolean;
    coverage: { start: string | null; end: string | null; observedDays: number; expectedDays: number | null; complete: boolean | null };
  };
};

/** Opens the comparison in the models sheet. `data-compare-row` lets the sheet
 *  hand focus back to this row's button when the comparison closes. */
export function CompareButton({ rowId, model, onClick }: { rowId: string; model: string; onClick: () => void }) {
  return (
    <Button
      type="button"
      variant="tertiary"
      size="sm"
      onClick={onClick}
      aria-label={copy.actionLabel(model)}
      data-compare-row={rowId}
    >
      <HugeiconsIcon icon={domainIcons.modelSwap} aria-hidden />
      {copy.action}
    </Button>
  );
}

/** The comparison body. It replaces the table inside the models sheet, whose
 *  header owns the title and the way back — never a second sheet on top. */
export function ModelComparison({ source }: { source: ComparisonSource }) {
  const { usage, prices, budgetUsd, projectedCostUsd, expectedDays, currency, fxRate, fxDate, lastSyncAt, dayOfPeriod, period, periodLabel, economics } = source;
  const alternatives = useMemo(() => prices.filter((price) => !(price.provider === source.provider && price.model === source.model)).filter((price, index, all) => all.findIndex((item) => item.provider === price.provider && item.model === price.model) === index), [prices, source]);
  const [selected, setSelected] = useState("");
  const alternative = alternatives.find((price) => `${price.provider}:${price.model}` === selected);
  const result = alternative ? compareModel({ usage, alternative, prices, budget: budgetUsd, projectedCostUsd, expectedDays, period }) : null;
  const collecting = dayOfPeriod !== undefined && dayOfPeriod < 5;
  // Display-primary money: USD facts convert at the frozen period rate; without
  // a rate the original USD stands with the disclosure — never a guess.
  const show = (usd: number | null, format = money): string => {
    if (usd === null) return copy.unavailable;
    if (fxRate !== null && fxRate > 0) return `${format(usd * fxRate, currency)} (${format(usd, "USD")})`;
    return format(usd, "USD");
  };
  const perMillion = show(economics.costPerMillionUsd);
  const coverage = economics.coverage.expectedDays !== null && economics.coverage.expectedDays !== undefined
    ? economics.coverage.complete
      ? copy.coverageComplete(economics.coverage.observedDays, economics.coverage.expectedDays)
      : copy.coveragePartial(economics.coverage.observedDays, economics.coverage.expectedDays)
    : copy.coverage(economics.coverage.observedDays);
  // The figure leads in display currency; the USD original sits under it.
  const parts = (usd: number | null): { primary: string; original: string | null } => {
    if (usd === null) return { primary: copy.unavailable, original: null };
    if (fxRate !== null && fxRate > 0) {
      return { primary: money(usd * fxRate, currency), original: money(usd, "USD") };
    }
    return { primary: money(usd, "USD"), original: null };
  };
  const notes = [
    result?.status === "uncosted" ? copy.uncostedNote : null,
    result?.partialCoverage ? copy.partialNote : null,
    result && budgetUsd == null ? copy.noBudgetNote : null,
    result && collecting ? copy.collectingNote : null,
  ].filter((note): note is string => note !== null);

  return (
    <div className="flex flex-col gap-6 p-6">
      <section className="flex flex-col gap-1">
        <h3 className="label-caps text-muted-foreground">{copy.source}</h3>
        <p className="text-sm font-medium">
          {source.provider} · {source.model}
        </p>
        {lastSyncAt && (
          <p className="text-xs text-muted-foreground tabular-nums">{copy.staleNote(lastSyncAt)}</p>
        )}
      </section>

      {alternatives.length === 0 ? (
        <p className="rounded-md border border-dashed p-4 text-sm text-ink-secondary">
          {copy.noAlternatives}
        </p>
      ) : (
        <>
          <div className="flex flex-col gap-1">
            <Label htmlFor="comparison-alternative">{copy.alternative}</Label>
            <Select
              items={Object.fromEntries(
                alternatives.map((price) => [
                  `${price.provider}:${price.model}`,
                  `${price.provider} · ${price.model}`,
                ]),
              )}
              value={selected}
              onValueChange={(next) => setSelected(next ?? "")}
            >
              <SelectTrigger id="comparison-alternative" className="w-full">
                <SelectValue placeholder={copy.alternative} />
              </SelectTrigger>
              <SelectContent>
                {alternatives.map((price) => (
                  <SelectItem
                    key={`${price.provider}:${price.model}`}
                    value={`${price.provider}:${price.model}`}
                  >
                    {price.provider} · {price.model}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {result && (
            <>
              <div className="grid grid-cols-2 gap-2">
                <Metric label={copy.current} {...parts(result.sourceCostUsd)} />
                <Metric label={copy.equivalent} {...parts(result.equivalentCostUsd)} />
              </div>
              <dl className="flex flex-col gap-2 rounded-md border border-border p-3">
                <Row
                  label={copy.delta}
                  value={result.deltaUsd === null ? copy.unavailable : show(result.deltaUsd, signedMoney)}
                />
                <Row
                  label={copy.deltaPct}
                  value={result.deltaPct === null ? copy.unavailable : signedPercent(result.deltaPct, 1)}
                />
                <Row
                  label={copy.budget}
                  value={
                    result.budgetFit === "under"
                      ? copy.under
                      : result.budgetFit === "over"
                        ? copy.over
                        : copy.unknown
                  }
                />
                <Row
                  label={copy.projected}
                  value={collecting ? copy.collecting : show(result.projectedCostUsd)}
                />
              </dl>

              <section className="flex flex-col gap-2">
                <h3 className="label-caps text-muted-foreground">{copy.economics}</h3>
                <dl className="flex flex-col gap-2">
                  <Row
                    label={copy.totalTokens}
                    value={(result.inputTokens + result.outputTokens).toLocaleString("pt-BR")}
                  />
                  <Row
                    label={copy.mix}
                    value={`${result.inputTokens.toLocaleString("pt-BR")} / ${result.outputTokens.toLocaleString("pt-BR")}`}
                  />
                  <Row label={copy.perMillion} value={perMillion} />
                  <Row label={copy.coverageLabel} value={coverage} />
                </dl>
              </section>

              <div className="flex flex-col gap-2 border-t border-border pt-4 text-xs/relaxed text-muted-foreground">
                {notes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
                <p>{copy.methodology(periodLabel)}</p>
                <p>
                  {fxRate !== null && fxRate > 0
                    ? copy.fxNote(money(fxRate, currency), fxDate ?? "—")
                    : copy.fxMissingNote}
                </p>
                <p>{copy.disclaimer}</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

/** A comparison figure: caption label over the metric value, with the USD
 *  original under it when the period FX converted it. */
function Metric({ label, primary, original }: { label: string; primary: string; original: string | null }) {
  return (
    <dl className="flex min-w-0 flex-col gap-1 rounded-md border border-border p-3">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="text-lg font-medium tabular-nums [overflow-wrap:anywhere]">{primary}</dd>
      {original && <dd className="text-xs text-ink-secondary tabular-nums">{original}</dd>}
    </dl>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 text-xs">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-medium tabular-nums">{value}</dd>
    </div>
  );
}
