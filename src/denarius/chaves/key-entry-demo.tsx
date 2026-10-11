"use client";

import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { LightbulbIcon, Unlink01Icon } from "@hugeicons/core-free-icons";

import { ProviderIcon } from "@/denarius/components/domain/provider-icon";
import { StateBadge } from "@/denarius/components/domain/state-badge";
import { stateIcons } from "@/denarius/components/domain/state-icons";
import { Button } from "@/denarius/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/denarius/components/ui/card";
import { money } from "@/denarius/lib/money";
import { cn } from "@/denarius/lib/utils";

// The key-connection piece for the landing page: the connection cards of
// /ajustes/conexoes playing on their own, in a loop. The OpenAI key is typed
// in (masked dots, a blinking caret), the card connects, a green check and the
// "Ativo" badge confirm it; then the same for Anthropic. Decorative: the cards
// are drawn, not a form, and the whole loop is aria-hidden behind one summary.

type Provider = "openai" | "anthropic";

const copy = {
  summary:
    "Demonstração: as Admin Keys somente leitura da OpenAI e da Anthropic são coladas, conectadas e confirmadas.",
  notConnected: "Não conectado",
  active: "Ativo",
  neverSynced: "Nunca sincronizado",
  syncedNow: "Sincronizado agora",
  keyLabel: "Admin Key (somente leitura)",
  connect: "Conectar e sincronizar",
  connecting: "Conectando…",
  connected: (total: string) => `Conectado. Encontramos ${total} de uso neste mês.`,
};

const providerCopy: Record<
  Provider,
  { title: string; keyPlaceholder: string; keyHelp: string; groupingTip: string }
> = {
  openai: {
    title: "OpenAI",
    keyPlaceholder: "sk-admin…",
    keyHelp:
      "Crie uma Admin Key somente-leitura no painel da organização OpenAI. Ela é criptografada em repouso e nunca aparece em logs.",
    groupingTip:
      "Dica: crie um projeto OpenAI por time — os custos em dólar saem por projeto, então isso dá o custo exato por time.",
  },
  anthropic: {
    title: "Anthropic",
    keyPlaceholder: "sk-ant-admin…",
    keyHelp:
      "Crie uma Admin Key no Console da Anthropic (Settings → Admin keys). Ela é criptografada em repouso e nunca aparece em logs.",
    groupingTip:
      "Dica: crie um workspace Anthropic por time — os custos em dólar saem por workspace, então isso dá o custo exato por time.",
  },
};

/** The loop's timing (ms) and the masked key's length. Both keys connect in
 *  ~4.2s, so the whole story fits a 5s carousel slide. */
const KEY_LENGTH = 32;
const PER_CHAR = 30;
const LEAD_IN = 300;
const CONNECTING = 700;
const BETWEEN = 250;
const HOLD = 2600;
const TICK = 40;

const CARD_TIME = LEAD_IN + KEY_LENGTH * PER_CHAR + CONNECTING;
const STARTS: Record<Provider, number> = { openai: 0, anthropic: CARD_TIME + BETWEEN };
const CYCLE = STARTS.anthropic + CARD_TIME + HOLD;

type Stage = "idle" | "typing" | "connecting" | "done";

/** Where one card is at time `t` of the loop. */
function stageAt(t: number, start: number): { stage: Stage; typed: number } {
  const local = t - start - LEAD_IN;
  if (local < 0) return { stage: "idle", typed: 0 };
  const typed = Math.min(KEY_LENGTH, Math.floor(local / PER_CHAR) + 1);
  if (typed < KEY_LENGTH) return { stage: "typing", typed };
  if (local < KEY_LENGTH * PER_CHAR + CONNECTING) return { stage: "connecting", typed };
  return { stage: "done", typed };
}

function KeyCard({
  provider,
  stage,
  typed,
  monthUsd,
}: {
  provider: Provider;
  stage: Stage;
  typed: number;
  monthUsd: number;
}) {
  const p = providerCopy[provider];
  const done = stage === "done";
  const focused = stage === "typing" || stage === "connecting";

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <ProviderIcon provider={provider} className="size-5 shrink-0" />
          {p.title}
        </CardTitle>
        <CardDescription className="tabular-nums">{done ? copy.syncedNow : copy.neverSynced}</CardDescription>
        <CardAction>
          {done ? (
            <StateBadge icon={stateIcons.done} tone="positive" className="animate-in fade-in duration-300">
              {copy.active}
            </StateBadge>
          ) : (
            <StateBadge icon={Unlink01Icon}>{copy.notConnected}</StateBadge>
          )}
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium">{copy.keyLabel}</span>
          {/* Drawn like the Input primitive: the key arrives masked. */}
          <div
            className={cn(
              "flex h-8 max-w-md items-center gap-2 rounded-sm border border-input bg-input/20 px-2.5 font-mono text-sm transition-[border-color,box-shadow] duration-(--motion-duration-fast) ease-(--motion-ease-standard) dark:bg-input/30",
              focused && "border-ring ring-2 ring-ring/40",
            )}
          >
            <span className="flex min-w-0 flex-1 items-center overflow-hidden whitespace-nowrap">
              {typed === 0 ? (
                <span className="text-muted-foreground">{p.keyPlaceholder}</span>
              ) : (
                <span className="tracking-[0.12em] text-foreground">{"•".repeat(typed)}</span>
              )}
              {focused && stage === "typing" && (
                <span className="ml-px inline-block h-4 w-px animate-caret-blink bg-foreground" />
              )}
            </span>
            {done && (
              <HugeiconsIcon
                icon={stateIcons.done}
                className="size-4 shrink-0 animate-in zoom-in-50 fade-in text-badge-positive duration-300"
              />
            )}
          </div>
          <p className="text-xs/relaxed text-muted-foreground">{p.keyHelp}</p>
        </div>
        <p className="flex items-start gap-2 rounded-md bg-muted p-3 text-xs/relaxed text-ink-secondary">
          <HugeiconsIcon icon={LightbulbIcon} className="mt-0.5 size-4 shrink-0" />
          {p.groupingTip}
        </p>
        <div className="flex min-h-9 items-center">
          {done ? (
            <p className="flex animate-in items-center gap-1.5 text-sm text-badge-positive fade-in duration-300">
              <HugeiconsIcon icon={stateIcons.done} className="size-4 shrink-0" />
              {copy.connected(money(monthUsd, "USD"))}
            </p>
          ) : (
            <Button type="button" tabIndex={-1} loading={stage === "connecting"} loadingText={copy.connecting}>
              {copy.connect}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export type KeyEntryDemoProps = {
  /** Month-to-date API cost per provider (USD), quoted once connected. */
  monthUsd: Record<Provider, number>;
};

export function KeyEntryDemo({ monthUsd }: KeyEntryDemoProps) {
  const [t, setT] = useState(0);

  useEffect(() => {
    // Reduced motion: no loop, just the finished state (both connected).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setT(CYCLE - 1));
      return () => cancelAnimationFrame(frame);
    }
    const started = performance.now();
    const timer = window.setInterval(() => {
      setT((performance.now() - started) % CYCLE);
    }, TICK);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div>
      <p className="sr-only">{copy.summary}</p>
      <div aria-hidden className="grid gap-4 md:grid-cols-2">
        {(["openai", "anthropic"] as const).map((provider) => {
          const { stage, typed } = stageAt(t, STARTS[provider]);
          return (
            <KeyCard key={provider} provider={provider} stage={stage} typed={typed} monthUsd={monthUsd[provider]} />
          );
        })}
      </div>
    </div>
  );
}
