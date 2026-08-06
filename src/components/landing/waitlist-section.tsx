import { Section } from "./section";
import { WaitlistForm } from "./waitlist-form";

/** O que aparece primeiro quando a conta é conectada. */
const FIRST_ANSWERS = [
  "Para onde o dinheiro está indo",
  "Como o mês deve fechar",
  "O que exige atenção agora",
];

export function WaitlistSection() {
  return (
    <Section
      id="lista-de-acesso"
      eyebrow="Lista de acesso"
      title="Traga o gasto de IA da sua empresa para dentro de um orçamento."
      emphasis="statement"
      surface="raised"
      spacious
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            Estamos liberando acesso aos poucos para empresas de tecnologia de
            20 a 200 pessoas. Deixe seu e-mail e entramos em contato com as
            instruções para conectar a sua conta.
          </p>

          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            O que você vê primeiro
          </p>
          <ul className="mt-4 space-y-3">
            {FIRST_ANSWERS.map((answer) => (
              <li key={answer} className="flex gap-3 text-sm leading-6">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                />
                {answer}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-background p-6 sm:p-8 lg:self-start">
          <WaitlistForm />
        </div>
      </div>
    </Section>
  );
}
