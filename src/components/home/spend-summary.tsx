import { MoreLink } from "@/components/site/more-link";
import { CardStage } from "@/components/ui/card-stage";
import { Section } from "@/components/ui/section";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import { ShowcaseCarousel } from "@/components/ui/showcase-carousel";
import { chavesDados } from "@/denarius/chaves/chaves-dados";
import { KeyEntryDemo } from "@/denarius/chaves/key-entry-demo";
import { composicaoDados } from "@/denarius/composicao/composicao-dados";
import { CompositionDemo } from "@/denarius/composicao/composition-demo";
import fundoChaves from "@/assets/fundos/fundo-44.jpg";
import fundoComposicao from "@/assets/fundos/fundo-38.jpg";
import { FEATURES } from "@/lib/links";

export function SpendSummary() {
  return (
    <Section id="composicao" labelledBy="composicao-titulo">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
        {/* A composição e a conexão das chaves, alternando a cada 5s: a Composição
            real (interativa, "Ver modelos" abre o painel) e as chaves entrando,
            conectando e ganhando o check (src/denarius). */}
        <ShowcaseCarousel
          label="Composição do gasto e conexão das chaves"
          bleed="left"
          className="order-last lg:order-first lg:col-span-7"
          slides={[
            {
              key: "composicao",
              label: "Composição do gasto",
              content: (
                <ShowcaseCard background={fundoComposicao}>
                  <CardStage width={1000} fit={0.92} className="inset-x-[4%] top-[14%] bottom-0 overflow-hidden">
                    <CompositionDemo {...composicaoDados} />
                  </CardStage>
                </ShowcaseCard>
              ),
            },
            {
              key: "chaves",
              label: "Conexão das chaves",
              content: (
                <ShowcaseCard background={fundoChaves}>
                  <CardStage width={900} fit={0.92} className="inset-x-[4%] top-1/2 -translate-y-1/2">
                    <KeyEntryDemo {...chavesDados} />
                  </CardStage>
                </ShowcaseCard>
              ),
            },
          ]}
        />

        <div className="flex flex-col gap-5 lg:col-span-5">
          <h2 id="composicao-titulo" className="type-display-section text-ink">
            Todo o gasto com IA, em reais, num lugar só.
          </h2>
          <p className="type-narrative max-w-[44ch] text-graphite">
            OpenAI, Anthropic e as assinaturas por assento, somadas por time, provedor e modelo. A
            fatura vem em dólar; o Denarius converte com o câmbio congelado no início do mês.
          </p>
          <p className="type-lead max-w-[44ch] border-t border-hairline pt-5 text-ink">
            O que não tem dono aparece como “não atribuído”. Nunca some do total.
          </p>
          <MoreLink href={FEATURES.composition.href} className="mt-3">
            Saiba mais sobre a composição do gasto
          </MoreLink>
        </div>
      </div>
    </Section>
  );
}
