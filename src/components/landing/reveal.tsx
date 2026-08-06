"use client";

import type { ReactNode } from "react";
import { m, useReducedMotion } from "motion/react";
import { REVEAL, RISE } from "./motion";

type RevealProps = {
  children: ReactNode;
  /** Atraso em segundos, para escalonar blocos irmãos dentro de uma seção. */
  delay?: number;
  className?: string;
};

/**
 * Entrada discreta quando o bloco chega à tela. Usado só nos momentos
 * principais da página — veredito, capacidades e lista de acesso.
 *
 * `once: true` garante que a animação não se repita a cada rolagem, e
 * `amount: 0.2` dispara assim que um quinto do bloco aparece, para que a
 * animação termine antes de o leitor chegar no texto.
 *
 * Com movimento reduzido o componente sai inteiro do caminho: devolve um `div`
 * comum, sem `initial`, para que o conteúdo nunca dependa da animação para
 * ficar visível.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: RISE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...REVEAL, delay }}
    >
      {children}
    </m.div>
  );
}
