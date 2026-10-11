import type { ReactNode } from "react";

import { cn } from "@/denarius/lib/utils";

/** Text that transitions in each time `value` changes: it fades, unblurs and
 *  rises into place (tw-animate-css). A transition, not a count — the text is
 *  always one of the real values. Keyed by `value`, so a new value remounts. */
export function TextSwap({
  value,
  children,
  className,
}: {
  value: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <span
      key={value}
      className={cn(
        "inline-block animate-in fade-in blur-in-4 slide-in-from-bottom-1 duration-500 ease-out motion-reduce:animate-none",
        className,
      )}
    >
      {children ?? value}
    </span>
  );
}
