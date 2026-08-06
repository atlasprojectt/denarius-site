"use client";

import type { ReactNode } from "react";
import { m } from "motion/react";
import type { Variants } from "motion/react";
import { SMALL } from "./motion";

type CtaLinkProps = {
  href: string;
  variant?: "primary" | "secondary";
  /** Seta que desloca no hover (UI.md: corpo estável, seta se move). */
  arrow?: boolean;
  children: ReactNode;
};

const BASE =
  "group inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors duration-(--duration-standard) ease-(--ease-out-quart) focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

const VARIANTS = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary:
    "border border-border text-foreground hover:bg-accent hover:text-accent-foreground",
} as const;

/**
 * O corpo do botão. Só o primário sobe, e no máximo 1px; o `tap` devolve à
 * posição original, como o UI.md pede. Os nomes de variante são o que permite a
 * seta reagir ao hover do pai.
 */
const body = (lift: boolean): Variants => ({
  rest: { y: 0 },
  hover: { y: lift ? -1 : 0 },
  tap: { y: 0 },
});

/** A seta desloca 2px — o único elemento que se move em ambos os variantes. */
const arrowMotion: Variants = {
  rest: { x: 0 },
  hover: { x: 2 },
  tap: { x: 2 },
};

/**
 * CTA compartilhado. O movimento segue os limites do UI.md: corpo estável,
 * elevação de no máximo 1px, seta deslocando 2px, sem escala e sem glow.
 */
export function CtaLink({
  href,
  variant = "primary",
  arrow = false,
  children,
}: CtaLinkProps) {
  return (
    <m.a
      href={href}
      className={`${BASE} ${VARIANTS[variant]}`}
      variants={body(variant === "primary")}
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      whileTap="tap"
      transition={SMALL}
    >
      {children}
      {arrow ? (
        <m.span
          aria-hidden="true"
          variants={arrowMotion}
          transition={SMALL}
          className="inline-block"
        >
          →
        </m.span>
      ) : null}
    </m.a>
  );
}
