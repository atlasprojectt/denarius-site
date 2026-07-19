import { CtaLink } from "./cta-link";
import { BOOK_DEMO_URL, CONTACT_URL } from "./links";

export function FinalCta() {
  return (
    <section
      id="agendar-demonstracao"
      className="border-t border-black/10 dark:border-white/10"
    >
      <div className="mx-auto w-full max-w-3xl px-6 py-20 text-center sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Assuma o controle dos gastos com IA antes da próxima fatura.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Veja para onde o dinheiro está indo, como o mês deve fechar e o que
          exige atenção agora.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CtaLink href={BOOK_DEMO_URL}>Agendar demonstração</CtaLink>
          <a
            href={CONTACT_URL}
            className="text-sm text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
          >
            Falar com a equipe
          </a>
        </div>
      </div>
    </section>
  );
}
