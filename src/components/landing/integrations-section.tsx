import { AssetSlot } from "./asset-slot";
import { Section } from "./section";

const SOURCES = [
  { name: "OpenAI", detail: "Uso e custo, direto da API de administração" },
  { name: "Anthropic", detail: "O mesmo para o consumo do Claude" },
  { name: "Assinaturas", detail: "Assentos e ferramentas que você já paga" },
  { name: "Times (CSV)", detail: "Uma planilha simples de quem é de qual time" },
];

export function IntegrationsSection() {
  return (
    <Section
      id="integracoes"
      eyebrow="Integrações"
      title="Tudo o que você já paga, em uma conta só."
      intro="Quatro fontes entram, e sai um número por time comparado ao orçamento."
      emphasis="statement"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <ul className="grid gap-6 sm:grid-cols-2">
          {SOURCES.map((source) => (
            <li key={source.name}>
              <p className="font-medium">{source.name}</p>
              <p className="mt-1 text-sm font-light leading-6 text-muted-foreground">
                {source.detail}
              </p>
            </li>
          ))}
        </ul>
        <AssetSlot
          id="integrations-flow"
          ratio="4 / 3"
          brief="Diagrama das quatro fontes conectadas entrando no Denarius e saindo como um número por time comparado ao orçamento."
          dimensions="1400 × 1050 px"
        />
      </div>
    </Section>
  );
}
