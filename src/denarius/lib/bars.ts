// Pure geometry for the hand-rolled budget bars (frontend F3: a progress bar is
// not a chart). The budget is the 100% reference line. Spend can pass it (a
// breach) and the run-rate ghost can pass it further, so the track is scaled to
// the largest of the three and every part is positioned as a fraction of that
// scale — the budget marker included, so it slides left as the overrun grows.
//
// Bars are solid, rounded segments with a small gap between neighbours
// (2026-10-08, founder-directed: the tick-grid texture is gone). Every layer is
// a full-width `bg-current` block cut by the clip-path below, so its color
// comes from the layer's `color` and filters like `brightness-115` keep
// working. Segments must tile the track rather than stack on it — the gap
// would otherwise show the layer underneath instead of the card.

export type BarShape = { radiusPx: number; gapPx: number };

/** The 6–12px bars. */
export const BAR_SHAPE: BarShape = { radiusPx: 3, gapPx: 2 };

/** The tall bars: the 32px hero pacing bar and the 24px plan timeline. */
export const TALL_BAR_SHAPE: BarShape = { radiusPx: 6, gapPx: 3 };

/** clip-path inset cutting a full-width layer to the [from..to] fraction as a
 *  rounded segment. Inner edges give up half the gap each; the bar's outer
 *  ends stay flush. */
export function cut(from: number, to: number, shape: BarShape = BAR_SHAPE): string {
  const half = shape.gapPx / 2;
  const edge = (fraction: number, inner: boolean) => {
    const pct = `${(fraction * 100).toFixed(2)}%`;
    return inner ? `calc(${pct} + ${half}px)` : pct;
  };
  return `inset(0 ${edge(1 - to, to < 1)} 0 ${edge(from, from > 0)} round ${shape.radiusPx}px)`;
}

export type BarGeometry = {
  /** Filled portion (spent), 0..1 of the track. */
  fill: number;
  /** Ghost start = fill; ghost end = projection, 0..1 of the track. null when
   *  there is no projection to extend (day-5 guard) or it doesn't exceed spend. */
  ghostStart: number | null;
  ghostEnd: number | null;
  /** Budget line position, 0..1 of the track (1 only when nothing exceeds budget). */
  marker: number;
};

/**
 * Positions the fill, the projection ghost and the budget marker on a single
 * track. `pctSpent`/`pctProjected` are fractions of budget (1 = exactly on
 * budget). The track scales to whichever is largest (min 1), so an overrun stays
 * visible instead of clipping at the edge.
 */
export function barGeometry(
  pctSpent: number,
  pctProjected: number | null,
): BarGeometry {
  const spent = Math.max(0, pctSpent);
  const projected = pctProjected !== null ? Math.max(0, pctProjected) : null;
  const scale = Math.max(1, spent, projected ?? 0);

  const fill = spent / scale;
  const marker = 1 / scale;

  // A ghost only reads when the projection lands beyond what's already spent.
  const hasGhost = projected !== null && projected > spent;
  return {
    fill,
    ghostStart: hasGhost ? fill : null,
    ghostEnd: hasGhost ? (projected as number) / scale : null,
    marker,
  };
}

/** A [from..to] stretch of a track, both 0..1. */
export type Span = { from: number; to: number };

export type PacingSegments = {
  /** Spent inside the budget ("gasto"). */
  spent: Span;
  /** Spent above the budget: a realized overrun. */
  overspent: Span | null;
  /** The visible stretch of the projection layer ("projeção"). */
  projected: Span | null;
  /** The visible stretch of the budget layer ("orçamento"). */
  budget: Span | null;
  /** The projected close passes the budget: the projection sits behind the
   *  budget layer and wears the overrun tone. */
  projectionOver: boolean;
};

/**
 * Splits the pacing track into three layers that all start at zero (spent,
 * projected close, budget), the shorter one in front (2026-10-07,
 * founder-directed); the spend is always frontmost. When the close fits the
 * budget, the projection shows first and the budget's tail after it; when the
 * close passes the budget, the budget shows first and the projection pokes out
 * behind it. Each layer comes back as the stretch left visible, so the spans
 * are adjacent, never overlap and always tile the track. Fractions of budget
 * in (1 = exactly on budget); the track scales like `barGeometry`. Before the
 * day-5 guard (`pctProjected` null) there is no projection layer.
 */
export function pacingSegments(
  pctSpent: number,
  pctProjected: number | null,
): PacingSegments {
  const spent = Math.max(0, pctSpent);
  const close = pctProjected === null ? spent : Math.max(spent, pctProjected);
  const scale = Math.max(1, close);
  const span = (from: number, to: number): Span | null =>
    to > from ? { from: from / scale, to: to / scale } : null;
  const projectionOver = close > 1;

  return {
    spent: { from: 0, to: Math.min(spent, 1) / scale },
    overspent: span(1, spent),
    projected: projectionOver
      ? span(Math.max(spent, 1), close)
      : span(spent, close),
    budget: projectionOver ? span(spent, 1) : span(close, 1),
    projectionOver,
  };
}
