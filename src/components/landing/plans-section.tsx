import { CheckCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CtaLink } from "./cta-link";
import { BOOK_DEMO_ANCHOR, CONTACT_URL } from "./links";
import { Section } from "./section";

type Plan = {
  name: string;
  info: string;
  features: string[];
  cta: { text: string; href: string; variant?: "primary" | "secondary" };
  highlighted?: boolean;
};

/**
 * Mensalidade fixa por faixa de tamanho — o modelo real do produto.
 * Sem valores publicados: a contratação ainda é conduzida pela equipe,
 * então o preço é definido na conversa em vez de anunciado aqui.
 */
const PLANS: Plan[] = [
  {
    name: "Até 50 pessoas",
    info: "Times que estão começando a estruturar o gasto com IA.",
    features: [
      "Conectores OpenAI e Anthropic",
      "Orçamento da empresa e dos times",
      "Atribuição por time, provedor e modelo",
      "Projeção de fechamento e margem",
    ],
    cta: { text: "Falar com a equipe", href: CONTACT_URL, variant: "secondary" },
  },
  {
    name: "50 a 200 pessoas",
    info: "Operação com vários times consumindo IA em paralelo.",
    highlighted: true,
    features: [
      "Tudo da faixa anterior",
      "Alertas antecipados de estouro projetado",
      "Simulação de ajustes no ritmo",
      "Resumo semanal por e-mail",
      "Papéis de administrador e leitor",
    ],
    cta: { text: "Agendar demonstração", href: BOOK_DEMO_ANCHOR },
  },
  {
    name: "Acima de 200 pessoas",
    info: "Estruturas maiores, com exigências próprias de governança.",
    features: [
      "Tudo da faixa anterior",
      "Controles de privacidade por pessoa",
      "Acompanhamento na implantação",
      "Conversa sobre necessidades específicas",
    ],
    cta: { text: "Falar com a equipe", href: CONTACT_URL, variant: "secondary" },
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-xl border border-border",
        plan.highlighted && "border-brand-accent-border bg-card/40",
      )}
    >
      <div className="border-b border-border p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="font-medium">{plan.name}</p>
          {plan.highlighted ? (
            <span className="rounded-full border border-brand-accent-border px-2 py-0.5 text-xs text-brand-accent">
              Faixa mais comum
            </span>
          ) : null}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{plan.info}</p>
        <p className="mt-6 text-2xl font-medium">Sob consulta</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Mensalidade fixa, definida por faixa de tamanho.
        </p>
      </div>

      <ul className="space-y-3 px-5 py-6 text-sm text-muted-foreground">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckCircleIcon
              aria-hidden="true"
              className="mt-0.5 size-3.5 shrink-0 text-brand-accent"
            />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t border-border p-4">
        <CtaLink href={plan.cta.href} variant={plan.cta.variant}>
          {plan.cta.text}
        </CtaLink>
      </div>
    </div>
  );
}

export function PlansSection() {
  return (
    <Section
      id="planos"
      eyebrow="Planos"
      title="Uma mensalidade fixa, definida pelo tamanho da empresa."
      intro="Sem cobrança por token e sem surpresa no fim do mês. A contratação é conduzida pela nossa equipe, então o valor é fechado na conversa — junto com o que faz sentido para a sua operação."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </Section>
  );
}
