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
  // Os dois lados: a largura de um card que avança para a esquerda até a de
  // um que avança para a direita (o vídeo do hero e a navbar no topo).
  both: "lg:-mx-(--showcase-bleed)",
} as const;

/** O avanço como variável CSS, para quem não é card (a navbar) usar a mesma medida. */
export const SHOWCASE_BLEED_VAR = { "--showcase-bleed": BLEED } as CSSProperties;

export type BleedSide = keyof typeof BLEED_SIDE;

/** Classe e estilo para um bloco crescer para a margem como os cards (o
 *  carrossel usa o mesmo avanço, para os cards dele terem o mesmo tamanho). */
export function showcaseBleed(side: BleedSide | undefined): { className?: string; style: CSSProperties } {
  return {
    className: side && BLEED_SIDE[side],
    style: SHOWCASE_BLEED_VAR,
  };
}

/** A peça estática (uma imagem) cresce um pouco sob o mouse, para o card não
 *  ficar parado; a borda do card recorta o que passar dela. */
export const SHOWCASE_HOVER =
  "transition-transform duration-500 ease-(--ease-standard) hover:scale-[1.03] motion-reduce:transition-none";

/**
 * O card ilustrativo de uma feature. Têm o mesmo tamanho (4:3, salvo peça muito larga), um fundo
 * do Denarius e a peça do produto por cima, recortada pelas bordas do card,
 * para o foco ficar na informação e não na moldura. A peça fica sempre no
 * tema escuro (scheme-dark), como as imagens do produto.
 */
export function ShowcaseCard({
  background,
  bleed,
  aspect = "aspect-[4/3]",
  className,
  children,
}: {
  background: StaticImageData;
  /** O lado da página para o qual o card cresce, além da coluna. */
  bleed?: BleedSide;
  /**
   * A proporção do card (4:3 em todos, por padrão). Uma peça muito larga, como
   * a lista de times, pede um card mais baixo. Prop, e não className, porque
   * o cn só junta classes e não resolve conflito entre duas proporções.
   */
  aspect?: string;
  className?: string;
  /** A peça: um <CardStage> (interativa) ou uma <Image> posicionada. */
  children: ReactNode;
}) {
  const grow = showcaseBleed(bleed);
  return (
    <figure
      data-showcase-card
      className={cn(
        "denarius scheme-dark relative w-full overflow-hidden rounded-lg",
        aspect,
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
