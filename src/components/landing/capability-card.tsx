import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * O card de capacidade: uma afirmação sobre o produto ao lado da prova visual
 * que a sustenta.
 *
 * Os três cards da seção são deliberadamente idênticos em superfície, medida,
 * proporção e espaçamento. O que varia é só o lado do visual, que alterna a
 * cada card — é ritmo suficiente. Superfícies de cores diferentes faziam a
 * pilha ler como três componentes de origens diferentes, e não como um sistema.
 *
 * Não há sobreposição nem transbordo. O efeito do moodboard é outro, e mais
 * simples: o visual é um pouco menor que o card, e o que aparece em volta dele
 * é a própria superfície do card fazendo as vezes de borda. O espaçamento
 * interno é contido de propósito — é a finura dessa moldura que cede área para
 * o recorte e faz a imagem ser o espaço dominante do card.
 *
 * O visual entra pela prop `media` (hoje um `AssetSlot`, amanhã um `Image`) e
 * fica em fluxo: é a proporção dele que manda na altura, então trocar o
 * placeholder pelo mock real não mexe em mais nada.
 */
type CapabilityCardProps = {
  /** Lado do visual. Alternar entre os cards é o que cria o ritmo da seção. */
  mediaSide?: "left" | "right";
  /** Rótulo curto, ex.: "01 · Governar". */
  eyebrow: string;
  title: string;
  description: string;
  media: ReactNode;
  /** Ação opcional. Só use quando houver um destino real. */
  action?: ReactNode;
  className?: string;
};

export function CapabilityCard({
  mediaSide = "right",
  eyebrow,
  title,
  description,
  media,
  action,
  className,
}: CapabilityCardProps) {
  const mediaFirst = mediaSide === "left";

  return (
    <article
      className={cn(
        "rounded-3xl border border-border bg-background p-4 sm:p-5 lg:p-6",
        className,
      )}
    >
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className={cn("max-w-md", mediaFirst && "lg:order-2")}>
          <p className="font-mono text-xs tracking-widest text-brand-accent-light">
            {eyebrow}
          </p>
          <h3 className="mt-4 text-xl tracking-tight text-balance sm:text-2xl">
            {title}
          </h3>
          <p className="explainer mt-4 text-muted-foreground">{description}</p>
          {action ? <div className="mt-7">{action}</div> : null}
        </div>

        <div className={cn(mediaFirst && "lg:order-1")}>{media}</div>
      </div>
    </article>
  );
}
