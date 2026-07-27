import { CapabilitySection, type Capability } from "./capability-section";

/**
 * The verdict states, in the semantic order the product uses them.
 * Amber is risk (projection), red is a confirmed overrun — never the reverse.
 */
const VERDICT_STATES = [
  {
    status: "Sob controle",
    dot: "bg-status-green",
    example: "No ritmo — projeção de R$ 3.100 abaixo do orçamento.",
  },
  {
    status: "Atenção",
    dot: "bg-status-amber",
    example: "Projeção de R$ 4.200 acima do orçamento no fechamento.",
  },
  {
    status: "Acima do orçamento",
    dot: "bg-status-red",
    example: "Engenharia ultrapassou o limite em 25%.",
  },
];

const CAPABILITIES: Capability[] = [
  {
    eyebrow: "Governar",
    title: "Cada gasto medido contra um limite.",
    description:
      "Defina o orçamento da empresa e o de cada time. O consumo é acompanhado contra esses limites todos os dias, comparado ao tempo decorrido, e o fechamento é estimado pelo ritmo atual.",
    points: [
      "Orçamento da empresa e dos times como limites independentes",
      "Gasto e ritmo comparados ao tempo decorrido do período",
      "Projeção de fechamento e margem em dinheiro, não só em porcentagem",
    ],
    asset: "capability-govern",
  },
  {
    eyebrow: "Entender",
    title: "Saiba para onde o dinheiro está indo.",
    description:
      "O custo é distribuído por time, provedor e modelo. Uso de API e assinaturas registradas entram na mesma visão, e o que não pode ser mapeado aparece de forma explícita.",
    points: [
      "Atribuição por time, provedor e modelo",
      "Categoria “Não atribuído” — o total sempre reconcilia com a soma",
      "Uso de API e assinaturas no mesmo orçamento",
    ],
    asset: "capability-understand",
    reverse: true,
  },
  {
    eyebrow: "Agir antes da fatura",
    title: "Encontre os poucos riscos que exigem decisão.",
    description:
      "Quando um time deve ultrapassar o limite, o aviso chega antes da fatura, com o que está por trás do aumento. Antes de decidir, dá para simular um ajuste no ritmo e ver o efeito no fechamento.",
    points: [
      "Aviso antecipado quando o estouro é projetado",
      "Principais responsáveis pelo aumento e o que investigar",
      "Simulação de ritmo com recálculo imediato de fechamento e margem",
    ],
    asset: "capability-act",
  },
];

export function ProductSection() {
  return (
    <>
      <section id="produto" className="border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              A resposta principal
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Os gastos com IA estão sob controle?
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Antes de qualquer gráfico, o painel responde em uma frase —
              sustentada pelo gasto atual, pelo orçamento, pelo tempo decorrido e
              pela projeção de fechamento.
            </p>
          </div>

          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {VERDICT_STATES.map((state) => (
              <div key={state.status} className="border-t border-border pt-4">
                <dt className="flex items-center gap-2 font-medium">
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 shrink-0 rounded-full ${state.dot}`}
                  />
                  {state.status}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                  {state.example}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {CAPABILITIES.map((capability) => (
        <CapabilitySection key={capability.eyebrow} {...capability} />
      ))}
    </>
  );
}
