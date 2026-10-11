import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/section";
import { DEMO_URL, PAGES } from "@/lib/links";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="scroll-mt-14 pt-12 pb-[clamp(4.5rem,3rem+6vw,8.5rem)] md:pt-20">
      <Container>
        {/* No desktop, título e subtítulo na primeira linha; as chamadas na
            segunda, sob o título. */}
        <div className="grid gap-x-12 gap-y-7 lg:grid-cols-12 lg:gap-y-10">
          <h1 id="inicio-titulo" className="type-display-hero max-w-[15ch] text-ink lg:col-span-7">
            Saiba onde o mês fecha e simule a saída antes da fatura.
          </h1>

          <p className="type-narrative max-w-[46ch] text-graphite lg:col-span-5 lg:self-end lg:pb-1.5">
            Conecte OpenAI e Anthropic sem mudar uma linha de código. O Denarius converte tokens em
            reais, projeta onde o mês de cada time fecha e compara, num plano, o que muda com outro
            modelo ou menos volume.
          </p>

          <div className="flex flex-wrap gap-3 lg:col-span-7 lg:self-center">
            <ButtonLink href={DEMO_URL}>Pedir demonstração</ButtonLink>
            <ButtonLink href={PAGES.howItWorks.href} variant="secondary">
              Ver como funciona
            </ButtonLink>
          </div>
        </div>

        {/* Vídeo de teste do produto (1920×1080, sem áudio): toca sozinho,
            mudo e em loop. As dimensões reservam o espaço antes de carregar. */}
        <figure className="mt-12 flex flex-col gap-2.5 md:mt-16">
          <video
            src="/videos/hero-teste.mp4"
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
