"use client";

import type { ReactNode } from "react";
import { m } from "motion/react";
import type { HTMLMotionProps, Variants } from "motion/react";
import { ArrowRightIcon } from "lucide-react";
import { SMALL } from "./motion";
import "@/components/GlareHover.css";

/**
 * O `rest` é tipado pelas props do `motion`, e não pelas do DOM: as duas
 * declaram `onAnimationStart` com assinaturas incompatíveis, e é o `motion` que
 * recebe o spread. Cobre o que o `Dialog.Trigger` injeta — `onClick`, `ref`,
 * `id`, `type` e os `aria-*`/`data-*`.
 */
type CtaLinkProps = {
  /** Sem `href` o componente vira `button` — é o caso quando abre o modal. */
  href?: string;
  variant?: "primary" | "secondary";
  /** O raio vem daqui, não do chamador: é a regra da marca, não uma escolha. */
  size?: "sm" | "lg";
  /** Seta que desloca no hover (UI.md: corpo estável, seta se move). */
  arrow?: boolean;
  /** Brilho que cruza o botão no hover. */
  glare?: boolean;
  children: ReactNode;
} & Omit<
  HTMLMotionProps<"button">,
  | "children"
  | "className"
  | "variants"
  | "initial"
  | "whileHover"
  | "whileFocus"
  | "whileTap"
  | "transition"
>;

const BASE =
  "group inline-flex shrink-0 items-center justify-center font-medium whitespace-nowrap transition-colors duration-(--duration-standard) ease-(--ease-out-quart) focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

/**
 * A escala define o raio: botão pequeno é pílula, botão grande usa o raio
 * convencional do sistema. É a regra do moodboard, e o motivo dela é ótico —
 * em altura baixa a pílula lê como etiqueta; em altura cheia, como bolha.
 */
const SIZES = {
  sm: "h-9 gap-1.5 rounded-full px-4 text-[0.8125rem]",
  lg: "h-11 gap-2 rounded-lg px-5 text-sm",
} as const;

const VARIANTS = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  /* Preenchido, não contornado: no moodboard o botão secundário tem corpo. */
  secondary:
    "bg-secondary text-foreground hover:bg-secondary-hover",
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
 *
 * As props restantes são repassadas ao elemento para que ele possa ser usado
 * como gatilho do `Dialog` do Base UI, que injeta `onClick`, `aria-*` e a ref.
 */
export function CtaLink({
  href,
  variant = "primary",
  size = "lg",
  arrow = false,
  glare = false,
  children,
  ...rest
}: CtaLinkProps) {
  const motionProps = {
    className: `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${glare ? "glare-overlay" : ""}`,
    variants: body(variant === "primary"),
    initial: "rest",
    whileHover: "hover",
    whileFocus: "hover",
    whileTap: "tap",
    transition: SMALL,
  } as const;

  const content = (
    <>
      {children}
      {arrow ? (
        <m.span
          aria-hidden="true"
          variants={arrowMotion}
          transition={SMALL}
          className="inline-flex"
        >
          <ArrowRightIcon
            className={size === "sm" ? "size-3.5 shrink-0" : "size-4 shrink-0"}
          />
        </m.span>
      ) : null}
    </>
  );

  if (href === undefined) {
    return (
      <m.button type="button" {...motionProps} {...rest}>
        {content}
      </m.button>
    );
  }

  return (
    <m.a href={href} {...motionProps} {...(rest as HTMLMotionProps<"a">)}>
      {content}
    </m.a>
  );
}
