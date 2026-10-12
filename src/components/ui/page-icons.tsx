import type { ComponentType, SVGProps } from "react";
import { Frame } from "@/components/ui/state-icons";
import { FEATURE_ICONS } from "@/components/ui/feature-icons";

// Um ícone por página, no mesmo traço do léxico (Frame: 24px, linha de 2px,
// pontas redondas), para guiar a navegação. Aparecem na abertura de cada
// página (PageIntro), em tinta faint, só como apoio visual.
// Nenhum repete o glifo de outro objeto do léxico: a Simulação reaproveita o
// seu próprio (os controles deslizantes do menu Produto).

type IconProps = SVGProps<SVGSVGElement>;

/** Como funciona: o gasto espalhado convergindo para um veredito. */
function HowItWorksIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="4.5" cy="5" r="1.5" />
      <circle cx="4.5" cy="12" r="1.5" />
      <circle cx="4.5" cy="19" r="1.5" />
      <path d="M6 5c4.5 0 5 7 9 7" />
      <path d="M6 12h9" />
      <path d="M6 19c4.5 0 5-7 9-7" />
      <circle cx="18" cy="12" r="3" />
    </Frame>
  );
}

/** Segurança: o escudo com o check (o escudo com pessoa é "acesso ao app"). */
function SecurityIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M12 3.5 5 6v5.5c0 4.3 3 7.7 7 9 4-1.3 7-4.7 7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </Frame>
  );
}

/** Perguntas: o ponto de interrogação no círculo. */
function FaqIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.6v.6" />
      <path d="M12 17h.01" />
    </Frame>
  );
}

/** Por que agora: o gasto subindo, o argumento central da página. */
function WhyNowIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M3.5 20.5h17" />
      <path d="m4.5 16 5-5 3.5 3.5 7-7" />
      <path d="M15 7.5h5v5" />
    </Frame>
  );
}

/** Ícone de cada página, pelas chaves de PAGES (lib/links). */
export const PAGE_ICONS = {
  howItWorks: HowItWorksIcon,
  simulation: FEATURE_ICONS.simulation,
  security: SecurityIcon,
  faq: FaqIcon,
  whyNow: WhyNowIcon,
} satisfies Record<string, ComponentType<IconProps>>;
