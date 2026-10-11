import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { DEMO_URL, PAGES, type SiteLink } from "@/lib/links";

const HOW_IT_WORKS: SiteLink = { href: PAGES.howItWorks.href, label: "Ver como funciona" };

/**
 * A chamada que fecha cada página: o pedido de demonstração e, para quem ainda
 * não quer conversar, o caminho para entender o produto.
 */
export function CtaBand({
  title = "Estou no controle? E, se não estiver, o que eu faço?",
  lead = "O Denarius responde as duas, em reais, antes da fatura.",
  secondary = HOW_IT_WORKS,
  children,
}: {
  title?: ReactNode;
  lead?: ReactNode;
  /** null na própria página de destino. */
  secondary?: SiteLink | null;
  children?: ReactNode;
}) {
  return (
    <Section id="comece" labelledBy="comece-titulo">
      <div className="flex max-w-[52rem] flex-col gap-6">
        <h2 id="comece-titulo" className="type-display-hero max-w-[18ch] text-ink">
          {title}
        </h2>
        <p className="type-narrative max-w-[52ch] text-graphite">{lead}</p>
        <div className="mt-2 flex flex-wrap gap-3">
          <ButtonLink href={DEMO_URL}>Pedir demonstração</ButtonLink>
          {secondary && (
            <ButtonLink href={secondary.href} variant="secondary">
              {secondary.label}
            </ButtonLink>
          )}
        </div>
        <p className="type-caption text-ash">Beta fechado: cada demonstração é feita pelo fundador.</p>
        {children}
      </div>
    </Section>
  );
}
