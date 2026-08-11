/**
 * Espaço reservado para um visual que ainda será desenhado.
 *
 * O `UI.md` pede que o slot reserve espaço intencional, preserve a proporção
 * esperada, continue responsivo e seja identificável para substituição
 * posterior. Nada aqui simula a interface: sem skeleton, sem ícone, sem mockup
 * falso.
 *
 * Em `bare` o espaço fica limpo — nenhum texto visível, só a superfície na
 * proporção certa. É o modo usado dentro dos cards, onde a legenda competiria
 * com a composição. O rótulo acessível e o `data-asset` continuam lá, então
 * nada se perde: a descrição segue no `aria-label` e o `ASSETS.md` continua
 * sendo a referência de tamanho.
 */
import { cn } from "@/lib/utils";

type AssetSlotProps = {
  /** Identificador estável do visual, usado para ligar o arquivo depois. */
  id: string;
  /** CSS aspect-ratio, ex.: "3 / 2". */
  ratio: string;
  /** O que este visual precisa provar. Vira também a descrição acessível. */
  brief: string;
  /** Tamanho recomendado do arquivo final, ex.: "1600 × 1067 px". */
  dimensions: string;
  /** Espaço limpo, sem legenda visível. */
  bare?: boolean;
  className?: string;
};

export function AssetSlot({
  id,
  ratio,
  brief,
  dimensions,
  bare = false,
  className,
}: AssetSlotProps) {
  return (
    <div
      data-asset={id}
      role="img"
      aria-label={`Imagem futura: ${brief} Tamanho recomendado: ${dimensions}.`}
      style={{ aspectRatio: ratio }}
      /* `cn` e não interpolação: dentro do card o slot cobre a textura
         laranja, então o chamador precisa poder trocar o fundo — e concatenar
         classes cruas não garante qual delas vence. */
      className={cn(
        "w-full rounded-2xl",
        // Tracejado só quando há legenda. No modo limpo o traço contínuo faz o
        // espaço ler como área reservada, e não como caixa de instrução.
        //
        // O fundo do modo limpo é um passo acima do card, que é da cor do
        // fundo da página: é essa diferença que faz a superfície do card
        // aparecer em volta do recorte e virar borda. Igualados, o espaço
        // sumiria dentro do card.
        bare
          ? "border border-(--frame-line) bg-card"
          : "flex flex-col justify-end gap-2 border border-dashed border-(--frame-line) bg-card/30 p-5",
        className,
      )}
    >
      {bare ? null : (
        <>
          {/* O texto encolhe no mobile: em coluna estreita o slot fica baixo, e
              a legenda precisa caber dentro da proporção reservada — ela é
              recado para quem desenha o mock, não conteúdo de leitura. */}
          <p
            aria-hidden="true"
            className="max-w-md font-mono text-xs leading-5 tracking-[-0.01em] text-muted-foreground sm:text-[0.9375rem] sm:leading-7"
          >
            {brief}
          </p>
          <p
            aria-hidden="true"
            className="font-mono text-xs text-brand-accent-light"
          >
            {dimensions}
          </p>
        </>
      )}
    </div>
  );
}
