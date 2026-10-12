"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type PointerEvent } from "react";
import { FEATURE_ICONS } from "@/components/ui/feature-icons";
import { ArrowRightIcon, ChevronDownIcon } from "@/components/ui/state-icons";
import { FEATURE_IDS, FEATURES, PAGES } from "@/lib/links";

const PANEL_ID = "menu-produto";
/** Folga para o mouse cruzar o vão entre o botão e o painel sem fechá-lo. */
const CLOSE_DELAY_MS = 200;
const PRODUCT_PATHS: string[] = [PAGES.howItWorks.href, PAGES.simulation.href];

/**
 * O menu Produto da barra: as features, cada uma levando ao seu detalhe, e o
 * caminho para "Como funciona". Popover nativo: fecha com Esc, com um clique
 * fora e ao navegar. Com o mouse, abre no hover e fecha ao sair do botão e do
 * painel; no toque e no teclado, o botão alterna o painel.
 */
export function ProductMenu() {
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isProductPage = PRODUCT_PATHS.includes(pathname);
  const hovering = useRef(false);
  const closeTimer = useRef<number | undefined>(undefined);

  function close() {
    const panel = panelRef.current;
    if (panel?.matches(":popover-open")) panel.hidePopover();
  }

  useEffect(close, [pathname]);
  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  function onPointerEnter(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    hovering.current = true;
    window.clearTimeout(closeTimer.current);
    const panel = panelRef.current;
    if (panel && !panel.matches(":popover-open")) panel.showPopover();
  }

  function onPointerLeave(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    hovering.current = false;
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(close, CLOSE_DELAY_MS);
  }

  return (
    // O painel é filho deste bloco no DOM (mesmo na camada do topo), então
    // passar do botão para o painel não conta como sair.
    <div className="group" onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}>
      <button
        type="button"
        popoverTarget={PANEL_ID}
        // Com o mouse em cima o painel já abriu: o clique não pode fechá-lo.
        onClick={(event) => {
          if (hovering.current) event.preventDefault();
        }}
        data-active={isProductPage || undefined}
        className="type-ui flex h-8 items-center gap-1 rounded-full pr-2.5 pl-3 text-graphite transition-colors duration-150 ease-standard group-hover:bg-hover group-hover:text-ink group-has-[:popover-open]:bg-hover group-has-[:popover-open]:text-ink data-active:font-medium data-active:text-ink"
      >
        {/* Parado, só o texto, centrado no espaço do botão (deslocado metade
            da seta + gap: 9px). No hover, com o painel aberto ou no foco do
            teclado, o texto desliza para a esquerda e a seta entra à direita,
            dentro do pill. A largura do botão não muda, então os vizinhos não
            andam. No toque não há hover: texto e seta ficam sempre no lugar. */}
        <span className="translate-x-[9px] transition-[translate] duration-200 ease-standard group-hover:translate-x-0 group-has-[:popover-open]:translate-x-0 group-has-[:focus-visible]:translate-x-0 pointer-coarse:translate-x-0 motion-reduce:transition-none">
          Produto
        </span>
        <ChevronDownIcon className="size-3.5 opacity-0 transition-[opacity,rotate] duration-200 ease-standard group-hover:opacity-100 group-has-[:popover-open]:rotate-180 group-has-[:popover-open]:opacity-100 group-has-[:focus-visible]:opacity-100 pointer-coarse:opacity-100 motion-reduce:transition-none" />
      </button>

      <div
        ref={panelRef}
        id={PANEL_ID}
        popover="auto"
        className="fixed top-16 right-auto bottom-auto left-1/2 m-0 h-fit w-[min(34rem,calc(100vw-2rem))] -translate-x-1/2 rounded-md border-0 bg-elevated p-1.5 text-ink shadow-lg ring-1 ring-ink/10"
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
