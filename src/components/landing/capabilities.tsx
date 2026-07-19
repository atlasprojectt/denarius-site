"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { Section } from "./section";
import {
  AlertsPreview,
  AttributionPreview,
  ProjectionPreview,
  SimulationPreview,
  VerdictPreviewCard,
} from "./previews";

type Tab = {
  id: string;
  label: string;
  headline: string;
  description: string;
  points: string[];
  preview: ReactNode;
};

const TABS: Tab[] = [
  {
    id: "veredito",
    label: "Veredito",
    headline: "A conclusão em uma frase.",
    description:
      "O topo do painel diz, em linguagem direta, se os gastos estão sob controle, precisam de atenção ou já passaram do limite.",
    points: [
      "Estado sob controle, atenção ou acima do orçamento",
      "Sustentado por gasto, tempo decorrido e projeção",
    ],
    preview: <VerdictPreviewCard />,
  },
  {
    id: "atribuicao",
    label: "Atribuição",
    headline: "Cada real com um responsável.",
    description:
      "O custo é distribuído por time, provedor e modelo. O que não pode ser mapeado aparece em “Não atribuído”, então os totais sempre reconciliam.",
    points: [
      "Divisão por time, provedor e modelo",
      "Categoria explícita para gastos sem atribuição",
    ],
    preview: <AttributionPreview />,
  },
  {
    id: "projecao",
    label: "Projeção",
    headline: "Para onde o mês está caminhando.",
    description:
      "A partir do ritmo atual, o Denarius estima o fechamento do período e quanto de folga deve sobrar no orçamento.",
    points: [
      "Estimativa de fechamento pelo ritmo atual",
      "Margem projetada em dinheiro",
    ],
    preview: <ProjectionPreview />,
  },
  {
    id: "alertas",
    label: "Alertas",
    headline: "Riscos antes da fatura.",
    description:
      "Quando um time deve estourar o limite, o alerta chega com os principais responsáveis pelo aumento — sem virar ruído diário.",
    points: [
      "Projeção de estouro e times acelerando",
      "Principais responsáveis pelo custo",
    ],
    preview: <AlertsPreview />,
  },
  {
    id: "simulacao",
    label: "Simulação",
    headline: "Teste um ajuste na hora.",
    description:
      "Reduza o ritmo projetado de um time e veja imediatamente o efeito no fechamento e na margem, antes de decidir.",
    points: [
      "Um controle: variar o ritmo do time",
      "Recálculo imediato de fechamento e margem",
    ],
    preview: <SimulationPreview />,
  },
];

export function Capabilities() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const dir = event.key === "ArrowRight" ? 1 : -1;
    const next = (active + dir + TABS.length) % TABS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  const current = TABS[active];

  return (
    <Section
      id="recursos"
      eyebrow="Recursos"
      title="Um painel, várias formas de manter o controle."
    >
      <div
        role="tablist"
        aria-label="Recursos do Denarius"
        onKeyDown={onKeyDown}
        className="flex flex-wrap gap-2"
      >
        {TABS.map((tab, index) => {
          const selected = index === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              type="button"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                selected
                  ? "border-transparent bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
                  : "border-black/15 text-zinc-600 hover:bg-black/5 dark:border-white/20 dark:text-zinc-400 dark:hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel-${current.id}`}
        aria-labelledby={`${baseId}-tab-${current.id}`}
        className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center"
      >
        <div>
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {current.headline}
          </h3>
          <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {current.description}
          </p>
          <ul className="mt-5 space-y-2">
            {current.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div>{current.preview}</div>
      </div>
    </Section>
  );
}
