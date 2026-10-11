import { MoreLink } from "@/components/site/more-link";
import { SourceLink } from "@/components/site/source-link";
import { Section } from "@/components/ui/section";
import { PAGES, SOURCES, type Source } from "@/lib/links";

// Os três números de bolso da narrativa-mestre, com fonte.
const FIGURES: Array<{ figure: string; text: string; source: Source }> = [
  {
    figure: "11%",
    text: "das organizações acertam a previsão do gasto com IA com margem de 10%.",
    source: SOURCES.costGovernance,
  },
  {
    figure: "62%",
    text: "mudaram uma decisão de negócio por causa de um custo inesperado de IA.",
    source: SOURCES.costGovernance,
  },
  {
    figure: "4 meses",
    text: "bastaram para a Uber gastar o orçamento de IA previsto para 2026 inteiro.",
    source: SOURCES.uberBudget,
  },
];

export function ProblemSummary() {
  return (
    <Section id="problema" labelledBy="problema-titulo" tone="rail">
      <h2 id="problema-titulo" className="type-display-section max-w-[22ch] text-ink">
        A IA virou um custo variável sem dono e sem orçamento.
      </h2>

      <ul className="mt-12 grid border-t border-hairline md:mt-16 md:grid-cols-3">
        {FIGURES.map((item) => (
          <li
            key={item.figure}
            className="flex flex-col gap-3 border-b border-hairline py-7 md:border-b-0 md:border-l md:px-8 md:py-8 md:first:border-l-0 md:first:pl-0"
          >
            <p className="type-display-stat text-ink">{item.figure}</p>
            <p className="type-lead max-w-[32ch] text-ink">{item.text}</p>
            <SourceLink source={item.source} className="mt-auto pt-1" />
          </li>
        ))}
      </ul>

      <MoreLink href={PAGES.whyNow.href} className="mt-10 md:mt-12">
        Saiba por que o gasto com IA saiu do controle
      </MoreLink>
    </Section>
  );
}
