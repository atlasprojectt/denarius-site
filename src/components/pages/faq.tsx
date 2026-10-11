import { CtaBand } from "@/components/site/cta-band";
import { FaqList } from "@/components/site/faq-list";
import { PageIntro } from "@/components/site/page-intro";
import { Section } from "@/components/ui/section";
import { FAQ_GROUPS } from "@/content/faq";
import { CONTACT_URL } from "@/lib/links";

export function FaqContent() {
  return (
    <>
      <PageIntro
        title="Perguntas frequentes"
        lead={
          <>
            As dúvidas de quem precisa decidir antes de conectar. Não achou a sua?{" "}
            <a href={CONTACT_URL} className="link-underline text-ink">
              Fale com o fundador
            </a>
            .
          </>
        }
        sections={FAQ_GROUPS.map((group) => ({ id: group.id, label: group.title }))}
      />

      {FAQ_GROUPS.map((group) => (
        <Section key={group.id} id={group.id} labelledBy={`${group.id}-titulo`} size="compact">
          <div className="grid gap-8 lg:grid-cols-12">
            <h2 id={`${group.id}-titulo`} className="type-headline text-ink lg:col-span-4">
              {group.title}
            </h2>
            <FaqList items={group.items} className="lg:col-span-8" />
          </div>
        </Section>
      ))}

      <CtaBand />
    </>
  );
}
