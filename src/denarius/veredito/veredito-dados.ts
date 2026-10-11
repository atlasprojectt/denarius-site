// Demo data for <VerdictDemo>: three moments of October for the fictional
// company (day 10 no controle, day 18 atenção, day 26 estourado), each a full
// cockpit from the Denarius engine. Edit freely; the verdict sentences and
// the digest are already written into each cockpit.

import type { VerdictDemoProps } from "./verdict-demo";

export const vereditoDados: VerdictDemoProps = {
  "scenes": [
    {
      "cockpit": {
        "state": "ready",
        "verdict": {
          "status": "green",
          "sentence": "No controle — projeção R$ 7.920,00 abaixo do orçamento.",
          "teamId": null
        },
        "collecting": false,
        "org": {
          "budget": 60000,
          "spent": 16800,
          "projection": 52080,
          "currentMargin": 43200,
          "projectedMargin": 7920,
          "pctSpent": 0.28,
          "pctElapsed": 0.3225806451612903,
          "collecting": false,
          "breached": false,
          "projectedBreach": false
        },
        "orgPctProjected": 0.868,
        "orgForecast": null,
        "orgWarnPct": 80,
        "orgUnconvertedUsd": 0,
        "needsAttention": [],
        "underControl": [],
        "composition": [
          {
            "key": "openai",
            "label": "OpenAI",
            "amount": 7433.316129032258,
            "share": 0.44245929339477724
          },
          {
            "key": "anthropic",
            "label": "Anthropic",
            "amount": 6861.522580645161,
            "share": 0.40842396313364054
          },
          {
            "key": "seats",
            "label": "Assentos",
            "amount": 2505.161290322581,
            "share": 0.14911674347158219
          }
        ],
        "allClear": true,
        "currency": "BRL",
        "periodEndLabel": "31 de outubro"
      },
      "dayOfPeriod": 10,
      "daysInPeriod": 31,
      "weekPct": -0.034,
      "stamp": "Atualizado em 10/10/2026, às 06:12"
    },
    {
      "cockpit": {
        "state": "ready",
        "verdict": {
          "status": "amber",
          "sentence": "Atenção — projeção de R$ 3.145,61 acima do orçamento.",
          "teamId": null
        },
        "collecting": false,
        "org": {
          "budget": 60000,
          "spent": 36665.19,
          "projection": 63145.605,
          "currentMargin": 23334.809999999998,
          "projectedMargin": -3145.605000000003,
          "pctSpent": 0.6110865000000001,
          "pctElapsed": 0.5806451612903226,
          "collecting": false,
          "breached": false,
          "projectedBreach": true
        },
        "orgPctProjected": 1.05242675,
        "orgForecast": null,
        "orgWarnPct": 80,
        "orgUnconvertedUsd": 0,
        "needsAttention": [],
        "underControl": [],
        "composition": [
          {
            "key": "openai",
            "label": "OpenAI",
            "amount": 16721.067832258068,
            "share": 0.45604748897409403
          },
          {
            "key": "anthropic",
            "label": "Anthropic",
            "amount": 15434.831845161292,
            "share": 0.4209669128991637
          },
          {
            "key": "seats",
            "label": "Assentos",
            "amount": 4509.290322580646,
            "share": 0.12298559812674215
          }
        ],
        "allClear": false,
        "currency": "BRL",
        "periodEndLabel": "31 de outubro"
      },
      "dayOfPeriod": 18,
      "daysInPeriod": 31,
      "weekPct": 0.062,
      "stamp": "Atualizado em 18/10/2026, às 06:12"
    },
    {
      "cockpit": {
        "state": "ready",
        "verdict": {
          "status": "red",
          "sentence": "A empresa ultrapassou o orçamento em 2%.",
          "teamId": null
        },
        "collecting": false,
        "org": {
          "budget": 60000,
          "spent": 61379.99999999999,
          "projection": 73183.84615384614,
          "currentMargin": -1379.9999999999927,
          "projectedMargin": -13183.846153846142,
          "pctSpent": 1.023,
          "pctElapsed": 0.8387096774193549,
          "collecting": false,
          "breached": true,
          "projectedBreach": true
        },
        "orgPctProjected": 1.219730769230769,
        "orgForecast": null,
        "orgWarnPct": 80,
        "orgUnconvertedUsd": 0,
        "needsAttention": [],
        "underControl": [],
        "composition": [
          {
            "key": "openai",
            "label": "OpenAI",
            "amount": 28530.621935483865,
            "share": 0.46481951670713373
          },
          {
            "key": "anthropic",
            "label": "Anthropic",
            "amount": 26335.95870967742,
            "share": 0.4290641692681235
          },
          {
            "key": "seats",
            "label": "Assentos",
            "amount": 6513.41935483871,
            "share": 0.10611631402474277
          }
        ],
        "allClear": false,
        "currency": "BRL",
        "periodEndLabel": "31 de outubro"
      },
      "dayOfPeriod": 26,
      "daysInPeriod": 31,
      "weekPct": 0.118,
      "stamp": "Atualizado em 26/10/2026, às 06:12"
    }
  ],
  "company": "Acme Tecnologia",
  "userName": "Marina"
};
