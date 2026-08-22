import { AssetSlot } from "./asset-slot";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function VerdictSection() {
  return (
    <Section
      id="veredito"
      eyebrow="Conclusão executiva"
      title="A conclusão antes da investigação."
      intro="O Denarius começa pelo veredito. Orçamento, gasto realizado e ritmo do período viram uma frase executiva clara — antes dos detalhes."
      emphasis="statement"
      spacious
      rule
    >
      <Reveal>
        <AssetSlot
          id="veredito-executivo"
          ratio="8 / 3"
          brief="Somente o veredito, a frase executiva e a data da última sincronização."
          dimensions="1600 × 600 px"
        />
      </Reveal>

      <div className="mt-10 grid gap-5 border-t border-border pt-6 sm:grid-cols-2 sm:gap-10">
        <Reveal>
          <p className="font-mono text-xs leading-6 text-muted-foreground">
            <span className="text-foreground">Regras determinísticas.</span> O
            veredito não é uma opinião gerada por IA.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-mono text-xs leading-6 text-muted-foreground">
            <span className="text-foreground">A partir do quinto dia.</span> A
            projeção aparece quando existe uma base mínima de observação.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
