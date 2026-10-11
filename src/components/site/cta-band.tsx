import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { CONTACT_URL, SIGNUP_URL } from "@/lib/links";

/** A chamada que fecha cada página: cadastro e conversa com o fundador. */
export function CtaBand({
  title = "Estou no controle? E, se não estiver, o que eu faço?",
  lead = "O Denarius responde as duas, em reais, antes da fatura.",
  children,
}: {
  title?: ReactNode;
  lead?: ReactNode;
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
          <ButtonLink href={SIGNUP_URL}>Simule o fechamento do seu mês</ButtonLink>
          <ButtonLink href={CONTACT_URL} variant="secondary">
            Fale com o fundador
          </ButtonLink>
        </div>
        {children}
      </div>
    </Section>
  );
}
