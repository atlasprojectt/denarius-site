import { Section } from "./section";

const STATES = [
  {
    status: "Sob controle",
    dot: "bg-emerald-500",
    example: "No ritmo — projeção de R$ 3.100 abaixo do orçamento.",
  },
  {
    status: "Atenção",
    dot: "bg-amber-500",
    example: "Projeção de R$ 4.200 acima do orçamento no fechamento.",
  },
  {
    status: "Acima do orçamento",
    dot: "bg-red-500",
    example: "Engenharia ultrapassou o limite em 19%.",
  },
];

export function Verdict() {
  return (
    <Section
      id="veredito"
      eyebrow="A principal resposta"
      title="Uma resposta clara: os gastos com IA estão sob controle?"
      intro="Antes de qualquer gráfico, o Denarius entrega um veredito em uma frase. Ele é sustentado pelo gasto atual, pelo tempo decorrido, pelo orçamento e pela projeção de fechamento."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {STATES.map((state) => (
          <div
            key={state.status}
            className="rounded-lg border border-black/10 p-4 dark:border-white/10"
          >
            <p className="flex items-center gap-2 font-medium">
              <span
                aria-hidden="true"
                className={`h-2.5 w-2.5 rounded-full ${state.dot}`}
              />
              {state.status}
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {state.example}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
