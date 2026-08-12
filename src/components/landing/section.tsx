import type { ReactNode } from "react";
import { SectionHeader, type Emphasis } from "./section-header";
import { cn } from "@/lib/utils";

/**
 * A separação entre seções vem de contraste de superfície, não de um filete em
 * cada bloco. `raised` é usado com parcimônia para marcar os momentos que
 * carregam mais peso narrativo.
 *
 * A superfície é dividida em duas camadas de propósito: o traço atravessa a
 * tela inteira, mas o cinza fica preso à coluna de conteúdo. Sangrar a cor até
 * a borda do viewport passaria por cima da moldura — e é justamente a moldura
 * que define até onde o conteúdo pode existir.
 *
 * A linha de separação é desenhada só no topo de cada seção: a seção seguinte
 * (base com `rule`, `raised` ou o próprio waitlist/rodapé) sempre traz a
 * própria régua. Desenhar também a borda inferior criaria uma linha dupla onde
 * duas seções se encontram.
 */
const SURFACE = {
  base: { outer: "", inner: "" },
  raised: {
    // A borda usa a linha da moldura, e não `--border`: são os dois traços do
    // mesmo sistema se cruzando, então não podem ter pesos diferentes.
    outer: "border-t border-(--frame-line)",
    inner: "bg-card",
  },
} as const;

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  /** Aceita JSX para que a intro possa destacar trechos com `Highlight`. */
  intro?: ReactNode;
  children: ReactNode;
  emphasis?: Emphasis;
  surface?: keyof typeof SURFACE;
  /** Coluna mais estreita para seções densas em texto. */
  narrow?: boolean;
  /** Respiro vertical maior nos momentos principais da página. */
  spacious?: boolean;
  /** Régua horizontal no topo, fechando a grade guia. */
  rule?: boolean;
  className?: string;
};

/**
 * Seção compartilhada da landing: container, espaçamento e hierarquia de
 * cabeçalho (eyebrow → h2 → intro → conteúdo) consistentes.
 *
 * O cabeçalho vive no `SectionHeader`, um Client Component pequeno, para que
 * toda seção ganhe a mesma entrada escalonada sem que nenhuma delas precise
 * deixar de ser Server Component.
 */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  emphasis = "standard",
  surface = "base",
  narrow = false,
  spacious = false,
  rule = false,
  className,
}: SectionProps) {
  const hasHeader = Boolean(eyebrow || title || intro);

  return (
    <section
      id={id}
      className={cn(
        SURFACE[surface].outer,
        // `raised` já traz a régua no topo; acrescentá-la seria uma linha dupla.
        rule && surface !== "raised" && "border-t border-(--frame-line)",
        className,
      )}
    >
      {/* A moldura. Como é borda deste container, e não uma camada por cima,
          os trechos de seções consecutivas se emendam num traço contínuo do
          topo ao rodapé — ele rola junto com a página porque faz parte dela.

          A largura é sempre a mesma, inclusive em seções `narrow`: a moldura é
          a estrutura da página, então quem estreita é o conteúdo dentro dela,
          nunca o traço. Um recuo aqui abriria um degrau no meio da linha.

          Só a partir de `xl`: abaixo disso o container encosta na largura da
          tela e a linha cairia rente à borda do viewport, onde não delimita
          coisa alguma. */}
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-6 xl:border-x xl:border-(--frame-line)",
          SURFACE[surface].inner,
          spacious ? "py-20 sm:py-28 lg:py-32" : "py-16 sm:py-20 lg:py-24",
        )}
      >
        <div className={cn("w-full", narrow && "mx-auto max-w-3xl")}>
          {hasHeader ? (
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              intro={intro}
              emphasis={emphasis}
            />
          ) : null}
          <div className={hasHeader ? "mt-12 sm:mt-14" : undefined}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
