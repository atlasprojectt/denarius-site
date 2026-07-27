import { AssetPlaceholder } from "./asset-placeholder";
import { Section } from "./section";

/** Connected sources, listed inside step 1 instead of a separate section. */
const SOURCES = [
  { name: "OpenAI", detail: "Uso e custo via Admin API" },
  { name: "Anthropic", detail: "Uso e custo do Claude via Admin API" },
  { name: "Colaboradores (CSV)", detail: "Estrutura de times da empresa" },
  { name: "Assinaturas manuais", detail: "Ferramentas e assentos pagos" },
];

const STEPS = [
  {
    title: "Conecte",
    text: "Chaves somente para leitura da OpenAI e da Anthropic, a estrutura de times por CSV e as assinaturas que a empresa já paga.",
  },
  {
    title: "Defina os limites",
    text: "O orçamento da empresa e o de cada time. É o que transforma consumo em contexto de orçamento.",
  },
  {
    title: "Mantenha o controle",
    text: "O uso vira dinheiro, é atribuído aos times e comparado ao orçamento — com aviso quando algo exige decisão.",
  },
];

export function HowItWorksSection() {
  return (
    <Section
      id="como-funciona"
      eyebrow="Como funciona"
      title="Do uso espalhado a um orçamento governado."
      intro="O Denarius se conecta às fontes onde o gasto já acontece. Nada é instalado no caminho das requisições e nenhum provedor precisa ser trocado."
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ol className="space-y-8">
          {STEPS.map((step, index) => (
            <li key={step.title} className="border-t border-border pt-4">
              <p className="text-sm font-semibold text-brand-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {step.text}
              </p>

              {index === 0 ? (
                <ul className="mt-4 divide-y divide-border">
                  {SOURCES.map((source) => (
                    <li
                      key={source.name}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 py-2 text-sm"
                    >
                      <span>{source.name}</span>
                      <span className="text-muted-foreground">
                        {source.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <AssetPlaceholder
            id="integrations-flow"
            aspectRatio="4 / 3"
            minHeight="18rem"
            ariaLabel="Espaço reservado para o diagrama de conexão das fontes ao Denarius."
          />
        </div>
      </div>
    </Section>
  );
}
