import Image from "next/image";
import { cn } from "@/lib/utils";
import { BOOK_DEMO_ANCHOR } from "./links";

/**
 * Hero as a single product-forward stage: an announcement pill, the statement,
 * the actions, then the product screenshot below — all over the deep brand
 * glow. The backdrop is dark enough to carry white text without a scrim; only
 * the bottom edge fades into the page. Composition follows @efferd/hero-3;
 * the assets and copy are the product's own.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Brand glow backdrop, fading to the page bg only at the bottom. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/hero-glow.webp"
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
          {/* Announcement pill — carries the risk-reducing fact, links to it. */}
          <a
            href="#seguranca"
            className={cn(
              "group flex w-fit items-center gap-3 rounded-lg border border-white/25 bg-white/10 p-1 backdrop-blur-sm",
              "transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
              "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards duration-500 ease-out",
            )}
          >
            <span className="rounded-md border border-white/25 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-white">
              Somente leitura
            </span>
            <span className="text-xs text-white/85">
              Sem armazenar prompts ou respostas
            </span>
            <span aria-hidden="true" className="block h-4 border-l border-white/25" />
            <span
              aria-hidden="true"
              className="pr-1.5 text-xs text-white transition-transform duration-(--duration-standard) ease-(--ease-out-quart) group-hover:translate-x-0.5 motion-reduce:transform-none"
            >
              →
            </span>
          </a>

          <p className="mt-6 mb-3 text-sm font-medium uppercase tracking-wide text-white/80 fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-75 duration-500 ease-out">
            Governança de gastos com IA
          </p>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-100 duration-500 ease-out">
            Saiba onde seu orçamento de IA vai chegar antes da fatura.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/85 fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-200 duration-500 ease-out">
            O Denarius conecta seus provedores de IA, atribui custos aos times,
            acompanha o orçamento e avisa antes que os gastos saiam do controle.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-300 duration-500 ease-out">
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
        </div>

        <div className="mt-16 sm:mt-20 fade-in slide-in-from-bottom-5 animate-in fill-mode-backwards delay-300 duration-1000 ease-out">
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
