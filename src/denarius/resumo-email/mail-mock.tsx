import type { ReactNode } from "react";
import Image from "next/image";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  Alert02Icon,
  Archive01Icon,
  ArrowDown01Icon,
  ArrowLeft01Icon,
  ArrowTurnBackwardIcon,
  ArrowTurnForwardIcon,
  Calendar03Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Clock01Icon,
  Delete02Icon,
  Folder01Icon,
  LinkSquare02Icon,
  MailOpen01Icon,
  MoreVerticalIcon,
  Note01Icon,
  PrinterIcon,
  SmileIcon,
  StarIcon,
  Tag01Icon,
  Task01Icon,
  TaskAdd01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";

import { Card } from "@/denarius/components/ui/card";
import avatar from "@/denarius/public/brand/denarius-avatar.png";
import { cn } from "@/denarius/lib/utils";

// A generic webmail window in the shape of Gmail, trimmed to the message:
// the toolbar, the opened message, its reply buttons and the side apps rail —
// no top bar, search or folders (founder-directed). No Google logo or product
// marks. Pure chrome: nothing is clickable, so the controls are drawn, not
// buttons; only the message itself is read.

const copy = {
  pagination: "1 de 128",
  inboxChip: "Caixa de entrada",
  to: "para mim",
  reply: "Responder",
  forward: "Encaminhar",
};

/** A drawn control: an icon in a round hit area, the toolbar's grammar. */
function Glyph({ icon, className }: { icon: IconSvgElement; className?: string }) {
  return (
    <span className={cn("flex size-8 shrink-0 items-center justify-center rounded-full text-ink-secondary", className)}>
      <HugeiconsIcon icon={icon} className="size-[18px]" />
    </span>
  );
}

function Divider() {
  return <span className="mx-1 h-5 w-px bg-border" />;
}

export function MailMock({
  subject,
  sender,
  senderAddress,
  date,
  children,
}: {
  subject: string;
  sender: string;
  senderAddress: string;
  /** e.g. "sex., 16 de out., 08:00 (há 2 dias)". */
  date: string;
  /** The message body. */
  children: ReactNode;
}) {
  return (
    <Card className="gap-0 py-0 text-sm">
      <div className="flex min-h-0 gap-2 p-2">
        {/* The opened message */}
        <div className="min-w-0 flex-1 overflow-hidden rounded-2xl bg-surface-elevated">
          <div aria-hidden className="flex items-center gap-0.5 px-3 py-1.5">
            <Glyph icon={ArrowLeft01Icon} />
            <span className="w-3" />
            <Glyph icon={Archive01Icon} />
            <Glyph icon={Alert02Icon} />
            <Glyph icon={Delete02Icon} />
            <Divider />
            <Glyph icon={MailOpen01Icon} />
            <Glyph icon={Clock01Icon} />
            <Glyph icon={TaskAdd01Icon} />
            <Divider />
            <Glyph icon={Folder01Icon} />
            <Glyph icon={Tag01Icon} />
            <Glyph icon={MoreVerticalIcon} />
            <span className="ml-auto flex items-center gap-1 text-xs text-ink-secondary tabular-nums">
              {copy.pagination}
              <Glyph icon={ChevronLeftIcon} className="opacity-50" />
              <Glyph icon={ChevronRightIcon} />
            </span>
          </div>

          <div className="flex items-start gap-3 py-3 pr-4 pl-16">
            <h2 className="flex flex-1 flex-wrap items-center gap-3 text-xl/snug text-foreground">
              {subject}
              <span aria-hidden className="rounded bg-muted px-1.5 py-0.5 text-xs text-ink-secondary">
                {copy.inboxChip}
              </span>
            </h2>
            <span aria-hidden className="flex">
              <Glyph icon={PrinterIcon} />
              <Glyph icon={LinkSquare02Icon} />
            </span>
          </div>

          <div className="flex items-start gap-4 px-4">
            <Image
              src={avatar}
              width={40}
              height={40}
              alt=""
              className="size-10 shrink-0 rounded-full"
            />
            <div className="min-w-0 flex-1">
              <p className="flex flex-wrap items-baseline gap-x-1.5">
                <span className="font-semibold text-foreground">{sender}</span>
                <span className="text-xs text-ink-secondary">{`<${senderAddress}>`}</span>
              </p>
              <p className="flex items-center gap-0.5 text-xs text-ink-secondary">
                {copy.to}
                <HugeiconsIcon icon={ArrowDown01Icon} aria-hidden className="size-3.5" />
              </p>
            </div>
            <span className="flex shrink-0 items-center gap-1 text-xs text-ink-secondary">
              {date}
              <span aria-hidden className="flex">
                <Glyph icon={StarIcon} />
                <Glyph icon={SmileIcon} />
                <Glyph icon={ArrowTurnBackwardIcon} />
                <Glyph icon={MoreVerticalIcon} />
              </span>
            </span>
          </div>

          <div className="py-3 pr-4 pl-18">{children}</div>

          <div aria-hidden className="flex gap-3 pt-2 pr-4 pb-6 pl-18">
            <span className="flex h-9 items-center gap-2 rounded-full border border-border px-5 font-medium text-ink-secondary">
              <HugeiconsIcon icon={ArrowTurnBackwardIcon} className="size-4" />
              {copy.reply}
            </span>
            <span className="flex h-9 items-center gap-2 rounded-full border border-border px-5 font-medium text-ink-secondary">
              <HugeiconsIcon icon={ArrowTurnForwardIcon} className="size-4" />
              {copy.forward}
            </span>
          </div>
        </div>

        {/* Side apps rail */}
        <div aria-hidden className="hidden w-10 shrink-0 flex-col items-center gap-3 pt-2 lg:flex">
          <Glyph icon={Calendar03Icon} />
          <Glyph icon={Note01Icon} />
          <Glyph icon={Task01Icon} />
          <Glyph icon={UserIcon} />
        </div>
      </div>
    </Card>
  );
}
