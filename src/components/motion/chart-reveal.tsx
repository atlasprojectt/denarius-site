"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Marca o gráfico com `data-inview` quando ele chega à tela (uma vez só). A
 * animação em si é CSS, em `[data-chart-reveal]` no globals.css: a linha se
 * desenha da esquerda para a direita e cada ponto, com o seu valor, aparece
 * quando a linha chega nele. Sem JS ou com movimento reduzido, o gráfico já
 * aparece pronto (o CSS só esconde sob `data-js` e movimento permitido).
 */
export function ChartReveal({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.setAttribute("data-inview", "");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-chart-reveal="" className={className}>
      {children}
    </div>
  );
}
