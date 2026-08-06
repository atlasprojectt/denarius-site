import { Section } from "./section";

/**
 * Cada fragmento vem com a razão de ser um ponto cego — antes era uma lista de
 * substantivos, que nomeava o problema sem construir o argumento.
 */
const FRAGMENTS = [
  {
    term: "Provedores",
    detail:
      "Cada um com seu painel, seu ciclo de cobrança e sua própria unidade de medida.",
  },
  {
    term: "Chaves e projetos",
    detail:
      "O consumo nasce espalhado por chaves, projetos e workspaces criados ao longo do tempo.",
  },
  {
    term: "Modelos",
    detail:
      "O mesmo volume de uso custa valores diferentes conforme o modelo que o time escolheu.",
  },
  {
    term: "Assinaturas e assentos",
    detail:
      "Ferramentas cobradas por pessoa correm por fora, numa conta separada da API.",
  },
  {
    term: "Gasto sem dono",
    detail:
      "O que não mapeia para nenhum time costuma sumir do relatório em vez de aparecer nele.",
  },
];

export function ProblemSection() {
  return (
    <Section
      id="problema"
      eyebrow="O problema"
      title="O custo de IA não cresce em um lugar só."
      intro="O preço por token cai, mas o volume explode conforme agentes e uso cotidiano se espalham pelos times. O gasto sobe em várias frentes ao mesmo tempo — e cada frente tem a sua própria conta."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="border-l-2 border-brand-accent pl-5 text-lg leading-8 text-foreground sm:text-xl sm:leading-9">
            Somados, esses pedaços viram um número que ninguém consegue afirmar
            de cabeça. A empresa costuma descobrir o total quando a fatura
            chega, e aí o mês já acabou.
          </p>
        </div>

        <dl className="divide-y divide-border border-t border-border">
          {FRAGMENTS.map((fragment) => (
            <div
              key={fragment.term}
              className="grid gap-1 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6"
            >
              <dt className="font-medium">{fragment.term}</dt>
              <dd className="text-sm leading-7 text-muted-foreground">
                {fragment.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
