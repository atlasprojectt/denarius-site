"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SiteLink } from "@/lib/links";

const STYLES = {
  header:
    "type-ui flex h-8 items-center rounded-full px-3 text-graphite transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink aria-[current=page]:font-medium aria-[current=page]:text-ink",
  menu: "type-title flex min-h-11 items-center rounded-sm px-3 text-graphite transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink aria-[current=page]:bg-hover aria-[current=page]:text-ink",
};

/** Links de página com a página atual marcada por aria-current. */
export function NavLinks({
  links,
  variant,
  className,
  onNavigate,
}: {
  links: readonly SiteLink[];
  variant: keyof typeof STYLES;
  className?: string;
  /** Chamado no clique; o menu do celular usa para fechar em links da mesma página. */
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onNavigate}
            aria-current={pathname === link.href ? "page" : undefined}
            className={STYLES[variant]}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
