import { cn } from "@/lib/cn";
import type { Source } from "@/lib/links";

/** A fonte de um número, sempre visível ao lado dele. */
export function SourceLink({ source, className }: { source: Source; className?: string }) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "type-caption link-underline w-fit text-ash hover:text-ink",
        className,
      )}
    >
      Fonte: {source.label} · {source.detail}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}
