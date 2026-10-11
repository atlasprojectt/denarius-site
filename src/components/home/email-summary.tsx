import { MoreLink } from "@/components/site/more-link";
import { CardStage } from "@/components/ui/card-stage";
import { Section } from "@/components/ui/section";
import { SHOWCASE_HOVER, ShowcaseCard } from "@/components/ui/showcase-card";
import { EmailDemo } from "@/denarius/resumo-email/email-demo";
import { resumoEmailDados } from "@/denarius/resumo-email/resumo-email-dados";
import fundo from "@/assets/fundos/fundo-43.jpg";
import { cn } from "@/lib/cn";
import { FEATURES } from "@/lib/links";

const EMAILS = [
  {
    title: "Alerta antes da fatura",
    text: "Quando um time cruza 80%, 100% ou a projeção de estouro. Uma vez por nível no mês, e só escala se piorar.",
  },
  {
    title: "Resumo semanal",
    text: "O total, a variação, o status do orçamento e a projeção de cada time, toda semana.",
  },
];

export function EmailSummary() {
  return (
    <Section id="emails" labelledBy="emails-titulo">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
        <ShowcaseCard background={fundo} bleed="left" className="order-last lg:order-first lg:col-span-7">
          {/* O resumo semanal desenhado em código (src/denarius/resumo-email), e
              não num print, para ficar nítido em qualquer tela. A janela tem
              1280px e passa da borda de baixo. */}
          <CardStage width={1280} fit={0.84} className={cn("top-[14%] left-[8%] origin-top", SHOWCASE_HOVER)}>
            <div
              role="img"
              aria-label="Resumo semanal do Denarius aberto na caixa de entrada: o veredito do mês, o gasto contra o orçamento, a projeção de fechamento e os times que mais consomem"
            >
              <EmailDemo {...resumoEmailDados} />
            </div>
          </CardStage>
        </ShowcaseCard>

        <div className="flex flex-col gap-5 lg:col-span-5">
          <h2 id="emails-titulo" className="type-display-section text-ink">
            O Denarius vai até você, sem ruído.
          </h2>
          <p className="type-narrative max-w-[44ch] text-graphite">
            Você não precisa abrir o painel para saber que algo mudou. Os números saem de regras
            fixas; a IA só redige o texto.
          </p>
          <dl className="flex flex-col gap-5">
            {EMAILS.map((email) => (
              <div key={email.title} className="flex flex-col gap-1.5 border-t border-hairline pt-5">
                <dt className="type-title text-ink">{email.title}</dt>
                <dd className="type-body text-graphite">{email.text}</dd>
              </div>
            ))}
          </dl>
          <MoreLink href={FEATURES.emails.href} className="mt-3">
            Saiba mais sobre alertas e resumos
          </MoreLink>
        </div>
      </div>
    </Section>
  );
}
