import { AssetSlot } from "./asset-slot";
import { Section } from "./section";

/** Fontes conectadas, listadas dentro do passo 1 em vez de virarem seção. */
const SOURCES = [
  { name: "OpenAI", detail: "Uso e custo pela Admin API" },
  { name: "Anthropic", detail: "Uso e custo do Claude pela Admin API" },
  { name: "Colaboradores (CSV)", detail: "A estrutura de times da empresa" },
  { name: "Assinaturas manuais", detail: "Ferramentas e assentos já pagos" },
];

const STEPS = [
  {
    title: "Conecte",
    text: "Chaves somente de leitura da OpenAI e da Anthropic, a estrutura de times por CSV e as assinaturas que a empresa já paga. Dá para começar só com o CSV e as assinaturas, antes de qualquer chave.",
  },
  {
    title: "Defina os limites",
    text: "O orçamento da empresa e o de cada time. É o que transforma consumo em contexto de orçamento — sem limite não existe veredito nem aviso.",
  },
  {
    title: "Acompanhe o mês",
    text: "O uso vira dinheiro, é atribuído aos times e comparado ao orçamento uma vez por dia. Quando o ritmo aponta para um estouro, o aviso chega antes do fechamento.",
  },
];

export function HowItWorksSection() {
  return (
    <Section
      id="como-funciona"
      eyebrow="Como funciona"
      title="Entra no fluxo que a empresa já tem."
      intro="O Denarius se conecta às fontes onde o gasto já acontece. Nada é instalado no caminho das requisições, nenhum provedor precisa ser trocado e ninguém muda a forma de trabalhar."
      surface="raised"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ol className="space-y-10">
          {STEPS.map((step, index) => (
            <li key={step.title} className="border-t border-border pt-5">
              <p className="font-mono text-xs tracking-widest text-brand-accent-light">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {step.text}
              </p>

              {index === 0 ? (
                <dl className="mt-5 divide-y divide-border rounded-lg border border-border px-4">
                  {SOURCES.map((source) => (
                    <div
                      key={source.name}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 py-2.5 text-sm"
                    >
                      <dt>{source.name}</dt>
                      <dd className="text-muted-foreground">{source.detail}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <figure>
            <AssetSlot
              id="evolucao-mes"
              ratio="4 / 5"
              brief="Curva acumulada do mês: realizado, ritmo esperado e projeção, com a linha cheia até hoje e a projeção tracejada cruzando a linha de orçamento."
            />
            <figcaption className="mt-4 text-sm leading-6 text-muted-foreground">
              A curva do mês com o ritmo esperado e a projeção tracejada. É onde
              o estouro aparece dias antes de acontecer.
            </figcaption>
          </figure>
        </div>
      </div>

      <p className="mt-14 max-w-3xl border-l-2 border-brand-accent pl-5 text-base leading-8 text-foreground sm:text-lg">
        A mesma tela responde a três perguntas diferentes: a diretoria quer
        saber se está sob controle, o financeiro quer saber quanto vai ser, e
        quem constrói quer saber o que gerou o custo.
      </p>
    </Section>
  );
}
