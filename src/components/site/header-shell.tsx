"use client";

import { useSyncExternalStore, type ReactNode } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const isScrolled = () => window.scrollY > 0;
const atTopOnServer = () => false;

/**
 * A casca do cabeçalho fixo. No topo da página ele não tem fundo nem linha e
 * se mistura à página; ao rolar, ganha o fundo e a linha de baixo.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const scrolled = useSyncExternalStore(subscribe, isScrolled, atTopOnServer);
  return (
    <header
      data-scrolled={scrolled || undefined}
      className="sticky top-0 z-40 border-b border-transparent transition-[background-color,border-color] duration-200 ease-standard data-scrolled:border-hairline data-scrolled:bg-canvas motion-reduce:transition-none"
    >
      {children}
    </header>
  );
}
