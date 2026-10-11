import { AssetSlot } from "@/components/ui/asset-slot";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/section";
import { CONTACT_URL, SIGNUP_URL } from "@/lib/links";

const GUARANTEES = [
  "Só lê uso e custo",
  "Nenhuma linha de código muda",
  "Nenhum prompt passa por nós",
];

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="scroll-mt-16 pt-12 pb-[clamp(4.5rem,3rem+6vw,8.5rem)] md:pt-20">
      <Container>
        {/* Grade 2×2 no desktop: título e subtítulo na primeira linha, as
            chamadas e as garantias na segunda, alinhadas pela mesma régua. */}
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
            <ButtonLink href={SIGNUP_URL}>Simule o fechamento do seu mês</ButtonLink>
            <ButtonLink href={CONTACT_URL} variant="secondary">
              Fale com o fundador
            </ButtonLink>
          </div>

          <ul className="type-ui flex flex-col gap-2 text-graphite sm:flex-row sm:flex-wrap sm:gap-x-5 lg:col-span-5 lg:self-center">
            {GUARANTEES.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1 rounded-full bg-mist" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <AssetSlot
          layout="app"
          label="Início com o veredito de um time em atenção, a um clique da Simulação"
          className="mt-12 md:mt-16"
          frameClassName="aspect-[4/3] md:aspect-[16/9]"
        />
      </Container>
    </section>
  );
}
