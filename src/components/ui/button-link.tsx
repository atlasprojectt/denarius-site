import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-action text-on-action hover:bg-action-hover hover:-translate-y-px active:translate-y-0 motion-reduce:hover:translate-y-0",
  secondary: "bg-control text-ink ring-1 ring-inset ring-hairline hover:bg-hover",
  tertiary:
    "text-graphite ring-1 ring-inset ring-hairline hover:bg-hover hover:text-ink",
};

const SIZES: Record<Size, string> = {
  md: "h-9 px-4",
  lg: "h-10 px-5",
};

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: Variant;
  size?: Size;
};

/** Link com a forma de botão do DESIGN.md: cápsula de tinta, nunca laranja. */
export function ButtonLink({
  variant = "primary",
  size = "lg",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "type-body-strong inline-flex min-h-11 items-center justify-center gap-2 rounded-full whitespace-nowrap transition-[background-color,color,translate] duration-150 ease-standard md:min-h-0",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    />
  );
}
