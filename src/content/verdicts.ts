import type { BudgetStatus } from "@/components/ui/status-pill";

// Exemplos ilustrativos, na linguagem do veredito do app.
export const VERDICTS: Array<{ status: BudgetStatus; sentence: string }> = [
  { status: "ok", sentence: "Projeção de R$\u00a03.100,00 abaixo do orçamento." },
  { status: "attention", sentence: "Projeção de R$\u00a04.200,00 acima do orçamento." },
  { status: "breached", sentence: "Engenharia ultrapassou o orçamento em 19%." },
  { status: "collecting", sentence: "A projeção aparece a partir do 5º dia do mês." },
];
