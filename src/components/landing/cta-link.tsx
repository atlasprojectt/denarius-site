import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  variant?: "primary" | "secondary";
  /** Trailing arrow that shifts on hover (UI.md: body stable, arrow moves). */
  arrow?: boolean;
  children: ReactNode;
};

const BASE =
  "group inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors duration-(--duration-standard) ease-(--ease-out-quart) focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

const VARIANTS = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary:
    "border border-border text-foreground hover:bg-accent hover:text-accent-foreground",
} as const;

/** Shared CTA anchor styled as a button, using the Denarius brand tokens. */
export function CtaLink({
  href,
  variant = "primary",
  arrow = false,
  children,
}: CtaLinkProps) {
  return (
    <a href={href} className={`${BASE} ${VARIANTS[variant]}`}>
      {children}
      {arrow ? (
        <span
          aria-hidden="true"
          className="transition-transform duration-(--duration-standard) ease-(--ease-out-quart) group-hover:translate-x-0.5 motion-reduce:transform-none"
        >
          →
        </span>
      ) : null}
    </a>
  );
}
