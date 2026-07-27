import type { CSSProperties } from "react";

type AssetPlaceholderProps = {
  /** Stable identifier of the future asset this slot is reserved for. */
  id: string;
  /** CSS aspect-ratio, e.g. "16 / 9". */
  aspectRatio?: string;
  /** CSS min-height, e.g. "20rem". */
  minHeight?: string;
  className?: string;
  ariaLabel?: string;
};

/**
 * Empty slot reserved for a future asset. Intentionally blank — only a
 * minimal dashed outline over a faint card tint so the reserved area is
 * perceivable during development. No text, icons, skeletons, or mockups.
 */
export function AssetPlaceholder({
  id,
  aspectRatio,
  minHeight,
  className = "",
  ariaLabel,
}: AssetPlaceholderProps) {
  const style: CSSProperties = {};
  if (aspectRatio) style.aspectRatio = aspectRatio;
  if (minHeight) style.minHeight = minHeight;

  return (
    <div
      data-asset={id}
      role="img"
      aria-label={ariaLabel ?? `Espaço reservado para um asset futuro (${id}).`}
      style={style}
      className={`w-full rounded-xl border border-dashed border-border bg-card/40 ${className}`}
    />
  );
}
