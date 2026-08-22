import { AssetSlot } from "./asset-slot";
import { Reveal } from "./reveal";
import { Section } from "./section";

const STEPS = [
  {
    title: "Conecte os provedores",
    text: "Adicione credenciais administrativas da OpenAI e/ou Anthropic. A conexão apenas lê dados de uso e custo.",
  },
  {
    title: "Organize os centros de custo",
    text: "Associe projetos, workspaces e pessoas aos times responsáveis, mantendo lacunas explicitamente visíveis.",
  },
  {
    title: "Defina os orçamentos",
    text: "Crie limites para a empresa e para cada time, então acompanhe ritmo, projeções e alertas.",
  },
];

export function HowItWorksSection() {
  return (
    <Section
      id="como-funciona"
      eyebrow="Como funciona"
      title="Do provedor ao orçamento em três passos."
      intro="A configuração organiza o que já existe. Depois, a sincronização diária mantém a leitura financeira atualizada."
      emphasis="statement"
      surface="raised"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <ol>
          {STEPS.map((step, index) => (
            <Reveal key={step.title} as="li" delay={index * 0.07} className="grid grid-cols-[2.5rem_1fr] gap-4 py-6">
              <span className="font-mono text-xs text-brand-accent-light">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl tracking-tight">{step.title}</h3>
                <p className="explainer mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={0.08}>
          <AssetSlot
            id="conexao-somente-leitura"
            ratio="8 / 5"
            brief="Conexão administrativa com permissão de leitura, focada na segurança da integração."
            dimensions="1440 × 900 px"
          />
        </Reveal>
      </div>
      <Reveal>
        <p className="mt-8 border-l-2 border-brand-accent pl-5 font-mono text-xs leading-6 text-muted-foreground">
          OpenAI e Anthropic · sincronização diária · custos em dólar como fonte
          de verdade · câmbio declarado e congelado por período orçamentário.
        </p>
      </Reveal>
    </Section>
  );
}
