import { FaqItem } from "./faq-item";
import { Reveal } from "./reveal";
import { Section } from "./section";

const QUESTIONS = [
  {
    q: "Como funciona a lista de acesso?",
    a: "Você deixa nome e e-mail. Liberamos o acesso por etapas e entramos em contato com as instruções para conectar a conta.",
  },
  {
    q: "O Denarius bloqueia o uso de IA?",
    a: "Não. O Denarius é somente leitura: mostra riscos e recomenda ações, mas nunca bloqueia ou altera o uso.",
  },
  {
    q: "O Denarius armazena prompts ou respostas?",
    a: "Não. Ele armazena apenas metadados de uso, como tokens, custo, modelo e identificadores.",
  },
  {
    q: "Como os custos são atribuídos aos times?",
    a: "Projetos, workspaces, chaves e usuários são ligados aos times pela sua estrutura. Chaves compartilhadas ficam no time responsável.",
  },
  {
    q: "Os orçamentos da empresa e dos times podem ser diferentes?",
    a: "Sim. Empresa e times têm limites, projeções e alertas independentes.",
  },
  {
    q: "Com que frequência os dados são atualizados?",
    a: "Uma vez por dia, além da primeira sincronização ao conectar o provedor. A tela mostra quando os dados foram atualizados.",
  },
  {
    q: "O que acontece com gastos não atribuídos?",
    a: "O valor aparece como “Não atribuído” e continua no total da empresa até você mapear a origem.",
  },
  {
    q: "É possível ocultar nomes individuais?",
    a: "Sim. Nomes ficam restritos a administradores e o dado individual pode ser desativado.",
  },
  {
    q: "Quais provedores são compatíveis?",
    a: "OpenAI e Anthropic nesta versão. Outras assinaturas podem ser cadastradas manualmente.",
  },
  {
    q: "Como funciona a cobrança?",
    a: "Mensalidade fixa por faixa de tamanho da empresa. A contratação é feita diretamente com nossa equipe.",
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
      title="O que perguntam antes de conectar."
      emphasis="quiet"
      narrow
      surface="raised"
      className="text-center"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      {/* O atraso tem teto em quatro posições: são dez perguntas, e escalonar
          todas deixaria a última esperando quase meio segundo para aparecer. */}
      <div className="divide-y divide-border border-t border-border">
        {QUESTIONS.map((item, index) => (
          <Reveal key={item.q} delay={Math.min(index, 4) * 0.04}>
            <FaqItem question={item.q} answer={item.a} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
