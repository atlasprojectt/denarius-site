import { MoreLink } from "@/components/site/more-link";
import { AssetSlot } from "@/components/ui/asset-slot";
import { Section } from "@/components/ui/section";
import { FEATURES } from "@/lib/links";

export function SpendSummary() {
  return (
    <Section id="composicao" labelledBy="composicao-titulo">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
        <AssetSlot
          layout="composition"
          label="Composição do gasto por provedor, por modelo e por assinatura"
          className="order-last lg:order-first lg:col-span-7"
          frameClassName="aspect-[4/3]"
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
