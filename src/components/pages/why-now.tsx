import type { CSSProperties, ReactNode } from "react";
import { ChartReveal } from "@/components/motion/chart-reveal";
import { CountUp } from "@/components/motion/count-up";
import { CtaBand } from "@/components/site/cta-band";
import { NextPage } from "@/components/site/next-page";
import { PageIntro } from "@/components/site/page-intro";
import { PAGE_ICONS } from "@/components/ui/page-icons";
import { SourceLink } from "@/components/site/source-link";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/cn";
import { PAGES, SOURCES, type Source } from "@/lib/links";

const SECTIONS = [
  { id: "fases", label: "Três fases" },
  { id: "problema", label: "O problema" },
  { id: "preco", label: "O preço cai, a conta sobe" },
  { id: "escala", label: "Grandes × médias" },
];

// Marcos da narrativa-mestre ("Por que agora"), cada um com fonte.
const PHASES: Array<{
  name: string;
  period: string;
  question: string;
  text: ReactNode;
  sources: Source[];
}> = [
  {
    name: "Descoberta",
    period: "nov. 2022 – 2023",
    question: "O que isso faz?",
    text: "O ChatGPT chega a cerca de 100 milhões de usuários em dois meses. Em 2023, o gasto corporativo com IA generativa ainda é pequeno: US$\u00a01,7 bilhão.",
    sources: [SOURCES.chatgptUsers, SOURCES.enterpriseSpend],
  },
  {
    name: "Adoção compulsiva",
    period: "2024 – início de 2026",
    question: "Como usar mais?",
    text: "O uso regular salta para 65% das empresas no início de 2024, e o gasto vai a US$\u00a037 bilhões em 2025. Meta e Amazon criam rankings internos de consumo de tokens.",
    sources: [SOURCES.adoption, SOURCES.enterpriseSpend, SOURCES.tokenmaxxing],
  },
  {
    name: "Eficiência",
    period: "a partir de 2026",
    question: "Quanto custa, quem gasta e vale o que custa?",
    text: "A Uber gasta em quatro meses o orçamento de IA previsto para o ano inteiro. Entre as equipes de FinOps, a fatia que gerencia gasto com IA vai de 31% em 2024 para 98% em 2026.",
    sources: [SOURCES.uberBudget, SOURCES.finops],
  },
];

const CAUSES = [
  {
    title: "O custo cresce com o sucesso.",
    text: "Token é cobrado por uso, não por assento. Quanto mais útil a ferramenta, maior a conta.",
  },
  {
    title: "O gasto está espalhado.",
    text: "Chaves de API em vários times, dois ou mais provedores e assinaturas no cartão. Nenhum lugar soma tudo.",
  },
  {
    title: "O painel do provedor fala outra língua.",
    text: "Tokens e dólares por projeto, quando a pergunta é em reais, por time, contra um orçamento.",
  },
  {
    title: "A informação chega tarde.",
    text: "O provedor cobra no fim do mês. Sem projeção, o estouro só aparece quando já aconteceu.",
  },
];

// Gasto corporativo com IA generativa no mundo, em US$ bilhões (Menlo Ventures,
// via narrativa-mestre: 1,7 em 2023, 11,5 em 2024, 37 em 2025).
const SPEND = [
  { year: "2023", value: 1.7, label: "US$ 1,7 bi" },
  { year: "2024", value: 11.5, label: "US$ 11,5 bi" },
  { year: "2025", value: 37, label: "US$ 37 bi" },
];
// Folga de 15% acima do maior valor, para a linha não encostar no topo.
const SPEND_SCALE = Math.max(...SPEND.map((row) => row.value)) * 1.15;
const SPEND_POINTS = SPEND.map((row, index) => ({
  ...row,
  x: (index / (SPEND.length - 1)) * 100,
  y: (row.value / SPEND_SCALE) * 100,
}));

/** Quando a linha (1.6s, da esquerda para a direita) chega ao ponto em x%. */
const revealDelay = (x: number) => `${0.1 + (x / 100) * 1.45}s`;

/** A linha e o ponto: laranja de sinal no claro, #f25a1c no escuro (validados). */
const SPEND_INK = "light-dark(var(--signal-orange), #f25a1c)";

/**
 * O gráfico como peça central da seção, no padrão dos anúncios de modelos dos
 * laboratórios de IA: um painel na largura toda, o título do gráfico e um
 * número de destaque no topo, a linha grande e limpa, os valores escritos e a
 * fonte em nota de rodapé. Sem eixo y: cada valor está escrito embaixo do seu
 * ponto, junto do ano, alinhado a ele (o primeiro à esquerda, o último à
 * direita), o que evita texto sobre a linha em qualquer largura.
 *
 * A linha (2px) e a lavagem de 10% ficam num SVG esticado (preserveAspectRatio
 * none, traço sem escala); os pontos são HTML em %, para não deformar. A
 * parte visual é aria-hidden; a tabela sr-only carrega os dados.
 *
 * Ao chegar à tela, o gráfico se monta (ChartReveal + globals.css): a linha e
 * o degradê se desenham da esquerda para a direita, cada ponto aparece com o
 * seu valor quando a linha chega nele, e o 3,2× conta a partir de zero.
 */
function SpendFigure({ className }: { className?: string }) {
  const line = SPEND_POINTS.map((p) => `${p.x},${100 - p.y}`).join(" ");
  return (
    <figure className={cn("rounded-lg bg-card p-5 ring-1 ring-ink/6 md:p-8 lg:p-10", className)}>
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <figcaption className="flex flex-col gap-1">
          <span className="type-title-lg text-ink">Gasto corporativo com IA generativa</span>
          <span className="type-caption text-ash">No mundo, em US$ bilhões por ano</span>
        </figcaption>
        <p className="flex flex-col items-start gap-1 sm:items-end">
          <CountUp value={3.2} decimals={1} suffix="×" className="type-display-stat text-ink" />
          <span className="type-caption text-ash">de 2024 para 2025</span>
        </p>
      </div>

      <ChartReveal className="mt-10 md:mt-12">
        <div aria-hidden="true">
          <div className="relative h-56 border-b border-hairline sm:h-72 lg:h-80">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="chart-draw absolute inset-0 size-full overflow-visible"
              style={{ color: SPEND_INK }}
            >
              {/* O degradê vertical do app ("Evolução do mês"): o laranja do
                  gasto forte junto da linha, sumindo até a base. */}
              <defs>
                <linearGradient id="spend-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
                </linearGradient>
              </defs>
              <polygon points={`0,100 ${line} 100,100`} fill="url(#spend-fill)" />
              <polyline
                points={line}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            {SPEND_POINTS.map((point) => (
              <span
                key={point.year}
                title={`${point.year}: ${point.label}`}
                className="absolute flex size-6 -translate-x-1/2 translate-y-1/2 items-center justify-center"
                style={{ left: `${point.x}%`, bottom: `${point.y}%` }}
              >
                <span
                  className="chart-point size-3 rounded-full ring-2 ring-card"
                  style={{ background: SPEND_INK, "--reveal-delay": revealDelay(point.x) } as CSSProperties}
                />
              </span>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3">
            {SPEND_POINTS.map((row, index) => (
              <div
                key={row.year}
                style={{ "--reveal-delay": revealDelay(row.x) } as CSSProperties}
                className={cn(
                  "chart-point flex flex-col gap-0.5",
                  index === 1 && "items-center text-center",
                  index === SPEND.length - 1 && "items-end text-right",
                )}
              >
                <span className="type-caption text-ash tabular-nums">{row.year}</span>
                <span className="type-title text-ink">{row.label}</span>
              </div>
            ))}
          </div>
        </div>
      </ChartReveal>

      <table className="sr-only">
        <caption>Gasto corporativo com IA generativa no mundo, por ano</caption>
        <thead>
          <tr>
            <th scope="col">Ano</th>
            <th scope="col">Gasto</th>
          </tr>
        </thead>
        <tbody>
          {SPEND.map((row) => (
            <tr key={row.year}>
              <th scope="row">{row.year}</th>
              <td>{row.label}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <SourceLink source={SOURCES.enterpriseSpend} className="mt-8 block" />
    </figure>
  );
}

const IMPACT = [
  { value: 11, text: "acertam a previsão do gasto com IA com margem de 10%." },
  { value: 62, text: "mudaram uma decisão de negócio por um custo inesperado de IA." },
  { value: 40, text: "levaram um custo inesperado de IA ao conselho." },
];

export function WhyNowContent() {
  return (
    <>
      <PageIntro
        icon={PAGE_ICONS.whyNow}
        title="A terceira fase da IA nas empresas é saber quanto ela custa."
        lead="Depois de descobrir e de usar ao máximo, as empresas precisam saber quanto gastam com IA, quem gasta e se vale o que custa."
        sections={SECTIONS}
      />

      <Section id="fases" labelledBy="fases-titulo" size="compact">
        <SectionHeader id="fases-titulo" title="Três fases em três anos." />
        <ol className="mt-10 grid gap-x-8 gap-y-10 md:mt-12 lg:grid-cols-3">
          {PHASES.map((phase, index) => (
            <li key={phase.name} className="flex flex-col gap-3 border-t border-hairline pt-5">
              <p className="type-caption text-ash">
                Fase {index + 1} · {phase.period}
              </p>
              <h3 className="type-title-lg text-ink">{phase.name}</h3>
              <p className="type-body text-graphite">{phase.text}</p>
              <p className="type-body-strong text-ink">“{phase.question}”</p>
              <ul className="mt-1 flex flex-col gap-1">
                {phase.sources.map((source) => (
                  <li key={source.href}>
                    <SourceLink source={source} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="problema" labelledBy="problema-titulo" tone="rail" size="compact">
        <SectionHeader
          id="problema-titulo"
          title="Por que o gasto saiu do controle."
          lead="Quase toda empresa gasta com IA, e quase nenhuma consegue prever quanto. O estouro aparece quando a fatura chega."
        />
        <dl className="mt-10 grid gap-x-8 gap-y-8 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
          {CAUSES.map((cause) => (
            <div key={cause.title} className="flex flex-col gap-2 border-t border-hairline pt-5">
              <dt className="type-title text-ink">{cause.title}</dt>
              <dd className="type-body text-graphite">{cause.text}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 md:mt-16">
          <h3 className="type-title text-ink">O que isso custa às empresas</h3>
          <ul className="mt-4 grid border-t border-hairline md:grid-cols-3">
            {IMPACT.map((item) => (
              <li
                key={item.text}
                className="flex flex-col gap-3 border-b border-hairline py-6 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
              >
                <p className="type-display-stat text-ink">
                  <CountUp value={item.value} suffix="%" />
                </p>
                <p className="type-lead max-w-[30ch] text-ink">{item.text}</p>
              </li>
            ))}
          </ul>
          <SourceLink source={SOURCES.costGovernance} className="mt-4 block" />
        </div>
      </Section>

      {/* O gráfico é o centro da seção: título e uma frase, o painel na
          largura toda, e o porquê embaixo, como nota. */}
      <Section id="preco" labelledBy="preco-titulo" size="compact">
        <SectionHeader
          id="preco-titulo"
          title="O preço do token cai. A conta sobe."
          lead="A Epoch AI mede quedas de 9 a 900 vezes por ano no preço por token, conforme a tarefa. Mesmo assim, o gasto das empresas com IA generativa não para de subir."
        />
        <SpendFigure className="mt-10 md:mt-12" />
        <div className="mt-8 grid gap-x-8 gap-y-4 lg:grid-cols-12">
          <p className="type-body text-graphite lg:col-span-7">
            Cada queda de preço libera mais uso: agentes, código, modelos que pensam antes de
            responder. A IA virou uma linha de custo variável e permanente, que precisa de orçamento
            como qualquer outra.
          </p>
          <SourceLink source={SOURCES.tokenPrices} className="lg:col-span-4 lg:col-start-9 lg:justify-self-end" />
        </div>
      </Section>

      <Section id="escala" labelledBy="escala-titulo" size="compact">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHeader
            id="escala-titulo"
            title="Grandes empresas constroem isso. Médias descobrem na fatura."
            className="lg:col-span-5"
          />
          <div className="flex flex-col gap-5 lg:col-span-6 lg:col-start-7">
            <p className="type-narrative text-graphite">
              O iFood mantém uma plataforma própria que centraliza o acesso aos modelos, com um time
              de plataforma de machine learning. A Uber tratou o estouro de 2026 como problema de
              engenharia, com painéis de uso e custo por engenheiro.
            </p>
            <p className="type-narrative text-ink">
              Uma empresa de cem pessoas tem o mesmo problema e nenhum desses recursos. A diferença
              não é de vontade, é de escala.
            </p>
            <ul className="flex flex-col gap-1">
              <li>
                <SourceLink source={SOURCES.ifood} />
              </li>
              <li>
                <SourceLink source={SOURCES.uberCto} />
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <NextPage page={PAGES.howItWorks} />
      <CtaBand />
    </>
  );
}
