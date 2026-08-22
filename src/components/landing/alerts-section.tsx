import { BellRingIcon, CheckIcon } from "lucide-react";
import { AssetSlot } from "./asset-slot";
import { Reveal } from "./reveal";
import { Section } from "./section";

const POINTS = [
  "Faixas de orçamento transformam mudança de ritmo em contexto acionável.",
  "Um novo aviso só aparece quando existe escalada real da situação.",
  "A combinação de time, faixa e período não gera notificações repetitivas.",
];

export function AlertsSection() {
  return (
    <Section
      id="alertas"
      eyebrow="Antecipação"
      title="O desvio aparece antes de virar surpresa."
      intro="Alertas destacam a mudança relevante no momento em que ela cruza uma nova faixa — sem transformar acompanhamento em ruído."
      emphasis="standard"
      rule
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <Reveal>
          <div className="lg:ml-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-accent-light">
              <BellRingIcon aria-hidden="true" className="size-[18px]" />
              Uma escalada, um alerta
            </div>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {POINTS.map((point) => (
                <li key={point} className="flex gap-3 py-4 text-sm leading-7 text-foreground/85">
                  <CheckIcon aria-hidden="true" className="mt-1.5 size-4 shrink-0 text-status-green" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <AssetSlot
            id="alerta-escalada"
            ratio="4 / 3"
            brief="Uma notificação com time, faixa, período e contexto, sem mostrar uma central completa."
            dimensions="1280 × 960 px"
          />
        </Reveal>
      </div>
    </Section>
  );
}
