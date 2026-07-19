import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
};

/** Shared CTA anchor styled as a button. One primary + one secondary variant only. */
export function CtaLink({ href, variant = "primary", children }: CtaLinkProps) {
  const base =
    "inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current";
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
      : "border border-black/15 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
