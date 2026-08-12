"use client";

import Image from "next/image";
import { m, useReducedMotion } from "motion/react";
import { CtaLink } from "./cta-link";
import { motionOff, riseItem, staggerParent } from "./motion";
import { WaitlistDialog } from "./waitlist-dialog";

/**
 * Hero como um card flutuante: o glow da marca fica contido dentro dele, com
 * cantos arredondados, e o header repousa sobre esse card enquanto a página
 * está no topo.
 *
 * A captura do painel é o único elemento que atravessa a borda — ela sai pela
 * base do card e avança sobre o fundo do site. É o que dá profundidade sem
 * precisar de sombra ou brilho: o produto literalmente não cabe na moldura.
 *
 * O `-mt-20` cancela a altura do header (16px de respiro + 64px de barra), para
 * que o card comece no topo da página e o header caia dentro dele.
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
    <section className="-mt-20 px-4 pt-4 pb-28 sm:pb-52 lg:pb-72">
      {/* O card ocupa a primeira dobra inteira: só a moldura de 16px fica de
          fora, então não sobra fundo escuro em volta antes da primeira rolagem. */}
      <div className="relative flex min-h-[calc(100svh-2rem)] flex-col rounded-3xl">
        {/* O fundo é recortado pelo card; só ele fica preso à moldura. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
        >
          <Image
            src="/hero-backdrop-56.png"
            alt=""
            fill
            preload
            quality={100}
            sizes="100vw"
            className="object-cover object-[60%_center]"
          />
        </div>

        {/* `flex flex-col` desliga o colapso de margem: sem isso a margem
            negativa da captura escaparia para fora do card em vez de encurtá-lo,
            e nada transbordaria. */}
        <m.div
          className="relative flex flex-1 flex-col pt-24 sm:pt-28"
          {...stage}
        >
          {/* `flex-1` com `items-center` absorve a folga que sobrar em telas
              muito altas como respiro em volta do texto, em vez de acumular
              tudo num vão morto entre a chamada e a captura. */}
          <div className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6">
            <div className="max-w-3xl">
              <m.h1
                {...item}
                className="text-balance text-4xl font-normal tracking-tight text-foreground sm:text-5xl"
              >
                Saiba como o mês vai fechar antes da fatura chegar.
              </m.h1>
              <m.p
                {...item}
                className="mt-5 max-w-xl text-lg leading-8 text-foreground/85"
              >
                Reúna custos de OpenAI, Anthropic e assinaturas, compare com o
                orçamento e receba alertas antes do fechamento.
              </m.p>

              <m.div {...item} className="mt-8 flex flex-wrap items-center gap-4">
                {/* Mesmo destino do botão do header: os dois abrem o modal, para
                    que "Entrar na lista" signifique a mesma coisa na página toda. */}
                <WaitlistDialog
                  trigger={<CtaLink arrow>Entrar na lista de acesso</CtaLink>}
                />
                <CtaLink href="#produto" variant="secondary">
                  Ver como funciona
                </CtaLink>
              </m.div>
            </div>
          </div>

          {/* A captura sai da coluna de texto, mas não encosta na moldura: o
              recuo lateral cresce com a tela para que o card respire em volta
              dela. É esse respiro que faz a captura ler como peça apoiada
              dentro do card, e não como imagem esticada até a borda.

              A margem negativa encurta o card, então o que sobra da captura
              fica para fora dele, sobre o fundo do site — e o `pb` da seção
              reserva o espaço dessa sobra. */}
          <m.div
            {...item}
            className="mx-auto -mb-16 w-full max-w-[1480px] px-6 pt-16 sm:-mb-40 sm:px-12 sm:pt-20 lg:-mb-56 lg:px-20"
          >
            {/* Moldura de vidro: uma div maior atrás do mock, só o traço e a
                névoa suficiente para separar a captura do card sem roubar a
                cena. O mock segue tocando a base do card como antes. */}
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-1 rounded-xl border border-foreground/10 bg-foreground/[0.03] backdrop-blur-sm sm:-inset-1.5"
              />
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/hero-mock.png"
                  alt="Painel do Denarius: veredito de estouro do time de Engenharia, gasto do mês contra o orçamento com projeção de fechamento, gasto por fonte e a tabela de orçamento dos times."
                  width={3804}
                  height={2028}
                  preload
                  sizes="(min-width: 1640px) 1320px, (min-width: 1024px) calc(100vw - 192px), (min-width: 640px) calc(100vw - 128px), calc(100vw - 80px)"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
