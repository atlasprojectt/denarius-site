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
    example: "Projeção de R$ 3.100 abaixo do orçamento.",
  },
  {
    status: "Atenção",
    bar: "bg-status-amber",
    example: "No ritmo atual, o mês fecha R$ 4.200 acima.",
  },
  {
    status: "Acima do orçamento",
    bar: "bg-status-red",
    example: "Engenharia já ultrapassou o limite em 25%.",
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
      title="O seu gasto com IA está sob controle?"
      intro="Custos de APIs e assinaturas ficam espalhados. O Denarius compara gasto, orçamento e ritmo do mês para responder: sob controle, atenção ou acima do limite."
      emphasis="statement"
      spacious
      rule
    >
      <Reveal>
        <figure>
          <AssetSlot
            id="veredito-barra"
            ratio="16 / 9"
            brief="A barra do veredito, com status, frase, ação recomendada e data da última sincronização."
            dimensions="1600 × 900 px"
          />
        </figure>
      </Reveal>

      <dl className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-10">
        {STATES.map((state, index) => (
          <Reveal key={state.status} delay={index * 0.08}>
            <span
              aria-hidden="true"
              className={`block h-0.5 w-12 rounded-full ${state.bar}`}
            />
            <dt className="mt-4 text-lg font-normal">{state.status}</dt>
            <dd className="explainer mt-2 text-sm text-muted-foreground">
              {state.example}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
