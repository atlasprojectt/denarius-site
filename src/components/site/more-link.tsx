import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/ui/state-icons";
import { cn } from "@/lib/cn";

/** "Saiba mais": leva o detalhe de uma seção para a página dele. */
export function MoreLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "type-lead link-underline group inline-flex w-fit items-center gap-2 text-ink",
        className,
      )}
    >
      {children}
      <ArrowRightIcon className="size-4 shrink-0 transition-transform duration-150 ease-standard group-hover:translate-x-0.5 motion-reduce:transition-none" />
    </Link>
  );
}
