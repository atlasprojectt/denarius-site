import Image from "next/image";
import { CtaLink } from "./cta-link";
import { Reveal } from "./reveal";
import { WaitlistDialog } from "./waitlist-dialog";

export function WaitlistSection() {
  return (
    <section id="lista-de-acesso" className="border-t border-(--frame-line)">
      {/* O card tem exatamente a largura da moldura, então ele se encaixa nela
          em vez de flutuar solto — o traço continua acima e abaixo, e o card
          ocupa o vão. É o que mantém a linha viva até o rodapé. */}
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20 lg:py-24 xl:px-6">
        <Reveal className="relative min-h-96 w-full overflow-hidden rounded-3xl border border-border">
          <Image
            src="/hero-backdrop-56.png"
            alt=""
            fill
            quality={100}
            sizes="(min-width: 1280px) 1104px, calc(100vw - 32px)"
            className="object-cover object-center"
          />
          <div aria-hidden className="absolute inset-0 bg-background/35" />

          <div className="relative flex min-h-96 flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
            <p className="font-mono text-xs uppercase tracking-widest text-brand-accent-light">
              Lista de acesso
            </p>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-normal tracking-tight sm:text-4xl">
              Controle o gasto com IA antes da fatura.
            </h2>
            <p className="explainer mt-5 max-w-xl text-foreground/70">
              Entre na lista de acesso para reunir custos, orçamentos e
              projeções em uma única visão.
            </p>
            <div className="mt-8">
              <WaitlistDialog
                trigger={<CtaLink arrow>Entrar na lista de acesso</CtaLink>}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
