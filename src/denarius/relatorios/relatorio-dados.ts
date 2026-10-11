// Demo data for <ReportDocument>: the fictional company's running October as
// the on-demand report snapshot (buildPeriodSnapshot), in the Atenção state.

import type { ReportDocumentData } from "./_components/report-document";

export const relatorioDados: ReportDocumentData = {
  "periodMonth": "2026-10-01",
  "monthLabel": "outubro",
  "closedAt": "2026-10-18T15:00:00.000Z",
  "source": "live",
  "dayOfPeriod": 18,
  "daysInPeriod": 31,
  "currency": "BRL",
  "apiUsd": 5954.7978812500005,
  "seatsAmount": 4509.28,
  "combinedAmount": 36665.18855875001,
  "budgetAmount": 60000,
  "pctSpent": 0.6110864759791668,
  "projection": 63145.602517847234,
  "frozenFxRate": 5.4,
  "fxRateSource": "open.er-api.com",
  "fxRateDate": "2026-10-01",
  "verdictStatus": "amber",
  "verdictSentence": "Atenção — projeção de R$ 3.145,60 acima do orçamento.",
  "breakdown": {
    "teams": [
      {
        "teamId": "produto",
        "teamName": "Produto",
        "spend": 11964.641484799999,
        "budget": 24000,
        "pctSpent": 0.4985267285333333,
        "status": "green"
      },
      {
        "teamId": "engenharia",
        "teamName": "Engenharia",
        "spend": 14190.6303748,
        "budget": 22000,
        "pctSpent": 0.6450286533999999,
        "status": "amber"
      },
      {
        "teamId": "dados",
        "teamName": "Dados",
        "spend": 3363.7549104000004,
        "budget": 9000,
        "pctSpent": 0.37375054560000004,
        "status": "green"
      },
      {
        "teamId": "atendimento",
        "teamName": "Atendimento",
        "spend": 3777.5285604,
        "budget": 10000,
        "pctSpent": 0.37775285604000003,
        "status": "green"
      },
      {
        "teamId": "marketing",
        "teamName": "Marketing",
        "spend": 1564.87536285,
        "budget": 4000,
        "pctSpent": 0.3912188407125,
        "status": "green"
      }
    ],
    "providers": [
      {
        "provider": "openai",
        "usd": 3078.11289325,
        "display": 16621.80962355
      },
      {
        "provider": "anthropic",
        "usd": 2876.684988,
        "display": 15534.098935200002
      }
    ],
    "topDrivers": [
      {
        "label": "Engenharia",
        "value": 14190.6303748,
        "share": 0.3870327941191908
      },
      {
        "label": "Produto",
        "value": 11964.641484799999,
        "share": 0.32632155881671265
      },
      {
        "label": "Atendimento",
        "value": 3777.5285604,
        "share": 0.10302765944724722
      }
    ],
    "unattributed": {
      "apiUsd": 245.42738250000002,
      "seats": 478.45,
      "display": 1803.7578655000002
    },
    "seats": {
      "available": true,
      "total": 4509.28,
      "unattributed": 478.45,
      "subscriptions": [
        {
          "tool": "ChatGPT Team",
          "seatCount": 14,
          "unitPrice": 165,
          "teamId": "produto",
          "teamName": "Produto",
          "monthlyTotal": 2310
        },
        {
          "tool": "Claude Team",
          "seatCount": 10,
          "unitPrice": 160,
          "teamId": "engenharia",
          "teamName": "Engenharia",
          "monthlyTotal": 1600
        },
        {
          "tool": "Cursor Business",
          "seatCount": 12,
          "unitPrice": 216,
          "teamId": "engenharia",
          "teamName": "Engenharia",
          "monthlyTotal": 2592
        },
        {
          "tool": "GitHub Copilot Business",
          "seatCount": 8,
          "unitPrice": 103,
          "teamId": null,
          "teamName": null,
          "monthlyTotal": 824
        },
        {
          "tool": "Claude Pro",
          "seatCount": 4,
          "unitPrice": 110,
          "teamId": "marketing",
          "teamName": "Marketing",
          "monthlyTotal": 440
        }
      ]
    },
    "reconciliation": {
      "derivedUsd": 5954.797881249997,
      "reportedUsd": 5954.7978812500005,
      "driftUsd": 3.637978807091713e-12,
      "driftPct": 6.109323741359375e-16,
      "withinTolerance": true
    }
  },
  "hasUncosted": false,
  "reconciliationOk": true,
  "fxMissing": false,
  "staleSync": false,
  "companyName": "Acme Tecnologia"
};
