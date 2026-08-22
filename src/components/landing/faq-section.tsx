import { FaqItem } from "./faq-item";
import { Reveal } from "./reveal";
import { Section } from "./section";

const QUESTIONS = [
  {
    q: "Como funciona a lista de acesso?",
    a: "Você deixa nome e e-mail corporativo. Liberamos o acesso por etapas e entramos em contato com as instruções quando uma nova rodada abrir.",
  },
  {
    q: "O Denarius bloqueia ou limita o uso de IA?",
    a: "Não. O Denarius é uma camada de leitura e governança: mostra riscos e permite simular ações, mas não bloqueia nem altera o uso.",
  },
  {
    q: "O Denarius armazena prompts ou respostas?",
    a: "Não. Ele usa metadados de uso e custo, como valor, modelo, data e identificadores. Prompts, respostas, anexos e conversas não são armazenados.",
  },
  {
    q: "Quais provedores são suportados?",
    a: "OpenAI e Anthropic nesta versão. Assinaturas e assentos também entram na composição financeira.",
  },
  {
    q: "Com que frequência os dados são sincronizados?",
    a: "Uma vez por dia, além da primeira sincronização ao conectar o provedor. Cada leitura informa quando os dados foram atualizados.",
  },
  {
    q: "Quando a projeção começa a aparecer?",
    a: "A partir do quinto dia do período, quando existe uma base mínima de observação. Até lá, o produto indica que ainda está coletando ritmo.",
  },
  {
    q: "O que acontece com gastos não atribuídos?",
    a: "Eles aparecem como “Não atribuído” e continuam no total da empresa até que a origem seja mapeada. Nenhum custo desaparece da leitura.",
  },
  {
    q: "Os alertas se repetem todos os dias?",
    a: "Não. Há um aviso por combinação de time, faixa e período. Um novo alerta só é enviado quando existe uma escalada real.",
  },
  {
    q: "O Denarius substitui a fatura oficial?",
    a: "Não. O Denarius antecipa e organiza a leitura para decisão; a fatura emitida pelo provedor continua sendo o documento oficial de cobrança.",
  },
];

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
      title="Antes de conectar."
      intro="As respostas essenciais sobre acesso, dados, sincronização e limites do produto."
      emphasis="standard"
      narrow
      surface="raised"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
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
