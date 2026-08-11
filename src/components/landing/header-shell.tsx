"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Altura do próprio header: abaixo disso ainda se está "no topo". */
const THRESHOLD = 64;

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const getSnapshot = () => window.scrollY > THRESHOLD;

/** No servidor não há posição de rolagem: o header nasce no estado de topo. */
const getServerSnapshot = () => false;

/**
 * Casca do header com dois estados de superfície.
 *
 * No topo o header fica transparente, para não cortar o glow do hero com uma
 * borda logo na primeira tela. Assim que a página rola, ele ganha a borda e o
 * blur que o separam do conteúdo que passa por baixo.
 *
 * A barra é inset (`px-2 pt-2`) e arredondada, então ela flutua dentro do card
 * do hero enquanto a página está no topo e vira uma barra solta sobre o resto
 * do site depois que a rolagem começa.
 *
 * A troca é de classe, não de transform: só cor e borda mudam, com a duração
 * padrão do `UI.md`. A borda existe nos dois estados — no topo ela é apenas
 * transparente — então a altura nunca muda e a troca não empurra o conteúdo.
 *
 * `useSyncExternalStore` em vez de estado com efeito: a leitura acontece já na
 * primeira renderização do cliente, então quem chega por link direto para uma
 * âncora (`#confianca`) não vê o header transparente sobre o conteúdo até a
 * primeira rolagem. O snapshot é um booleano, então só há nova renderização
 * quando o estado realmente vira.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const scrolled = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          // A borda existe nos dois estados — no topo ela é só transparente —
          // para que a barra não mude de altura quando o estado vira.
          "relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 rounded-2xl border px-6 transition-colors duration-(--duration-standard) ease-(--ease-out-quart)",
          scrolled
            ? "border-foreground/5 bg-background/70 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60"
            : "border-transparent bg-transparent",
        )}
      >
        {children}
      </div>
    </header>
  );
}
