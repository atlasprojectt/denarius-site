import { MoreLink } from "@/components/site/more-link";
import { CardStage } from "@/components/ui/card-stage";
import { Section } from "@/components/ui/section";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import { SimulationDemo } from "@/denarius/simulacao/simulation-demo";
import { simulacaoDados } from "@/denarius/simulacao/simulacao-dados";
import fundo from "@/assets/fundos/fundo-44.jpg";
import { FEATURES } from "@/lib/links";

export function SimulationSummary() {
  return (
    <Section id="simulacao" labelledBy="simulacao-titulo" tone="rail">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="flex flex-col gap-5 lg:col-span-5">
          <h2 id="simulacao-titulo" className="type-display-section text-ink">
            O painel mostra o gasto. O Denarius mostra a saída.
          </h2>
          <p className="type-narrative max-w-[44ch] text-graphite">
            Quando um time não vai fechar, monte um plano na Simulação: outro modelo a partir de um
            dia, mais ou menos volume. Ela mostra na hora quanto o mês economiza e onde ele passa a
            fechar.
          </p>

          {/* O resultado do exemplo de Engenharia da narrativa-mestre. */}
          <dl className="mt-3 grid grid-cols-2 gap-6 border-t border-hairline pt-6">
            <div className="flex flex-col gap-1">
              <dt className="type-caption text-ash">Economia no mês</dt>
              <dd className="type-display-money text-ink">
                <span className="text-sim-ink">≈</span>&nbsp;R$&nbsp;3.200
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="type-caption text-ash">Novo fechamento de Engenharia</dt>
              <dd className="flex flex-col gap-1">
                <span className="type-metric text-ink">≈&nbsp;R$&nbsp;14.800</span>
                <span className="type-caption text-ash">R$&nbsp;200 abaixo do orçamento</span>
              </dd>
            </div>
          </dl>
          <p className="type-caption text-ash">Exemplo ilustrativo.</p>

          <MoreLink href={FEATURES.simulation.href} className="mt-3">
            Saiba mais sobre a Simulação
          </MoreLink>
        </div>

        {/* A Simulação real (src/denarius/simulacao), interativa, no mesmo card
            dos outros: o topo da projeção e do plano, o resto recortado. */}
        <ShowcaseCard background={fundo} bleed="right" className="lg:col-span-7">
          <CardStage width={900} fit={0.95} className="top-[6%] left-[2.5%]">
            <SimulationDemo {...simulacaoDados} />
          </CardStage>
        </ShowcaseCard>
      </div>
    </Section>
  );
}
