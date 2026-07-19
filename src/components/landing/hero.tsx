import { CtaLink } from "./cta-link";
import { BOOK_DEMO_ANCHOR } from "./links";
import { HeroPreview } from "./previews";

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-5xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Governança de gastos com IA
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Saiba onde seu orçamento de IA vai chegar antes da fatura.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          O Denarius conecta seus provedores de IA, atribui custos aos times,
          acompanha o orçamento e avisa antes que os gastos saiam do controle.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CtaLink href={BOOK_DEMO_ANCHOR}>Agendar demonstração</CtaLink>
          <CtaLink href="#como-funciona" variant="secondary">
            Ver como funciona
          </CtaLink>
        </div>
      </div>
      <HeroPreview />
    </section>
  );
}
