import type { ReactNode } from "react";
import { CtaBand } from "@/components/site/cta-band";
import { NextPage } from "@/components/site/next-page";
import { PageIntro } from "@/components/site/page-intro";
import { PAGE_ICONS } from "@/components/ui/page-icons";
import { AssetSlot } from "@/components/ui/asset-slot";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/cn";
import { PAGES } from "@/lib/links";

const SECTIONS = [
  { id: "exemplo", label: "Exemplo" },
  { id: "plano", label: "O que entra no plano" },
  { id: "regras", label: "Regras" },
  { id: "comparacao", label: "Painel gratuito × Denarius" },
];

// O exemplo de Engenharia da narrativa-mestre, passo a passo. Ilustrativo.
// Laranja marca o gasto que aconteceu; violeta, o que é simulação.
const STEPS: Array<{ domain: "spend" | "simulation"; title: string; body: ReactNode }> = [
  {
    domain: "spend",
    title: "Onde o mês fecha hoje",
    body: (
      <>
        Engenharia gastou <Figure>R$&nbsp;13.800</Figure> de <Figure>R$&nbsp;15.000</Figure> até o
        dia 22. No ritmo atual, fecha em <Figure>≈&nbsp;R$&nbsp;18.000</Figure>, R$&nbsp;3.000 acima
        do orçamento.
      </>
    ),
  },
  {
    domain: "simulation",
    title: "O plano",
    body: (
      <>
        A partir do dia 23, o que vai para Opus é calculado com o preço do Sonnet, e o volume de
        API cai <Figure>10%</Figure>.
      </>
    ),
  },
  {
    domain: "simulation",
    title: "A economia",
    body: (
      <>
        <span className="type-display-money mb-1 block text-ink">
          <span className="text-sim-ink">≈</span>&nbsp;R$&nbsp;3.200
        </span>
        a menos até o fim do mês.
      </>
    ),
  },
  {
    domain: "simulation",
    title: "O novo fechamento",
    body: (
      <>
        Engenharia passa a fechar em <Figure>≈&nbsp;R$&nbsp;14.800</Figure>, R$&nbsp;200 abaixo do
        orçamento. Se o outro modelo serve ao trabalho, quem decide é você, com o time.
      </>
    ),
  },
];

const CONTROLS = [
  {
    title: "Outro modelo, a partir de um dia",
    text: "“A partir do dia 23, o que vai para Opus é calculado como Sonnet.” As comparações se encadeiam, entre qualquer modelo com preço da OpenAI ou da Anthropic.",
  },
  {
    title: "Mais ou menos volume",
    text: "Uma alavanca de −100% a +100% sobre os dias que faltam.",
  },
  {
    title: "Fechar no orçamento",
    text: "O atalho calcula o corte exato para o time fechar dentro do limite.",
  },
  {
    title: "Usar a folga",
    text: "Quando sobra orçamento, o mesmo plano mostra quanto cabe de um modelo mais forte.",
  },
];

const RULES = [
  {
    title: "É estimativa, e diz isso.",
    text: "Todo número simulado leva ≈ e o rótulo Simulação.",
  },
  {
    title: "O passado fica travado.",
    text: "Só os dias que faltam mudam. O gasto já feito nunca é recalculado.",
  },
  {
    title: "Conta financeira, não promessa.",
    text: "Muda só o preço de tabela de cada modelo. O Denarius não afirma que dois modelos entregam o mesmo resultado.",
  },
  {
    title: "Nada é aplicado.",
    text: "O plano é um cálculo. O Denarius não troca modelos, não bloqueia e não age sozinho.",
  },
];

// As três últimas linhas da comparação da narrativa, sem citar marca.
const ROWS = [
  {
    question: "O que devo mudar?",
    panel: "Recomenda uma economia, como usar outro modelo.",
    denarius: "Você monta o plano: qual modelo, a partir de que dia, com quanto volume.",
  },
  {
    question: "Quanto isso economiza até o fim do mês, e onde fechamos?",
    panel: "Não mostra.",
    denarius: "Economia e fechamento recalculados na hora, para o time e para a empresa.",
  },
  {
    question: "Sobra orçamento: quanto cabe de um modelo melhor?",
    panel: "Não mostra.",
    denarius: "“Usar a folga”: o mesmo plano, na direção oposta.",
  },
];

const COLUMNS = { panel: "Painel gratuito", denarius: "Denarius" };

function Figure({ children }: { children: ReactNode }) {
  return <span className="text-ink">{children}</span>;
}

function DefinitionGrid({ items }: { items: Array<{ title: string; text: string }> }) {
  return (
    <dl className="grid gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col gap-2 border-t border-ink/12 pt-5">
          <dt className="type-title text-ink">{item.title}</dt>
          <dd className="type-body text-graphite">{item.text}</dd>
        </div>
      ))}
    </dl>
  );
}

export function SimulationContent() {
  return (
    <>
      <PageIntro
        icon={PAGE_ICONS.simulation}
        title="O painel mostra o gasto. O Denarius mostra a saída."
        lead="Ver o gasto virou gratuito; decidir, não. A Simulação responde o que vem depois: se isto mudar a partir de amanhã, quanto o mês economiza e onde o time fecha contra o orçamento?"
        sections={SECTIONS}
      />

      <Section id="exemplo" labelledBy="exemplo-titulo" tone="rail" size="compact">
        <SectionHeader
          id="exemplo-titulo"
          title="Um exemplo, passo a passo."
          lead="Na página de cada time com orçamento, a Simulação fica a um clique do veredito."
        />

        <div className="mt-10 grid gap-12 md:mt-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <ol>
              {STEPS.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[0.75rem_1fr] gap-x-4">
                  <span aria-hidden="true" className="flex flex-col items-center">
                    <span
                      className={cn(
                        "mt-1.5 size-2.5 shrink-0 rounded-full",
                        step.domain === "spend" ? "bg-pace-spent" : "bg-sim-2",
                      )}
                    />
                    {index < STEPS.length - 1 ? (
                      <span className="mt-2 w-px flex-1 bg-ink/15" />
                    ) : null}
                  </span>
                  <div className={cn("flex flex-col gap-1.5", index < STEPS.length - 1 && "pb-8")}>
                    <h3 className="type-title text-ink">{step.title}</h3>
                    <p className="type-lead text-graphite">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="type-caption mt-6 text-ash">Exemplo ilustrativo.</p>
          </div>

          <AssetSlot
            layout="simulation"
            label="Simulação do time, com a economia, o fechamento antes e depois e o plano por dia"
            className="lg:sticky lg:top-24 lg:col-span-7"
            frameClassName="aspect-[4/3]"
          />
        </div>
      </Section>

      <Section id="plano" labelledBy="plano-titulo" size="compact">
        <SectionHeader
          id="plano-titulo"
          title="O que entra no plano."
          lead="Cada mudança recalcula na hora o fechamento do time e o efeito no fechamento da empresa, por regras fixas."
        />
        <div className="mt-10 md:mt-12">
          <DefinitionGrid items={CONTROLS} />
        </div>
      </Section>

      <Section id="regras" labelledBy="regras-titulo" size="compact">
        <SectionHeader
          id="regras-titulo"
          title="As regras que mantêm a conta honesta."
          lead="Sem chute: não há simulação antes do 5º dia do mês, com um modelo sem preço ou sem o câmbio do mês. Nesses casos, o app diz o que falta."
        />
        <div className="mt-10 md:mt-12">
          <DefinitionGrid items={RULES} />
        </div>
      </Section>

      <Section id="comparacao" labelledBy="comparacao-titulo" size="compact">
        <SectionHeader
          id="comparacao-titulo"
          title="Ver o gasto virou gratuito. Decidir, não."
          lead="Um painel de gasto responde quanto a empresa gastou. As perguntas que vêm depois são as que a Simulação responde."
        />

        {/* Abaixo de md, cada linha vira um bloco empilhado; os papéis ARIA
            mantêm a semântica de tabela quando o display muda. */}
        <table role="table" className="mt-10 w-full border-collapse text-left md:mt-12">
          <caption className="sr-only">
            O que um painel de gasto gratuito e o Denarius respondem depois de “quanto gastamos”
          </caption>
          <thead role="rowgroup" className="hidden md:table-header-group">
            <tr role="row" className="border-b border-hairline">
              <th role="columnheader" scope="col" className="type-label-caps w-[36%] py-3 pr-8 text-ash">
                Pergunta
              </th>
              <th role="columnheader" scope="col" className="type-label-caps w-[28%] py-3 pr-8 text-ash">
                {COLUMNS.panel}
              </th>
              <th role="columnheader" scope="col" className="type-label-caps py-3 text-ash">
                {COLUMNS.denarius}
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {ROWS.map((row) => (
              <tr
                key={row.question}
                role="row"
                className="block border-b border-hairline py-6 first:border-t md:table-row md:border-t-0 md:py-0"
              >
                <th
                  role="rowheader"
                  scope="row"
                  className="type-title-lg block text-ink md:table-cell md:py-7 md:pr-8 md:align-top"
                >
                  {row.question}
                </th>
                <td role="cell" className="mt-4 block md:mt-0 md:table-cell md:py-7 md:pr-8 md:align-top">
                  <span className="type-caption mb-1 block text-ash md:hidden">{COLUMNS.panel}</span>
                  <span className="type-lead text-graphite">{row.panel}</span>
                </td>
                <td role="cell" className="mt-4 block md:mt-0 md:table-cell md:py-7 md:align-top">
                  <span className="type-caption mb-1 block text-ash md:hidden">{COLUMNS.denarius}</span>
                  <span className="type-lead text-ink">{row.denarius}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <NextPage page={PAGES.security} />
      <CtaBand />
    </>
  );
}
