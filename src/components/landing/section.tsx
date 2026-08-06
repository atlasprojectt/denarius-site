import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Três níveis de ênfase para o título. A página alterna entre eles para criar
 * ritmo — antes todas as seções usavam o mesmo tamanho, o que achatava a
 * hierarquia e fazia a leitura parecer uma pilha de blocos iguais.
 */
const EMPHASIS = {
  statement: "text-3xl sm:text-4xl lg:text-5xl",
  standard: "text-2xl sm:text-3xl lg:text-4xl",
  quiet: "text-xl sm:text-2xl",
} as const;

/**
 * A separação entre seções vem de contraste de superfície, não de um filete em
 * cada bloco. `raised` é usado com parcimônia para marcar os momentos que
 * carregam mais peso narrativo.
 */
const SURFACE = {
  base: "",
  raised: "border-y border-border bg-card/25",
} as const;

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  emphasis?: keyof typeof EMPHASIS;
  surface?: keyof typeof SURFACE;
  /** Coluna mais estreita para seções densas em texto. */
  narrow?: boolean;
  /** Respiro vertical maior nos momentos principais da página. */
  spacious?: boolean;
  className?: string;
};

/**
 * Seção compartilhada da landing: container, espaçamento e hierarquia de
 * cabeçalho (eyebrow → h2 → intro → conteúdo) consistentes.
 */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  emphasis = "standard",
  surface = "base",
  narrow = false,
  spacious = false,
  className,
}: SectionProps) {
  const hasHeader = Boolean(eyebrow || title || intro);

  return (
    <section id={id} className={cn(SURFACE[surface], className)}>
      <div
        className={cn(
          "mx-auto w-full px-6",
          narrow ? "max-w-3xl" : "max-w-6xl",
          spacious ? "py-20 sm:py-28 lg:py-32" : "py-16 sm:py-20 lg:py-24",
        )}
      >
        {eyebrow ? (
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand-accent-light">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2
            className={cn(
              "max-w-3xl text-balance font-medium tracking-tight",
              EMPHASIS[emphasis],
            )}
          >
            {title}
          </h2>
        ) : null}
        {intro ? (
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {intro}
          </p>
        ) : null}
        <div className={hasHeader ? "mt-12 sm:mt-14" : undefined}>{children}</div>
      </div>
    </section>
  );
}
