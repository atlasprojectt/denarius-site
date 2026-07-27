import { Section } from "./section";

const QUESTIONS = [
  {
    q: "O Denarius bloqueia o uso de IA?",
    a: "Não. O Denarius é somente leitura. Ele governa por visibilidade, alertas antecipados e recomendações — nunca bloqueia ou altera o uso dos provedores. Agir sobre um alerta é sempre decisão sua.",
  },
  {
    q: "O Denarius armazena prompts ou respostas?",
    a: "Não. O Denarius guarda apenas metadados de uso: contagem de tokens, custo, modelo e identificadores. Prompts e respostas nunca chegam a ele, porque o tráfego de IA não passa pelo produto.",
  },
  {
    q: "Como os custos são atribuídos aos times?",
    a: "Pela estrutura que você já tem: projetos da OpenAI e workspaces da Anthropic mapeiam para times; chaves e usuários mapeiam para pessoas via a lista de colaboradores. Chaves compartilhadas somam ao time responsável, não a um indivíduo.",
  },
  {
    q: "Os orçamentos da empresa e dos times podem ser diferentes?",
    a: "Sim. O orçamento da empresa e os de cada time são guardrails independentes. Cada um é acompanhado com seu próprio gasto, ritmo, projeção e alertas.",
  },
  {
    q: "Com que frequência os dados são atualizados?",
    a: "Diariamente, com uma sincronização imediata assim que você conecta um provedor. Cada número na tela mostra quando foi atualizado, e sincronizações atrasadas são sinalizadas.",
  },
  {
    q: "O que acontece com gastos não atribuídos?",
    a: "Eles vão para uma categoria explícita de “Não atribuído”, em vez de desaparecer. O total da empresa sempre equivale à soma dos times mais o não atribuído, e o Denarius sugere mapear o que está ali.",
  },
  {
    q: "É possível ocultar nomes individuais?",
    a: "Sim. Os nomes são visíveis apenas para administradores por padrão, e o armazenamento por pessoa pode ser desativado por completo, mantendo tudo no nível de time.",
  },
  {
    q: "Como funciona a cobrança?",
    a: "É uma mensalidade fixa, definida pela faixa de tamanho da empresa — não há cobrança por token nem por volume de gasto monitorado. A contratação é conduzida pela nossa equipe, então o valor é fechado na conversa.",
  },
  {
    q: "Quais provedores são compatíveis?",
    a: "OpenAI e Anthropic são as integrações medidas na v1. Assinaturas e assentos de outras ferramentas de IA podem ser registrados manualmente e entram no mesmo orçamento.",
  },
];

export function FAQSection() {
  return (
    <Section
      id="perguntas-frequentes"
      eyebrow="Perguntas frequentes"
      title="Dúvidas comuns."
      narrow
    >
      <div className="divide-y divide-border">
        {QUESTIONS.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:hidden [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                aria-hidden="true"
                className="text-muted-foreground transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
