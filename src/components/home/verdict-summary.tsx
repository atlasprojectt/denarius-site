import { MoreLink } from "@/components/site/more-link";
import { CardStage } from "@/components/ui/card-stage";
import { Section } from "@/components/ui/section";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import { VerdictScreen } from "@/denarius/veredito/verdict-demo";
import { vereditoDados } from "@/denarius/veredito/veredito-dados";
import fundo from "@/assets/fundos/fundo-39.jpg";
import { FEATURES } from "@/lib/links";

export function VerdictSummary() {
  return (
    <Section id="veredito" labelledBy="veredito-titulo">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
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

        {/* O canto do Início onde o veredito fica, passando por no controle,
            atenção e estourado conforme o mês avança (src/denarius/veredito).
            A tela tem 1440px e vaza pela direita e por baixo; o card recorta,
            sem faixa de fundo sobrando embaixo. */}
        <ShowcaseCard background={fundo} bleed="right" className="lg:col-span-7">
          <CardStage width={1440} fit={1.98} className="top-[15.5%] left-[11%]">
            <div className="min-h-[640px] overflow-hidden rounded-tl-xl border-t border-l border-border bg-background">
              <VerdictScreen {...vereditoDados} />
            </div>
          </CardStage>
        </ShowcaseCard>
      </div>
    </Section>
  );
}
