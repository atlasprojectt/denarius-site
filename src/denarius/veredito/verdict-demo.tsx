"use client";

import { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";

import { domainIcons } from "@/denarius/components/domain/domain-icons";
import type { Cockpit } from "@/denarius/lib/engine/cockpit";
import { ExecutiveDigestCard } from "./executive-digest-card";
import { Hero } from "./hero";
import { HomeGreeting } from "./home-greeting";
import { ScreenFrame } from "./screen-frame";
import { TextSwap } from "./text-swap";

// The verdict piece for the landing page: the Home's top-left corner (greeting
// and verdict, the month's spend, the executive digest), framed like a
// screenshot, cycling through the semaphore states as the month advances.
// Every scene is a real cockpit. On each change the texts (figures, verdict,
// stamp, digest) transition to the new scene's values while the pacing bar
// adapts in real time, gliding to its new shape. Hovering holds the scene.

export type VerdictScene = {
  cockpit: Extract<Cockpit, { state: "ready" }>;
  dayOfPeriod: number;
  daysInPeriod: number;
  /** Week-over-week API change shown under the big number. */
  weekPct: number;
  /** The "Atualizado …" line, already written: the demo never reads the
   *  clock, so it renders the same on the server and in every browser. */
  stamp: string;
};

export type VerdictDemoProps = {
  scenes: VerdictScene[];
  company: string;
  userName: string;
};

/** Time on each scene, and how long the pacing bar takes to reach its next shape. */
const STEP_MS = 2000;
const GLIDE_MS = 700;

/** The screen the Home lays out in, and the top-left region the frame shows. */
const SCREEN = { width: 1440, height: 900 };
const CROP = { width: 720, height: 480 };

const copy = {
  notifications: "Notificações",
  summary:
    "Demonstração: conforme o mês avança, o veredito do Denarius passa de no controle a atenção e a orçamento estourado, com o gasto, a barra de ritmo e a projeção acompanhando.",
};

/** A number that glides to each new target (ease-out cubic); it jumps when
 *  the reader asked for reduced motion. */
function useGlide(target: number): number {
  const [value, setValue] = useState(target);
  const current = useRef(target);

  useEffect(() => {
    const origin = current.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = reduce ? 1 : Math.min(1, (now - start) / GLIDE_MS);
      const next = origin + (target - origin) * (1 - (1 - t) ** 3);
      current.current = next;
      setValue(next);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return value;
}

/** The Home screen itself (1440px wide): app header, greeting and verdict,
 *  the month's spend and the digest, cycling through the scenes. Frame it
 *  with VerdictDemo, or crop it yourself (the landing's showcase cards do). */
export function VerdictScreen({ scenes, company, userName }: VerdictDemoProps) {
  const [index, setIndex] = useState(0);
  const hovered = useRef(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!hovered.current) setIndex((current) => (current + 1) % scenes.length);
    }, STEP_MS);
    return () => window.clearInterval(timer);
  }, [scenes.length]);

  const scene = scenes[index];
  const { cockpit } = scene;
  // Only the bar's geometry glides; every text shows the scene's real value.
  const barPctSpent = useGlide(cockpit.org.pctSpent);
  const barPctProjected = useGlide(cockpit.orgPctProjected ?? 0);

  return (
    <div
      className="flex flex-col bg-background"
      style={{ width: SCREEN.width }}
      onPointerEnter={() => (hovered.current = true)}
      onPointerLeave={() => (hovered.current = false)}
    >
      <p className="sr-only">{copy.summary}</p>
      <div aria-hidden className="flex flex-col">
        <div className="flex h-14 shrink-0 items-center gap-2.5 border-b bg-background px-4">
          <span className="truncate text-sm font-medium">{company}</span>
          <span className="ml-auto flex size-9 items-center justify-center text-ink-secondary">
            <HugeiconsIcon icon={domainIcons.notifications} className="size-[18px]" />
          </span>
        </div>

        <div className="flex flex-col gap-3 bg-background px-5 py-5">
          <div className="mb-2 flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
            <HomeGreeting name={userName} status={cockpit.verdict.status} />
            <p className="mt-1 shrink-0 text-xs text-muted-foreground tabular-nums">
              <TextSwap value={scene.stamp} />
            </p>
          </div>

          {/* The Home's desktop grid; the third column (Gasto por fonte)
              sits outside any crop, so it stays empty. */}
          <div className="grid grid-cols-[minmax(0,1.55fr)_minmax(18rem,24rem)_minmax(0,1.45fr)] items-stretch gap-3">
            <div className="min-w-0 min-h-0">
              <Hero
                org={cockpit.org}
                pctProjected={cockpit.orgPctProjected}
                unconvertedUsd={cockpit.orgUnconvertedUsd}
                currency={cockpit.currency}
                dayOfPeriod={scene.dayOfPeriod}
                daysInPeriod={scene.daysInPeriod}
                weekPct={scene.weekPct}
                bar={{
                  pctSpent: barPctSpent,
                  pctProjected: cockpit.orgPctProjected === null ? null : barPctProjected,
                }}
              />
            </div>
            <div className="min-w-0 min-h-0">
              {/* Keyed by scene: the digest lines replay their entrance. */}
              <ExecutiveDigestCard key={index} cockpit={cockpit} currency={cockpit.currency} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The vitrine's framing: the screen's top-left corner in a bordered frame. */
export function VerdictDemo(props: VerdictDemoProps) {
  return (
    <ScreenFrame screen={SCREEN} crop={CROP}>
      <VerdictScreen {...props} />
    </ScreenFrame>
  );
}
