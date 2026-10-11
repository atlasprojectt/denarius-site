import { cut } from "@/denarius/lib/bars";
import type { CatalogModel } from "@/denarius/lib/engine/model-catalog";
import type { TeamSimulation } from "@/denarius/lib/engine/team-simulation";
import { modelLabel } from "@/denarius/lib/model-label";
import { money } from "@/denarius/lib/money";
import { cn } from "@/denarius/lib/utils";
import { modelShadeBg, modelShadeText } from "./model-shade";

type Ready = Extract<TeamSimulation, { status: "ready" }>;

const copy = {
  label: (close: string, budget: string) => `Fechamento simulado de ${close} contra o orçamento de ${budget}`,
  realized: "API já gasta",
  seats: "Assentos",
  kind: { realized: "realizado", planned: "plano", fixed: "fixo" },
  approx: (value: string) => `≈ ${value}`,
  budget: (value: string) => `Orçamento ${value}`,
  pace: (value: string) => `Ritmo atual ${value}`,
  total: "Fechamento simulado",
};

type Part = {
  key: string;
  label: string;
  kind: keyof typeof copy.kind;
  amount: number;
  swatch: string;
  ink: string;
};

/** Keeps a marker label inside the track: centered on its marker, but
 *  anchored to the edge it would otherwise spill over. */
function labelPlacement(position: number): string {
  if (position < 0.12) return "translate-x-0";
  if (position > 0.88) return "-translate-x-full";
  return "-translate-x-1/2";
}

/** "Onde o mês fecha": the simulated close as one solid bar measured from zero
 *  against the budget (DESIGN.md › Charts and bars: rounded solid segments, a 1px budget
 *  line), then the same parts as a list that adds up to the close. API already
 *  spent keeps the spend orange, each model's planned rest its violet tier,
 *  seats a neutral gray (Money domains). A dashed line keeps the close at the
 *  current pace in view once the plan moves away from it. */
export function CloseBar({
  simulation,
  catalog,
  currency,
  changed,
}: {
  simulation: Ready;
  catalog: CatalogModel[];
  currency: string;
  changed: boolean;
}) {
  const { budget, baselineClose, planClose, realizedApi, seatClose } = simulation;
  const scale = Math.max(budget, baselineClose, planClose, 1) * 1.04;
  const at = (value: number) => Math.max(0, Math.min(1, value / scale));
  const left = (value: number) => `${at(value) * 100}%`;
  const showPace = changed && Math.abs(baselineClose - planClose) > 0.005;

  const parts: Part[] = [
    {
      key: "realized",
      label: copy.realized,
      kind: "realized" as const,
      amount: realizedApi,
      swatch: "bg-pace-spent",
      ink: "text-pace-spent",
    },
    ...simulation.models.map((line) => ({
      key: `${line.provider}:${line.model}`,
      label: modelLabel(line.model),
      kind: "planned" as const,
      amount: line.amount,
      swatch: modelShadeBg(line, catalog),
      ink: modelShadeText(line, catalog),
    })),
    {
      key: "seats",
      label: copy.seats,
      kind: "fixed" as const,
      amount: seatClose,
      swatch: "bg-ink-faint",
      ink: "text-ink-faint",
    },
  ].filter((part) => part.amount > 0);

  let running = 0;
  const layers = parts.map((part) => {
    const from = at(running);
    running += part.amount;
    return { ...part, from, to: at(running) };
  });

  return (
    // data-reveal-state is stamped by the RevealController pre-hydration.
    <div data-reveal="sim-close" suppressHydrationWarning className="flex flex-col gap-3">
      <div className={cn("relative pt-5", showPace && "pb-5")}>
        <div
          role="img"
          aria-label={copy.label(money(planClose, currency), money(budget, currency))}
          className="relative h-3"
        >
          <div
            aria-hidden
            data-bar-glide
            className="absolute inset-0 bg-current text-foreground/15"
            style={{ clipPath: cut(at(running), 1) }}
          />
          {layers.map((layer, index) => (
            <div
              key={layer.key}
              aria-hidden
              data-reveal-bar
              data-bar-glide
              className={cn("absolute inset-0 bg-current", layer.ink)}
              style={{ clipPath: cut(layer.from, layer.to), animationDelay: `${80 + index * 90}ms` }}
            />
          ))}
          <span
            aria-hidden
            data-bar-glide
            className="absolute -inset-y-1 w-px bg-foreground/80"
            style={{ left: left(budget) }}
          />
          {showPace && (
            <span
              aria-hidden
              data-bar-glide
              className="absolute -inset-y-1 border-l border-dashed border-foreground/60"
              style={{ left: left(baselineClose) }}
            />
          )}
        </div>
        <span
          aria-hidden
          data-bar-glide
          className={cn(
            "absolute top-0 text-xs font-medium whitespace-nowrap tabular-nums",
            labelPlacement(at(budget)),
          )}
          style={{ left: left(budget) }}
        >
          {copy.budget(money(budget, currency))}
        </span>
        {showPace && (
          <span
            aria-hidden
            data-bar-glide
            className={cn(
              "absolute bottom-0 text-xs whitespace-nowrap text-muted-foreground tabular-nums",
              labelPlacement(at(baselineClose)),
            )}
            style={{ left: left(baselineClose) }}
          >
            {copy.pace(money(baselineClose, currency))}
          </span>
        )}
      </div>

      <table className="w-full text-ui">
        <tbody className="divide-y divide-border">
          {parts.map((part) => (
            <tr key={part.key}>
              <td className="py-2.5">
                <span className="flex min-w-0 items-center gap-2">
                  <span aria-hidden className={cn("h-2 w-2.5 shrink-0 rounded-xs", part.swatch)} />
                  <span className="truncate">{part.label}</span>
                  <span className="text-xs text-muted-foreground">{copy.kind[part.kind]}</span>
                </span>
              </td>
              <td className="py-2.5 text-right whitespace-nowrap tabular-nums">
                {part.kind === "planned" ? copy.approx(money(part.amount, currency)) : money(part.amount, currency)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="border-t border-border">
          <tr className="text-sm font-medium">
            <td className="pt-2.5">{copy.total}</td>
            <td className="pt-2.5 text-right whitespace-nowrap tabular-nums">
              {copy.approx(money(planClose, currency))}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
