import { AssetSlot } from "./asset-slot";
import { Section } from "./section";

type CopyProps = {
  index: string;
  title: string;
  description: string;
  points: string[];
};

/** Bloco de texto compartilhado pelas três capacidades. */
function CapabilityCopy({ index, title, description, points }: CopyProps) {
  return (
    <div>
      <p className="font-mono text-xs tracking-widest text-brand-accent-light">
        {index}
      </p>
      <h3 className="mt-3 text-xl font-medium tracking-tight sm:text-2xl">
        {title}
      </h3>
      <p className="mt-4 text-base leading-7 text-muted-foreground">
        {description}
      </p>
      <ul className="mt-6 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-6">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * As três capacidades, cada uma com uma composição própria e um recorte real
 * do produto ao lado da afirmação que ele sustenta. A variação de layout é
 * proposital: três blocos idênticos alternando de lado leem como preenchimento.
 */
export function CapabilitiesSection() {
  return (
    <Section
      id="produto"
      eyebrow="O que o produto faz"
      title="Governar, entender e agir sobre o mesmo número."
      intro="Três funções que se apoiam umas nas outras: o orçamento dá o limite, a atribuição explica a composição, e o aviso chega enquanto ainda cabe uma decisão."
    >
      {/* 01 — texto à esquerda, o card de orçamento à direita. */}
      <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <CapabilityCopy
          index="01 · Governar"
          title="Cada gasto medido contra um limite."
          description="Você define o orçamento da empresa e o de cada time. O consumo é comparado a esses limites todos os dias, junto do tempo já decorrido do período — porcentagem de orçamento sem contexto de tempo não diz muita coisa."
          points={[
            "Orçamento da empresa e dos times como limites independentes",
            "Gasto e ritmo lidos contra o tempo decorrido do período",
            "Projeção de fechamento e margem em dinheiro, não só em porcentagem",
          ]}
        />
        <AssetSlot
          id="orcamento-mes"
          ratio="3 / 2"
          brief="Gasto do mês contra o orçamento, a barra de ritmo com o marcador de dia decorrido e a projeção de fechamento."
        />
      </div>

      {/* 02 — inverte: a composição por fonte à esquerda, o texto à direita. */}
      <div className="mt-20 grid items-center gap-10 sm:mt-24 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <AssetSlot
          id="composicao-fonte"
          ratio="3 / 2"
          brief="Gasto por fonte em lista ordenada — provedores e assinaturas com valor e percentual — e a linha de gasto sem atribuição com a ação de atribuir."
          className="lg:order-1"
        />
        <div className="lg:order-2">
          <CapabilityCopy
            index="02 · Entender"
            title="Saiba para onde o dinheiro está indo."
            description="O custo é distribuído por time, provedor e modelo. Uso de API e assinaturas registradas entram na mesma conta, e o que não dá para mapear aparece explicitamente em vez de sumir do relatório."
            points={[
              "Atribuição por time, provedor e modelo",
              "Categoria “Não atribuído” — o total sempre bate com a soma das partes",
              "Uso de API e assinaturas dentro do mesmo orçamento",
            ]}
          />
        </div>
      </div>

      {/* 03 — texto em coluna estreita e a tabela de times ocupando a largura. */}
      <div className="mt-20 sm:mt-24">
        <div className="max-w-2xl">
          <CapabilityCopy
            index="03 · Agir"
            title="Encontre os poucos riscos que exigem decisão."
            description="Quando um time está a caminho de passar do limite, o aviso chega antes da fatura, com o que está por trás do aumento. Antes de decidir, dá para simular um ajuste de ritmo e ver o efeito no fechamento."
            points={[
              "Aviso antecipado quando o estouro é projetado, não só quando acontece",
              "Principais responsáveis pelo aumento e o que investigar primeiro",
              "Simulação de ritmo com recálculo imediato de fechamento e margem",
            ]}
          />
        </div>
        <AssetSlot
          id="orcamento-times"
          ratio="16 / 7"
          brief="Tabela de times com os três estados de orçamento — estourado, atenção e no controle — e as colunas de gasto, orçamento e projeção."
          className="mt-10"
        />
      </div>
    </Section>
  );
}
