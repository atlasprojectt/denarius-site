"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  ArrowUp01Icon,
  ArrowUpDownIcon,
  ChevronRightIcon,
  Search01Icon,
  Tag01Icon,
} from "@hugeicons/core-free-icons";

import { ProviderIcon, type ProviderIconName } from "@/denarius/components/domain/provider-icon";
import { StateBadge } from "@/denarius/components/domain/state-badge";
import { Button } from "@/denarius/components/ui/button";
import { Input } from "@/denarius/components/ui/input";
import { Separator } from "@/denarius/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/denarius/components/ui/table";
import { cut } from "@/denarius/lib/bars";
import { money } from "@/denarius/lib/money";
import { cn } from "@/denarius/lib/utils";
import { CompareButton, type ComparisonSource } from "./model-comparison";

export type ExploreRowState = "default" | "unpriced" | "unattributed";

export type ExploreRow = {
  id: string;
  label: string;
  provider?: ProviderIconName;
  amount: number | null;
  originalUsd?: number;
  tokens?: number;
  share: number;
  href?: string;
  note?: string;
  state?: ExploreRowState;
  actionLabel?: string;
  comparison?: ComparisonSource;
};

type SortKey = "label" | "amount" | "tokens";
type SortState = { key: SortKey; direction: "asc" | "desc" };

const copy = {
  search: "Buscar nesta seção",
  noResults: "Nenhum resultado para esta busca.",
  unpricedTitle: "Modelos sem precificação",
  unpricedBadge: "Sem preço",
  share: (label: string) => `Participação de ${label} no total`,
  action: (label: string) => `Mapear o gasto não atribuído de ${label}`,
};

const compact = new Intl.NumberFormat("pt-BR", {
  notation: "compact",
  maximumFractionDigits: 1,
});

function sortValue(row: ExploreRow, key: SortKey): string | number {
  if (key === "label") return row.label;
  return row[key] ?? -1;
}

function sortRows(rows: ExploreRow[], sort: SortState): ExploreRow[] {
  return [...rows].sort((a, b) => {
    const left = sortValue(a, sort.key);
    const right = sortValue(b, sort.key);
    const result =
      typeof left === "string"
        ? left.localeCompare(String(right), "pt-BR")
        : Number(left) - Number(right);
    return sort.direction === "asc" ? result : -result;
  });
}

function SortButton({
  field,
  sort,
  onSort,
  children,
}: {
  field: SortKey;
  sort: SortState;
  onSort: (key: SortKey) => void;
  children: React.ReactNode;
}) {
  const active = sort.key === field;

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={() => onSort(field)}
      className={cn(
        "group/sort min-w-0 gap-1 px-2 label-caps hover:bg-surface-hover",
        active ? "text-foreground" : "text-muted-foreground",
      )}
    >
      {children}
      {active ? (
        sort.direction === "desc" ? (
          <HugeiconsIcon icon={ArrowDown01Icon} className="size-3" aria-hidden />
        ) : (
          <HugeiconsIcon icon={ArrowUp01Icon} className="size-3" aria-hidden />
        )
      ) : (
        <HugeiconsIcon icon={ArrowUpDownIcon}
          className="size-3 opacity-0 transition-opacity duration-(--motion-duration-fast) ease-(--motion-ease-standard) group-hover/sort:opacity-30 group-focus-visible/sort:opacity-30"
          aria-hidden
        />
      )}
    </Button>
  );
}

function RankBar({ row, index }: { row: ExploreRow; index: number }) {
  const share = Math.min(1, Math.max(0, row.share));

  return (
    <div
      className="relative mt-2 h-1.5 w-full"
      role="img"
      aria-label={copy.share(row.label)}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-current text-foreground/15"
        style={{ clipPath: cut(share, 1) }}
      />
      <div
        data-reveal-bar
        aria-hidden
        className="absolute inset-0 bg-current text-foreground/80"
        style={{
          clipPath: cut(0, share),
          animationDelay: `${80 + index * 65}ms`,
        }}
      />
    </div>
  );
}

function MoneyValue({
  row,
  currency,
}: {
  row: ExploreRow;
  currency: string;
}) {
  if (row.state === "unpriced") {
    // Amber = data quality (honest numbers, principle #3): an unpriced model is
    // a gap in the total, not neutral trivia.
    return (
      <StateBadge icon={Tag01Icon} tone="amber">
        {copy.unpricedBadge}
      </StateBadge>
    );
  }

  const primary =
    row.amount !== null
      ? money(row.amount, currency)
      : row.originalUsd !== undefined
        ? money(row.originalUsd, "USD")
        : money(0, currency);

  return (
    <div className="text-right tabular-nums">
      <p className="text-ui font-medium text-foreground">{primary}</p>
      {row.amount !== null && row.originalUsd !== undefined && (
        <p className="mt-0.5 text-xs text-muted-foreground">
          {money(row.originalUsd, "USD")}
        </p>
      )}
    </div>
  );
}

function RowAction({ row }: { row: ExploreRow }) {
  if (!row.href || !row.actionLabel) return null;

  return (
    <Button
      asChild
      variant="tertiary"
      size="sm"
      shape="full"
      motion="forward"
      className="justify-self-end"
    >
      <Link href={row.href} aria-label={copy.action(row.label)}>
        {row.actionLabel}
        <HugeiconsIcon icon={ChevronRightIcon} data-icon="inline-end" aria-hidden />
      </Link>
    </Button>
  );
}

function DesktopRows({
  rows,
  currency,
  showTokens,
  onCompare,
}: {
  rows: ExploreRow[];
  currency: string;
  showTokens: boolean;
  onCompare: (row: ExploreRow) => void;
}) {
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow
          key={row.id}
          className="h-12 border-border hover:bg-surface-hover"
        >
          <TableCell className="min-w-64 py-2 text-ui whitespace-normal">
            <div className="flex items-center gap-2">
              {row.state === "unattributed" && (
                <span
                  className="size-1.5 shrink-0 rounded-full bg-muted-foreground"
                  aria-hidden
                />
              )}
              {row.provider && (
                <ProviderIcon provider={row.provider} className="size-5 shrink-0" />
              )}
              <p className="truncate font-medium text-foreground">{row.label}</p>
            </div>
            {row.state !== "unpriced" && (
              <RankBar row={row} index={index} />
            )}
            {row.note && (
              <p className="mt-1 text-xs text-muted-foreground">{row.note}</p>
            )}
          </TableCell>
          {showTokens && (
            <TableCell className="w-24 text-right text-xs text-ink-secondary tabular-nums">
              {compact.format(row.tokens ?? 0)}
            </TableCell>
          )}
          <TableCell className="w-32 text-right">
            <MoneyValue row={row} currency={currency} />
          </TableCell>
          <TableCell className="w-32 text-right">
            {row.comparison ? (
              <CompareButton rowId={row.id} model={row.comparison.model} onClick={() => onCompare(row)} />
            ) : (
              <RowAction row={row} />
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

function MobileRows({
  rows,
  currency,
  showTokens,
  onCompare,
}: {
  rows: ExploreRow[];
  currency: string;
  showTokens: boolean;
  onCompare: (row: ExploreRow) => void;
}) {
  return (
    <div className="grid gap-2 md:hidden">
      {rows.map((row, index) => (
        <article
          key={row.id}
          className="rounded-md border border-border p-3 text-ui"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                {row.state === "unattributed" && (
                  <span
                    className="size-1.5 shrink-0 rounded-full bg-muted-foreground"
                    aria-hidden
                  />
                )}
                {row.provider && (
                  <ProviderIcon provider={row.provider} className="size-5 shrink-0" />
                )}
                <h3 className="truncate font-medium text-foreground">{row.label}</h3>
              </div>
              {showTokens && (
                <p className="mt-1 text-xs text-muted-foreground tabular-nums">
                  {compact.format(row.tokens ?? 0)} tokens
                </p>
              )}
            </div>
            <MoneyValue row={row} currency={currency} />
          </div>
          {row.state !== "unpriced" && (
            <RankBar row={row} index={index} />
          )}
          {row.note && (
            <p className="mt-2 text-xs text-muted-foreground">{row.note}</p>
          )}
          {row.href && row.actionLabel && (
            <div className="mt-2 flex justify-end">
              <RowAction row={row} />
            </div>
          )}
          {row.comparison && (
            <div className="mt-2 flex justify-end">
              <CompareButton rowId={row.id} model={row.comparison.model} onClick={() => onCompare(row)} />
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

export function ExploreTable({
  rows,
  currency,
  labelHeader,
  amountHeader,
  tokensHeader,
  onCompare,
}: {
  rows: ExploreRow[];
  currency: string;
  labelHeader: string;
  amountHeader: string;
  tokensHeader?: string;
  /** Opens a row's comparison in place of the table (the models sheet). */
  onCompare: (row: ExploreRow) => void;
}) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortState>({
    key: "amount",
    direction: "desc",
  });

  const visible = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    const filtered = normalized
      ? rows.filter((row) =>
          row.label.toLocaleLowerCase("pt-BR").includes(normalized),
        )
      : rows;
    return sortRows(filtered, sort);
  }, [query, rows, sort]);

  const pricedRows = visible.filter((row) => row.state !== "unpriced");
  const unpricedRows = visible.filter((row) => row.state === "unpriced");

  function changeSort(key: SortKey) {
    setSort((current) => ({
      key,
      direction:
        current.key === key && current.direction === "desc" ? "asc" : "desc",
    }));
  }

  const ariaSort = (key: SortKey) =>
    sort.key === key
      ? sort.direction === "asc"
        ? ("ascending" as const)
        : ("descending" as const)
      : undefined;

  return (
    <div
      data-reveal="explore-ranking"
      suppressHydrationWarning
      className="flex flex-col gap-3"
    >
      {rows.length > 10 && (
        <label className="relative block max-w-sm">
          <span className="sr-only">{copy.search}</span>
          <HugeiconsIcon icon={Search01Icon} className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-ink-faint" />
          <Input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.search}
            className="pl-9"
          />
        </label>
      )}

      {visible.length === 0 ? (
        <p className="rounded-md border border-dashed p-5 text-sm text-ink-secondary">
          {copy.noResults}
        </p>
      ) : (
        <>
          {pricedRows.length > 0 && (
            <>
              <MobileRows
                rows={pricedRows}
                currency={currency}
                showTokens={Boolean(tokensHeader)}
                onCompare={onCompare}
              />
              <div className="hidden md:block">
                <Table className="min-w-152 table-fixed">
                  <TableHeader>
                    <TableRow className="border-border hover:bg-transparent">
                      <TableHead aria-sort={ariaSort("label")} className="h-9 p-0">
                        <SortButton field="label" sort={sort} onSort={changeSort}>
                          {labelHeader}
                        </SortButton>
                      </TableHead>
                      {tokensHeader && (
                        <TableHead
                          aria-sort={ariaSort("tokens")}
                          className="h-9 w-24 p-0 text-right"
                        >
                          <SortButton
                            field="tokens"
                            sort={sort}
                            onSort={changeSort}
                          >
                            {tokensHeader}
                          </SortButton>
                        </TableHead>
                      )}
                      <TableHead
                        aria-sort={ariaSort("amount")}
                        className="h-9 w-32 p-0 text-right"
                      >
                        <SortButton
                          field="amount"
                          sort={sort}
                          onSort={changeSort}
                        >
                          {amountHeader}
                        </SortButton>
                      </TableHead>
                      <TableHead className="h-9 w-32 p-0" />
                    </TableRow>
                  </TableHeader>
                  <DesktopRows
                    rows={pricedRows}
                    currency={currency}
                    showTokens={Boolean(tokensHeader)}
                    onCompare={onCompare}
                  />
                </Table>
              </div>
            </>
          )}

          {unpricedRows.length > 0 && (
            <section aria-labelledby="unpriced-models-title" className="mt-1">
              <Separator className="mb-3" />
              <h3
                id="unpriced-models-title"
                className="mb-2 text-xs font-medium text-foreground"
              >
                {copy.unpricedTitle}
              </h3>
              <MobileRows
                rows={unpricedRows}
                currency={currency}
                showTokens={Boolean(tokensHeader)}
                onCompare={onCompare}
              />
              <div className="hidden md:block">
                <Table className="min-w-152 table-fixed">
                  <DesktopRows
                    rows={unpricedRows}
                    currency={currency}
                    showTokens={Boolean(tokensHeader)}
                    onCompare={onCompare}
                  />
                </Table>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
