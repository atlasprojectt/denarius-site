import { FaqList } from "@/components/site/faq-list";
import { MoreLink } from "@/components/site/more-link";
import { Section } from "@/components/ui/section";
import { HOME_FAQ } from "@/content/faq";
import { PAGES } from "@/lib/links";

export function FaqTeaser() {
  return (
    <Section id="perguntas" labelledBy="perguntas-titulo">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-4">
          <h2 id="perguntas-titulo" className="type-display-section text-ink">
            Perguntas frequentes
          </h2>
          <MoreLink href={PAGES.faq.href}>Ver todas as perguntas</MoreLink>
        </div>
        <FaqList items={HOME_FAQ} className="lg:col-span-8" />
      </div>
    </Section>
  );
}
