import type { Metadata } from "next";
import Link from "next/link";
import { DemoForm } from "@/components/demo/demo-form";
import { Container } from "@/components/ui/section";
import { ChevronLeftIcon } from "@/components/ui/state-icons";
import { NoPromptsIcon, ReadOnlyIcon } from "@/components/ui/trust-icons";

export const metadata: Metadata = {
  title: "Pedir demonstração",
  description:
    "Conte sobre a sua empresa e veja, com o fundador, como o Denarius transforma o uso de OpenAI e Anthropic em gasto por time, orçamento e projeção de fechamento.",
};

// Só o que o produto entrega hoje (narrativa-mestre e Como funciona).
const AGENDA = [
  {
    title: "Todo o gasto em reais, por time",
    text: "OpenAI, Anthropic e as assinaturas por assento, somadas por time, provedor e modelo.",
  },
  {
    title: "O veredito e a projeção",
    text: "Onde o mês de cada time fecha contra o orçamento, antes da fatura.",
  },
  {
    title: "Como a conexão funciona",
    text: "Só leitura, uma vez por dia, e nunca com acesso a prompts ou respostas.",
  },
];

const GUARANTEES = [
  { icon: ReadOnlyIcon, text: "Só leitura: não bloqueia nem fica no caminho das chamadas." },
  { icon: NoPromptsIcon, text: "Sem prompts: guarda só metadados de uso." },
];

/**
 * Pedido de demonstração. No desktop, o argumento à esquerda e o formulário à
 * direita, num card. No celular: título, formulário e depois a pauta, para o
 * formulário aparecer cedo sem perder o contexto. O envio está em
 * app/api/demo e lib/demo.
 */
export default function DemoPage() {
  return (
    <section
      aria-labelledby="demo-titulo"
      className="pt-8 pb-[clamp(3.5rem,2.5rem+4vw,6.5rem)] md:pt-14"
    >
      <Container>
        <Link
          href="/"
          className="type-ui inline-flex min-h-11 items-center gap-1 text-graphite transition-colors duration-150 ease-standard hover:text-ink md:min-h-0"
        >
          <ChevronLeftIcon className="size-3.5" />
          Início
        </Link>

        <div className="mt-6 grid gap-x-12 gap-y-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr]">
          <div className="lg:col-span-5">
            <h1 id="demo-titulo" className="type-display-hero max-w-[14ch] text-ink">
              Veja o seu gasto com IA sob controle.
            </h1>
            <p className="type-narrative mt-6 max-w-[42ch] text-graphite">
              Conte um pouco sobre a empresa. A demonstração parte do seu cenário: provedores,
              times e orçamento.
            </p>
          </div>

          <div className="rounded-lg bg-card p-5 ring-1 ring-ink/6 sm:p-8 lg:col-span-7 lg:row-span-2 lg:self-start">
            <DemoForm />
          </div>

          <div className="lg:col-span-5">
            <h2 className="type-title text-ink">O que você vai ver</h2>
            <ol className="mt-4 border-t border-hairline">
              {AGENDA.map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[2rem_1fr] gap-x-3 border-b border-hairline py-5"
                >
                  <span className="type-caption pt-0.5 text-ash tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="type-body-strong text-ink">{item.title}</h3>
                    <p className="type-body text-graphite">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <ul className="mt-6 flex flex-col gap-3">
              {GUARANTEES.map((item) => (
                <li key={item.text} className="type-ui flex items-start gap-2.5 text-graphite">
                  <item.icon className="mt-0.5 size-4 shrink-0 text-mist" />
                  {item.text}
                </li>
              ))}
            </ul>

            <p className="type-caption mt-6 text-ash">
              Beta fechado: cada demonstração é feita pelo fundador. Depois do envio, respondemos
              pelo e-mail informado para combinar o horário.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
