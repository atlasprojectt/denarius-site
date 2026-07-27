import { AssetPlaceholder } from "./asset-placeholder";
import { CtaLink } from "./cta-link";
import { BOOK_DEMO_URL, CONTACT_URL } from "./links";

const BENEFITS = [
  "Para onde o dinheiro está indo",
  "Como o mês deve fechar",
  "O que exige atenção agora",
];

/**
 * Conversion built as its own composition: a reserved background asset with
 * a message block above it and an inner panel carrying the two CTAs.
 */
export function FinalCTASection() {
  return (
    <section
      id="agendar-demonstracao"
      className="border-t border-border"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <div className="relative overflow-hidden">
          <AssetPlaceholder
            id="final-cta-background"
            className="absolute inset-0 h-full"
            ariaLabel="Espaço reservado para o asset de fundo do bloco de conversão."
          />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Comece agora
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Assuma o controle dos gastos com IA antes da próxima fatura.
              </h2>
              <ul className="mt-6 space-y-2">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm leading-6">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-sm leading-6 text-muted-foreground">
                Veja o Denarius com os dados da sua empresa em uma demonstração
                guiada.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <CtaLink href={BOOK_DEMO_URL} arrow>
                  Agendar demonstração
                </CtaLink>
                <CtaLink href={CONTACT_URL} variant="secondary">
                  Falar com a equipe
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
