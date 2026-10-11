import { MoreLink } from "@/components/site/more-link";
import { Section } from "@/components/ui/section";
import { ReportSheet } from "@/components/ui/report-sheet";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import fundo from "@/assets/fundos/fundo-39.jpg";
import { FEATURES } from "@/lib/links";

export function ReportsSummary() {
  return (
    <Section id="relatorios" labelledBy="relatorios-titulo">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="flex flex-col gap-5 lg:col-span-5">
          <h2 id="relatorios-titulo" className="type-display-section text-ink">
            Como presto contas? Com o mês em PDF.
          </h2>
          <p className="type-narrative max-w-[44ch] text-graphite">
            Gere em PDF o relatório do mês em andamento sempre que precisar, para o conselho ou o
            contador. Cada mês fechado fica congelado como fechou, sem número recalculado depois.
          </p>
          <p className="type-lead max-w-[44ch] border-t border-hairline pt-5 text-ink">
            A trilha de auditoria registra as ações administrativas.
          </p>
          <MoreLink href={FEATURES.reports.href} className="mt-3">
            Saiba mais sobre os relatórios
          </MoreLink>
        </div>

        <ShowcaseCard background={fundo} bleed="right" className="lg:col-span-7">
          <ReportSheet />
        </ShowcaseCard>
      </div>
    </Section>
  );
}
