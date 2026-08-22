import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CapabilityCardProps = {
  mediaSide?: "top" | "bottom";
  eyebrow: string;
  title: string;
  description: string;
  icon?: ReactNode;
  media: ReactNode;
  action?: ReactNode;
  className?: string;
};

export function CapabilityCard({
  mediaSide = "bottom",
  eyebrow,
  title,
  description,
  icon,
  media,
  action,
  className,
}: CapabilityCardProps) {
  const mediaFirst = mediaSide === "top";

  return (
    <article
      className={cn(
        "h-full rounded-[20px] border border-border bg-background p-2.5 sm:p-3",
        className,
      )}
    >
      <div className="flex h-full flex-col gap-5">
        <div
          className={cn(
            "px-3 pt-3 sm:px-4 sm:pt-4",
            mediaFirst && "order-2 pb-3 pt-0 sm:pb-4 sm:pt-0",
          )}
        >
          <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-brand-accent-light">
            {icon ? <span className="text-muted-foreground">{icon}</span> : null}
            <p>{eyebrow}</p>
          </div>
          <h3 className="mt-4 text-xl tracking-tight text-balance sm:text-2xl">
            {title}
          </h3>
          <p className="explainer mt-4 text-muted-foreground">{description}</p>
          {action ? <div className="mt-6">{action}</div> : null}
        </div>
        <div className={cn(!mediaFirst && "mt-auto", mediaFirst && "order-1")}>
          {media}
        </div>
      </div>
    </article>
  );
}
