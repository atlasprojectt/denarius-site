import Image from "next/image";
import type { ReactNode } from "react";
import { CtaBand } from "@/components/site/cta-band";
import { NextPage } from "@/components/site/next-page";
import { PageIntro } from "@/components/site/page-intro";
import { PAGE_ICONS } from "@/components/ui/page-icons";
import { VerdictList } from "@/components/site/verdict-list";
import { CardStage } from "@/components/ui/card-stage";
import { Section, SectionHeader } from "@/components/ui/section";
import { SHOWCASE_HOVER, ShowcaseCard } from "@/components/ui/showcase-card";
import { chavesDados } from "@/denarius/chaves/chaves-dados";
import { KeyEntryDemo } from "@/denarius/chaves/key-entry-demo";
import { cn } from "@/lib/cn";
import { PAGES } from "@/lib/links";
import fundoChaves from "@/assets/fundos/fundo-44.jpg";
import fundoTimes from "@/assets/fundos/fundo-39.jpg";
import fundoAlerta from "@/assets/fundos/fundo-43.jpg";
import telaAlerta from "@/assets/telas/alerta-email.webp";
import telaTimes from "@/assets/telas/times-lista.webp";

// A home mostra o que o Denarius responde; esta página mostra como ele chega a
// cada resposta. Cada seção abre com uma frase de contexto (quem chega pelo
// "Saiba mais" da home cai direto nela) e segue só com o que a home não diz:
// a configuração e as contas e regras por trás de cada número. As telas que a
// home já mostra (composição, veredito, resumo semanal, relatório) não se
// repetem aqui; as que só esta página mostra são a lista de times e o e-mail
// de alerta (capturas do app, em assets/telas, com fundo transparente). As
// âncoras composicao, veredito, alertas e relatorios são os destinos do
// "Saiba mais" (FEATURES, em lib/links).

const SECTIONS = [
  { id: "comecar", label: "Configuração" },
  { id: "composicao", label: "Composição" },
  { id: "veredito", label: "Veredito" },
  { id: "times", label: "Times" },
  { id: "alertas", label: "Alertas" },
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
    text: "Todo dia, o Denarius sincroniza o uso e refaz as contas. O veredito de cada time está pronto quando você abrir.",
  },
];

/** As parcelas do total, cada uma com a sua conta. */
const LEDGER: Array<{ term: string; formula: ReactNode; note: string }> = [
  {
    term: "Uso de API",
    formula: (
      <>
        tokens <Op>×</Op> preço do modelo na data do uso
      </>
    ),
    note: "Cada modelo no seu preço, em dólar, como o provedor cobra. Modelo sem preço aparece como “não precificado”, nunca como zero.",
  },
  {
    term: "Assinaturas",
    formula: (
      <>
        assentos <Op>×</Op> preço por assento
      </>
    ),
    note: "ChatGPT Team, Claude Team, Copilot e o que mais a empresa paga por pessoa, cadastrados uma vez.",
  },
  {
    term: "Em reais",
    formula: (
      <>
        dólar <Op>×</Op> câmbio congelado no início do mês
      </>
    ),
    note: "O câmbio usado fica à vista na tela e não muda no meio do mês.",
  },
  {
    term: "Total da empresa",
    formula: (
      <>
        soma dos times <Op>+</Op> não atribuído
      </>
    ),
    note: "O gasto sem dono aparece como “não atribuído”. Nada some do total.",
  },
];

type Note = { title: string; text: string };

const VERDICT_RULES: Note[] = [
  {
    title: "O ritmo.",
    text: "O gasto do time até hoje é comparado com quanto do mês já passou.",
  },
  {
    title: "A projeção.",
    text: "No ritmo atual, onde o mês fecha. Calculada por regras fixas, nunca por IA.",
  },
  {
    title: "A margem.",
    text: "A distância entre a projeção e o orçamento, em reais.",
  },
  {
    title: "Antes do 5º dia.",
    text: "Com poucos dias de dados, o ritmo engana. Até lá, o veredito diz que está coletando ritmo em vez de chutar.",
  },
];

const TEAM_NOTES: Note[] = [
  {
    title: "Quem precisa de atenção.",
    text: "Os times que não vão fechar aparecem primeiro, com o gasto, o orçamento, a projeção e o status.",
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

const ALERT_TRIGGERS = ["80% do orçamento", "100% do orçamento", "Projeção de estouro"];

const ALERT_NOTES: Note[] = [
  {
    title: "Uma vez por nível.",
    text: "Cada time recebe no máximo um alerta por nível no mês. Só volta a avisar se a situação piorar.",
  },
  {
    title: "O que fazer, sem fazer por você.",
    text: "O alerta traz o tamanho do problema em reais e sugestões do que revisar. Nada é aplicado automaticamente.",
  },
  {
    title: "E o resumo semanal.",
    text: "Toda semana, o total, a variação e a projeção de cada time, mesmo sem alerta.",
  },
];

const REPORT_NOTES: Note[] = [
  {
    title: "O mês até hoje.",
    text: "Gere em PDF o relatório do mês em andamento, para o conselho ou o contador.",
  },
  {
    title: "O fechamento, congelado.",
    text: "Cada mês fechado fica como fechou. Nenhum número é recalculado depois.",
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

/** Operador de uma conta, um passo de tinta abaixo dos termos. */
function Op({ children }: { children: ReactNode }) {
  return <span className="px-1 text-ash">{children}</span>;
}

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
        icon={PAGE_ICONS.howItWorks}
        title="Do gasto espalhado a um veredito por dia."
        lead="A página inicial mostra o que o Denarius responde. Aqui está como ele chega a cada resposta: o que você configura uma vez e as contas por trás de cada número."
        sections={SECTIONS}
      />

      {/* Os passos à esquerda, a conexão das chaves tocando sozinha à direita
          (src/denarius/chaves): a chave entra, conecta e ganha o check. */}
      <Section id="comecar" labelledBy="comecar-titulo" tone="rail" size="compact">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <SectionHeader id="comecar-titulo" title="O que você configura uma vez." />
            <ol className="flex flex-col gap-6">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-4 border-t border-hairline pt-5">
                  <span
                    aria-hidden="true"
                    className="type-ui-strong flex size-7 shrink-0 items-center justify-center rounded-full text-ink ring-1 ring-inset ring-ink/20"
                  >
                    {index + 1}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="type-title text-ink">{step.title}</h3>
                    <p className="type-body text-graphite">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="type-caption text-ash">
              O primeiro número aparece na hora. Dá para começar sem chave nenhuma, só com as
              assinaturas e a lista de times.
            </p>
          </div>
          <ShowcaseCard background={fundoChaves} bleed="right" className="lg:col-span-7">
            <CardStage width={900} fit={0.92} className="inset-x-[4%] top-1/2 -translate-y-1/2">
              <KeyEntryDemo {...chavesDados} />
            </CardStage>
          </ShowcaseCard>
        </div>
      </Section>

      {/* A tela da composição já está na home; aqui, as contas por trás do
          total, como linhas de um livro-razão. */}
      <Section id="composicao" labelledBy="composicao-titulo" size="compact">
        <SectionHeader
          id="composicao-titulo"
          title="Como o total é montado."
          lead="A composição soma OpenAI, Anthropic e as assinaturas num total só, em reais. Cada parcela segue uma conta fixa."
        />
        <dl className="mt-10 border-b border-hairline md:mt-12">
          {LEDGER.map((row) => (
            <div
              key={row.term}
              className="grid gap-x-8 gap-y-2 border-t border-hairline py-6 lg:grid-cols-12 lg:items-baseline"
            >
              <dt className="type-title text-ink lg:col-span-3">{row.term}</dt>
              <dd className="grid gap-x-8 gap-y-2 lg:col-span-9 lg:grid-cols-9 lg:items-baseline">
                <span className="type-lead text-ink lg:col-span-5">{row.formula}</span>
                <span className="type-body text-graphite lg:col-span-4">{row.note}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="type-caption mt-4 text-ash">Todo valor mostra a data da última sincronização.</p>
      </Section>

      <Section id="veredito" labelledBy="veredito-titulo" size="compact">
        <SectionHeader
          id="veredito-titulo"
          title="Como o veredito é decidido."
          lead="Todo dia, depois da sincronização, o Denarius refaz a conta de cada time e resume o resultado numa frase."
        />
        <div className="mt-10 grid gap-12 md:mt-12 lg:grid-cols-12 lg:items-start">
          <NoteList notes={VERDICT_RULES} className="flex flex-col gap-6 lg:col-span-5" />
          <div className="lg:col-span-6 lg:col-start-7">
            <VerdictList />
          </div>
        </div>
      </Section>

      <Section id="times" labelledBy="times-titulo" size="compact">
        <SectionHeader
          id="times-titulo"
          title="Cada time com o seu orçamento."
          lead="A lista de times mostra quem precisa de atenção. É dali que você abre a Simulação do time que não vai fechar."
        />
        {/* A tabela é larga (2000×938): o card fica na largura toda e baixo
            (19:10), no formato dela, e as notas viram a legenda, em três
            colunas, como na Composição. A tabela vem sobre um painel na
            superfície escura do app: os títulos dos grupos ("Precisa de
            atenção", "No controle") são brancos, feitos para esse fundo, e
            se perdem direto sobre o laranja. */}
        <ShowcaseCard background={fundoTimes} aspect="aspect-[19/10]" className="mt-10 md:mt-12">
          <div
            className={cn(
              "absolute top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-background p-[2%] ring-1 ring-white/8",
              SHOWCASE_HOVER,
            )}
          >
            <Image
              src={telaTimes}
              alt="Lista de times do Denarius: Engenharia estourada e Produto em atenção no topo, com o botão Simular; Marketing, Dados e Atendimento no controle; e o gasto sem time, com atribuição pendente."
              className="block h-auto w-full"
            />
          </div>
        </ShowcaseCard>
        <NoteList
          notes={TEAM_NOTES}
          className="mt-10 grid gap-x-8 gap-y-6 md:mt-12 md:grid-cols-3"
        />
      </Section>

      <Section id="alertas" labelledBy="alertas-titulo" size="compact">
        <SectionHeader
          id="alertas-titulo"
          title="Quando um alerta chega."
          lead="O Denarius avisa por e-mail antes da fatura, e só quando um time muda de nível."
        />
        <div className="mt-10 grid gap-12 md:mt-12 lg:grid-cols-12 lg:items-start">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="flex flex-col gap-3">
              <p className="type-caption-strong text-ink">Três gatilhos</p>
              <ul className="flex flex-wrap gap-2">
                {ALERT_TRIGGERS.map((trigger) => (
                  <li
                    key={trigger}
                    className="type-ui-strong inline-flex h-8 items-center rounded-full px-3.5 text-ink ring-1 ring-inset ring-hairline"
                  >
                    {trigger}
                  </li>
                ))}
              </ul>
            </div>
            <NoteList notes={ALERT_NOTES} className="flex flex-col gap-6" />
          </div>
          {/* O e-mail real, no fundo do resumo semanal da home (os dois
              e-mails combinam), no mesmo enquadramento dele: a janela entra
              pelo canto superior esquerdo e vaza pela direita e por baixo; o
              assunto e o corpo do e-mail ficam inteiros à vista. */}
          <ShowcaseCard background={fundoAlerta} bleed="right" className="lg:col-span-7">
            <Image
              src={telaAlerta}
              alt="E-mail de alerta do Denarius para Engenharia: projeção acima do orçamento, fechando R$ 486,75 acima em 31 de outubro, com a situação do período e o que você pode fazer."
              className={cn(
                "absolute top-[10%] left-[8%] h-auto w-full max-w-none origin-top-left",
                SHOWCASE_HOVER,
              )}
            />
          </ShowcaseCard>
        </div>
      </Section>

      {/* A folha do relatório já está na home; aqui, só o que fica guardado. */}
      <Section id="relatorios" labelledBy="relatorios-titulo" size="compact">
        <SectionHeader
          id="relatorios-titulo"
          title="O que fica registrado."
          lead="Para prestar contas ao conselho, ao contador ou a uma auditoria."
        />
        <NoteList
          notes={REPORT_NOTES}
          className="mt-10 grid gap-x-8 gap-y-6 md:mt-12 md:grid-cols-2 lg:grid-cols-4"
        />
      </Section>

      <NextPage page={PAGES.simulation} />
      <CtaBand secondary={null} />
    </>
  );
}
