import {
  ChartNoAxesCombinedIcon,
  FileTextIcon,
  Layers3Icon,
  SlidersHorizontalIcon,
} from "lucide-react";
import { AssetSlot } from "./asset-slot";
import { CapabilityCard } from "./capability-card";
import { Reveal } from "./reveal";
import { Section } from "./section";

const CAPABILITIES = [
  {
    eyebrow: "Composição",
    title: "Cada custo com sua origem.",
    description:
      "Reúna APIs, assinaturas e assentos por provedor e centro de custo. O que ainda não foi mapeado continua visível como “Não atribuído”.",
    id: "composicao-fontes",
    brief:
      "Provedor, assinatura, assento e item não atribuído, com foco exclusivo em origem e atribuição.",
    dimensions: "1440 × 960 px",
    icon: Layers3Icon,
    mediaSide: "bottom" as const,
  },
  {
    eyebrow: "Ritmo",
    title: "O fechamento antes da fatura.",
    description:
      "Compare o percentual do orçamento com o tempo decorrido. Quando há base suficiente, veja a projeção do período.",
    id: "ritmo-projecao",
    brief:
      "Um período com orçamento, gasto atual, tempo decorrido e uma leitura principal de projeção.",
    dimensions: "1440 × 960 px",
    icon: ChartNoAxesCombinedIcon,
    mediaSide: "top" as const,
  },
  {
    eyebrow: "Cenários",
    title: "Veja o efeito antes de decidir.",
    description:
      "Altere o ritmo de um time e compare o resultado antes e depois. O Denarius mostra o impacto; a decisão permanece com a empresa.",
    id: "simulacao-cenario",
    brief:
      "Alteração do ritmo de um único time e o resultado antes/depois em um cenário.",
    dimensions: "1440 × 960 px",
    icon: SlidersHorizontalIcon,
    mediaSide: "top" as const,
  },
  {
    eyebrow: "Relatórios",
    title: "Uma leitura pronta para compartilhar.",
    description:
      "Gere resumos do mês corrente ou de períodos fechados com veredito, valores e notas metodológicas.",
    id: "relatorio-resumo",
    brief:
      "Cabeçalho e resumo executivo de um relatório, sem exibir o documento inteiro.",
    dimensions: "1440 × 960 px",
    icon: FileTextIcon,
    mediaSide: "bottom" as const,
  },
];

export function CapabilitiesSection() {
  return (
    <Section
      id="produto"
      eyebrow="Produto"
      title="Uma visão para decidir."
      intro="Da composição do gasto à projeção do período, cada leitura existe para responder uma pergunta financeira concreta."
      emphasis="statement"
      surface="raised"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {CAPABILITIES.map((capability, index) => {
          const Icon = capability.icon;
          return (
            <Reveal key={capability.id} delay={(index % 2) * 0.06}>
              <CapabilityCard
                mediaSide={capability.mediaSide}
                eyebrow={capability.eyebrow}
                title={capability.title}
                description={capability.description}
                icon={<Icon aria-hidden="true" className="size-[18px]" />}
                media={
                  <AssetSlot
                    id={capability.id}
                    ratio="3 / 2"
                    brief={capability.brief}
                    dimensions={capability.dimensions}
                    bare
                  />
                }
              />
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
