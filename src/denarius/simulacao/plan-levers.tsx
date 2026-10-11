"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight02Icon,
  Calendar03Icon,
  Cancel01Icon,
  PlusSignIcon,
} from "@hugeicons/core-free-icons";

import { domainIcons } from "@/denarius/components/domain/domain-icons";
import { InfoTip } from "@/denarius/components/domain/info-tip";
import { Button } from "@/denarius/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/denarius/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/denarius/components/ui/select";
import { Slider } from "@/denarius/components/ui/slider";
import { signedPercent } from "@/denarius/lib/format";
import type { CatalogModel } from "@/denarius/lib/engine/model-catalog";
import type { ModelRef, ModelSwap, PlanPeriod } from "@/denarius/lib/engine/model-plan";
import { nextModel, type TeamSimulation } from "@/denarius/lib/engine/team-simulation";
import { modelLabel } from "@/denarius/lib/model-label";
import { money, signedMoney } from "@/denarius/lib/money";
import { cn } from "@/denarius/lib/utils";
import { PROVIDER_LABEL } from "./model-shade";

type Ready = Extract<TeamSimulation, { status: "ready" }>;
type Segment = Ready["segments"][number];

/** A swap in the plan being edited; the id keeps each card stable while the
 *  list is re-sorted by day. */
export type PlannedSwap = ModelSwap & { id: number };

const copy = {
  title: "Seu plano",
  description: "Troque modelos ou ajuste o volume.",
  infoLabel: "Como montar o plano",
  info: "Cada bloco é um trecho do mês. Troque o modelo a partir de um dia ou mude o volume de API, e a projeção ao lado muda na hora.",
  reset: "Limpar plano",
  stretches: "Trechos do mês",
  days: (start: number, end: number) => `Dias ${start}–${end}`,
  fromDayTitle: (day: number) => `A partir do dia ${day}`,
  more: (count: number) => ` +${count}`,
  realized: "realizado",
  noSwap: "ritmo atual",
  approx: (value: string) => `≈ ${value}`,
  stretchCost: (value: string) => `≈ ${value} no trecho`,
  saving: "economia",
  extra: "a mais",
  noEffect: "sem efeito",
  startsOn: "A partir do dia",
  day: (day: number) => `dia ${day}`,
  from: "Modelo de origem",
  to: "Modelo de destino",
  remove: "Remover troca",
  add: "Adicionar troca de modelo",
  noDraft: "Nenhum modelo deste trecho tem outro degrau de preço no mesmo provedor.",
  volume: "Volume de API",
  volumeInfoLabel: "Sobre o volume de API",
  volumeInfo: "Muda o uso de API só nos dias que faltam. Os assentos não mudam.",
  volumeValue: (change: number) => (Math.round(change * 100) === 0 ? "Ritmo atual" : signedPercent(change)),
  presets: "Atalhos de volume",
  presetPace: "Ritmo atual",
  presetFit: "Fechar no orçamento",
  presetRoom: "Usar a folga",
  unreachable: "Nem zerando a API o time fecha dentro: o gasto realizado e os assentos já passam do orçamento.",
  noApi: "Este time ainda não tem gasto de API atribuído, então não há troca de modelo a simular.",
  assign: "Atribuir gasto",
  disclaimer:
    "Mesmo volume de tokens, a preço de tabela, só nos dias que faltam. Não mede a qualidade dos modelos. O Denarius aponta; a decisão é sua.",
};

const keyOf = (ref: ModelRef) => `${ref.provider}:${ref.model}`;
const refOf = (key: string): ModelRef => {
  const at = key.indexOf(":");
  return { provider: key.slice(0, at), model: key.slice(at + 1) };
};

function modelsLine(segment: Segment): string {
  const lead = segment.models[0];
  if (!lead) return "";
  return modelLabel(lead.model) + (segment.models.length > 1 ? copy.more(segment.models.length - 1) : "");
}

/** A card section: a `label-caps` heading with an optional info tip and an
 *  optional value on the right, 12px above its content. */
function Section({
  title,
  titleId,
  info,
  aside,
  children,
}: {
  title: string;
  titleId?: string;
  info?: { label: string; text: string };
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3 py-6 first:pt-0 last:pb-0">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <h3 id={titleId} className="label-caps text-muted-foreground">
            {title}
          </h3>
          {info && <InfoTip label={info.label}>{info.text}</InfoTip>}
        </div>
        {aside}
      </div>
      {children}
    </section>
  );
}

/** What a change moves the month's close by, as a saving or an extra cost. */
function Effect({ value, currency }: { value: number | null; currency: string }) {
  if (value === null) return null;
  const none = Math.round(value * 100) === 0;
  return (
    <span className="flex flex-col items-end">
      <span className="text-ui font-medium whitespace-nowrap tabular-nums">
        {none ? "—" : copy.approx(signedMoney(value, currency))}
      </span>
      <span className="text-xs text-muted-foreground">
        {none ? copy.noEffect : value < 0 ? copy.saving : copy.extra}
      </span>
    </span>
  );
}

/** A stretch the plan does not edit — the locked past, or the days before the
 *  first swap — as a filled row: read-only, so no border to suggest a field. */
function StretchRow({ segment, currency }: { segment: Segment; currency: string }) {
  const locked = segment.kind === "realized";
  return (
    <li className="flex items-center gap-3 rounded-md bg-surface-control px-3 py-2.5">
      <HugeiconsIcon
        icon={locked ? domainIcons.restricted : Calendar03Icon}
        className="size-4 shrink-0 text-ink-faint"
        aria-hidden
      />
      <div className="min-w-0 flex-1">
        <p className="text-ui font-medium tabular-nums">{copy.days(segment.startDay, segment.endDay)}</p>
        <p className="mt-0.5 truncate text-xs text-ink-secondary">
          {modelsLine(segment)} · {locked ? copy.realized : copy.noSwap}
        </p>
      </div>
      <span className="shrink-0 text-ui whitespace-nowrap tabular-nums">
        {locked ? money(segment.amount, currency) : copy.approx(money(segment.amount, currency))}
      </span>
    </li>
  );
}

/** A swap the user edits in place: the planned stretch, in the violet wash of
 *  the simulation domain. */
function SwapCard({
  swap,
  segment,
  effect,
  sources,
  catalog,
  period,
  currency,
  onChange,
  onRemove,
}: {
  swap: ModelSwap;
  /** The stretch this swap opens. */
  segment: Segment | null;
  effect: number | null;
  sources: ModelRef[];
  catalog: CatalogModel[];
  period: PlanPeriod;
  currency: string;
  onChange: (swap: ModelSwap) => void;
  onRemove: () => void;
}) {
  const days = Array.from(
    { length: period.daysInPeriod - period.dayOfPeriod },
    (_, index) => period.dayOfPeriod + 1 + index,
  );
  const fromOptions = sources.some((ref) => keyOf(ref) === keyOf(swap.from))
    ? sources
    : [swap.from, ...sources];
  const targets = catalog.filter((model) => keyOf(model) !== keyOf(swap.from));
  const providers = [...new Set(targets.map((model) => model.provider))];
  const labelOf = (ref: ModelRef) => modelLabel(ref.model);

  const changeFrom = (key: string) => {
    const from = refOf(key);
    const to =
      keyOf(from) !== keyOf(swap.to)
        ? swap.to
        : (nextModel(from, catalog, "cheaper") ?? catalog.find((model) => keyOf(model) !== key) ?? swap.to);
    if (keyOf(from) === keyOf(to)) return;
    onChange({ ...swap, from, to: { provider: to.provider, model: to.model } });
  };

  return (
    <li className="flex flex-col gap-3 rounded-md bg-sim-soft p-3">
      <div className="flex items-start gap-3">
        <HugeiconsIcon
          icon={domainIcons.modelSwap}
          className="mt-0.5 size-4 shrink-0 text-sim-ink"
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <p className="text-ui font-medium tabular-nums">
            {segment ? copy.days(segment.startDay, segment.endDay) : copy.fromDayTitle(swap.startDay)}
          </p>
          {segment && (
            <p className="mt-0.5 truncate text-xs text-ink-secondary tabular-nums">
              {copy.stretchCost(money(segment.amount, currency))}
            </p>
          )}
        </div>
        <Effect value={effect} currency={currency} />
        <Button type="button" variant="ghost" size="icon-xs" aria-label={copy.remove} onClick={onRemove}>
          <HugeiconsIcon icon={Cancel01Icon} aria-hidden />
        </Button>
      </div>

      <div className="flex flex-col gap-2 pl-7">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium">{copy.startsOn}</span>
          <Select
            items={Object.fromEntries(days.map((day) => [String(day), String(day)]))}
            value={String(swap.startDay)}
            onValueChange={(value) => value && onChange({ ...swap, startDay: Number(value) })}
          >
            <SelectTrigger aria-label={copy.startsOn} className="min-w-16 tabular-nums">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {days.map((day) => (
                <SelectItem key={day} value={String(day)}>
                  {copy.day(day)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid min-w-0 gap-2 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center">
          <Select
            items={Object.fromEntries(fromOptions.map((ref) => [keyOf(ref), labelOf(ref)]))}
            value={keyOf(swap.from)}
            onValueChange={(value) => value && changeFrom(value)}
          >
            <SelectTrigger aria-label={copy.from} className="w-full min-w-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fromOptions.map((ref) => (
                <SelectItem key={keyOf(ref)} value={keyOf(ref)}>
                  {labelOf(ref)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            className="size-4 rotate-90 justify-self-center text-ink-faint sm:rotate-0"
            aria-hidden
          />
          <Select
            items={Object.fromEntries(targets.map((model) => [keyOf(model), labelOf(model)]))}
            value={keyOf(swap.to)}
            onValueChange={(value) => value && onChange({ ...swap, to: refOf(value) })}
          >
            <SelectTrigger aria-label={copy.to} className="w-full min-w-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {providers.map((provider) => (
                <SelectGroup key={provider}>
                  <SelectLabel>{PROVIDER_LABEL[provider] ?? provider}</SelectLabel>
                  {targets
                    .filter((model) => model.provider === provider)
                    .map((model) => (
                      <SelectItem key={keyOf(model)} value={keyOf(model)}>
                        {labelOf(model)}
                      </SelectItem>
                    ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </li>
  );
}

function VolumeSection({
  simulation,
  volume,
  currency,
  onVolumeChange,
}: {
  simulation: Ready;
  volume: number;
  currency: string;
  onVolumeChange: (volume: number) => void;
}) {
  const { breakEven } = simulation;
  const fitChange = breakEven.change;
  return (
    <Section
      title={copy.volume}
      titleId="volume-label"
      info={{ label: copy.volumeInfoLabel, text: copy.volumeInfo }}
      aside={volume !== 0 && <Effect value={simulation.volumeEffect} currency={currency} />}
    >
      <p className="text-lg font-medium tabular-nums">{copy.volumeValue(volume)}</p>
      <Slider
        aria-labelledby="volume-label"
        min={-100}
        max={100}
        step={5}
        value={volume * 100}
        onValueChange={(value) => onVolumeChange(value / 100)}
        getAriaValueText={(_, value) => copy.volumeValue(value / 100)}
        className="h-8"
      />
      <div role="group" aria-label={copy.presets} className="flex flex-wrap gap-2">
        <Button type="button" variant="tertiary" size="sm" onClick={() => onVolumeChange(0)}>
          {copy.presetPace}
        </Button>
        {fitChange !== null && (
          <Button
            type="button"
            variant="tertiary"
            size="sm"
            disabled={!breakEven.reachable}
            // The exact change, never a rounded one: the preset must land
            // the close ON the budget (QA-10).
            onClick={() => onVolumeChange(fitChange)}
          >
            {fitChange > 0 ? copy.presetRoom : copy.presetFit}
          </Button>
        )}
      </div>
      {!breakEven.reachable && <p className="text-xs text-muted-foreground">{copy.unreachable}</p>}
    </Section>
  );
}

/** The plan (PRD P18), its own card beside the projection: the stretches of
 *  the month — the locked past, the days before the first swap, then each
 *  swap, editable in place with what it saves — and the API volume over the
 *  remaining days. */
export function PlanLevers({
  simulation,
  swaps,
  volume,
  canAdd,
  catalog,
  period,
  currency,
  className,
  onAdd,
  onUpdate,
  onRemove,
  onReset,
  onVolumeChange,
}: {
  simulation: Ready;
  swaps: PlannedSwap[];
  volume: number;
  canAdd: boolean;
  catalog: CatalogModel[];
  period: PlanPeriod;
  currency: string;
  className?: string;
  onAdd: () => void;
  onUpdate: (swap: PlannedSwap) => void;
  onRemove: (id: number) => void;
  onReset: () => void;
  onVolumeChange: (volume: number) => void;
}) {
  const changed = swaps.length > 0 || volume !== 0;
  // simulation.swapEffects follows the order the swaps were given in.
  const effectOf = new Map(swaps.map((swap, index) => [swap.id, simulation.swapEffects[index] ?? null]));
  const ordered = [...swaps].sort((a, b) => a.startDay - b.startDay || a.id - b.id);
  const swapDays = new Set(swaps.map((swap) => swap.startDay));

  return (
    <Card aria-labelledby="simulation-plan-title" className={cn("gap-6", className)}>
      <CardHeader>
        <div className="flex items-center gap-1.5">
          <CardTitle as="h2" id="simulation-plan-title" className="flex items-center gap-2">
            <HugeiconsIcon icon={domainIcons.simulation} className="size-4 text-ink-faint" aria-hidden />
            {copy.title}
          </CardTitle>
          <InfoTip label={copy.infoLabel}>{copy.info}</InfoTip>
        </div>
        <CardDescription>{copy.description}</CardDescription>
        {changed && (
          <CardAction>
            <Button type="button" variant="tertiary" size="sm" onClick={onReset}>
              {copy.reset}
            </Button>
          </CardAction>
        )}
      </CardHeader>

      <CardContent className="flex flex-col divide-y divide-border">
        {!simulation.hasApi ? (
          <p className="rounded-md bg-surface-control p-3 text-ui text-ink-secondary">
            {copy.noApi}{" "}
            <Link href="/ajustes/atribuicao" className="font-medium text-foreground underline underline-offset-4">
              {copy.assign}
            </Link>
          </p>
        ) : (
          <>
            <Section title={copy.stretches}>
              <ol className="flex flex-col gap-2">
                {simulation.segments
                  .filter((segment) => segment.kind === "realized" || !swapDays.has(segment.startDay))
                  .map((segment) => (
                    <StretchRow key={`${segment.kind}-${segment.startDay}`} segment={segment} currency={currency} />
                  ))}
                {ordered.map((swap) => (
                  <SwapCard
                    key={swap.id}
                    swap={swap}
                    segment={
                      simulation.segments.find(
                        (candidate) => candidate.kind === "planned" && candidate.startDay === swap.startDay,
                      ) ?? null
                    }
                    effect={effectOf.get(swap.id) ?? null}
                    sources={simulation.sources}
                    catalog={catalog}
                    period={period}
                    currency={currency}
                    onChange={(next) => onUpdate({ ...next, id: swap.id })}
                    onRemove={() => onRemove(swap.id)}
                  />
                ))}
              </ol>
              <Button type="button" variant="tertiary" size="sm" className="w-fit" disabled={!canAdd} onClick={onAdd}>
                <HugeiconsIcon icon={PlusSignIcon} aria-hidden />
                {copy.add}
              </Button>
              {!canAdd && period.dayOfPeriod < period.daysInPeriod && (
                <p className="text-xs text-muted-foreground">{copy.noDraft}</p>
              )}
            </Section>

            <VolumeSection
              simulation={simulation}
              volume={volume}
              currency={currency}
              onVolumeChange={onVolumeChange}
            />
          </>
        )}
      </CardContent>

      <CardFooter className="border-t border-border">
        <p className="text-xs/relaxed text-muted-foreground">{copy.disclaimer}</p>
      </CardFooter>
    </Card>
  );
}
