import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/cn";
import {
  AttentionIcon,
  BreachedIcon,
  DoneIcon,
  PendingIcon,
} from "@/components/ui/state-icons";

export type BudgetStatus = "ok" | "attention" | "breached" | "collecting";

// Rótulos fixos do produto: No controle · Atenção · Estourado · Coletando ritmo.
const STATUS: Record<
  BudgetStatus,
  { label: string; tone: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }
> = {
  ok: { label: "No controle", tone: "bg-green-soft text-green-fg", Icon: DoneIcon },
  attention: { label: "Atenção", tone: "bg-amber-soft text-amber-fg", Icon: AttentionIcon },
  breached: { label: "Estourado", tone: "bg-red-soft text-red-fg", Icon: BreachedIcon },
  collecting: {
    label: "Coletando ritmo",
    tone: "bg-neutral-soft text-neutral-fg",
    Icon: PendingIcon,
  },
};

/** Status de orçamento: sempre texto e ícone, nunca só cor. */
export function StatusPill({
  status,
  className,
}: {
  status: BudgetStatus;
  className?: string;
}) {
  const { label, tone, Icon } = STATUS[status];

  return (
    <span
      className={cn(
        "type-badge inline-flex h-5 w-fit items-center gap-1 rounded-full px-2",
        tone,
        className,
      )}
    >
      <Icon className="size-3" />
      {label}
    </span>
  );
}
