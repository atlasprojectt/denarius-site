import { LogoWordmark } from "@/components/site/logo";
import { cn } from "@/lib/cn";

/**
 * O logo do app. Em um link com nome próprio, fica fora da árvore de
 * acessibilidade.
 */
export function Brand({
  decorative = false,
  className,
}: {
  decorative?: boolean;
  className?: string;
}) {
  return (
    <span aria-hidden={decorative || undefined} className={cn("flex", className)}>
      <LogoWordmark className="h-6 w-auto shrink-0 text-ink" />
    </span>
  );
}
