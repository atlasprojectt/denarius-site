"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { showcaseBleed, type BleedSide } from "./showcase-card";

/**
 * Cards ilustrativos que se alternam sozinhos, com uma barra de progresso
 * segmentada embaixo (um segmento por card). Passar o mouse, focar dentro ou
 * abrir um painel da peça (o "Ver modelos" da composição) pausa a troca; um
 * clique no segmento pula para o card. Cada card recomeça quando entra, então
 * uma animação (a das chaves) sempre começa do início, e entra num fade por
 * cima do que sai; o que sai fica inteiro embaixo até ser coberto, sem o fundo
 * da página aparecer no meio da troca.
 */

const copy = {
  carousel: "carrossel",
  slide: "slide",
  position: (index: number, total: number, label: string) => `${index} de ${total}: ${label}`,
  goTo: (label: string) => `Mostrar ${label}`,
};

const INTERVAL_MS = 5000;

/** Painéis das peças que abrem fora do carrossel e devem segurá-lo. */
const OPEN_PANEL = '[data-slot="sheet-content"], [data-slot="select-content"]';

export type ShowcaseSlide = { key: string; label: string; content: ReactNode };

/** O card na frente, o que ficou embaixo dele e quantas vezes cada um entrou
 *  (a contagem muda a key e remonta o card do início). */
type View = { active: number; previous: number | null; visits: number[] };

function enter(view: View, index: number): View {
  return {
    active: index,
    previous: view.active,
    visits: view.visits.map((count, i) => (i === index ? count + 1 : count)),
  };
}

export function ShowcaseCarousel({
  label,
  slides,
  bleed,
  className,
  intervalMs = INTERVAL_MS,
}: {
  label: string;
  /** Cada um é um ShowcaseCard (sem bleed: o carrossel cresce por eles). */
  slides: ShowcaseSlide[];
  bleed?: BleedSide;
  className?: string;
  intervalMs?: number;
}) {
  const [view, setView] = useState<View>(() => ({ active: 0, previous: null, visits: slides.map(() => 0) }));
  const { active, previous, visits } = view;
  const elapsed = useRef(0);
  const hovered = useRef(false);
  const focused = useRef(false);
  const bars = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let last = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const held = hovered.current || focused.current || document.querySelector(OPEN_PANEL) !== null;
      if (!held) elapsed.current += now - last;
      last = now;
      const progress = Math.min(1, elapsed.current / intervalMs);
      bars.current.forEach((bar, index) => {
        if (bar) bar.style.transform = `scaleX(${index < active ? 1 : index === active ? progress : 0})`;
      });
      if (progress >= 1) {
        elapsed.current = 0;
        setView((current) => enter(current, (current.active + 1) % slides.length));
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, intervalMs, slides.length]);

  function show(index: number) {
    if (index === active) return;
    elapsed.current = 0;
    setView((current) => enter(current, index));
  }

  const grow = showcaseBleed(bleed);

  return (
    <div
      role="region"
      aria-roledescription={copy.carousel}
      aria-label={label}
      onPointerEnter={() => (hovered.current = true)}
      onPointerLeave={() => (hovered.current = false)}
      onFocus={() => (focused.current = true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) focused.current = false;
      }}
      className={cn("flex flex-col gap-4", grow.className, className)}
      style={grow.style}
    >
      <div className="grid">
        {slides.map((slide, index) => (
          <div
            key={`${slide.key}-${visits[index]}`}
            role="group"
            aria-roledescription={copy.slide}
            aria-label={copy.position(index + 1, slides.length, slide.label)}
            aria-hidden={index !== active}
            inert={index !== active}
            className={cn(
              "col-start-1 row-start-1",
              index === active ? "z-10" : "pointer-events-none",
              index !== active && index !== previous && "opacity-0",
              index === active &&
                visits[index] > 0 &&
                "animate-in fade-in duration-700 ease-(--ease-standard) motion-reduce:animate-none",
            )}
          >
            {slide.content}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.key}
            type="button"
            onClick={() => show(index)}
            aria-label={copy.goTo(slide.label)}
            aria-current={index === active ? "true" : undefined}
            className="group flex h-6 flex-1 cursor-pointer items-center rounded-sm"
          >
            <span className="relative h-1 w-full overflow-hidden rounded-full bg-ink/12 transition-colors group-hover:bg-ink/20">
              <span
                ref={(bar) => {
                  bars.current[index] = bar;
                }}
                // Só transform inline: a escala vem do ref a cada quadro.
                style={{ transform: "scaleX(0)" }}
                className="absolute inset-0 origin-left rounded-full bg-coin"
              />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
