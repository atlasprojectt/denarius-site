import type { ReactNode } from "react";
import { CtaBand } from "@/components/site/cta-band";
import { NextPage } from "@/components/site/next-page";
import { PageIntro } from "@/components/site/page-intro";
import { SourceLink } from "@/components/site/source-link";
import { Section, SectionHeader } from "@/components/ui/section";
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

const IMPACT = [
  { figure: "11%", text: "acertam a previsão do gasto com IA com margem de 10%." },
  { figure: "62%", text: "mudaram uma decisão de negócio por um custo inesperado de IA." },
  { figure: "40%", text: "levaram um custo inesperado de IA ao conselho." },
];

export function WhyNowContent() {
  return (
    <>
      <PageIntro
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

      <Section id="problema" labelledBy="problema-titulo" size="compact">
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
                key={item.figure}
                className="flex flex-col gap-3 border-b border-hairline py-6 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
              >
                <p className="type-display-stat text-ink">{item.figure}</p>
                <p className="type-lead max-w-[30ch] text-ink">{item.text}</p>
              </li>
            ))}
          </ul>
          <SourceLink source={SOURCES.costGovernance} className="mt-4 block" />
        </div>
      </Section>

      <Section id="preco" labelledBy="preco-titulo" size="compact">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHeader id="preco-titulo" title="O preço do token cai. A conta sobe." className="lg:col-span-5" />
          <div className="flex flex-col gap-5 lg:col-span-6 lg:col-start-7">
            <p className="type-narrative text-graphite">
              A Epoch AI mede quedas de 9 a 900 vezes por ano no preço por token, conforme a tarefa.
              Mesmo assim, o gasto corporativo com IA generativa triplicou de 2024 para 2025.
            </p>
            <p className="type-narrative text-graphite">
              Cada queda de preço libera mais uso: agentes, código, modelos que pensam antes de
              responder. A IA virou uma linha de custo variável e permanente, que precisa de
              orçamento como qualquer outra.
            </p>
            <ul className="flex flex-col gap-1">
              <li>
                <SourceLink source={SOURCES.tokenPrices} />
              </li>
              <li>
                <SourceLink source={SOURCES.enterpriseSpend} />
              </li>
            </ul>
          </div>
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
