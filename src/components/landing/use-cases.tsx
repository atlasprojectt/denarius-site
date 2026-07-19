"use client";

import { useId, useState, type ReactNode } from "react";
import { Section } from "./section";
import {
  AttributionPreview,
  BudgetPreview,
  VerdictPreviewCard,
} from "./previews";

type UseCase = {
  id: string;
  title: string;
  text: string;
  preview: ReactNode;
};

const CASES: UseCase[] = [
  {
    id: "ceo-cto",
    title: "CEO e CTO",
    text: "Uma resposta imediata para “estamos no controle?”, com projeção e margem por trás — sem precisar abrir os consoles de cada provedor.",
    preview: <VerdictPreviewCard />,
  },
  {
    id: "financas-operacoes",
    title: "Finanças e Operações",
    text: "A IA deixa de ser um custo variável imprevisível: orçamentos, ritmo e um fechamento projetado para planejar o mês com antecedência.",
    preview: <BudgetPreview />,
  },
  {
    id: "engenharia",
    title: "Engenharia e times de IA",
    text: "Atribuição clara por time e alertas antecipados, para que as conversas sobre custo aconteçam com dados, e não com suposições.",
    preview: <AttributionPreview />,
  },
];

export function UseCases() {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <Section
      id="casos-de-uso"
      eyebrow="Para quem é"
      title="Um mesmo fluxo de governança, três pontos de vista."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="divide-y divide-black/10 dark:divide-white/10">
          {CASES.map((useCase, index) => {
            const expanded = index === open;
            return (
              <div key={useCase.id}>
                <h3>
                  <button
                    type="button"
                    id={`${baseId}-trigger-${useCase.id}`}
                    aria-expanded={expanded}
                    aria-controls={`${baseId}-region-${useCase.id}`}
                    onClick={() => setOpen(expanded ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {useCase.title}
                    <span
                      aria-hidden="true"
                      className={`text-zinc-400 transition-transform ${expanded ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`${baseId}-region-${useCase.id}`}
                  role="region"
                  aria-labelledby={`${baseId}-trigger-${useCase.id}`}
                  hidden={!expanded}
                  className="pb-4"
                >
                  <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                    {useCase.text}
                  </p>
                  {/* Preview inline on mobile, mirrored in the side panel on desktop. */}
                  <div className="mt-4 lg:hidden">{useCase.preview}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden lg:block lg:sticky lg:top-8">
          {CASES[open]?.preview ?? CASES[0].preview}
        </div>
      </div>
    </Section>
  );
}
