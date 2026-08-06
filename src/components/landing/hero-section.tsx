import Image from "next/image";
import { WAITLIST_ANCHOR } from "./links";

/**
 * Hero como um palco único voltado ao produto, sobre o glow da marca. O texto é
 * deliberadamente curto: a captura do painel precisa começar a aparecer ainda
 * na primeira tela, então tudo que já é dito em outra seção — a pílula de
 * "somente leitura", a nota sobre liberação de acesso — saiu daqui e virou uma
 * única linha de apoio abaixo dos CTAs.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Glow da marca, dissolvendo no fundo da página apenas embaixo. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/hero-glow.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pt-12 pb-20 sm:pt-16 sm:pb-28">
        <div className="max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-white/70 fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards duration-500 ease-out">
            Governança de gastos com IA
          </p>
          <h1 className="text-balance text-4xl font-medium tracking-tight text-white sm:text-5xl fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-75 duration-500 ease-out">
            Saiba como o mês vai fechar antes da fatura chegar.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/85 fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-150 duration-500 ease-out">
            Uma visão única do gasto com IA da empresa, comparada ao orçamento
            todos os dias.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4 fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-200 duration-500 ease-out">
            <a
              href={WAITLIST_ANCHOR}
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors duration-(--duration-standard) ease-(--ease-out-quart) hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Entrar na lista de acesso
              <span
                aria-hidden="true"
                className="transition-transform duration-(--duration-standard) ease-(--ease-out-quart) group-hover:translate-x-0.5 motion-reduce:transform-none"
              >
                →
              </span>
            </a>
            <a
              href="#como-funciona"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/40 px-5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ver como funciona
            </a>
          </div>

          {/* O redutor de risco em uma linha; o detalhe fica na seção Confiança. */}
          <p className="mt-4 text-sm text-white/65 fade-in animate-in fill-mode-backwards delay-300 duration-500 ease-out">
            Somente leitura ·{" "}
            <a
              href="#confianca"
              className="underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              sem acesso a prompts ou respostas
            </a>
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-white/15 sm:mt-12 fade-in slide-in-from-bottom-5 animate-in fill-mode-backwards delay-300 duration-1000 ease-out">
          <Image
            src="/hero-dashboard.png"
            alt="Painel do Denarius: veredito de estouro do time de Engenharia, gasto do mês contra o orçamento com projeção de fechamento, gasto por fonte e a tabela de orçamento dos times."
            width={1751}
            height={934}
            preload
            sizes="(min-width: 1152px) 1104px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
