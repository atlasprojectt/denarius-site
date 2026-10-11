"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ChevronRightIcon,
} from "@hugeicons/core-free-icons";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";

import { domainIcons } from "@/denarius/components/domain/domain-icons";
import { ProviderIcon } from "@/denarius/components/domain/provider-icon";
import { Button } from "@/denarius/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/denarius/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/denarius/components/ui/sheet";
import { cut } from "@/denarius/lib/bars";
import type { Vendor } from "@/denarius/lib/engine/composition";
import { ExploreTable, type ExploreRow } from "./explore-table";
import { ModelComparison } from "./model-comparison";

const copy = {
  label: { openai: "OpenAI", anthropic: "Anthropic", other: "Outras assinaturas" } satisfies Record<Vendor, string>,
  ofTotal: (share: string) => `${share} do total`,
  models: (count: number) => (count === 1 ? "Ver 1 modelo" : `Ver ${count} modelos`),
  noModels: "Sem uso de API neste mês",
  sheetTitle: (vendor: string) => `Modelos da ${vendor}`,
  sheetDescription:
    "Gasto de API por modelo no mês, derivado de tokens × preço de tabela. Assinaturas por assento não informam modelos.",
  colModel: "Modelo",
  colTokens: "Tokens",
  colSpend: "Gasto",
  back: "Voltar",
  compareTitle: "Comparação financeira",
  compareDescription: "Mesmo volume observado de tokens · sem afirmar equivalência técnica.",
};

export type VendorCardData = {
  vendor: Vendor;
  /** Display-currency total, or the USD original when the period has no FX. */
  total: string;
  /** Original USD of the API part, shown beside the total; absent without API. */
  totalUsd: string | null;
  share: string | null;
  shareFraction: number;
  /** "API R$ 409,14 · assinaturas R$ 0,00": what the total is made of. */
  parts: string;
  /** "+38% X mesmo ponto de setembro", or the reason there is no base. */
  delta: string | null;
  models: ExploreRow[];
};

export function VendorCard({ data, currency }: { data: VendorCardData; currency: string }) {
  const label = copy.label[data.vendor];
  const share = Math.min(1, Math.max(0, data.shareFraction));
  // A vendor total is one of two or three equal figures on the screen, so it
  // takes metric-lg in the standard card (founder decision 2026-10-10), never
  // the display size the Home hero owns.
  return (
    <Card aria-labelledby={`vendor-${data.vendor}-title`} className="h-full min-w-0">
      <CardHeader>
        <CardTitle as="h2" id={`vendor-${data.vendor}-title`} className="flex min-w-0 items-center gap-2">
          {data.vendor === "other" ? (
            <HugeiconsIcon icon={domainIcons.subscriptions} className="size-4 shrink-0 text-ink-faint" aria-hidden />
          ) : (
            <ProviderIcon provider={data.vendor} className="size-5 shrink-0" />
          )}
          <span className="truncate">{label}</span>
        </CardTitle>
        {data.share && (
          <CardAction className="text-ui text-ink-secondary tabular-nums">
            {copy.ofTotal(data.share)}
          </CardAction>
        )}
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="flex flex-wrap items-baseline gap-x-2 text-xl tabular-nums [overflow-wrap:anywhere]">
            {data.total}
            {data.totalUsd && (
              <span className="text-sm text-ink-secondary">{data.totalUsd}</span>
            )}
          </p>
          <p className="text-ui text-ink-secondary tabular-nums">{data.parts}</p>
        </div>

        {/* The app's bar recipe (lib/bars): a segment cut to the vendor's share
            with the track on the rest, built on reveal like every other bar.
            Spend share is the spend domain, so the segment is the spend orange.
            data-reveal-state is stamped by the RevealController pre-hydration. */}
        <div data-reveal="vendor-share" suppressHydrationWarning className="relative h-2 w-full" aria-hidden>
          <div className="absolute inset-0 bg-current text-foreground/15" style={{ clipPath: cut(share, 1) }} />
          <div
            data-reveal-bar
            className="absolute inset-0 bg-current text-pace-spent"
            style={{ clipPath: cut(0, share), animationDelay: "80ms" }}
          />
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground tabular-nums">{data.delta}</p>
          {data.models.length > 0 ? (
            <ModelsSheet label={label} models={data.models} currency={currency} />
          ) : (
            data.vendor !== "other" && (
              <span className="text-xs text-muted-foreground">{copy.noModels}</span>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}

/** The vendor's models in one sheet. "Comparar" swaps the table for the
 *  comparison inside the same sheet, with "Voltar" in the header (founder
 *  decision 2026-10-10: never a sheet over a sheet). The table stays mounted
 *  while hidden, so its sort and search survive the round trip. */
function ModelsSheet({ label, models, currency }: { label: string; models: ExploreRow[]; currency: string }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [comparing, setComparing] = useState<ExploreRow | null>(null);

  // A read-only view opens on the panel itself, so the reader hears the new
  // title before any control.
  function openComparison(row: ExploreRow) {
    flushSync(() => setComparing(row));
    panelRef.current?.scrollTo({ top: 0 });
    panelRef.current?.focus();
  }

  // Back to the table, on the "Comparar" that opened it. The table renders one
  // copy per layout (mobile list, desktop table); only the visible one counts.
  function closeComparison() {
    const rowId = comparing?.id;
    flushSync(() => setComparing(null));
    if (rowId === undefined) return;
    const buttons = panelRef.current?.querySelectorAll<HTMLElement>(`[data-compare-row="${CSS.escape(rowId)}"]`) ?? [];
    [...buttons].find((button) => button.checkVisibility())?.focus();
  }

  return (
    <Sheet
      onOpenChangeComplete={(open) => {
        if (!open) setComparing(null);
      }}
    >
      <SheetTrigger render={<Button type="button" variant="tertiary" size="sm" motion="forward" />}>
        {copy.models(models.length)}
        <HugeiconsIcon icon={ChevronRightIcon} data-icon="inline-end" aria-hidden />
      </SheetTrigger>
      <SheetContent
        ref={panelRef}
        initialFocus={panelRef}
        side="right"
        className="overflow-y-auto data-[side=right]:w-full data-[side=right]:sm:max-w-2xl"
      >
        <SheetHeader className="border-b p-6 pr-12">
          {comparing && (
            <Button
              type="button"
              variant="tertiary"
              size="sm"
              motion="backward"
              onClick={closeComparison}
              className="mb-2 self-start"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} data-icon="inline-start" aria-hidden />
              {copy.back}
            </Button>
          )}
          <SheetTitle>{comparing ? copy.compareTitle : copy.sheetTitle(label)}</SheetTitle>
          <SheetDescription>{comparing ? copy.compareDescription : copy.sheetDescription}</SheetDescription>
        </SheetHeader>
        <div className="p-6" hidden={comparing !== null}>
          <ExploreTable
            rows={models}
            currency={currency}
            labelHeader={copy.colModel}
            tokensHeader={copy.colTokens}
            amountHeader={copy.colSpend}
            onCompare={openComparison}
          />
        </div>
        {comparing?.comparison && <ModelComparison source={comparing.comparison} />}
      </SheetContent>
    </Sheet>
  );
}
