import type { ReactNode } from "react";

/**
 * Destaque dentro de um parágrafo.
 *
 * O contraste vem da cor, não da espessura: o texto de apoio fica em
 * `muted-foreground` e a parte que carrega o argumento sobe para a cor cheia.
 * Negrito no meio de um parágrafo cria uma segunda hierarquia e deixa a leitura
 * irregular — a cor separa sem interromper.
 *
 * Continua sendo `<strong>` porque a ênfase é real e precisa chegar a leitor de
 * tela; só o peso é anulado.
 */
export function Highlight({ children }: { children: ReactNode }) {
  return (
    <strong className="[font-weight:inherit] text-foreground">{children}</strong>
  );
}

/** A mesma ideia sobre o glow do hero, onde o texto base já é branco. */
export function HighlightOnDark({ children }: { children: ReactNode }) {
  return (
    <strong className="[font-weight:inherit] text-foreground">{children}</strong>
  );
}
