import { Section } from "./section";

const STEPS = [
  {
    title: "Conecte",
    text: "Conecte OpenAI e Anthropic, importe a estrutura da empresa e registre assinaturas.",
  },
  {
    title: "Defina os limites",
    text: "Configure o orçamento geral e os limites de cada time.",
  },
  {
    title: "Mantenha o controle",
    text: "Acompanhe o veredito, investigue riscos e simule possíveis ajustes.",
  },
];

export function HowItWorks() {
  return (
    <Section
      id="como-funciona"
      eyebrow="Como funciona"
      title="Do uso espalhado a um orçamento governado em três passos."
    >
      <ol className="grid gap-8 sm:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.title}>
            <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
              Passo {index + 1}
            </p>
            <h3 className="mt-1 font-medium">{step.title}</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
