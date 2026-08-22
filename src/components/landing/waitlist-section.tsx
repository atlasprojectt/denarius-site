import Image from "next/image";
import { Reveal } from "./reveal";
import { WaitlistForm } from "./waitlist-form";

export function WaitlistSection() {
  return (
    <section id="lista-de-acesso" className="border-t border-(--frame-line)">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20 lg:py-24 xl:px-6">
        <Reveal className="relative w-full overflow-hidden rounded-3xl border border-border">
          <Image
            src="/hero-backdrop-56.png"
            alt=""
            fill
            quality={100}
            sizes="(min-width: 1280px) 1104px, calc(100vw - 32px)"
            className="object-cover object-center"
          />
          <div aria-hidden className="absolute inset-0 bg-background/45" />
          <div className="relative grid items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-14">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brand-accent-light">
                Lista de acesso
              </p>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl">
                Transforme gasto com IA em uma decisão controlada.
              </h2>
              <p className="explainer mt-5 max-w-xl text-foreground/70">
                Receba uma leitura financeira clara antes de o custo virar
                surpresa. A liberação acontece por etapas.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/95 p-5 backdrop-blur-sm sm:p-6">
              <WaitlistForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
