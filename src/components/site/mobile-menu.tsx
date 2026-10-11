"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/components/site/nav-links";
import { cn } from "@/lib/cn";
import type { SiteLink } from "@/lib/links";

const MENU_ID = "menu-paginas";

export type MenuGroup = {
  title?: string;
  links: readonly SiteLink[];
  /** Para esconder um grupo que o cabeçalho já mostra em telas maiores. */
  className?: string;
};

/**
 * Menu do site abaixo de lg, num popover nativo: fecha com Esc, com um toque
 * fora e ao navegar, inclusive para uma seção da mesma página.
 */
export function MobileMenu({ groups }: { groups: MenuGroup[] }) {
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  function close() {
    const menu = menuRef.current;
    if (menu?.matches(":popover-open")) menu.hidePopover();
  }

  useEffect(close, [pathname]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        popoverTarget={MENU_ID}
        className="type-body-strong inline-flex h-11 items-center rounded-full px-4 text-ink ring-1 ring-inset ring-hairline transition-colors duration-150 ease-standard hover:bg-hover"
      >
        Menu
      </button>
      <div
        ref={menuRef}
        id={MENU_ID}
        popover="auto"
        className="fixed inset-x-4 top-[4.5rem] bottom-auto m-0 max-h-[calc(100dvh-6rem)] w-auto overflow-y-auto sm:left-auto sm:w-80 rounded-md border-0 bg-elevated p-1 text-ink shadow-lg ring-1 ring-ink/10"
      >
        <nav aria-label="Site" className="flex flex-col gap-1">
          {groups.map((group, index) => (
            <div
              key={group.title ?? index}
              className={cn(index > 0 && "border-t border-hairline pt-1", group.className)}
            >
              {group.title ? (
                <p className="type-label-caps px-3 pt-3 pb-1 text-ash">{group.title}</p>
              ) : null}
              <NavLinks links={group.links} variant="menu" onNavigate={close} />
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
