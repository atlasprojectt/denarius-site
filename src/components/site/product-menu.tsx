"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { FEATURE_ICONS } from "@/components/ui/feature-icons";
import { ArrowRightIcon, ChevronDownIcon } from "@/components/ui/state-icons";
import { FEATURE_IDS, FEATURES, PAGES } from "@/lib/links";

const PANEL_ID = "menu-produto";
const PRODUCT_PATHS: string[] = [PAGES.howItWorks.href, PAGES.simulation.href];

/**
 * O menu Produto da barra: as features, cada uma levando ao seu detalhe, e o
 * caminho para "Como funciona". Popover nativo: fecha com Esc, com um clique
 * fora e ao navegar.
 */
export function ProductMenu() {
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isProductPage = PRODUCT_PATHS.includes(pathname);

  function close() {
    const panel = panelRef.current;
    if (panel?.matches(":popover-open")) panel.hidePopover();
  }

  useEffect(close, [pathname]);

  return (
    <div className="group">
      <button
        type="button"
        popoverTarget={PANEL_ID}
        data-active={isProductPage || undefined}
        className="type-ui flex h-8 items-center gap-1 rounded-full pr-2.5 pl-3 text-graphite transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink data-active:font-medium data-active:text-ink"
      >
        Produto
        <ChevronDownIcon className="size-3.5 transition-transform duration-150 ease-standard group-has-[:popover-open]:rotate-180 motion-reduce:transition-none" />
      </button>

      <div
        ref={panelRef}
        id={PANEL_ID}
        popover="auto"
        className="fixed top-[4.5rem] right-auto bottom-auto left-1/2 m-0 h-fit w-[min(34rem,calc(100vw-2rem))] -translate-x-1/2 rounded-md border-0 bg-elevated p-1.5 text-ink shadow-lg ring-1 ring-ink/10"
      >
        <nav aria-label="Produto">
          <ul className="flex flex-col gap-0.5">
            {FEATURE_IDS.map((id) => {
              const feature = FEATURES[id];
              const Icon = FEATURE_ICONS[id];
              return (
                <li key={id}>
                  <Link
                    href={feature.href}
                    onClick={close}
                    className="flex gap-3 rounded-sm px-3 py-2.5 transition-colors duration-150 ease-standard hover:bg-hover"
                  >
                    <Icon className="mt-0.5 size-4 shrink-0 text-mist" />
                    <span className="flex flex-col gap-0.5">
                      <span className="type-body-strong text-ink">{feature.label}</span>
                      <span className="type-caption text-ash">{feature.summary}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-1.5 border-t border-hairline px-3 pt-2.5 pb-1.5">
            <Link
              href={PAGES.howItWorks.href}
              onClick={close}
              className="type-ui-strong link-underline group/link inline-flex items-center gap-1.5 text-ink"
            >
              Como funciona: os três passos e o produto inteiro
              <ArrowRightIcon className="size-3.5 transition-transform duration-150 ease-standard group-hover/link:translate-x-0.5 motion-reduce:transition-none" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
