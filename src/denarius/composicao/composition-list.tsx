"use client";

import { useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";

import { domainIcons } from "@/denarius/components/domain/domain-icons";
import { ProviderIcon } from "@/denarius/components/domain/provider-icon";
import { StateBadge } from "@/denarius/components/domain/state-badge";
import { stateIcons } from "@/denarius/components/domain/state-icons";
import { Button } from "@/denarius/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/denarius/components/ui/sheet";
import type { Vendor } from "@/denarius/lib/engine/composition";

// Vitrine copy of app/(app)/explorar/_components/composition-list.tsx without
// the row menu and the "Sem time" link: both lead into the app's settings.

const copy = {
  colItem: "Assinatura ou chave",
  colTeam: "Time",
  colSpend: "Gasto no mês",
  colDelta: (month: string) => `X ${month}`,
  noTeam: "Sem time",
  companyWide: "Empresa toda",
  noBase: "—",
  models: "Ver modelos",
  sheetTitle: (item: string) => `Modelos de ${item}`,
  sheetDescription:
    "Gasto de API por modelo neste projeto, derivado de tokens × preço de tabela.",
  colModel: "Modelo",
  colTokens: "Tokens",
  unpriced: "Sem preço",
};

export type ModelLineView = { model: string; tokens: string; amount: string | null };

export type CompositionRow = {
  id: string;
  kind: "subscription" | "api";
  vendor: Vendor;
  title: string;
  subtitle: string;
  /** null = no team: "Sem time" for API projects, "Empresa toda" for seats. */
  team: string | null;
  amount: string;
  amountUsd: string | null;
  delta: string | null;
  models: ModelLineView[];
};

function ItemIcon({ row }: { row: CompositionRow }) {
  if (row.vendor !== "other") {
    return <ProviderIcon provider={row.vendor} className="size-6 shrink-0" />;
  }
  return (
    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted">
      <HugeiconsIcon
        icon={row.kind === "api" ? domainIcons.apiKey : domainIcons.subscriptions}
        className="size-3.5"
        aria-hidden
      />
    </span>
  );
}

function ModelsSheet({ row }: { row: CompositionRow }) {
  // Read-only: the sheet opens on the panel itself, not on its first control.
  const panelRef = useRef<HTMLDivElement>(null);
  return (
    <Sheet>
      <SheetTrigger render={<Button type="button" variant="tertiary" size="sm" />}>
        {copy.models}
      </SheetTrigger>
      <SheetContent
        ref={panelRef}
        initialFocus={panelRef}
        side="right"
        className="overflow-y-auto data-[side=right]:w-full data-[side=right]:sm:max-w-2xl"
      >
        <SheetHeader className="border-b p-6 pr-12">
          <SheetTitle>{copy.sheetTitle(row.title)}</SheetTitle>
          <SheetDescription>{copy.sheetDescription}</SheetDescription>
        </SheetHeader>
        <div className="p-6">
          <div className="grid grid-cols-[minmax(0,1fr)_88px_120px] gap-4 border-b border-border pb-2 label-caps text-muted-foreground">
            <span>{copy.colModel}</span>
            <span className="text-right">{copy.colTokens}</span>
            <span className="text-right">{copy.colSpend}</span>
          </div>
          <ul className="divide-y divide-border">
            {row.models.map((line) => (
              <li
                key={line.model}
                className="grid grid-cols-[minmax(0,1fr)_88px_120px] items-center gap-4 py-3"
              >
                <span className="truncate text-ui font-medium">{line.model}</span>
                <span className="text-right text-xs text-ink-secondary tabular-nums">
                  {line.tokens}
                </span>
                <span className="text-right text-ui tabular-nums">
                  {line.amount ?? copy.unpriced}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function TeamCell({ row }: { row: CompositionRow }) {
  if (row.team !== null) return <span className="text-ui">{row.team}</span>;
  if (row.kind === "subscription") {
    return <span className="text-ui text-ink-secondary">{copy.companyWide}</span>;
  }
  return <StateBadge icon={stateIcons.attention} tone="amber">{copy.noTeam}</StateBadge>;
}

export function CompositionList({
  rows,
  previousMonth,
}: {
  rows: CompositionRow[];
  previousMonth: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] text-left">
        <thead>
          <tr className="border-b border-border label-caps text-muted-foreground">
            <th className="py-2 pr-4 font-medium">{copy.colItem}</th>
            <th className="py-2 pr-4 font-medium">{copy.colTeam}</th>
            <th className="py-2 pr-4 text-right font-medium">{copy.colSpend}</th>
            <th className="py-2 pr-4 text-right font-medium">{copy.colDelta(previousMonth)}</th>
            <th className="w-40 py-2" aria-hidden />
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="py-3.5 pr-4">
                <div className="flex min-w-0 items-center gap-3">
                  <ItemIcon row={row} />
                  <div className="min-w-0">
                    <p className="truncate text-ui font-medium">{row.title}</p>
                    <p className="truncate text-xs text-muted-foreground tabular-nums">
                      {row.subtitle}
                    </p>
                  </div>
                </div>
              </td>
              <td className="py-3.5 pr-4">
                <TeamCell row={row} />
              </td>
              <td className="py-3.5 pr-4 text-right tabular-nums">
                <span className="text-ui font-medium">{row.amount}</span>
                {row.amountUsd && (
                  <span className="block text-xs text-muted-foreground">{row.amountUsd}</span>
                )}
              </td>
              <td className="py-3.5 pr-4 text-right text-ui text-ink-secondary tabular-nums">
                {row.delta ?? copy.noBase}
              </td>
              <td className="py-3.5">
                <div className="flex items-center justify-end gap-1">
                  {row.models.length > 0 && <ModelsSheet row={row} />}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
