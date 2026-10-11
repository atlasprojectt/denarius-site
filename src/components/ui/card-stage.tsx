"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Põe uma peça interativa dentro de um ShowcaseCard. A peça é desenhada na
 * largura `width` (a da tela real do produto) e ampliada ou reduzida com CSS
 * zoom para ocupar `fit` vezes a largura do card: acima de 1 ela vaza pela
 * borda e o card recorta. A posição (left/top em %) vem de `className`.
 * CSS zoom, e não transform, para o texto ser desenhado no tamanho final.
 */
export function CardStage({
  width,
  fit,
  className,
  children,
}: {
  width: number;
  fit: number;
  className?: string;
  children: ReactNode;
}) {
  const stage = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<number | null>(null);

  useEffect(() => {
    const card = stage.current?.closest("[data-showcase-card]");
    if (!card) return;
    const observer = new ResizeObserver(([entry]) => {
      setZoom((entry.contentRect.width * fit) / width);
    });
    observer.observe(card);
    return () => observer.disconnect();
  }, [width, fit]);

  return (
    <div ref={stage} className={cn("absolute", className)}>
      {/* Invisível até a primeira medida, para não piscar em 1:1. */}
      <div style={{ width, zoom: zoom ?? 1, visibility: zoom === null ? "hidden" : undefined }}>
        {children}
      </div>
    </div>
  );
}
