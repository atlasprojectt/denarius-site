/**
 * Blank placeholder slots reserved for the future product previews.
 * Each exported component keeps the name of the preview it will eventually
 * hold, so the sections don't change when the real assets land.
 */
function BlankPreview({
  label,
  className = "min-h-64",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`w-full rounded-lg border border-dashed border-black/15 dark:border-white/15 ${className}`}
    />
  );
}

/** Slot for the big dashboard overview shown in the hero. */
export function HeroPreview() {
  return (
    <BlankPreview
      label="Espaço reservado para a prévia do painel do Denarius"
      className="min-h-80 lg:min-h-96"
    />
  );
}

/** Slot for the company + team budget bars preview. */
export function BudgetPreview() {
  return (
    <BlankPreview label="Espaço reservado para a prévia de controle de orçamento" />
  );
}

/** Slot for the cost-attribution breakdown preview. */
export function AttributionPreview() {
  return (
    <BlankPreview label="Espaço reservado para a prévia de atribuição de custos" />
  );
}

/** Slot for the projected-close chart preview. */
export function ProjectionPreview() {
  return (
    <BlankPreview label="Espaço reservado para a prévia de projeção de fechamento" />
  );
}

/** Slot for the early-warnings list preview. */
export function AlertsPreview() {
  return (
    <BlankPreview label="Espaço reservado para a prévia de alertas antecipados" />
  );
}

/** Slot for the scenario-simulation preview. */
export function SimulationPreview() {
  return (
    <BlankPreview label="Espaço reservado para a prévia de simulação de cenários" />
  );
}

/** Slot for the compact verdict card preview. */
export function VerdictPreviewCard() {
  return (
    <BlankPreview label="Espaço reservado para a prévia do veredito" />
  );
}

/** Slot for the combined API + subscriptions view preview. */
export function FullPicturePreview() {
  return (
    <BlankPreview label="Espaço reservado para a prévia da visão completa dos gastos" />
  );
}
