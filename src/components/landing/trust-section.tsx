import { EyeOffIcon, GaugeIcon, LockKeyholeIcon, ScaleIcon } from "lucide-react";
import { Reveal } from "./reveal";
import { Section } from "./section";

const PRINCIPLES = [
  {
    title: "Sem prompts ou respostas",
    text: "Somente metadados de uso e custo. Conversas, anexos e conteúdo não são armazenados.",
    icon: EyeOffIcon,
  },
  {
    title: "Governança, não vigilância",
    text: "A leitura padrão é por time. Não há rankings de pessoas nem avaliação individual de desempenho.",
    icon: GaugeIcon,
  },
  {
    title: "Segurança e privacidade",
    text: "Credenciais cifradas, conexões somente leitura, isolamento por empresa e perfis de acesso.",
    icon: LockKeyholeIcon,
  },
  {
    title: "Números honestos",
    text: "Lacunas, atrasos, reconciliação e câmbio aparecem com contexto — nunca disfarçados como custo zero.",
    icon: ScaleIcon,
  },
];

const LIMITS = [
  "Não bloqueia nem limita o uso de IA.",
  "Não toma decisões pela empresa.",
  "Projeções são estimativas, não garantias.",
  "A fatura do provedor é o documento oficial.",
  "Dados individuais não servem para avaliação de desempenho.",
];

export function TrustSection() {
  return (
    <Section
      id="confianca"
      eyebrow="Confiança e transparência"
      title="Clareza sobre os dados — inclusive os limites."
      intro="Governança financeira só funciona quando acesso, método e responsabilidade estão explícitos."
      emphasis="statement"
      rule
    >
      <Reveal>
        <div className="rounded-[20px] bg-card p-2">
          <div className="grid gap-2 md:grid-cols-2">
            {PRINCIPLES.map((principle) => {
              const Icon = principle.icon;
              return (
                <article
                  key={principle.title}
                  className="rounded-xl border border-border bg-background p-5 sm:p-6"
                >
                  <Icon aria-hidden="true" className="size-5 text-brand-accent-light" />
                  <h3 className="mt-5 text-xl tracking-tight">{principle.title}</h3>
                  <p className="explainer mt-3 text-sm text-muted-foreground">{principle.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-12 border-t border-border pt-7">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Limites do produto
          </p>
          <ul className="mt-5 grid gap-x-10 gap-y-3 text-sm leading-6 text-foreground/80 sm:grid-cols-2">
            {LIMITS.map((limit) => (
              <li key={limit} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-brand-accent" />
                {limit}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
