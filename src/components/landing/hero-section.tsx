import Image from "next/image";
import { BOOK_DEMO_ANCHOR } from "./links";

/**
 * Hero as a single product-forward stage: content on top over the bright
 * brand glow, the product dashboard prominent below. Because the backdrop
 * is light here, the hero text and secondary CTA use dark tones; only the
 * bottom edge fades into the dark page.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Bright brand glow backdrop, fading to the page bg only at the bottom. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/hero-glow.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-white/80">
            Governança de gastos com IA
          </p>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Saiba onde seu orçamento de IA vai chegar antes da fatura.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/85">
            O Denarius conecta seus provedores de IA, atribui custos aos times,
            acompanha o orçamento e avisa antes que os gastos saiam do controle.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={BOOK_DEMO_ANCHOR}
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors duration-(--duration-standard) ease-(--ease-out-quart) hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Agendar demonstração
              <span
                aria-hidden="true"
                className="transition-transform duration-(--duration-standard) ease-(--ease-out-quart) group-hover:translate-x-0.5 motion-reduce:transform-none"
              >
                →
              </span>
            </a>
            <a
              href="#como-funciona"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/40 px-5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ver como funciona
            </a>
          </div>
          <p className="mt-6 text-sm text-white/75">
            Conexões somente para leitura · Sem armazenamento de prompts ou
            respostas
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <Image
            src="/hero-dashboard.png"
            alt="Painel do Denarius mostrando gasto do mês, orçamento, projeção de fechamento, gasto por fonte e orçamento dos times."
            width={1751}
            height={934}
            priority
            sizes="(min-width: 1152px) 1104px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
