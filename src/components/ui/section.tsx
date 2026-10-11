import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[76rem] px-4 md:px-8 xl:px-10", className)}>
      {children}
    </div>
  );
}

/**
 * Seção da landing. No canvas, uma régua fina a separa da anterior, como as
 * linhas de um livro-razão; a faixa "rail" muda o tom da superfície inteira.
 * A faixa marca os momentos em que a página para de listar e argumenta: o
 * problema com números, a saída (a Simulação), as garantias e o "como
 * começar". Nunca duas seguidas, nem colada no footer, que também é rail.
 */
export function Section({
  id,
  labelledBy,
  tone = "canvas",
  size = "default",
  className,
  children,
}: {
  id: string;
  labelledBy: string;
  tone?: "canvas" | "rail";
  /** "compact" para as seções das páginas internas, que leem em sequência. */
  size?: "default" | "compact";
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "scroll-mt-14",
        size === "default"
          ? "py-[clamp(4.5rem,3rem+6vw,8.5rem)]"
          : "py-[clamp(3.5rem,2.5rem+4vw,6.5rem)]",
        tone === "rail" ? "band-rail" : "border-t border-hairline",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  id,
  title,
  lead,
  className,
}: {
  id: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex max-w-[46rem] flex-col gap-4 md:gap-5", className)}>
      <h2 id={id} className="type-display-section text-ink">
        {title}
      </h2>
      {lead ? <p className="type-narrative max-w-[58ch] text-graphite">{lead}</p> : null}
    </div>
  );
}
