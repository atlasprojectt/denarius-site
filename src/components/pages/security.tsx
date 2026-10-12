import { CtaBand } from "@/components/site/cta-band";
import { NextPage } from "@/components/site/next-page";
import { PageIntro } from "@/components/site/page-intro";
import { PAGE_ICONS } from "@/components/ui/page-icons";
import { Section, SectionHeader } from "@/components/ui/section";
import { PAGES } from "@/lib/links";

const SECTIONS = [
  { id: "leitura", label: "Só leitura" },
  { id: "protecao", label: "Proteção dos dados" },
  { id: "numeros", label: "Número honesto" },
  { id: "privacidade", label: "Controle, não vigilância" },
  { id: "limites", label: "O que não faz" },
];

const READ_MODES = [
  {
    title: "Um proxy",
    tone: "text-graphite",
    items: [
      "Fica no meio de cada chamada de IA, para medir e bloquear.",
      "Exige mudar código e rotear todo o tráfego.",
      "Vira um ponto de falha e de latência.",
      "Os prompts passam por um terceiro.",
    ],
  },
  {
    title: "O Denarius",
    tone: "text-ink",
    items: [
      "Lê, uma vez por dia, o que os provedores já expõem nas APIs administrativas.",
      "Nenhuma linha de código muda.",
      "Nenhuma latência nova nas chamadas.",
      "Nenhum prompt passa por nós.",
    ],
  },
];

const GROUPS = [
  {
    id: "protecao",
    title: "Proteção dos dados.",
    lead: "Construído para passar numa auditoria técnica.",
    items: [
      "Chaves dos provedores criptografadas e revogáveis a qualquer momento.",
      "O Denarius só lê uso e custo. As permissões de cada chave dependem do provedor.",
      "Cada empresa isolada no banco por Row-Level Security, com o isolamento testado automaticamente a cada mudança.",
      "Trilha de auditoria das ações administrativas.",
      "LGPD em autoatendimento: exportar ou excluir os dados.",
    ],
  },
  {
    id: "numeros",
    title: "Número honesto ou nenhum número.",
    lead: "Um CFO cético precisa conseguir defender cada valor.",
    items: [
      "Todo valor traz a data da última atualização.",
      "Câmbio congelado no início do mês e mostrado na tela.",
      "Modelo sem preço aparece como “não precificado”, nunca como zero.",
      "Todo número simulado leva ≈.",
      "A IA só redige o texto: todo número sai de código determinístico e testado.",
    ],
  },
  {
    id: "privacidade",
    title: "Controle, não vigilância.",
    lead: "Os rankings de tokens premiavam consumo, não resultado. O Denarius nasce do outro lado dessa lição.",
    items: [
      "Não existe ranking de pessoas.",
      "Nomes só aparecem para administradores, e só como contribuintes de um pico.",
      "A empresa pode desligar a exibição de nomes.",
      "Líderes de time veem os totais do próprio time, sem nomes individuais.",
    ],
  },
  {
    id: "limites",
    title: "O que o Denarius não faz.",
    lead: "Dizer o limite com clareza faz parte da confiança.",
    items: [
      "Não bloqueia nem limita o uso de nenhum time.",
      "Não roteia chamadas, não aplica planos e não age sozinho.",
      "Não atualiza em tempo real: sincroniza todo dia.",
      "Não guarda prompts nem respostas, só metadados de uso.",
    ],
  },
];

export function SecurityContent() {
  return (
    <>
      <PageIntro
        icon={PAGE_ICONS.security}
        title="Nenhuma linha de código muda. Nenhum prompt passa por nós."
        lead="O Denarius lê, consolida, projeta e simula o gasto com IA. Nunca limita o uso e nunca age sozinho: o sistema aponta, a empresa decide."
        sections={SECTIONS}
      />

      <Section id="leitura" labelledBy="leitura-titulo" tone="rail" size="compact">
        <SectionHeader
          id="leitura-titulo"
          title="Só leitura, por princípio."
          lead="O preço dessa escolha é dito com clareza: o Denarius avisa antes e mostra o que fazer, mas não bloqueia. Quem precisa bloquear pode usar um proxy junto."
        />
        <div className="mt-10 grid gap-x-8 gap-y-10 md:mt-12 md:grid-cols-2">
          {READ_MODES.map((mode) => (
            <div key={mode.title} className="flex flex-col gap-4">
              <h3 className="type-title-lg text-ink">{mode.title}</h3>
              <ul className="border-t border-hairline">
                {mode.items.map((item) => (
                  <li key={item} className={`type-lead border-b border-hairline py-3.5 ${mode.tone}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {GROUPS.map((group) => (
        <Section key={group.id} id={group.id} labelledBy={`${group.id}-titulo`} size="compact">
          <div className="grid gap-10 lg:grid-cols-12">
            <SectionHeader
              id={`${group.id}-titulo`}
              title={group.title}
              lead={group.lead}
              className="lg:col-span-5"
            />
            <ul className="border-t border-hairline lg:col-span-6 lg:col-start-7">
              {group.items.map((item) => (
                <li key={item} className="type-lead border-b border-hairline py-4 text-graphite">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ))}

      <NextPage page={PAGES.faq} />
      <CtaBand />
    </>
  );
}
