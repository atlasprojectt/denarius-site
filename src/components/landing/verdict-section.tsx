import { AssetSlot } from "./asset-slot";
import { Reveal } from "./reveal";
import { Section } from "./section";

/**
 * Os três estados, na semântica que o produto usa: âmbar é risco projetado,
 * vermelho é estouro já confirmado — nunca o contrário.
 */
const STATES = [
  {
    status: "Sob controle",
    bar: "bg-status-green",
    example: "No ritmo — projeção de R$ 3.100 abaixo do orçamento.",
    meaning: "A projeção de fechamento cabe dentro do limite.",
  },
  {
    status: "Atenção",
    bar: "bg-status-amber",
    example: "Projeção de R$ 4.200 acima do orçamento no fechamento.",
    meaning: "Ainda não estourou, mas o ritmo atual leva a isso.",
  },
  {
    status: "Acima do orçamento",
    bar: "bg-status-red",
    example: "Engenharia ultrapassou o limite em 25%.",
    meaning: "Um time já passou do próprio limite neste período.",
  },
];

/**
 * O momento principal da página. O veredito é a saída de maior valor do
 * produto, então recebe a maior escala tipográfica e a prova mais direta:
 * o recorte real da barra que abre o painel.
 */
export function VerdictSection() {
  return (
    <Section
      id="veredito"
      eyebrow="A resposta"
      title="Os gastos com IA estão sob controle?"
      intro="O painel abre com a resposta em uma frase, antes de qualquer gráfico. A frase é calculada a partir do gasto do mês, do orçamento, do tempo decorrido e da projeção de fechamento — nenhum número dela é escrito à mão."
      emphasis="statement"
      surface="raised"
      spacious
    >
      <Reveal>
        <figure>
          <AssetSlot
            id="veredito-barra"
            ratio="16 / 3"
            brief="A barra que abre o painel: o ponto de status, a frase do veredito, a ação para o time citado e o carimbo da última sincronização."
          />
          <figcaption className="mt-4 text-sm text-muted-foreground">
            A primeira linha do painel. Ao lado dela, a data da última
            sincronização — para que o número nunca apareça sem contexto.
          </figcaption>
        </figure>
      </Reveal>

      <dl className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-10">
        {STATES.map((state, index) => (
          <Reveal key={state.status} delay={index * 0.08}>
            <span
              aria-hidden="true"
              className={`block h-0.5 w-12 rounded-full ${state.bar}`}
            />
            <dt className="mt-4 text-lg font-medium">{state.status}</dt>
            <dd className="mt-2 text-sm leading-6 text-muted-foreground">
              {state.meaning}
            </dd>
            <dd className="mt-4 border-l border-border pl-4 text-sm leading-6 text-foreground/90">
              {state.example}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
