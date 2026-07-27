import { Section } from "./section";

const AUDIENCES = [
  {
    title: "CEO e CTO",
    question: "Estamos no controle? Como o mês vai fechar?",
    answer:
      "O veredito e a projeção de fechamento respondem em uma frase, sem abrir o console de cada provedor.",
  },
  {
    title: "Finanças e Operações",
    question: "Quanto vamos gastar e dentro de qual limite?",
    answer:
      "Orçamentos por empresa e por time, ritmo comparado ao tempo decorrido e margem projetada para planejar o mês.",
  },
  {
    title: "Engenharia e times de IA",
    question: "O que está gerando esse custo?",
    answer:
      "Atribuição por time, provedor e modelo, com avisos antecipados para discutir custo com dados em vez de suposição.",
  },
];

export function AudienceSection() {
  return (
    <Section
      id="para-quem"
      eyebrow="Para quem é"
      title="Um mesmo fluxo de governança, três pontos de vista."
    >
      <div className="grid gap-10 sm:grid-cols-3">
        {AUDIENCES.map((audience) => (
          <article key={audience.title} className="border-t border-border pt-4">
            <h3 className="font-medium">{audience.title}</h3>
            <p className="mt-3 text-sm leading-6 text-foreground">
              “{audience.question}”
            </p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {audience.answer}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
