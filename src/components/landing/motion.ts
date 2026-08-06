import type { Transition, Variants } from "motion/react";

/**
 * Tokens de movimento compartilhados, espelhando os do `globals.css` para que
 * CSS e Motion não tenham dois ritmos diferentes.
 *
 * O `UI.md` define: rápido 120ms, padrão 160ms, teto de 180ms para
 * microinterações, curva `cubic-bezier(0.22, 1, 0.36, 1)`.
 */
export const EASE_OUT_QUART = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.12,
  standard: 0.16,
  /** Teto do UI.md para interações pequenas. */
  small: 0.18,
  /** Entradas de seção — não são "small interactions", então podem respirar. */
  reveal: 0.4,
} as const;

/** Microinteração: hover, tap, troca de estado curta. */
export const SMALL: Transition = {
  duration: DURATION.small,
  ease: EASE_OUT_QUART,
};

/** Entrada de seção ou de conteúdo maior. */
export const REVEAL: Transition = {
  duration: DURATION.reveal,
  ease: EASE_OUT_QUART,
};

/** Deslocamento de entrada padrão, em px. Discreto de propósito. */
export const RISE = 12;

/**
 * Entrada escalonada: o pai orquestra, os filhos usam `riseItem`.
 * Sem `opacity` no pai, para que ele não segure a pintura dos filhos.
 */
export const staggerParent = (stagger = 0.07, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const riseItem: Variants = {
  hidden: { opacity: 0, y: RISE },
  visible: { opacity: 1, y: 0, transition: REVEAL },
};

/**
 * Com movimento reduzido, o certo é **não renderizar o estado escondido**, e
 * não confiar na biblioteca para removê-lo depois.
 *
 * O `initial` é aplicado já na renderização do servidor (`opacity: 0`), então
 * qualquer motivo para a animação não rodar — preferência do usuário, JS lento,
 * JS quebrado — deixaria o conteúdo invisível. Estas funções devolvem um objeto
 * vazio nesse caso, e o elemento fica no seu estado natural: visível.
 */
export const motionOff = {} as const;

