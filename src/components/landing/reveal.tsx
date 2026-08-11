"use client";

import type { ReactNode } from "react";
import { m, useReducedMotion } from "motion/react";
import { REVEAL, RISE } from "./motion";

type RevealProps = {
  children: ReactNode;
  /** Atraso em segundos, para escalonar blocos irmãos dentro de uma seção. */
  delay?: number;
  /**
   * Elemento renderizado. `li` existe porque listas (`ol`/`ul`) não aceitam um
   * `div` como filho direto — animar um passo ou um item exige o elemento certo.
   */
  as?: "div" | "li";
  className?: string;
};

/**
 * Entrada discreta quando o bloco chega à tela. Usado nos blocos de conteúdo
 * das seções; o cabeçalho de cada seção tem a sua própria entrada, orquestrada
 * pelo `SectionHeader`.
 *
 * `once: true` garante que a animação não se repita a cada rolagem, e
 * `amount: 0.2` dispara assim que um quinto do bloco aparece, para que a
 * animação termine antes de o leitor chegar no texto.
 *
 * Com movimento reduzido o componente sai inteiro do caminho: devolve o
 * elemento comum, sem `initial`, para que o conteúdo nunca dependa da animação
 * para ficar visível.
 */
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const Motion = as === "li" ? m.li : m.div;

  return (
    <Motion
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: RISE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...REVEAL, delay }}
    >
      {children}
    </Motion>
  );
}
