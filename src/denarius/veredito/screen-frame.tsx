"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// A live "screenshot crop": the children render as a fixed-size screen, and
// the frame shows only its top-left `crop` region, enlarged to the frame's
// width. Change `crop` to zoom in (smaller) or out (larger). The screen
// stays invisible until the first measure, so it never flashes at 1:1.
// CSS zoom, not a scale transform: text is laid out and rasterized at the
// final size (crisp), and animating figures repaint cleanly — under a
// fractional scale transform Chromium left glyph ghosts behind them.

export function ScreenFrame({
  screen,
  crop,
  children,
}: {
  /** The full screen the children lay out in, in CSS px. */
  screen: { width: number; height: number };
  /** The visible region, measured from the screen's top-left corner. */
  crop: { width: number; height: number };
  children: ReactNode;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<number | null>(null);

  useEffect(() => {
    const node = frame.current;
    if (!node) return;
    const observer = new ResizeObserver(([entry]) => {
      setZoom(entry.contentRect.width / crop.width);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [crop.width]);

  return (
    <div
      ref={frame}
      className="relative w-full overflow-hidden rounded-xl border border-border bg-background shadow-lg"
      style={{ aspectRatio: `${crop.width} / ${crop.height}` }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col"
        style={{
          width: screen.width,
          height: screen.height,
          zoom: zoom ?? 1,
          visibility: zoom === null ? "hidden" : undefined,
        }}
      >
        {children}
      </div>
    </div>
  );
}
