import type { ReactNode } from "react";

type FeatureBlockProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  points: string[];
  preview: ReactNode;
  /** When true, the preview sits on the left on desktop (alternating rhythm). */
  reverse?: boolean;
};

/** Large alternating section: copy on one side, a product preview on the other. */
export function FeatureBlock({
  id,
  eyebrow,
  title,
  description,
  points,
  preview,
  reverse = false,
}: FeatureBlockProps) {
  return (
    <section id={id} className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2">
        <div className={reverse ? "lg:order-2" : undefined}>
          {eyebrow ? (
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {eyebrow}
            </p>
          ) : null}
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h3>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className={reverse ? "lg:order-1" : undefined}>{preview}</div>
      </div>
    </section>
  );
}
