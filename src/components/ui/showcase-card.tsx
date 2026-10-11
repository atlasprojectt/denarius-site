import Image, { type StaticImageData } from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Quanto o card avança para a margem da página, além da sua coluna: a margem
 * ao lado do container (76rem, com 2.5rem de respiro interno) menos 3rem, que
 * guardam ~2rem até a borda da tela mais a barra de rolagem. Até 12rem em
 * telas largas; abaixo de ~1250px vira zero.
 */
const BLEED = "max(0px, min(12rem, calc((100vw - 76rem) / 2 - 0.5rem)))";

const BLEED_SIDE = {
  left: "lg:-ml-(--showcase-bleed) lg:w-[calc(100%+var(--showcase-bleed))]",
  right: "lg:w-[calc(100%+var(--showcase-bleed))]",
} as const;

export type BleedSide = keyof typeof BLEED_SIDE;

/** Classe e estilo para um bloco crescer para a margem como os cards (o
 *  carrossel usa o mesmo avanço, para os cards dele terem o mesmo tamanho). */
export function showcaseBleed(side: BleedSide | undefined): { className?: string; style: CSSProperties } {
  return {
    className: side && BLEED_SIDE[side],
    style: { "--showcase-bleed": BLEED } as CSSProperties,
  };
}

/** A peça estática (uma imagem) cresce um pouco sob o mouse, para o card não
 *  ficar parado; a borda do card recorta o que passar dela. */
export const SHOWCASE_HOVER =
  "transition-transform duration-500 ease-(--ease-standard) hover:scale-[1.03] motion-reduce:transition-none";

/**
 * O card ilustrativo de uma feature. Todos têm o mesmo tamanho (4:3), um fundo
 * do Denarius e a peça do produto por cima, recortada pelas bordas do card,
 * para o foco ficar na informação e não na moldura. A peça fica sempre no
 * tema escuro (scheme-dark), como as imagens do produto.
 */
export function ShowcaseCard({
  background,
  bleed,
  className,
  children,
}: {
  background: StaticImageData;
  /** O lado da página para o qual o card cresce, além da coluna. */
  bleed?: BleedSide;
  className?: string;
  /** A peça: um <CardStage> (interativa) ou uma <Image> posicionada. */
  children: ReactNode;
}) {
  const grow = showcaseBleed(bleed);
  return (
    <figure
      data-showcase-card
      className={cn(
        "denarius scheme-dark relative aspect-[4/3] w-full overflow-hidden rounded-lg",
        grow.className,
        className,
      )}
      style={grow.style}
    >
      <Image src={background} alt="" fill sizes="(min-width: 1024px) 48rem, 100vw" className="object-cover" />
      {children}
    </figure>
  );
}
