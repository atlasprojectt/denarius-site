import { AssetSlot } from "./asset-slot";
import { CapabilityCard } from "./capability-card";
import { CtaLink } from "./cta-link";
import { Reveal } from "./reveal";
import { Section } from "./section";
import { WAITLIST_ANCHOR } from "./links";

/**
 * O fluxo de adoção, que antes ocupava uma seção inteira. Como argumento ele
 * cabe em três linhas: o que você conecta, o que você define e o que acontece
 * todo dia. Em seção própria, ele repetia o produto em outra ordem.
 */
const STEPS = [
  {
    title: "Conecte",
    text: "OpenAI, Anthropic, assinaturas e times.",
  },
  {
    title: "Defina",
    text: "Crie limites para a empresa e para cada time.",
  },
  {
    title: "Acompanhe",
    text: "Receba o veredito e os alertas diariamente.",
  },
];

/**
 * As três capacidades, cada uma num card com o recorte do produto ao lado da
 * afirmação que ele sustenta.
 *
 * Os cards são idênticos em superfície, medida, proporção e espaçamento. O
 * ritmo vem só da alternância do lado do visual — variar também cor e formato
 * fazia a pilha ler como três componentes sem parentesco.
 */
export function CapabilitiesSection() {
  return (
    <Section
      id="produto"
      eyebrow="O que o produto faz"
      title="Do gasto disperso à decisão."
      intro="Veja onde o dinheiro está, como o mês deve fechar e o que precisa de atenção."
      surface="raised"
    >
      {/* Três cards horizontais empilhados. Só o lado do visual alterna — a
          proporção do recorte é a mesma nos três, senão a pilha perde o prumo.
          O `16 / 7` que o terceiro usava era o que mais destoava. */}
      <div className="grid gap-8">
        <Reveal>
          <CapabilityCard
            mediaSide="right"
            eyebrow="01 · Governar"
            title="Orçamento no ritmo do mês."
            description="Compare gasto, limite e dias decorridos. Veja a projeção antes da fatura."
            media={
              <AssetSlot
                id="orcamento-mes"
                ratio="3 / 2"
                brief="Gasto do mês, orçamento, marcador do dia e projeção de fechamento."
                dimensions="1600 × 1067 px"
                bare
              />
            }
          />
        </Reveal>

        <Reveal>
          <CapabilityCard
            mediaSide="left"
            eyebrow="02 · Entender"
            title="Cada custo com seu responsável."
            description="Distribua APIs e assinaturas por time, provedor e modelo. Valores sem origem continuam visíveis."
            media={
              <AssetSlot
                id="composicao-fonte"
                ratio="3 / 2"
                brief="Provedores, assinaturas, valores e a linha de gasto não atribuído."
                dimensions="1600 × 1067 px"
                bare
              />
            }
          />
        </Reveal>

        {/* O terceiro fecha a seção, então é o que carrega a chamada. */}
        <Reveal>
          <CapabilityCard
            mediaSide="right"
            eyebrow="03 · Agir"
            title="Riscos priorizados para agir."
            description="Identifique times fora do ritmo, os maiores custos e o efeito de possíveis ajustes."
            action={
              <CtaLink
                href={WAITLIST_ANCHOR}
                variant="secondary"
                size="sm"
                arrow
              >
                Entrar na lista de acesso
              </CtaLink>
            }
            media={
              <AssetSlot
                id="orcamento-times"
                ratio="3 / 2"
                brief="Times com status, gasto, orçamento e projeção de fechamento."
                dimensions="1600 × 1067 px"
                bare
              />
            }
          />
        </Reveal>
      </div>

      {/* O fluxo fecha a seção: depois de ver o que o produto faz, a pergunta
          seguinte é o que custa adotá-lo. */}
      <div className="mt-20 border-t border-border pt-12 sm:mt-24">
        <Reveal>
          <h3 className="text-xl font-normal tracking-tight sm:text-2xl">
            E você não muda nada do que já está funcionando.
          </h3>
          <p className="explainer mt-4 max-w-2xl text-muted-foreground">
            O Denarius lê metadados e não fica no caminho das suas requisições.
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-10">
          {STEPS.map((step, index) => (
            <Reveal
              key={step.title}
              as="li"
              delay={index * 0.08}
              className="border-t border-(--frame-line) pt-5"
            >
              <p className="font-mono text-xs tracking-widest text-brand-accent-light">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h4 className="mt-2 text-lg font-normal">{step.title}</h4>
              <p className="explainer mt-2 text-sm text-muted-foreground">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
