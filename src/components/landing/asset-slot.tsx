import { cn } from "@/lib/utils";

type AssetSlotProps = {
  id: string;
  ratio: string;
  brief: string;
  dimensions: string;
  /** Mantém a legenda compacta dentro de cards menores. */
  bare?: boolean;
  className?: string;
};

/**
 * Reserva a proporção do asset final sem inventar uma interface. Mesmo no modo
 * compacto, brief e dimensões ficam visíveis para orientar a substituição.
 */
export function AssetSlot({
  id,
  ratio,
  brief,
  dimensions,
  bare = false,
  className,
}: AssetSlotProps) {
  return (
    <div
      data-asset={id}
      role="img"
      aria-label={`Imagem futura: ${brief} Tamanho recomendado: ${dimensions}.`}
      style={{ aspectRatio: ratio }}
      className={cn(
        "flex w-full flex-col justify-end border border-dashed border-(--frame-line) bg-card/30",
        bare
          ? "items-center justify-center rounded-[10px] p-4 text-center"
          : "items-start gap-2 rounded-2xl p-5",
        className,
      )}
    >
      <p
        aria-hidden="true"
        className={cn(
          "font-mono text-muted-foreground",
          bare
            ? "max-w-sm text-[0.6875rem] leading-5"
            : "max-w-md text-xs leading-5 sm:text-[0.9375rem] sm:leading-7",
        )}
      >
        {brief}
      </p>
      <p
        aria-hidden="true"
        className={cn(
          "font-mono text-brand-accent-light",
          bare ? "mt-1 text-[0.6875rem]" : "text-xs",
        )}
      >
        {dimensions}
      </p>
    </div>
  );
}
