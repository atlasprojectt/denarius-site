"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { SHOWCASE_BLEED_VAR } from "@/components/ui/showcase-card";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const isScrolled = () => window.scrollY > 0;
const atTopOnServer = () => false;

/**
 * A casca do cabeçalho fixo. No topo da página ele não tem fundo e se mistura
 * à página; ao rolar, ganha o fundo, sem linha embaixo. O `group/header` deixa
 * os filhos reagirem ao `data-scrolled` (a largura da navbar, no SiteHeader).
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const scrolled = useSyncExternalStore(subscribe, isScrolled, atTopOnServer);
  return (
    <header
      data-scrolled={scrolled || undefined}
      style={SHOWCASE_BLEED_VAR}
      className="group/header sticky top-0 z-40 transition-[background-color] duration-200 ease-standard data-scrolled:bg-canvas motion-reduce:transition-none"
    >
      {children}
    </header>
  );
}
