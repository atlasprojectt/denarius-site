/**
 * Espaço reservado para um visual que ainda será desenhado.
 *
 * O `UI.md` pede que o slot reserve espaço intencional, preserve a proporção
 * esperada, continue responsivo e seja rotulado com clareza para substituição
 * posterior — é o rótulo que faltava no componente anterior. Nada aqui simula
 * a interface: sem skeleton, sem ícone, sem mockup falso.
 */
type AssetSlotProps = {
  /** Identificador estável do visual, usado para ligar o arquivo depois. */
  id: string;
  /** CSS aspect-ratio, ex.: "3 / 2". */
  ratio: string;
  /** O que este visual precisa provar. Vira também a descrição acessível. */
  brief: string;
  className?: string;
};

export function AssetSlot({ id, ratio, brief, className = "" }: AssetSlotProps) {
  return (
    <div
      data-asset={id}
      role="img"
      aria-label={`Espaço reservado para o visual “${id}”: ${brief}`}
      style={{ aspectRatio: ratio }}
      className={`flex w-full flex-col justify-end gap-1 rounded-xl border border-dashed border-border bg-card/30 p-5 ${className}`}
    >
      <p aria-hidden="true" className="font-mono text-xs text-brand-accent-light">
        {id}
        <span className="text-muted-foreground"> · {ratio.replace(/\s/g, "")}</span>
      </p>
      <p
        aria-hidden="true"
        className="max-w-md text-xs leading-5 text-muted-foreground"
      >
        {brief}
      </p>
    </div>
  );
}
