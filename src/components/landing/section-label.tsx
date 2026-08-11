import type { ReactNode } from "react";

/**
 * Small section label. Sentence case in a lightly rounded pill with a minimal
 * background — never uppercase, which reads as shouting at this size.
 */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}
