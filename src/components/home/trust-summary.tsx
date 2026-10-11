import { MoreLink } from "@/components/site/more-link";
import { Section } from "@/components/ui/section";
import { PAGES } from "@/lib/links";

const POINTS = [
  {
    title: "Só leitura",
    text: "Lê uso e custo uma vez por dia. Não bloqueia nem fica no caminho das chamadas.",
  },
  {
    title: "Sem prompts",
    text: "Guarda só metadados de uso, nunca prompts ou respostas.",
  },
  {
    title: "Número honesto",
    text: "Projeção por regras fixas. A IA só redige o texto.",
  },
  {
    title: "Controle, não vigilância",
    text: "Não existe ranking de pessoas.",
  },
];

export function TrustSummary() {
  return (
    <Section id="seguranca" labelledBy="seguranca-titulo">
      <h2 id="seguranca-titulo" className="type-display-section max-w-[20ch] text-ink">
        Nenhuma linha de código muda. Nenhum prompt passa por nós.
      </h2>

      <dl className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
        {POINTS.map((point) => (
          <div key={point.title} className="flex flex-col gap-2 border-t border-hairline pt-5">
            <dt className="type-title text-ink">{point.title}</dt>
            <dd className="type-body text-graphite">{point.text}</dd>
          </div>
        ))}
      </dl>

      <MoreLink href={PAGES.security.href} className="mt-10 md:mt-12">
        Saiba mais sobre segurança e números
      </MoreLink>
    </Section>
  );
}
