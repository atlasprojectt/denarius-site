import type { CSSProperties, JSX } from "react";
import { cn } from "@/lib/cn";

/**
 * Espaço reservado para uma tela do produto que ainda será capturada com dados
 * de demonstração. O skeleton segue a geometria da tela que vai ocupar o lugar,
 * como o DESIGN.md pede: linhas de texto em `sm`, cards em `lg`, pílulas como
 * pílulas, e um pulso (parado com movimento reduzido).
 */
type Layout = "app" | "composition" | "simulation" | "teams" | "email" | "report";

const LAYOUTS: Record<Layout, () => JSX.Element> = {
  app: AppSkeleton,
  composition: CompositionSkeleton,
  simulation: SimulationSkeleton,
  teams: TeamsSkeleton,
  email: EmailSkeleton,
  report: ReportSkeleton,
};

export function AssetSlot({
  layout,
  label,
  className,
  frameClassName,
}: {
  layout: Layout;
  /** O que vai ocupar o espaço; vira o nome acessível e a legenda. */
  label: string;
  className?: string;
  /** Proporção do quadro, por exemplo "aspect-[4/3] md:aspect-[16/9]". */
  frameClassName?: string;
}) {
  const Skeleton = LAYOUTS[layout];

  return (
    <figure className={cn("flex flex-col gap-2.5", className)}>
      <div
        role="img"
        aria-label={`Imagem em produção: ${label}`}
        className={cn(
          "relative overflow-hidden rounded-lg bg-card ring-1 ring-ink/6",
          frameClassName,
        )}
      >
        <div aria-hidden="true" className="absolute inset-0">
          <Skeleton />
        </div>
      </div>
      <figcaption className="type-caption text-ash">Exemplo ilustrativo · {label}</figcaption>
    </figure>
  );
}

function Sk({ className, style }: { className?: string; style?: CSSProperties }) {
  return <span className={cn("sk", className)} style={style} />;
}

/** Barra segmentada do produto: segmentos sólidos com raio e folga pequenos. */
function SegmentedBar({
  segments,
  className,
}: {
  segments: Array<{ width: string; tone?: "strong" | "faint" }>;
  className?: string;
}) {
  return (
    <span className={cn("flex gap-[3px]", className)}>
      {segments.map((segment, index) => (
        <Sk
          key={index}
          className={cn(
            "h-full rounded-[6px]",
            segment.tone === "strong" && "sk-strong",
            segment.tone === "faint" && "sk-faint",
          )}
          style={{ width: segment.width }}
        />
      ))}
    </span>
  );
}

/** O Início do app: rail, veredito, gasto do mês, barra de ritmo e times. */
function AppSkeleton() {
  return (
    <div className="flex h-full bg-rail">
      <div className="hidden w-[17%] min-w-36 flex-col gap-3 p-4 md:flex">
        <span className="flex items-center gap-2">
          <Sk className="size-5 rounded-full" />
          <Sk className="h-3 w-16" />
        </span>
        <Sk className="sk-faint mt-5 h-2 w-14" />
        {["w-[70%]", "w-[58%]", "w-[64%]", "w-[52%]"].map((width) => (
          <Sk key={width} className={cn("h-3", width)} />
        ))}
        <Sk className="sk-faint mt-4 h-2 w-12" />
        {["w-[48%]", "w-[60%]"].map((width) => (
          <Sk key={width} className={cn("h-3", width)} />
        ))}
      </div>

      <div className="m-2 flex flex-1 flex-col gap-3 rounded-lg bg-canvas p-3 ring-1 ring-hairline md:m-2 md:ml-0 md:p-5">
        <span className="flex items-center gap-3">
          <Sk className="h-3 w-[16%]" />
          <span className="h-4 w-px bg-ink/15" />
          <Sk className="sk-strong size-2 rounded-full" />
          <Sk className="h-3 w-[30%]" />
          <Sk className="sk-faint ml-auto h-2.5 w-[12%]" />
        </span>

        <div className="grid min-h-0 flex-1 gap-3 md:grid-cols-[1.55fr_1fr]">
          <div className="flex min-h-0 flex-col gap-4 rounded-lg bg-card p-4">
            <Sk className="h-3 w-[30%]" />
            <span className="flex items-end gap-3">
              <Sk className="sk-strong h-9 w-[48%] md:h-11" />
              <Sk className="h-4 w-[22%]" />
            </span>
            <Sk className="sk-faint h-3 w-[38%]" />
            <span className="mt-auto flex flex-col gap-2">
              <span className="flex justify-between">
                <Sk className="sk-faint h-2.5 w-[18%]" />
                <Sk className="h-2.5 w-[12%]" />
              </span>
              <SegmentedBar
                className="h-6 md:h-8"
                segments={[
                  { width: "46%", tone: "strong" },
                  { width: "24%" },
                  { width: "30%", tone: "faint" },
                ]}
              />
            </span>
            <span className="flex gap-8">
              {[0, 1].map((key) => (
                <span key={key} className="flex flex-col gap-2">
                  <Sk className="sk-faint h-2.5 w-20" />
                  <Sk className="h-4 w-24" />
                </span>
              ))}
            </span>
          </div>

          <div className="hidden min-h-0 flex-col gap-3 rounded-lg bg-card p-4 md:flex">
            <Sk className="h-3 w-[42%]" />
            {["w-full", "w-[94%]", "w-[88%]", "w-[96%]", "w-[62%]"].map((width) => (
              <Sk key={width} className={cn("h-3", width)} />
            ))}
            <Sk className="sk-faint mt-auto h-2.5 w-[36%]" />
          </div>
        </div>

        <div className="hidden h-[26%] gap-3 md:grid md:grid-cols-[1.45fr_1fr]">
          {[0, 1].map((card) => (
            <div key={card} className="flex flex-col gap-3 overflow-hidden rounded-lg bg-card p-4">
              <Sk className="h-3 w-[28%]" />
              {[0, 1, 2].map((row) => (
                <span key={row} className="flex items-center gap-3">
                  <Sk className="h-3 w-[26%]" />
                  <Sk className="sk-faint h-1.5 flex-1 rounded-full" />
                  <Sk className="h-3 w-[14%]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** A Simulação do time: economia, ritmo atual → com o plano e o plano por dia. */
function SimulationSkeleton() {
  return (
    <div className="flex h-full flex-col gap-4 p-4 md:gap-5 md:p-7">
      <span className="flex items-center justify-between gap-4">
        <Sk className="h-3 w-[28%]" />
        <span className="flex gap-1 rounded-full bg-control p-0.5">
          <Sk className="sk-faint h-6 w-16 rounded-full md:w-20" />
          <Sk className="sk-strong h-6 w-16 rounded-full md:w-20" />
        </span>
      </span>

      <span className="flex flex-col gap-2.5">
        <Sk className="sk-faint h-2 w-[18%]" />
        <span className="flex items-end gap-3">
          <Sk className="sk-strong h-9 w-[40%] md:h-11" />
          <Sk className="h-4 w-[20%]" />
        </span>
      </span>

      <span className="flex items-center gap-4">
        {[0, 1].map((key) => (
          <span key={key} className="contents">
            {key === 1 ? <Sk className="sk-faint h-2.5 w-5" /> : null}
            <span className="flex flex-col gap-2">
              <Sk className="sk-faint h-2.5 w-16" />
              <Sk className={cn("h-5 w-24", key === 1 && "sk-strong")} />
            </span>
          </span>
        ))}
      </span>

      <span className="mt-auto flex flex-col gap-2">
        <Sk className="sk-faint h-2 w-[22%]" />
        <SegmentedBar
          className="h-6"
          segments={[
            { width: "34%", tone: "strong" },
            { width: "16%", tone: "strong" },
            { width: "12%" },
            { width: "14%" },
            { width: "10%", tone: "faint" },
            { width: "14%", tone: "faint" },
          ]}
        />
        <span className="flex justify-between">
          {[0, 1, 2, 3].map((tick) => (
            <Sk key={tick} className="sk-faint h-2 w-6" />
          ))}
        </span>
      </span>

      <span className="hidden flex-col gap-2.5 sm:flex">
        {["w-[34%]", "w-[42%]", "w-[28%]"].map((width) => (
          <span key={width} className="flex items-center gap-3">
            <Sk className="h-5 w-14 rounded-full" />
            <Sk className={cn("h-3", width)} />
            <Sk className="ml-auto h-3 w-[12%]" />
          </span>
        ))}
      </span>
    </div>
  );
}

/** A Composição: um card por provedor, a fatia de cada fonte e a tabela por modelo. */
function CompositionSkeleton() {
  return (
    <div className="flex h-full flex-col gap-4 p-4 md:gap-5 md:p-6">
      <span className="flex items-center justify-between gap-4">
        <Sk className="h-3 w-[26%]" />
        <Sk className="sk-faint h-7 w-24 rounded-full" />
      </span>

      <span className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {[0, 1, 2].map((card) => (
          <span
            key={card}
            className={cn(
              "flex flex-col gap-2.5 rounded-md p-3 ring-1 ring-hairline",
              card === 2 && "hidden sm:flex",
            )}
          >
            <span className="flex items-center gap-2">
              <Sk className="size-4 rounded-full" />
              <Sk className="h-2.5 w-[45%]" />
            </span>
            <Sk className="sk-strong h-6 w-[72%]" />
            <Sk className="sk-faint h-2 w-[52%]" />
          </span>
        ))}
      </span>

      <span className="flex flex-col gap-2">
        <Sk className="sk-faint h-2 w-[20%]" />
        <SegmentedBar
          className="h-3"
          segments={[
            { width: "46%", tone: "strong" },
            { width: "28%" },
            { width: "16%" },
            { width: "10%", tone: "faint" },
          ]}
        />
      </span>

      <span className="flex flex-col">
        <span className="grid grid-cols-[1.4fr_1fr_auto] gap-4 border-b border-hairline pb-2.5">
          <Sk className="sk-faint h-2 w-[30%]" />
          <Sk className="sk-faint h-2 w-[40%]" />
          <Sk className="sk-faint h-2 w-12" />
        </span>
        {["w-[48%]", "w-[62%]", "w-[40%]", "w-[54%]"].map((width, index) => (
          <span
            key={width}
            className="grid grid-cols-[1.4fr_1fr_auto] items-center gap-4 border-b border-hairline py-2.5 last:border-b-0"
          >
            <Sk className={cn("h-3", width)} />
            <Sk
              className="sk-strong h-1.5 rounded-full"
              style={{ width: `${[78, 54, 30, 18][index]}%` }}
            />
            <Sk className="h-3 w-14" />
          </span>
        ))}
      </span>
    </div>
  );
}

/** Um e-mail do Denarius, aberto: remetente, assunto, status, texto e números. */
function EmailSkeleton() {
  return (
    <div className="flex h-full justify-center bg-rail px-4 pt-5 md:px-8 md:pt-8">
      <div className="flex w-full max-w-md flex-col gap-3.5 rounded-t-md bg-elevated p-5 ring-1 ring-ink/6 md:p-6">
        <span className="flex items-center gap-3">
          <Sk className="size-8 shrink-0 rounded-full" />
          <span className="flex flex-1 flex-col gap-1.5">
            <Sk className="h-2.5 w-[38%]" />
            <Sk className="sk-faint h-2 w-[56%]" />
          </span>
          <Sk className="sk-faint h-2 w-10" />
        </span>
        <Sk className="sk-strong mt-2 h-4 w-[70%]" />
        <Sk className="h-5 w-20 rounded-full" />
        <span className="flex flex-col gap-2">
          {["w-full", "w-[94%]", "w-[86%]", "w-[52%]"].map((width) => (
            <Sk key={width} className={cn("h-2.5", width)} />
          ))}
        </span>
        <span className="mt-1 grid grid-cols-2 gap-4 border-t border-hairline pt-3.5">
          {[0, 1].map((key) => (
            <span key={key} className="flex flex-col gap-2">
              <Sk className="sk-faint h-2 w-[60%]" />
              <Sk className="h-4 w-[70%]" />
            </span>
          ))}
        </span>
        <SegmentedBar
          className="h-2.5"
          segments={[
            { width: "62%", tone: "strong" },
            { width: "24%" },
            { width: "14%", tone: "faint" },
          ]}
        />
        <Sk className="sk-strong mt-2 h-9 w-40 rounded-full" />
      </div>
    </div>
  );
}

/** O relatório mensal congelado em PDF: uma folha, com o raio pequeno das folhas. */
function ReportSkeleton() {
  return (
    <div className="flex h-full items-center justify-center bg-rail p-5 md:p-8">
      <div className="flex aspect-[1/1.414] h-full flex-col gap-3 rounded-xs bg-elevated p-[7%] ring-1 ring-ink/6">
        <span className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Sk className="size-3.5 rounded-full" />
            <Sk className="h-2.5 w-14" />
          </span>
          <Sk className="sk-faint h-2 w-[20%]" />
        </span>
        <Sk className="sk-strong mt-3 h-4 w-[62%]" />
        <Sk className="sk-faint h-2 w-[40%]" />
        <Sk className="sk-strong mt-3 h-7 w-[48%]" />
        <SegmentedBar
          className="h-2.5"
          segments={[
            { width: "58%", tone: "strong" },
            { width: "22%" },
            { width: "20%", tone: "faint" },
          ]}
        />
        <span className="mt-2 flex flex-col gap-2.5">
          {["w-[34%]", "w-[42%]", "w-[28%]", "w-[38%]", "w-[30%]"].map((width) => (
            <span key={width} className="flex items-center gap-3 border-b border-hairline pb-2.5">
              <Sk className={cn("h-2", width)} />
              <Sk className="ml-auto h-2 w-[16%]" />
            </span>
          ))}
        </span>
        <Sk className="sk-faint mt-auto h-2 w-[54%]" />
      </div>
    </div>
  );
}

/** A lista de times: orçamento, uso, status e a ação Simular. */
function TeamsSkeleton() {
  const rows = [
    { name: "w-[58%]", bar: "62%", pill: "sk-faint" },
    { name: "w-[72%]", bar: "92%", pill: "sk-strong" },
    { name: "w-[48%]", bar: "41%", pill: "sk-faint" },
    { name: "w-[64%]", bar: "77%", pill: "sk-faint" },
    { name: "w-[52%]", bar: "35%", pill: "sk-faint" },
  ];

  return (
    <div className="flex h-full flex-col p-4 md:p-6">
      <span className="flex items-center justify-between pb-4">
        <Sk className="h-3 w-[26%]" />
        <Sk className="sk-faint h-7 w-24 rounded-full" />
      </span>
      <span className="grid grid-cols-[1.3fr_auto_auto] gap-4 border-b border-hairline pb-3 sm:grid-cols-[1.3fr_1.2fr_0.7fr_auto]">
        <Sk className="sk-faint h-2 w-[40%]" />
        <Sk className="sk-faint hidden h-2 w-[30%] sm:block" />
        <Sk className="sk-faint h-2 w-12 justify-self-end" />
        <Sk className="sk-faint h-2 w-14" />
      </span>
      {rows.map((row) => (
        <span
          key={row.name}
          className="grid grid-cols-[1.3fr_auto_auto] items-center gap-4 border-b border-hairline py-3 last:border-b-0 sm:grid-cols-[1.3fr_1.2fr_0.7fr_auto]"
        >
          <span className="flex flex-col gap-1.5">
            <Sk className={cn("h-3", row.name)} />
            <Sk className="sk-faint h-2 w-[34%]" />
          </span>
          <SegmentedBar
            className="hidden h-1.5 sm:flex"
            segments={[
              { width: row.bar, tone: "strong" },
              { width: `calc(100% - ${row.bar})`, tone: "faint" },
            ]}
          />
          <Sk className="h-3 w-14 justify-self-end" />
          <Sk className={cn("h-5 w-14 rounded-full", row.pill)} />
        </span>
      ))}
    </div>
  );
}
