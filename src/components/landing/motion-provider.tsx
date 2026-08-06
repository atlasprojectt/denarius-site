"use client";

import type { ReactNode } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

/**
 * Fronteira única de client component para todo o Motion da página.
 *
 * `reducedMotion="user"` resolve `prefers-reduced-motion` de uma vez para todas
 * as animações: o Motion passa a ignorar transform e layout, mantendo apenas
 * opacidade. Nada fica preso invisível.
 *
 * `LazyMotion` com `domAnimation` carrega só o subconjunto de recursos que a
 * página usa, e `strict` faz o build falhar se alguém usar `motion.*` em vez de
 * `m.*` — o que puxaria o pacote inteiro sem querer.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
