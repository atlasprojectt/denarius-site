import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  /** Narrower column for text-heavy sections (FAQ, problem). */
  narrow?: boolean;
};

/**
 * Shared landing-page section: consistent container, spacing, and heading
 * hierarchy (eyebrow → h2 → intro paragraph → content).
 */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  narrow = false,
}: SectionProps) {
  return (
    <section id={id} className="border-t border-border">
      <div
        className={`mx-auto w-full ${narrow ? "max-w-3xl" : "max-w-6xl"} px-6 py-16 sm:py-20`}
      >
        {eyebrow ? (
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
        ) : null}
        {intro ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            {intro}
          </p>
        ) : null}
        <div className={eyebrow || title || intro ? "mt-10" : undefined}>
          {children}
        </div>
      </div>
    </section>
  );
}
