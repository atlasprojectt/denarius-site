import { EmailSummary } from "@/components/home/email-summary";
import { FaqTeaser } from "@/components/home/faq-teaser";
import { Hero } from "@/components/home/hero";
import { ProblemSummary } from "@/components/home/problem-summary";
import { ReportsSummary } from "@/components/home/reports-summary";
import { SimulationSummary } from "@/components/home/simulation-summary";
import { SpendSummary } from "@/components/home/spend-summary";
import { TrustSummary } from "@/components/home/trust-summary";
import { VerdictSummary } from "@/components/home/verdict-summary";
import { CtaBand } from "@/components/site/cta-band";
import { MoreLink } from "@/components/site/more-link";
import { PAGES } from "@/lib/links";

// A home mostra o essencial; cada seção termina num "Saiba mais" para a sua página.
// As features seguem as perguntas do CEO na narrativa: quanto gastamos, vamos
// fechar, e se não, vou saber a tempo, como presto contas.
export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSummary />
      <SpendSummary />
      <VerdictSummary />
      <SimulationSummary />
      <EmailSummary />
      <ReportsSummary />
      <TrustSummary />
      <FaqTeaser />
      <CtaBand lead="Três passos até o primeiro veredito: conecte as fontes, defina o orçamento e leia o veredito.">
        <MoreLink href={PAGES.howItWorks.href} className="mt-2">
          Saiba como funciona
        </MoreLink>
      </CtaBand>
    </>
  );
}
