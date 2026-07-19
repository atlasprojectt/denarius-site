import { FeatureBlock } from "./feature-block";
import {
  AlertsPreview,
  AttributionPreview,
  BudgetPreview,
  FullPicturePreview,
  ProjectionPreview,
  SimulationPreview,
} from "./previews";

export function Features() {
  return (
    <div id="produto">
      <FeatureBlock
        eyebrow="Controle de orçamento"
        title="Controle os gastos com IA com base em orçamentos reais."
        description="Defina um limite para a empresa e para cada time. O Denarius acompanha o consumo contra esse limite todos os dias e mostra a margem que ainda resta."
        points={[
          "Orçamento geral e por time como guardrails independentes",
          "Gasto atual e ritmo comparados ao tempo decorrido",
          "Margem projetada em dinheiro, não só em porcentagem",
        ]}
        preview={<BudgetPreview />}
      />

      <FeatureBlock
        eyebrow="Atribuição de custos"
        title="Veja para onde vai cada real monitorado."
        description="O custo é distribuído por time, provedor e modelo — e, quando permitido, por pessoa. Nada se perde: o que não pode ser mapeado aparece de forma explícita."
        points={[
          "Divisão por time, provedor e modelo",
          "Categoria explícita “Não atribuído” — os totais sempre reconciliam",
          "Detalhe por pessoa apenas com permissão",
        ]}
        preview={<AttributionPreview />}
        reverse
      />

      <FeatureBlock
        eyebrow="Projeção de fechamento"
        title="Saiba para onde o mês está caminhando."
        description="A partir do gasto acumulado e do ritmo atual, o Denarius estima onde o período vai fechar — respondendo quanto de folga ainda haverá no fim do mês."
        points={[
          "Gasto acumulado comparado ao orçamento",
          "Estimativa de fechamento pelo ritmo atual",
          "Projeção só aparece depois de dias suficientes de dados",
        ]}
        preview={<ProjectionPreview />}
      />

      <FeatureBlock
        eyebrow="Alertas antecipados"
        title="Encontre riscos enquanto ainda há tempo para agir."
        description="O Denarius avisa antes da fatura quando um time deve estourar o limite, e mostra o que está por trás do aumento — sem transformar o alerta em ruído diário."
        points={[
          "Projeção de estouro e times acelerando",
          "Principais responsáveis pelo aumento do custo",
          "Custos sem atribuição sinalizados de forma separada",
        ]}
        preview={<AlertsPreview />}
        reverse
      />

      <FeatureBlock
        eyebrow="Simulação de cenários"
        title="Teste ajustes antes de tomar uma decisão."
        description="Ajuste o ritmo projetado de um time e veja na hora o impacto no fechamento e na margem. O sistema mostra o efeito; a decisão continua sua."
        points={[
          "Um controle simples: variar o ritmo do time",
          "Recálculo imediato de fechamento e margem",
          "Atalhos como “fechar no orçamento” (ponto de equilíbrio)",
        ]}
        preview={<SimulationPreview />}
      />

      <FeatureBlock
        eyebrow="Visão completa dos gastos"
        title="Reúna os gastos com IA em uma única visão governada."
        description="Uso medido por API e assinaturas registradas manualmente entram no mesmo orçamento, evitando uma visão fragmentada do que a empresa realmente gasta com IA."
        points={[
          "Uso de API convertido em dinheiro",
          "Assinaturas e assentos com rateio diário no orçamento",
          "Tudo consolidado contra os mesmos limites",
        ]}
        preview={<FullPicturePreview />}
        reverse
      />
    </div>
  );
}
