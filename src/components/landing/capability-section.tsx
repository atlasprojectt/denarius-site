import { AssetPlaceholder } from "./asset-placeholder";

export type Capability = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  /** Stable id for the reserved asset slot. */
  asset: string;
  /** When true, the asset sits on the left on desktop. */
  reverse?: boolean;
};

/**
 * Reusable wide block for the three strategic capabilities. Text always
 * precedes the asset in the DOM, so mobile reads content first; `reverse`
 * only swaps the desktop columns.
 */
export function CapabilitySection({
  eyebrow,
  title,
  description,
  points,
  asset,
  reverse = false,
}: Capability) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
        {/* min-w-0: keeps the asset's intrinsic size from widening the track. */}
        <div className={`min-w-0 ${reverse ? "lg:order-2" : ""}`}>
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            {eyebrow}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {description}
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>
          <AssetPlaceholder id={asset} aspectRatio="4 / 3" minHeight="18rem" />
        </div>
      </div>
    </section>
  );
}
