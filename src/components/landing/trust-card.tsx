"use client";

import type { ReactElement, Ref } from "react";
import { cloneElement, useRef } from "react";

type AnimatedIconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

type TrustCardProps = {
  title: string;
  text: string;
  icon: ReactElement<{ ref?: Ref<AnimatedIconHandle> }>;
};

export function TrustCard({ title, text, icon }: TrustCardProps) {
  const iconRef = useRef<AnimatedIconHandle>(null);

  return (
    <article
      className="rounded-xl border border-border bg-background p-5 sm:p-6"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      {cloneElement(icon, { ref: iconRef })}
      <h3 className="mt-5 text-xl tracking-tight">{title}</h3>
      <p className="explainer mt-3 text-sm text-muted-foreground">{text}</p>
    </article>
  );
}
