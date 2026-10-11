import type { SVGProps } from "react";
import { Frame } from "@/components/ui/state-icons";

// Os quatro pontos de confiança da home, no mesmo traço do léxico de ícones.

type IconProps = SVGProps<SVGSVGElement>;

/** Só leitura: o olho que lê o uso. */
export function ReadOnlyIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M2.75 12S6.25 5.5 12 5.5 21.25 12 21.25 12 17.75 18.5 12 18.5 2.75 12 2.75 12z" />
      <circle cx="12" cy="12" r="3" />
    </Frame>
  );
}

/** Sem prompts: o balão de conversa cortado. */
export function NoPromptsIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M20.25 11.5c0 4.28-3.7 7.75-8.25 7.75a8.9 8.9 0 0 1-3.3-.63L3.75 20l1.3-3.9a7.4 7.4 0 0 1-1.3-4.6C3.75 7.22 7.45 3.75 12 3.75s8.25 3.47 8.25 7.75z" />
      <path d="m3.5 3.5 17 17" />
    </Frame>
  );
}

/** Número honesto: a calculadora, conta por regra fixa. */
export function RulesIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="5" y="2.75" width="14" height="18.5" rx="2.5" />
      <rect x="8.5" y="6.25" width="7" height="3.25" rx="0.75" />
      <path d="M8.75 13.5h.01M12 13.5h.01M15.25 13.5h.01M8.75 17h.01M12 17h.01M15.25 17h.01" />
    </Frame>
  );
}

/** Controle, não vigilância: o time, e não a pessoa. */
export function TeamIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="9" cy="8.5" r="3.25" />
      <path d="M3 19.5a6 6 0 0 1 12 0" />
      <path d="M15.5 5.5a3.25 3.25 0 0 1 0 6" />
      <path d="M18 14.25a6 6 0 0 1 3 5.25" />
    </Frame>
  );
}
