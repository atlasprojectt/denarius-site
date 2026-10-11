import type { ComponentType, SVGProps } from "react";
import { Frame } from "@/components/ui/state-icons";
import type { FeatureId } from "@/lib/links";

// Léxico de ícones do DESIGN.md: um desenho por objeto do domínio, no mesmo traço.

type IconProps = SVGProps<SVGSVGElement>;

/** Composição: gráfico de pizza. */
function CompositionIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M12 3a9 9 0 1 0 9 9h-9z" />
      <path d="M15 3.5A9 9 0 0 1 20.5 9H15z" />
    </Frame>
  );
}

/** Veredito: o medidor de ritmo contra o orçamento. */
function VerdictIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M3.5 16.5a8.5 8.5 0 1 1 17 0" />
      <path d="m12 16.5 4-5" />
      <path d="M3.5 20h17" />
    </Frame>
  );
}

/** Simulação: controles deslizantes. */
function SimulationIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M4 7h9" />
      <path d="M17 7h3" />
      <circle cx="15" cy="7" r="2" />
      <path d="M4 17h3" />
      <path d="M11 17h9" />
      <circle cx="9" cy="17" r="2" />
    </Frame>
  );
}

/** Alertas e resumos: o e-mail. */
function EmailIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </Frame>
  );
}

/** Relatórios: folha com gráfico. */
function ReportIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 17v-3" />
      <path d="M12 17v-5" />
      <path d="M15 17v-2" />
    </Frame>
  );
}

export const FEATURE_ICONS: Record<FeatureId, ComponentType<IconProps>> = {
  composition: CompositionIcon,
  verdict: VerdictIcon,
  simulation: SimulationIcon,
  emails: EmailIcon,
  reports: ReportIcon,
};
