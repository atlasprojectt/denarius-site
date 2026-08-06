"use client";

import Image from "next/image";
import { m, useReducedMotion } from "motion/react";
import { SMALL, motionOff, riseItem, staggerParent } from "./motion";
import { WAITLIST_ANCHOR } from "./links";

/**
 * Hero como um palco único voltado ao produto, sobre o glow da marca. O texto é
 * deliberadamente curto: a captura do painel precisa começar a aparecer ainda
 * na primeira tela.
 *
 * A entrada é escalonada pelo pai (`staggerParent`), então cada filho só
 * declara `riseItem` e a ordem de leitura define a ordem da animação.
 */
export function HeroSection() {
  const reduced = useReducedMotion();

  // Com movimento reduzido nenhum estado inicial é aplicado: sem `initial`, o
  // texto do hero nunca depende da hidratação para aparecer.
  const stage = reduced
    ? motionOff
    : { variants: staggerParent(), initial: "hidden", animate: "visible" };
  const item = reduced
    ? motionOff
    : { variants: riseItem, "data-reveal": "" };

  return (
    <section className="relative overflow-hidden">
      {/* Glow da marca, dissolvendo no fundo da página apenas embaixo. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/hero-glow.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <m.div
        className="mx-auto w-full max-w-6xl px-6 pt-12 pb-20 sm:pt-16 sm:pb-28"
        {...stage}
      >
        <div className="max-w-3xl">
          <m.p
            {...item}
            className="mb-3 font-mono text-xs uppercase tracking-widest text-white/70"
          >
            Governança de gastos com IA
          </m.p>
          <m.h1
            {...item}
            className="text-balance text-4xl font-medium tracking-tight text-white sm:text-5xl"
          >
            Saiba como o mês vai fechar antes da fatura chegar.
          </m.h1>
          <m.p
            {...item}
            className="mt-5 max-w-xl text-lg leading-8 text-white/85"
          >
            Uma visão única do gasto com IA da empresa, comparada ao orçamento
            todos os dias.
          </m.p>

          <m.div
            {...item}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <m.a
              href={WAITLIST_ANCHOR}
              variants={{ rest: { y: 0 }, hover: { y: -1 }, tap: { y: 0 } }}
              initial="rest"
              whileHover="hover"
              whileFocus="hover"
              whileTap="tap"
              transition={SMALL}
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors duration-(--duration-standard) ease-(--ease-out-quart) hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Entrar na lista de acesso
              <m.span
                aria-hidden="true"
                variants={{ rest: { x: 0 }, hover: { x: 2 }, tap: { x: 2 } }}
                transition={SMALL}
                className="inline-block"
              >
                →
              </m.span>
            </m.a>
            <a
              href="#como-funciona"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/40 px-5 text-sm font-medium text-white transition-colors duration-(--duration-standard) ease-(--ease-out-quart) hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ver como funciona
            </a>
          </m.div>

          {/* O redutor de risco em uma linha; o detalhe fica na seção Confiança. */}
          <m.p {...item} className="mt-4 text-sm text-white/65">
            Somente leitura ·{" "}
            <a
              href="#confianca"
              className="underline decoration-white/30 underline-offset-4 transition-colors duration-(--duration-standard) ease-(--ease-out-quart) hover:text-white hover:decoration-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              sem acesso a prompts ou respostas
            </a>
          </m.p>
        </div>

        <m.div
          {...item}
          className="mt-10 overflow-hidden rounded-xl border border-white/15 sm:mt-12"
        >
          <Image
            src="/hero-dashboard.png"
            alt="Painel do Denarius: veredito de estouro do time de Engenharia, gasto do mês contra o orçamento com projeção de fechamento, gasto por fonte e a tabela de orçamento dos times."
            width={1751}
            height={934}
            preload
            sizes="(min-width: 1152px) 1104px, 100vw"
            className="h-auto w-full"
          />
        </m.div>
      </m.div>
    </section>
  );
}
