import { CtaBand } from "@/components/site/cta-band";
import { NextPage } from "@/components/site/next-page";
import { PageIntro } from "@/components/site/page-intro";
import { VerdictList } from "@/components/site/verdict-list";
import { AssetSlot } from "@/components/ui/asset-slot";
import { CardStage } from "@/components/ui/card-stage";
import { Section, SectionHeader } from "@/components/ui/section";
import { ReportSheet } from "@/components/ui/report-sheet";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import { StatusPill } from "@/components/ui/status-pill";
import { chavesDados } from "@/denarius/chaves/chaves-dados";
import { KeyEntryDemo } from "@/denarius/chaves/key-entry-demo";
import { composicaoDados } from "@/denarius/composicao/composicao-dados";
import { CompositionDemo } from "@/denarius/composicao/composition-demo";
import { PAGES } from "@/lib/links";
import fundoChaves from "@/assets/fundos/fundo-44.jpg";
import fundoComposicao from "@/assets/fundos/fundo-38.jpg";
import fundoRelatorio from "@/assets/fundos/fundo-39.jpg";


const SECTIONS = [
  { id: "comecar", label: "Três passos" },
  { id: "composicao", label: "Composição" },
  { id: "veredito", label: "Veredito" },
  { id: "times", label: "Times" },
  { id: "alertas", label: "Alertas e resumos" },
  { id: "relatorios", label: "Relatórios" },
];

const STEPS = [
  {
    title: "Conecte as fontes",
    text: "Cole as chaves administrativas da OpenAI e da Anthropic. O Denarius as usa só para ler uso e custo, guarda-as criptografadas, e você pode revogá-las quando quiser. Cadastre as assinaturas por assento e importe pessoas e times por CSV.",
  },
  {
    title: "Defina o orçamento",
    text: "Um valor mensal para a empresa e um para cada time.",
  },
  {
    title: "Leia o veredito",
    text: "Todo dia, o Denarius sincroniza o uso, converte tokens em reais e projeta o fechamento do mês. Quando a resposta não é “no controle”, a Simulação está a um clique.",
  },
];

type Note = { title: string; text: string };

const COMPOSITION_NOTES: Note[] = [
  {
    title: "Por provedor e por modelo.",
    text: "OpenAI e Anthropic lidas direto, com cada modelo no seu preço. Modelo sem preço aparece como “não precificado”, nunca como zero.",
  },
  {
    title: "Com as assinaturas por assento.",
    text: "ChatGPT Team, Claude Team, Copilot e o que mais a empresa paga por pessoa entram cadastradas no mesmo total.",
  },
  {
    title: "Em reais, com câmbio congelado.",
    text: "A fatura vem em dólar. O Denarius converte com o câmbio do início do mês, mostrado na tela.",
  },
  {
    title: "Nada some do total.",
    text: "O que não tem dono aparece como “não atribuído”, à vista.",
  },
];

const TEAM_NOTES: Note[] = [
  {
    title: "Quem precisa de atenção.",
    text: "Cada time com o seu orçamento, o status e a projeção de fechamento.",
  },
  {
    title: "A Simulação a um clique.",
    text: "O time que não vai fechar tem o botão Simular, que abre o plano dele.",
  },
  {
    title: "Controle, não vigilância.",
    text: "Líderes veem os totais do próprio time. Nomes só aparecem para administradores, e só como contribuintes de um pico.",
  },
];

const EMAIL_NOTES: Note[] = [
  {
    title: "Resumo semanal.",
    text: "Toda semana, por e-mail: o total, a variação, o status do orçamento e a projeção de cada time.",
  },
  {
    title: "A IA escreve, não calcula.",
    text: "Todo número sai de código determinístico e testado. Um modelo de linguagem só transforma esses números em texto legível.",
  },
];

const REPORT_NOTES: Note[] = [
  {
    title: "O mês em andamento, quando precisar.",
    text: "Gere em PDF o relatório do mês até hoje, para uma reunião de conselho ou para o contador.",
  },
  {
    title: "O fechamento, congelado.",
    text: "Cada mês fechado fica congelado como fechou. Nenhum número é recalculado depois.",
  },
  {
    title: "Trilha de auditoria.",
    text: "As ações administrativas ficam registradas.",
  },
  {
    title: "Seus dados, quando quiser.",
    text: "Exportação e exclusão dos dados da empresa em autoatendimento, pela LGPD.",
  },
];

function NoteList({ notes, className }: { notes: Note[]; className?: string }) {
  return (
    <dl className={className}>
      {notes.map((note) => (
        <div key={note.title} className="flex flex-col gap-2 border-t border-hairline pt-5">
          <dt className="type-title text-ink">{note.title}</dt>
          <dd className="type-body text-graphite">{note.text}</dd>
        </div>
      ))}
    </dl>
  );
}

export function HowItWorksContent() {
  return (
    <>
      <PageIntro
        title="Do gasto espalhado a um veredito por dia."
        lead="O Denarius lê o uso da OpenAI e da Anthropic uma vez por dia, soma as assinaturas por assento, converte tudo em reais e compara com o orçamento de cada time."
        sections={SECTIONS}
      />

      <Section id="comecar" labelledBy="comecar-titulo" tone="rail" size="compact">
        <SectionHeader id="comecar-titulo" title="Três passos até o primeiro veredito." />
        <ol className="mt-10 grid gap-x-8 gap-y-10 md:mt-12 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3 border-t border-hairline pt-5">
              <span
                aria-hidden="true"
                className="type-ui-strong flex size-7 items-center justify-center rounded-full text-ink ring-1 ring-inset ring-ink/20"
              >
                {index + 1}
              </span>
              <h3 className="type-title-lg text-ink">{step.title}</h3>
              <p className="type-body max-w-[48ch] text-graphite">{step.text}</p>
            </li>
          ))}
        </ol>
        {/* A conexão das chaves tocando sozinha (src/denarius/chaves): a chave
            entra, conecta e ganha o check verde. */}
        <div className="mt-10 grid gap-12 md:mt-12 lg:grid-cols-12">
          <ShowcaseCard background={fundoChaves} bleed="left" className="lg:col-span-7">
            <CardStage width={900} fit={0.92} className="inset-x-[4%] top-1/2 -translate-y-1/2">
              <KeyEntryDemo {...chavesDados} />
            </CardStage>
          </ShowcaseCard>
        </div>
      </Section>

      <Section id="composicao" labelledBy="composicao-titulo" size="compact">
        <SectionHeader
          id="composicao-titulo"
          title="Todo o gasto com IA, em reais, num lugar só."
          lead="A pergunta “quanto gastamos, e quem gasta?” tem uma resposta só, somada por time, provedor e modelo."
        />
        <div className="mt-10 grid gap-12 md:mt-12 lg:grid-cols-12">
          <ShowcaseCard background={fundoComposicao} bleed="left" className="lg:col-span-7">
            <CardStage width={1000} fit={0.92} className="inset-x-[4%] top-[14%] bottom-0 overflow-hidden">
              <CompositionDemo {...composicaoDados} />
            </CardStage>
          </ShowcaseCard>
          <NoteList notes={COMPOSITION_NOTES} className="flex flex-col gap-6 lg:col-span-5" />
        </div>
      </Section>

      <Section id="veredito" labelledBy="veredito-titulo" size="compact">
        <SectionHeader
          id="veredito-titulo"
          title="O veredito: conclusão primeiro, números depois."
          lead="O Denarius compara o que o time já gastou com quanto do mês já passou, projeta o fechamento no ritmo atual e mostra a margem projetada em reais. Antes do 5º dia, diz que está coletando ritmo em vez de chutar."
        />
        <div className="mt-10 grid gap-12 md:mt-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <VerdictList />
          </div>
          <AssetSlot
            layout="app"
            label="Início com o gasto do mês em reais, a barra de ritmo e a projeção de fechamento"
            className="lg:col-span-7"
            frameClassName="aspect-[4/3]"
          />
        </div>
      </Section>

      <Section id="times" labelledBy="times-titulo" size="compact">
        <SectionHeader
          id="times-titulo"
          title="Cada time com o seu orçamento."
          lead="A lista de times mostra quem precisa de atenção. É dali que você abre a Simulação do time que não vai fechar."
        />
        <div className="mt-10 grid gap-12 md:mt-12 lg:grid-cols-12">
          <AssetSlot
            layout="teams"
            label="Lista de times com orçamento, status e a ação Simular"
            className="lg:col-span-7"
            frameClassName="aspect-[4/3] sm:aspect-[16/10]"
          />
          <NoteList notes={TEAM_NOTES} className="flex flex-col gap-6 lg:col-span-5" />
        </div>
      </Section>

      <Section id="alertas" labelledBy="alertas-titulo" size="compact">
        <SectionHeader
          id="alertas-titulo"
          title="Alertas e resumos por e-mail, sem ruído."
          lead="Quando um time cruza 80%, 100% ou a projeção de estouro, o alerta chega uma única vez por nível no mês, e só escala se a situação piorar."
        />
        <div className="mt-10 grid gap-12 md:mt-12 lg:grid-cols-12 lg:items-start">
          <figure className="flex flex-col gap-2.5 lg:col-span-7">
            <div className="flex flex-col gap-4 rounded-lg bg-card p-5 ring-1 ring-ink/6 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="type-caption-strong text-ink">Alerta por e-mail · Engenharia</p>
                <StatusPill status="attention" />
              </div>
              <blockquote className="type-narrative text-ink">
                Engenharia está em 92% do orçamento de R$&nbsp;15.000, faltando 8 dias para o fim do
                mês. No ritmo atual, fecha em ≈&nbsp;R$&nbsp;18.000, R$&nbsp;3.000 acima do limite.
                Os três maiores contribuintes concentram 70% do aumento.
              </blockquote>
            </div>
            <figcaption className="type-caption text-ash">Exemplo ilustrativo de alerta.</figcaption>
          </figure>
          <NoteList notes={EMAIL_NOTES} className="flex flex-col gap-6 lg:col-span-5" />
        </div>
      </Section>

      <Section id="relatorios" labelledBy="relatorios-titulo" size="compact">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-10 lg:col-span-5">
            <SectionHeader id="relatorios-titulo" title="Relatórios prontos para o conselho." />
            <NoteList notes={REPORT_NOTES} className="flex flex-col gap-6" />
          </div>
          <ShowcaseCard background={fundoRelatorio} bleed="right" className="lg:col-span-7">
            <ReportSheet />
          </ShowcaseCard>
        </div>
      </Section>

      <NextPage page={PAGES.simulation} />
      <CtaBand secondary={null} />
    </>
  );
}
