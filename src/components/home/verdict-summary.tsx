import { MoreLink } from "@/components/site/more-link";
import { VerdictList } from "@/components/site/verdict-list";
import { Section } from "@/components/ui/section";
import { FEATURES } from "@/lib/links";

export function VerdictSummary() {
  return (
    <Section id="veredito" labelledBy="veredito-titulo">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col gap-5 lg:col-span-5">
          <h2 id="veredito-titulo" className="type-display-section text-ink">
            Estou no controle? A resposta cabe em uma linha.
          </h2>
          <p className="type-narrative max-w-[44ch] text-graphite">
            Todo dia, o Denarius converte o uso em reais e projeta onde o mês de cada time fecha. A
            conclusão vem primeiro; os números que a sustentam, logo abaixo.
          </p>
          <MoreLink href={FEATURES.verdict.href} className="mt-3">
            Saiba como o veredito é calculado
          </MoreLink>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <VerdictList count={3} />
        </div>
      </div>
    </Section>
  );
}
