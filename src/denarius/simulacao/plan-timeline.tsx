import { cut, TALL_BAR_SHAPE } from "@/denarius/lib/bars";
import type { CatalogModel } from "@/denarius/lib/engine/model-catalog";
import type { SimulatedSegment } from "@/denarius/lib/engine/team-simulation";
import { modelLabel } from "@/denarius/lib/model-label";
import { cn } from "@/denarius/lib/utils";
import { modelShadeText } from "./model-shade";

const copy = {
  label: "Modelo usado em cada trecho do mês",
  more: (count: number) => ` +${count}`,
  realized: (start: number, end: number) => `Dias ${start}–${end} · até hoje`,
  planned: (start: number, end: number) => `Dias ${start}–${end} · plano`,
};

/** "Qual modelo, em que dias": the month as one solid bar, each stretch as
 *  wide as its days (DESIGN.md › Charts and bars). The locked past keeps the
 *  spend orange; each planned stretch wears the violet tier of its most
 *  costly model (Money domains). Each stretch is named under its start. */
export function PlanTimeline({
  segments,
  daysInPeriod,
  catalog,
}: {
  segments: SimulatedSegment[];
  daysInPeriod: number;
  catalog: CatalogModel[];
}) {
  const stretches = segments.map((segment) => ({
    segment,
    from: (segment.startDay - 1) / daysInPeriod,
    to: segment.endDay / daysInPeriod,
    ink:
      segment.kind === "realized"
        ? "text-pace-spent"
        : segment.models[0]
          ? modelShadeText(segment.models[0], catalog)
          : "text-foreground/15",
  }));

  return (
    // data-reveal-state is stamped by the RevealController pre-hydration.
    <div data-reveal="sim-timeline" suppressHydrationWarning className="flex flex-col gap-3">
      {/* Taller than the other in-card bars (founder-directed 2026-10-10):
          after the close's figures, the plan is the second thing to read. */}
      <div aria-hidden className="relative h-6">
        <div
          data-bar-glide
          className="absolute inset-0 bg-current text-foreground/15"
          style={{ clipPath: cut(stretches.at(-1)?.to ?? 0, 1, TALL_BAR_SHAPE) }}
        />
        {stretches.map(({ segment, from, to, ink }, index) => (
          <div
            key={`${segment.kind}-${segment.startDay}`}
            data-reveal-bar
            data-bar-glide
            className={cn("absolute inset-0 bg-current", ink)}
            style={{ clipPath: cut(from, to, TALL_BAR_SHAPE), animationDelay: `${80 + index * 90}ms` }}
          />
        ))}
      </div>
      <ol aria-label={copy.label} className="flex">
        {stretches.map(({ segment, from, to }) => {
          const lead = segment.models[0];
          return (
            <li
              key={`${segment.kind}-${segment.startDay}`}
              data-bar-glide
              className="flex min-w-0 flex-col gap-0.5 border-l border-border pl-2"
              style={{ width: `${(to - from) * 100}%` }}
            >
              <span className="truncate text-ui font-medium">
                {lead ? modelLabel(lead.model) : ""}
                {segment.models.length > 1 && (
                  <span className="font-normal text-ink-secondary">{copy.more(segment.models.length - 1)}</span>
                )}
              </span>
              <span className="truncate text-xs text-muted-foreground tabular-nums">
                {segment.kind === "realized"
                  ? copy.realized(segment.startDay, segment.endDay)
                  : copy.planned(segment.startDay, segment.endDay)}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
