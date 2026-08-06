import { Section } from "./section";

const QUESTIONS = [
  {
    q: "Como funciona a lista de acesso?",
    a: "O acesso está sendo liberado aos poucos. Você deixa o e-mail e entramos em contato quando abrirmos a próxima leva de testes, com as instruções para conectar sua conta.",
  },
  {
    q: "O Denarius bloqueia o uso de IA?",
    a: "Não. O Denarius é somente leitura. Ele governa por visibilidade, avisos antecipados e recomendações — nunca bloqueia nem altera o uso dos provedores. Agir sobre um aviso é sempre decisão sua.",
  },
  {
    q: "O Denarius armazena prompts ou respostas?",
    a: "Não. Ele guarda apenas metadados de uso: contagem de tokens, custo, modelo e identificadores. Prompts e respostas nunca chegam até ele, porque o tráfego de IA não passa pelo produto.",
  },
  {
    q: "Como os custos são atribuídos aos times?",
    a: "Pela estrutura que você já tem: projetos da OpenAI e workspaces da Anthropic mapeiam para times; chaves e usuários mapeiam para pessoas pela lista de colaboradores. Chaves compartilhadas somam ao time responsável, não a um indivíduo.",
  },
  {
    q: "Os orçamentos da empresa e dos times podem ser diferentes?",
    a: "Sim. O orçamento da empresa e os de cada time são limites independentes. Cada um é acompanhado com seu próprio gasto, ritmo, projeção e avisos.",
  },
  {
    q: "Com que frequência os dados são atualizados?",
    a: "Uma vez por dia, com uma sincronização imediata assim que você conecta um provedor. Cada número na tela mostra quando foi atualizado, e sincronizações atrasadas são sinalizadas.",
  },
  {
    q: "O que acontece com gastos não atribuídos?",
    a: "Vão para uma categoria explícita de “Não atribuído”, em vez de desaparecer. O total da empresa sempre equivale à soma dos times mais o não atribuído, e o produto sugere mapear o que está ali.",
  },
  {
    q: "É possível ocultar nomes individuais?",
    a: "Sim. Os nomes são visíveis apenas para administradores por padrão, e o armazenamento por pessoa pode ser desligado por completo, mantendo tudo no nível de time.",
  },
  {
    q: "Quais provedores são compatíveis?",
    a: "OpenAI e Anthropic são as integrações medidas nesta versão. Assinaturas e assentos de outras ferramentas de IA podem ser cadastrados manualmente e entram no mesmo orçamento.",
  },
  {
    q: "Como funciona a cobrança?",
    a: "Mensalidade fixa, definida pela faixa de tamanho da empresa — não há cobrança por token nem por volume de gasto acompanhado. A contratação é conduzida pela nossa equipe, então o valor é fechado na conversa.",
  },
];

/** Dados estruturados para que as respostas apareçam na busca. */
const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: QUESTIONS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export function FAQSection() {
  return (
    <Section
      id="perguntas-frequentes"
      eyebrow="Perguntas frequentes"
      title="O que costumam perguntar antes de conectar."
      emphasis="quiet"
      narrow
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <div className="divide-y divide-border border-t border-border">
        {QUESTIONS.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md font-medium marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                aria-hidden="true"
                className="shrink-0 text-lg leading-none text-muted-foreground transition-transform duration-(--duration-standard) ease-(--ease-out-quart) group-open:rotate-45 motion-reduce:transform-none"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
