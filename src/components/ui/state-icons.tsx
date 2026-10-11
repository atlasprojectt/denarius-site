import type { SVGProps } from "react";

// Gramática de ícones de estado do DESIGN.md: um desenho por significado.

type IconProps = SVGProps<SVGSVGElement>;

export function Frame({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Feito, no controle. */
export function DoneIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.25 2.4 2.4 4.6-5.15" />
    </Frame>
  );
}

/** Atenção: limite atingido. */
export function AttentionIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.75v5" />
      <path d="M12 16.25h.01" />
    </Frame>
  );
}

/** Estourado. */
export function BreachedIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m9.25 9.25 5.5 5.5" />
      <path d="m14.75 9.25-5.5 5.5" />
    </Frame>
  );
}

/** Pendente: coletando ritmo. */
export function PendingIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </Frame>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />
    </Frame>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="m14.5 6.5-5.5 5.5 5.5 5.5" />
    </Frame>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Frame>
  );
}
