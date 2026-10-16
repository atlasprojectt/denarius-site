import { HeroVideo } from "@/components/home/hero-video";
import SpecularButton from "@/components/react-bits/SpecularButton";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/section";
import { showcaseBleed } from "@/components/ui/showcase-card";
import { cn } from "@/lib/cn";
import { DEMO_URL, PAGES } from "@/lib/links";

const videoBleed = showcaseBleed("both");

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="scroll-mt-14 pt-12 pb-[clamp(4.5rem,3rem+6vw,8.5rem)] md:pt-20">
      <Container>
        {/* No desktop, título e subtítulo na primeira linha; as chamadas na
            segunda, sob o título. */}
        <div className="grid gap-x-12 gap-y-7 lg:grid-cols-12 lg:gap-y-10">
          <div className="flex flex-col items-start gap-5 lg:col-span-7 md:gap-6">
            {/* O mesmo "Beta fechado" da chamada final, com o visual de sempre:
                sem fundo, texto em graphite, ponto laranja e a borda hairline
                do site (feita em CSS, como o antigo ring-hairline). Por cima
                dela, só o brilho especular do React Bits em laranja, que
                segue o mouse devagar (followEase 2.5, contra 8 do original)
                e só quando ele chega perto (160px); a borda de base do shader fica desligada
                (baseOpacity 0) para não escurecer a hairline. É um selo, não
                uma ação: renderiza como <span>. Estilos inline porque o CSS
                do componente fica fora das camadas do Tailwind e venceria as
                classes. */}
            <SpecularButton
              as="span"
              size="sm"
              radius={999}
              tintOpacity={0}
              textColor="var(--graphite)"
              lineColor="#ff6524"
              baseOpacity={0}
              intensity={0.85}
              idleIntensity={0.45}
              glow={0.3}
              followEase={2.5}
              proximity={160}
              style={{
                height: "1.75rem",
                padding: "0 0.75rem",
                fontSize: "0.75rem",
                boxShadow: "inset 0 0 0 1px var(--hairline)",
                cursor: "default",
              }}
            >
              <span aria-hidden="true" className="size-1.5 rounded-full bg-coin" />
              Beta fechado
            </SpecularButton>
            <h1 id="inicio-titulo" className="type-display-hero max-w-[15ch] text-ink">
              Saiba onde o mês fecha e simule a saída antes da fatura.
            </h1>
          </div>

          {/* O título já promete a simulação; aqui, só o como (sem código) e o
              que se vê (reais, por time, onde o mês fecha). */}
          <p className="type-narrative max-w-[40ch] text-graphite lg:col-span-5 lg:self-end lg:pb-1.5">
            Conecte OpenAI e Anthropic sem mudar uma linha de código e veja, em reais, onde o mês de
            cada time vai fechar.
          </p>

          <div className="flex flex-wrap gap-3 lg:col-span-7 lg:self-center">
            <ButtonLink href={DEMO_URL}>Pedir demonstração</ButtonLink>
            <ButtonLink href={PAGES.howItWorks.href} variant="secondary">
              Ver como funciona
            </ButtonLink>
          </div>
        </div>

        {/* Vídeo do produto (1920×1080, sem áudio): toca sozinho, mudo, em
            loop e 1,25× mais rápido. As dimensões reservam o espaço antes de carregar.
            Avança para as duas margens como os cards das seções (o mesmo
            --showcase-bleed): vai da borda de um card que avança para a
            esquerda até a de um que avança para a direita. A navbar no topo
            abre até essas mesmas bordas. */}
        <figure
          className={cn("mt-12 flex flex-col gap-2.5 md:mt-16", videoBleed.className)}
          style={videoBleed.style}
        >
          <HeroVideo
            src="/videos/hero.mp4"
            width={1920}
            height={1080}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Demonstração do Denarius em uso"
            className="h-auto w-full rounded-lg bg-card ring-1 ring-ink/6"
          />
          <figcaption className="type-caption text-ash">Exemplo ilustrativo.</figcaption>
        </figure>
      </Container>
    </section>
  );
}
