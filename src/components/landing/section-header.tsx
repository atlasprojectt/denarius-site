"use client";

import type { ReactNode } from "react";
import { m, useReducedMotion } from "motion/react";
import { riseItem, staggerParent } from "./motion";
import { cn } from "@/lib/utils";

/**
 * Três níveis de ênfase para o título. A página alterna entre eles para criar
 * ritmo — antes todas as seções usavam o mesmo tamanho, o que achatava a
 * hierarquia e fazia a leitura parecer uma pilha de blocos iguais.
 */
export const EMPHASIS = {
  statement: "text-2xl sm:text-3xl lg:text-4xl",
  standard: "text-xl sm:text-2xl lg:text-3xl",
  quiet: "text-lg sm:text-xl",
} as const;

export type Emphasis = keyof typeof EMPHASIS;

const EYEBROW_CLASS =
  "mb-3 font-mono text-xs uppercase tracking-widest text-brand-accent-light";
/* Peso normal: em Poppins, o 500 em corpo de display já lê como negrito e
   engrossa a página inteira. A hierarquia vem da escala, não do peso. */
const TITLE_CLASS = "max-w-3xl text-balance font-normal tracking-tight";
/* A intro é a voz explicativa da marca — DM Mono, um corpo abaixo do título e
   em contraste recuado. */
const INTRO_CLASS = "explainer mt-5 max-w-2xl text-muted-foreground";

type SectionHeaderProps = {
  eyebrow?: string;
  title?: string;
  /** Aceita JSX para que a intro possa destacar trechos com `Highlight`. */
  intro?: ReactNode;
  emphasis: Emphasis;
};

/**
 * Cabeçalho de seção com entrada escalonada, na ordem em que se lê:
 * eyebrow → título → intro.
 *
 * É um componente próprio, e não três `<Reveal>` empilhados, porque cada
 * wrapper extra entraria entre o container e os elementos que carregam as
 * margens (`mb-3`, `mt-5`). Aqui o DOM emitido é o mesmo de antes — só os
 * elementos passam a ser `m.*`.
 *
 * Recebe apenas strings, então continua sendo importável por Server Components
 * sem arrastá-los para o cliente.
 */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  emphasis,
}: SectionHeaderProps) {
  const reduced = useReducedMotion();

  const titleClass = cn(TITLE_CLASS, EMPHASIS[emphasis]);

  // Com movimento reduzido nada é renderizado escondido: sem `initial`, o
  // cabeçalho não depende da hidratação para aparecer.
  if (reduced) {
    return (
      <div>
        {eyebrow ? <p className={EYEBROW_CLASS}>{eyebrow}</p> : null}
        {title ? <h2 className={titleClass}>{title}</h2> : null}
        {intro ? <p className={INTRO_CLASS}>{intro}</p> : null}
      </div>
    );
  }

  return (
    <m.div
      variants={staggerParent()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {eyebrow ? (
        <m.p data-reveal="" variants={riseItem} className={EYEBROW_CLASS}>
          {eyebrow}
        </m.p>
      ) : null}
      {title ? (
        <m.h2 data-reveal="" variants={riseItem} className={titleClass}>
          {title}
        </m.h2>
      ) : null}
      {intro ? (
        <m.p data-reveal="" variants={riseItem} className={INTRO_CLASS}>
          {intro}
        </m.p>
      ) : null}
    </m.div>
  );
}
