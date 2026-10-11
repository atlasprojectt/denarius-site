// Demo data for <EmailDemo>: the weekly digest the fictional company's Admins
// received on Friday, 16 October — the deterministic body the Denarius engine
// writes from that day's cockpit, one entry per paragraph.

import type { EmailDemoProps } from "./email-demo";

export const resumoEmailDados: EmailDemoProps = {
  "monthLabel": "outubro",
  "paragraphs": [
    "Atenção — projeção de R$ 6.219,22 acima do orçamento.",
    "Gasto no período: R$ 34.324,15 de R$ 60.000,00 (57%).\nProjeção de fechamento: R$ 66.219,22 — margem projetada de -R$ 6.219,22.\nGasto de API na semana: 3% em relação à semana anterior.",
    "Principais consumidores:\nEngenharia — R$ 13.256,17 (39%)\nProduto — R$ 11.214,31 (33%)\nAtendimento — R$ 3.544,58 (10%)"
  ],
  "sender": "Denarius",
  "senderAddress": "resumo@usedenarius.pro",
  "date": "sex., 16 de out., 08:00 (há 2 dias)",
  "appUrl": "https://app.usedenarius.pro"
};
