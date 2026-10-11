// Demo data for <CompositionDemo>: the fictional company's vendor cards
// (with each model's usage for the "Ver modelos" comparison) and the
// "Assinaturas e chaves" rows, assembled by the Denarius Explore page.

import type { CompositionDemoProps } from "./composition-demo";

export const composicaoDados: CompositionDemoProps = {
  "vendors": [
    {
      "vendor": "openai",
      "total": "R$ 17.963,10",
      "totalUsd": null,
      "share": "49%",
      "shareFraction": 0.4899223376441898,
      "parts": "API R$ 16.621,81 · assinaturas R$ 1.341,29",
      "delta": "API +25% X mesmo ponto de setembro",
      "models": [
        {
          "id": "openai:gpt-5",
          "label": "gpt-5",
          "provider": "openai",
          "amount": 9591.88101075,
          "originalUsd": 1776.2742612499997,
          "tokens": 738343282,
          "share": 0.2982929558101365,
          "state": "default",
          "comparison": {
            "provider": "openai",
            "model": "gpt-5",
            "usage": [
              {
                "date": "2026-10-01",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 42850325,
                "outputTokens": 6514033,
                "derivedCost": 118.70323625,
                "uncosted": false
              },
              {
                "date": "2026-10-02",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 47002101,
                "outputTokens": 7138538,
                "derivedCost": 130.13800625,
                "uncosted": false
              },
              {
                "date": "2026-10-03",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 16701548,
                "outputTokens": 2548490,
                "derivedCost": 46.361835,
                "uncosted": false
              },
              {
                "date": "2026-10-04",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 20092229,
                "outputTokens": 3053395,
                "derivedCost": 55.64923625,
                "uncosted": false
              },
              {
                "date": "2026-10-05",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 39230725,
                "outputTokens": 5980156,
                "derivedCost": 108.83996625,
                "uncosted": false
              },
              {
                "date": "2026-10-06",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 44187693,
                "outputTokens": 6728671,
                "derivedCost": 122.52132624999999,
                "uncosted": false
              },
              {
                "date": "2026-10-07",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 49154625,
                "outputTokens": 7471027,
                "derivedCost": 136.15355125,
                "uncosted": false
              },
              {
                "date": "2026-10-08",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 43464729,
                "outputTokens": 6628745,
                "derivedCost": 120.61836125,
                "uncosted": false
              },
              {
                "date": "2026-10-09",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 44034753,
                "outputTokens": 6698692,
                "derivedCost": 122.03036125,
                "uncosted": false
              },
              {
                "date": "2026-10-10",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 19918527,
                "outputTokens": 3030002,
                "derivedCost": 55.198178750000004,
                "uncosted": false
              },
              {
                "date": "2026-10-11",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 18574116,
                "outputTokens": 2827241,
                "derivedCost": 51.49005499999999,
                "uncosted": false
              },
              {
                "date": "2026-10-12",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 43505131,
                "outputTokens": 6631106,
                "derivedCost": 120.69247375,
                "uncosted": false
              },
              {
                "date": "2026-10-13",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 44359593,
                "outputTokens": 6743649,
                "derivedCost": 122.88598125000001,
                "uncosted": false
              },
              {
                "date": "2026-10-14",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 41009852,
                "outputTokens": 6260522,
                "derivedCost": 113.867535,
                "uncosted": false
              },
              {
                "date": "2026-10-15",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 49320387,
                "outputTokens": 7488167,
                "derivedCost": 136.53215375,
                "uncosted": false
              },
              {
                "date": "2026-10-16",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 40717123,
                "outputTokens": 6200638,
                "derivedCost": 112.90278375,
                "uncosted": false
              },
              {
                "date": "2026-10-17",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 19071877,
                "outputTokens": 2896954,
                "derivedCost": 52.809386249999996,
                "uncosted": false
              },
              {
                "date": "2026-10-18",
                "provider": "openai",
                "model": "gpt-5",
                "inputTokens": 17622787,
                "outputTokens": 2685135,
                "derivedCost": 48.879833749999996,
                "uncosted": false
              }
            ],
            "prices": [
              {
                "provider": "openai",
                "model": "gpt-4o",
                "inputPricePer1M": 2.5,
                "outputPricePer1M": 10,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4o-mini",
                "inputPricePer1M": 0.15,
                "outputPricePer1M": 0.6,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1",
                "inputPricePer1M": 2,
                "outputPricePer1M": 8,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1-mini",
                "inputPricePer1M": 0.4,
                "outputPricePer1M": 1.6,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1-nano",
                "inputPricePer1M": 0.1,
                "outputPricePer1M": 0.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5",
                "inputPricePer1M": 1.25,
                "outputPricePer1M": 10,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputPricePer1M": 0.25,
                "outputPricePer1M": 2,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5-nano",
                "inputPricePer1M": 0.05,
                "outputPricePer1M": 0.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "o3",
                "inputPricePer1M": 2,
                "outputPricePer1M": 8,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "o4-mini",
                "inputPricePer1M": 1.1,
                "outputPricePer1M": 4.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputPricePer1M": 5,
                "outputPricePer1M": 25,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputPricePer1M": 3,
                "outputPricePer1M": 15,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputPricePer1M": 1,
                "outputPricePer1M": 5,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-opus-4-1-20250805",
                "inputPricePer1M": 15,
                "outputPricePer1M": 75,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-sonnet-4-20250514",
                "inputPricePer1M": 3,
                "outputPricePer1M": 15,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-3-5-haiku-20241022",
                "inputPricePer1M": 0.8,
                "outputPricePer1M": 4,
                "effectiveDate": "2026-01-01"
              }
            ],
            "budgetUsd": 11111.11111111111,
            "projectedCostUsd": 11883.949622517075,
            "expectedDays": 18,
            "currency": "BRL",
            "fxRate": 5.4,
            "fxDate": "2026-10-01",
            "lastSyncAt": "em 18/10/2026, às 06:12",
            "dayOfPeriod": 18,
            "period": {
              "dayOfPeriod": 18,
              "daysInPeriod": 31,
              "monthStart": "2026-10-01"
            },
            "periodLabel": "outubro",
            "economics": {
              "derivedCostUsd": 1776.27426125,
              "costPerMillionUsd": 2.4057566508067723,
              "uncosted": false,
              "coverage": {
                "start": "2026-10-01",
                "end": "2026-10-18",
                "observedDays": 18,
                "expectedDays": 18,
                "complete": true
              }
            }
          }
        },
        {
          "id": "openai:gpt-5-mini",
          "label": "gpt-5-mini",
          "provider": "openai",
          "amount": 3666.1737024000004,
          "originalUsd": 678.921056,
          "tokens": 1442314455,
          "share": 0.11401244333375843,
          "state": "default",
          "comparison": {
            "provider": "openai",
            "model": "gpt-5-mini",
            "usage": [
              {
                "date": "2026-10-01",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 85357829,
                "outputTokens": 12169203,
                "derivedCost": 45.67786325,
                "uncosted": false
              },
              {
                "date": "2026-10-02",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 75917032,
                "outputTokens": 10993546,
                "derivedCost": 40.96635,
                "uncosted": false
              },
              {
                "date": "2026-10-03",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 36242457,
                "outputTokens": 5220194,
                "derivedCost": 19.50100225,
                "uncosted": false
              },
              {
                "date": "2026-10-04",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 38879983,
                "outputTokens": 5600133,
                "derivedCost": 20.92026175,
                "uncosted": false
              },
              {
                "date": "2026-10-05",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 88022874,
                "outputTokens": 12686820,
                "derivedCost": 47.379358499999995,
                "uncosted": false
              },
              {
                "date": "2026-10-06",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 89924632,
                "outputTokens": 13004133,
                "derivedCost": 48.489424,
                "uncosted": false
              },
              {
                "date": "2026-10-07",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 89088068,
                "outputTokens": 12856179,
                "derivedCost": 47.984375,
                "uncosted": false
              },
              {
                "date": "2026-10-08",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 89225129,
                "outputTokens": 12834023,
                "derivedCost": 47.97432825,
                "uncosted": false
              },
              {
                "date": "2026-10-09",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 86700048,
                "outputTokens": 12533304,
                "derivedCost": 46.74162,
                "uncosted": false
              },
              {
                "date": "2026-10-10",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 39962392,
                "outputTokens": 5756142,
                "derivedCost": 21.502882,
                "uncosted": false
              },
              {
                "date": "2026-10-11",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 32489125,
                "outputTokens": 4696136,
                "derivedCost": 17.51455325,
                "uncosted": false
              },
              {
                "date": "2026-10-12",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 89823861,
                "outputTokens": 13012873,
                "derivedCost": 48.481711250000004,
                "uncosted": false
              },
              {
                "date": "2026-10-13",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 87538936,
                "outputTokens": 12542978,
                "derivedCost": 46.970690000000005,
                "uncosted": false
              },
              {
                "date": "2026-10-14",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 87604926,
                "outputTokens": 12782390,
                "derivedCost": 47.4660115,
                "uncosted": false
              },
              {
                "date": "2026-10-15",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 92293316,
                "outputTokens": 13321687,
                "derivedCost": 49.716703,
                "uncosted": false
              },
              {
                "date": "2026-10-16",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 83780390,
                "outputTokens": 12144149,
                "derivedCost": 45.2333955,
                "uncosted": false
              },
              {
                "date": "2026-10-17",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 33288216,
                "outputTokens": 4799138,
                "derivedCost": 17.92033,
                "uncosted": false
              },
              {
                "date": "2026-10-18",
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputTokens": 34265274,
                "outputTokens": 4956939,
                "derivedCost": 18.4801965,
                "uncosted": false
              }
            ],
            "prices": [
              {
                "provider": "openai",
                "model": "gpt-4o",
                "inputPricePer1M": 2.5,
                "outputPricePer1M": 10,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4o-mini",
                "inputPricePer1M": 0.15,
                "outputPricePer1M": 0.6,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1",
                "inputPricePer1M": 2,
                "outputPricePer1M": 8,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1-mini",
                "inputPricePer1M": 0.4,
                "outputPricePer1M": 1.6,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1-nano",
                "inputPricePer1M": 0.1,
                "outputPricePer1M": 0.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5",
                "inputPricePer1M": 1.25,
                "outputPricePer1M": 10,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputPricePer1M": 0.25,
                "outputPricePer1M": 2,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5-nano",
                "inputPricePer1M": 0.05,
                "outputPricePer1M": 0.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "o3",
                "inputPricePer1M": 2,
                "outputPricePer1M": 8,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "o4-mini",
                "inputPricePer1M": 1.1,
                "outputPricePer1M": 4.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputPricePer1M": 5,
                "outputPricePer1M": 25,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputPricePer1M": 3,
                "outputPricePer1M": 15,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputPricePer1M": 1,
                "outputPricePer1M": 5,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-opus-4-1-20250805",
                "inputPricePer1M": 15,
                "outputPricePer1M": 75,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-sonnet-4-20250514",
                "inputPricePer1M": 3,
                "outputPricePer1M": 15,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-3-5-haiku-20241022",
                "inputPricePer1M": 0.8,
                "outputPricePer1M": 4,
                "effectiveDate": "2026-01-01"
              }
            ],
            "budgetUsd": 11111.11111111111,
            "projectedCostUsd": 11883.949622517075,
            "expectedDays": 18,
            "currency": "BRL",
            "fxRate": 5.4,
            "fxDate": "2026-10-01",
            "lastSyncAt": "em 18/10/2026, às 06:12",
            "dayOfPeriod": 18,
            "period": {
              "dayOfPeriod": 18,
              "daysInPeriod": 31,
              "monthStart": "2026-10-01"
            },
            "periodLabel": "outubro",
            "economics": {
              "derivedCostUsd": 678.9210560000001,
              "costPerMillionUsd": 0.47071639173164925,
              "uncosted": false,
              "coverage": {
                "start": "2026-10-01",
                "end": "2026-10-18",
                "observedDays": 18,
                "expectedDays": 18,
                "complete": true
              }
            }
          }
        },
        {
          "id": "openai:gpt-4.1",
          "label": "gpt-4.1",
          "provider": "openai",
          "amount": 3363.7549104000004,
          "originalUsd": 622.917576,
          "tokens": 230208669,
          "share": 0.10460767744299002,
          "state": "default",
          "comparison": {
            "provider": "openai",
            "model": "gpt-4.1",
            "usage": [
              {
                "date": "2026-10-01",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 13645723,
                "outputTokens": 1819430,
                "derivedCost": 41.846886,
                "uncosted": false
              },
              {
                "date": "2026-10-02",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 13040366,
                "outputTokens": 1738715,
                "derivedCost": 39.990452000000005,
                "uncosted": false
              },
              {
                "date": "2026-10-03",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 5816262,
                "outputTokens": 775502,
                "derivedCost": 17.83654,
                "uncosted": false
              },
              {
                "date": "2026-10-04",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 6187785,
                "outputTokens": 825038,
                "derivedCost": 18.975874,
                "uncosted": false
              },
              {
                "date": "2026-10-05",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 13279084,
                "outputTokens": 1770545,
                "derivedCost": 40.722528,
                "uncosted": false
              },
              {
                "date": "2026-10-06",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 12175534,
                "outputTokens": 1623405,
                "derivedCost": 37.338308,
                "uncosted": false
              },
              {
                "date": "2026-10-07",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 12620739,
                "outputTokens": 1682765,
                "derivedCost": 38.703598,
                "uncosted": false
              },
              {
                "date": "2026-10-08",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 15811524,
                "outputTokens": 2108203,
                "derivedCost": 48.488672,
                "uncosted": false
              },
              {
                "date": "2026-10-09",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 13801877,
                "outputTokens": 1840250,
                "derivedCost": 42.325753999999996,
                "uncosted": false
              },
              {
                "date": "2026-10-10",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 5467591,
                "outputTokens": 729012,
                "derivedCost": 16.767277999999997,
                "uncosted": false
              },
              {
                "date": "2026-10-11",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 6229040,
                "outputTokens": 830539,
                "derivedCost": 19.102392000000002,
                "uncosted": false
              },
              {
                "date": "2026-10-12",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 14520542,
                "outputTokens": 1936072,
                "derivedCost": 44.52966,
                "uncosted": false
              },
              {
                "date": "2026-10-13",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 16683992,
                "outputTokens": 2224532,
                "derivedCost": 51.16424,
                "uncosted": false
              },
              {
                "date": "2026-10-14",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 13883332,
                "outputTokens": 1851111,
                "derivedCost": 42.575552,
                "uncosted": false
              },
              {
                "date": "2026-10-15",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 13915466,
                "outputTokens": 1855395,
                "derivedCost": 42.674092,
                "uncosted": false
              },
              {
                "date": "2026-10-16",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 14127426,
                "outputTokens": 1883657,
                "derivedCost": 43.324107999999995,
                "uncosted": false
              },
              {
                "date": "2026-10-17",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 6435391,
                "outputTokens": 858052,
                "derivedCost": 19.735198,
                "uncosted": false
              },
              {
                "date": "2026-10-18",
                "provider": "openai",
                "model": "gpt-4.1",
                "inputTokens": 5483622,
                "outputTokens": 731150,
                "derivedCost": 16.816444,
                "uncosted": false
              }
            ],
            "prices": [
              {
                "provider": "openai",
                "model": "gpt-4o",
                "inputPricePer1M": 2.5,
                "outputPricePer1M": 10,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4o-mini",
                "inputPricePer1M": 0.15,
                "outputPricePer1M": 0.6,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1",
                "inputPricePer1M": 2,
                "outputPricePer1M": 8,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1-mini",
                "inputPricePer1M": 0.4,
                "outputPricePer1M": 1.6,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1-nano",
                "inputPricePer1M": 0.1,
                "outputPricePer1M": 0.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5",
                "inputPricePer1M": 1.25,
                "outputPricePer1M": 10,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputPricePer1M": 0.25,
                "outputPricePer1M": 2,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5-nano",
                "inputPricePer1M": 0.05,
                "outputPricePer1M": 0.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "o3",
                "inputPricePer1M": 2,
                "outputPricePer1M": 8,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "o4-mini",
                "inputPricePer1M": 1.1,
                "outputPricePer1M": 4.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputPricePer1M": 5,
                "outputPricePer1M": 25,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputPricePer1M": 3,
                "outputPricePer1M": 15,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputPricePer1M": 1,
                "outputPricePer1M": 5,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-opus-4-1-20250805",
                "inputPricePer1M": 15,
                "outputPricePer1M": 75,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-sonnet-4-20250514",
                "inputPricePer1M": 3,
                "outputPricePer1M": 15,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-3-5-haiku-20241022",
                "inputPricePer1M": 0.8,
                "outputPricePer1M": 4,
                "effectiveDate": "2026-01-01"
              }
            ],
            "budgetUsd": 11111.11111111111,
            "projectedCostUsd": 11883.949622517075,
            "expectedDays": 18,
            "currency": "BRL",
            "fxRate": 5.4,
            "fxDate": "2026-10-01",
            "lastSyncAt": "em 18/10/2026, às 06:12",
            "dayOfPeriod": 18,
            "period": {
              "dayOfPeriod": 18,
              "daysInPeriod": 31,
              "monthStart": "2026-10-01"
            },
            "periodLabel": "outubro",
            "economics": {
              "derivedCostUsd": 622.917576,
              "costPerMillionUsd": 2.7058823575405846,
              "uncosted": false,
              "coverage": {
                "start": "2026-10-01",
                "end": "2026-10-18",
                "observedDays": 18,
                "expectedDays": 18,
                "complete": true
              }
            }
          }
        }
      ]
    },
    {
      "vendor": "anthropic",
      "total": "R$ 16.718,62",
      "totalUsd": null,
      "share": "46%",
      "shareFraction": 0.4559804821553857,
      "parts": "API R$ 15.534,10 · assinaturas R$ 1.184,52",
      "delta": "API −3% X mesmo ponto de setembro",
      "models": [
        {
          "id": "anthropic:claude-sonnet-4-5-20250929",
          "label": "claude-sonnet-4-5-20250929",
          "provider": "anthropic",
          "amount": 9151.6615398,
          "originalUsd": 1694.752137,
          "tokens": 395442167,
          "share": 0.2846027977433631,
          "state": "default",
          "comparison": {
            "provider": "anthropic",
            "model": "claude-sonnet-4-5-20250929",
            "usage": [
              {
                "date": "2026-10-01",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 22049435,
                "outputTokens": 2645932,
                "derivedCost": 105.837285,
                "uncosted": false
              },
              {
                "date": "2026-10-02",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 23267621,
                "outputTokens": 2792115,
                "derivedCost": 111.68458799999999,
                "uncosted": false
              },
              {
                "date": "2026-10-03",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 9583723,
                "outputTokens": 1150047,
                "derivedCost": 46.001874,
                "uncosted": false
              },
              {
                "date": "2026-10-04",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 10522948,
                "outputTokens": 1262754,
                "derivedCost": 50.510154,
                "uncosted": false
              },
              {
                "date": "2026-10-05",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 23991661,
                "outputTokens": 2878999,
                "derivedCost": 115.159968,
                "uncosted": false
              },
              {
                "date": "2026-10-06",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 25812169,
                "outputTokens": 3097460,
                "derivedCost": 123.898407,
                "uncosted": false
              },
              {
                "date": "2026-10-07",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 24734871,
                "outputTokens": 2968185,
                "derivedCost": 118.72738799999999,
                "uncosted": false
              },
              {
                "date": "2026-10-08",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 24125766,
                "outputTokens": 2895092,
                "derivedCost": 115.80367799999999,
                "uncosted": false
              },
              {
                "date": "2026-10-09",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 25144403,
                "outputTokens": 3017328,
                "derivedCost": 120.693129,
                "uncosted": false
              },
              {
                "date": "2026-10-10",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 11525003,
                "outputTokens": 1383000,
                "derivedCost": 55.320009,
                "uncosted": false
              },
              {
                "date": "2026-10-11",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 10993442,
                "outputTokens": 1319213,
                "derivedCost": 52.76852099999999,
                "uncosted": false
              },
              {
                "date": "2026-10-12",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 22749435,
                "outputTokens": 2729932,
                "derivedCost": 109.197285,
                "uncosted": false
              },
              {
                "date": "2026-10-13",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 28042782,
                "outputTokens": 3365134,
                "derivedCost": 134.605356,
                "uncosted": false
              },
              {
                "date": "2026-10-14",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 22262452,
                "outputTokens": 2671494,
                "derivedCost": 106.85976600000001,
                "uncosted": false
              },
              {
                "date": "2026-10-15",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 23790508,
                "outputTokens": 2854861,
                "derivedCost": 114.19443899999999,
                "uncosted": false
              },
              {
                "date": "2026-10-16",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 25547145,
                "outputTokens": 3065657,
                "derivedCost": 122.62629,
                "uncosted": false
              },
              {
                "date": "2026-10-17",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 9784229,
                "outputTokens": 1174107,
                "derivedCost": 46.964292,
                "uncosted": false
              },
              {
                "date": "2026-10-18",
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputTokens": 9145771,
                "outputTokens": 1097493,
                "derivedCost": 43.899708000000004,
                "uncosted": false
              }
            ],
            "prices": [
              {
                "provider": "openai",
                "model": "gpt-4o",
                "inputPricePer1M": 2.5,
                "outputPricePer1M": 10,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4o-mini",
                "inputPricePer1M": 0.15,
                "outputPricePer1M": 0.6,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1",
                "inputPricePer1M": 2,
                "outputPricePer1M": 8,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1-mini",
                "inputPricePer1M": 0.4,
                "outputPricePer1M": 1.6,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1-nano",
                "inputPricePer1M": 0.1,
                "outputPricePer1M": 0.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5",
                "inputPricePer1M": 1.25,
                "outputPricePer1M": 10,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputPricePer1M": 0.25,
                "outputPricePer1M": 2,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5-nano",
                "inputPricePer1M": 0.05,
                "outputPricePer1M": 0.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "o3",
                "inputPricePer1M": 2,
                "outputPricePer1M": 8,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "o4-mini",
                "inputPricePer1M": 1.1,
                "outputPricePer1M": 4.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputPricePer1M": 5,
                "outputPricePer1M": 25,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputPricePer1M": 3,
                "outputPricePer1M": 15,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputPricePer1M": 1,
                "outputPricePer1M": 5,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-opus-4-1-20250805",
                "inputPricePer1M": 15,
                "outputPricePer1M": 75,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-sonnet-4-20250514",
                "inputPricePer1M": 3,
                "outputPricePer1M": 15,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-3-5-haiku-20241022",
                "inputPricePer1M": 0.8,
                "outputPricePer1M": 4,
                "effectiveDate": "2026-01-01"
              }
            ],
            "budgetUsd": 11111.11111111111,
            "projectedCostUsd": 11883.949622517075,
            "expectedDays": 18,
            "currency": "BRL",
            "fxRate": 5.4,
            "fxDate": "2026-10-01",
            "lastSyncAt": "em 18/10/2026, às 06:12",
            "dayOfPeriod": 18,
            "period": {
              "dayOfPeriod": 18,
              "daysInPeriod": 31,
              "monthStart": "2026-10-01"
            },
            "periodLabel": "outubro",
            "economics": {
              "derivedCostUsd": 1694.752137,
              "costPerMillionUsd": 4.285714267290063,
              "uncosted": false,
              "coverage": {
                "start": "2026-10-01",
                "end": "2026-10-18",
                "observedDays": 18,
                "expectedDays": 18,
                "complete": true
              }
            }
          }
        },
        {
          "id": "anthropic:claude-haiku-4-5-20251001",
          "label": "claude-haiku-4-5-20251001",
          "provider": "anthropic",
          "amount": 3777.5285604,
          "originalUsd": 699.542326,
          "tokens": 475688778,
          "share": 0.11747541057651416,
          "state": "default",
          "comparison": {
            "provider": "anthropic",
            "model": "claude-haiku-4-5-20251001",
            "usage": [
              {
                "date": "2026-10-01",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 28229623,
                "outputTokens": 3763950,
                "derivedCost": 47.049373,
                "uncosted": false
              },
              {
                "date": "2026-10-02",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 23985619,
                "outputTokens": 3198083,
                "derivedCost": 39.976034,
                "uncosted": false
              },
              {
                "date": "2026-10-03",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 10850612,
                "outputTokens": 1446748,
                "derivedCost": 18.084352,
                "uncosted": false
              },
              {
                "date": "2026-10-04",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 11133230,
                "outputTokens": 1484431,
                "derivedCost": 18.555385,
                "uncosted": false
              },
              {
                "date": "2026-10-05",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 31281919,
                "outputTokens": 4170923,
                "derivedCost": 52.136534,
                "uncosted": false
              },
              {
                "date": "2026-10-06",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 25102974,
                "outputTokens": 3347063,
                "derivedCost": 41.838289,
                "uncosted": false
              },
              {
                "date": "2026-10-07",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 24484403,
                "outputTokens": 3264587,
                "derivedCost": 40.807338,
                "uncosted": false
              },
              {
                "date": "2026-10-08",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 31254774,
                "outputTokens": 4167303,
                "derivedCost": 52.091289,
                "uncosted": false
              },
              {
                "date": "2026-10-09",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 32182345,
                "outputTokens": 4290979,
                "derivedCost": 53.63724,
                "uncosted": false
              },
              {
                "date": "2026-10-10",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 11894046,
                "outputTokens": 1585873,
                "derivedCost": 19.823411,
                "uncosted": false
              },
              {
                "date": "2026-10-11",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 12373663,
                "outputTokens": 1649822,
                "derivedCost": 20.622773000000002,
                "uncosted": false
              },
              {
                "date": "2026-10-12",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 32938055,
                "outputTokens": 4391741,
                "derivedCost": 54.89676,
                "uncosted": false
              },
              {
                "date": "2026-10-13",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 27461806,
                "outputTokens": 3661574,
                "derivedCost": 45.769676000000004,
                "uncosted": false
              },
              {
                "date": "2026-10-14",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 31608126,
                "outputTokens": 4214417,
                "derivedCost": 52.680211,
                "uncosted": false
              },
              {
                "date": "2026-10-15",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 31212987,
                "outputTokens": 4161732,
                "derivedCost": 52.021647,
                "uncosted": false
              },
              {
                "date": "2026-10-16",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 27848545,
                "outputTokens": 3713139,
                "derivedCost": 46.41424,
                "uncosted": false
              },
              {
                "date": "2026-10-17",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 12676137,
                "outputTokens": 1690152,
                "derivedCost": 21.126897,
                "uncosted": false
              },
              {
                "date": "2026-10-18",
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputTokens": 13206527,
                "outputTokens": 1760870,
                "derivedCost": 22.010877,
                "uncosted": false
              }
            ],
            "prices": [
              {
                "provider": "openai",
                "model": "gpt-4o",
                "inputPricePer1M": 2.5,
                "outputPricePer1M": 10,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4o-mini",
                "inputPricePer1M": 0.15,
                "outputPricePer1M": 0.6,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1",
                "inputPricePer1M": 2,
                "outputPricePer1M": 8,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1-mini",
                "inputPricePer1M": 0.4,
                "outputPricePer1M": 1.6,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1-nano",
                "inputPricePer1M": 0.1,
                "outputPricePer1M": 0.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5",
                "inputPricePer1M": 1.25,
                "outputPricePer1M": 10,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputPricePer1M": 0.25,
                "outputPricePer1M": 2,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5-nano",
                "inputPricePer1M": 0.05,
                "outputPricePer1M": 0.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "o3",
                "inputPricePer1M": 2,
                "outputPricePer1M": 8,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "o4-mini",
                "inputPricePer1M": 1.1,
                "outputPricePer1M": 4.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputPricePer1M": 5,
                "outputPricePer1M": 25,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputPricePer1M": 3,
                "outputPricePer1M": 15,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputPricePer1M": 1,
                "outputPricePer1M": 5,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-opus-4-1-20250805",
                "inputPricePer1M": 15,
                "outputPricePer1M": 75,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-sonnet-4-20250514",
                "inputPricePer1M": 3,
                "outputPricePer1M": 15,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-3-5-haiku-20241022",
                "inputPricePer1M": 0.8,
                "outputPricePer1M": 4,
                "effectiveDate": "2026-01-01"
              }
            ],
            "budgetUsd": 11111.11111111111,
            "projectedCostUsd": 11883.949622517075,
            "expectedDays": 18,
            "currency": "BRL",
            "fxRate": 5.4,
            "fxDate": "2026-10-01",
            "lastSyncAt": "em 18/10/2026, às 06:12",
            "dayOfPeriod": 18,
            "period": {
              "dayOfPeriod": 18,
              "daysInPeriod": 31,
              "monthStart": "2026-10-01"
            },
            "periodLabel": "outubro",
            "economics": {
              "derivedCostUsd": 699.542326,
              "costPerMillionUsd": 1.4705882466708098,
              "uncosted": false,
              "coverage": {
                "start": "2026-10-01",
                "end": "2026-10-18",
                "observedDays": 18,
                "expectedDays": 18,
                "complete": true
              }
            }
          }
        },
        {
          "id": "anthropic:claude-opus-4-5-20251101",
          "label": "claude-opus-4-5-20251101",
          "provider": "anthropic",
          "amount": 2604.908835,
          "originalUsd": 482.390525,
          "tokens": 63399897,
          "share": 0.08100871509323829,
          "state": "default",
          "comparison": {
            "provider": "anthropic",
            "model": "claude-opus-4-5-20251101",
            "usage": [
              {
                "date": "2026-10-01",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 3183095,
                "outputTokens": 477464,
                "derivedCost": 27.852075,
                "uncosted": false
              },
              {
                "date": "2026-10-02",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 3715151,
                "outputTokens": 557273,
                "derivedCost": 32.507580000000004,
                "uncosted": false
              },
              {
                "date": "2026-10-03",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 1684913,
                "outputTokens": 252737,
                "derivedCost": 14.74299,
                "uncosted": false
              },
              {
                "date": "2026-10-04",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 1350048,
                "outputTokens": 202507,
                "derivedCost": 11.812915,
                "uncosted": false
              },
              {
                "date": "2026-10-05",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 3466135,
                "outputTokens": 519920,
                "derivedCost": 30.328675,
                "uncosted": false
              },
              {
                "date": "2026-10-06",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 3707528,
                "outputTokens": 556129,
                "derivedCost": 32.440865,
                "uncosted": false
              },
              {
                "date": "2026-10-07",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 3693312,
                "outputTokens": 553997,
                "derivedCost": 32.316485,
                "uncosted": false
              },
              {
                "date": "2026-10-08",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 3792748,
                "outputTokens": 568912,
                "derivedCost": 33.18654,
                "uncosted": false
              },
              {
                "date": "2026-10-09",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 3649459,
                "outputTokens": 547419,
                "derivedCost": 31.932769999999998,
                "uncosted": false
              },
              {
                "date": "2026-10-10",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 1746291,
                "outputTokens": 261944,
                "derivedCost": 15.280055,
                "uncosted": false
              },
              {
                "date": "2026-10-11",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 1688971,
                "outputTokens": 253346,
                "derivedCost": 14.778505000000001,
                "uncosted": false
              },
              {
                "date": "2026-10-12",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 4365937,
                "outputTokens": 654891,
                "derivedCost": 38.20196,
                "uncosted": false
              },
              {
                "date": "2026-10-13",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 3727690,
                "outputTokens": 559154,
                "derivedCost": 32.6173,
                "uncosted": false
              },
              {
                "date": "2026-10-14",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 3769960,
                "outputTokens": 565494,
                "derivedCost": 32.98715,
                "uncosted": false
              },
              {
                "date": "2026-10-15",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 3453623,
                "outputTokens": 518043,
                "derivedCost": 30.219189999999998,
                "uncosted": false
              },
              {
                "date": "2026-10-16",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 4466763,
                "outputTokens": 670014,
                "derivedCost": 39.084165,
                "uncosted": false
              },
              {
                "date": "2026-10-17",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 1763430,
                "outputTokens": 264514,
                "derivedCost": 15.43,
                "uncosted": false
              },
              {
                "date": "2026-10-18",
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputTokens": 1905291,
                "outputTokens": 285794,
                "derivedCost": 16.671305,
                "uncosted": false
              }
            ],
            "prices": [
              {
                "provider": "openai",
                "model": "gpt-4o",
                "inputPricePer1M": 2.5,
                "outputPricePer1M": 10,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4o-mini",
                "inputPricePer1M": 0.15,
                "outputPricePer1M": 0.6,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1",
                "inputPricePer1M": 2,
                "outputPricePer1M": 8,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1-mini",
                "inputPricePer1M": 0.4,
                "outputPricePer1M": 1.6,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-4.1-nano",
                "inputPricePer1M": 0.1,
                "outputPricePer1M": 0.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5",
                "inputPricePer1M": 1.25,
                "outputPricePer1M": 10,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5-mini",
                "inputPricePer1M": 0.25,
                "outputPricePer1M": 2,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "gpt-5-nano",
                "inputPricePer1M": 0.05,
                "outputPricePer1M": 0.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "o3",
                "inputPricePer1M": 2,
                "outputPricePer1M": 8,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "openai",
                "model": "o4-mini",
                "inputPricePer1M": 1.1,
                "outputPricePer1M": 4.4,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-opus-4-5-20251101",
                "inputPricePer1M": 5,
                "outputPricePer1M": 25,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-sonnet-4-5-20250929",
                "inputPricePer1M": 3,
                "outputPricePer1M": 15,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-haiku-4-5-20251001",
                "inputPricePer1M": 1,
                "outputPricePer1M": 5,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-opus-4-1-20250805",
                "inputPricePer1M": 15,
                "outputPricePer1M": 75,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-sonnet-4-20250514",
                "inputPricePer1M": 3,
                "outputPricePer1M": 15,
                "effectiveDate": "2026-01-01"
              },
              {
                "provider": "anthropic",
                "model": "claude-3-5-haiku-20241022",
                "inputPricePer1M": 0.8,
                "outputPricePer1M": 4,
                "effectiveDate": "2026-01-01"
              }
            ],
            "budgetUsd": 11111.11111111111,
            "projectedCostUsd": 11883.949622517075,
            "expectedDays": 18,
            "currency": "BRL",
            "fxRate": 5.4,
            "fxDate": "2026-10-01",
            "lastSyncAt": "em 18/10/2026, às 06:12",
            "dayOfPeriod": 18,
            "period": {
              "dayOfPeriod": 18,
              "daysInPeriod": 31,
              "monthStart": "2026-10-01"
            },
            "periodLabel": "outubro",
            "economics": {
              "derivedCostUsd": 482.390525,
              "costPerMillionUsd": 7.608695720751723,
              "uncosted": false,
              "coverage": {
                "start": "2026-10-01",
                "end": "2026-10-18",
                "observedDays": 18,
                "expectedDays": 18,
                "complete": true
              }
            }
          }
        }
      ]
    },
    {
      "vendor": "other",
      "total": "R$ 1.983,48",
      "totalUsd": null,
      "share": "5%",
      "shareFraction": 0.054097180200424345,
      "parts": "Assinaturas R$ 1.983,48",
      "delta": null,
      "models": []
    }
  ],
  "rows": [
    {
      "id": "anthropic:code-review",
      "kind": "api",
      "vendor": "anthropic",
      "title": "code-review",
      "subtitle": "API Anthropic · workspace",
      "team": "Engenharia",
      "amount": "R$ 11.756,57",
      "amountUsd": "US$ 2.177,14",
      "delta": "+1%",
      "models": [
        {
          "model": "claude-sonnet-4-5-20250929",
          "tokens": "395,4 mi",
          "amount": "R$ 9.151,66"
        },
        {
          "model": "claude-opus-4-5-20251101",
          "tokens": "63,4 mi",
          "amount": "R$ 2.604,91"
        }
      ]
    },
    {
      "id": "openai:assistente-produto",
      "kind": "api",
      "vendor": "openai",
      "title": "assistente-produto",
      "subtitle": "API OpenAI · projeto",
      "team": "Produto",
      "amount": "R$ 10.623,35",
      "amountUsd": "US$ 1.967,29",
      "delta": "+30%",
      "models": [
        {
          "model": "gpt-5",
          "tokens": "640,2 mi",
          "amount": "R$ 8.266,57"
        },
        {
          "model": "gpt-5-mini",
          "tokens": "957,4 mi",
          "amount": "R$ 2.356,78"
        }
      ]
    },
    {
      "id": "anthropic:suporte-bot",
      "kind": "api",
      "vendor": "anthropic",
      "title": "suporte-bot",
      "subtitle": "API Anthropic · workspace",
      "team": "Atendimento",
      "amount": "R$ 3.777,53",
      "amountUsd": "US$ 699,54",
      "delta": "−16%",
      "models": [
        {
          "model": "claude-haiku-4-5-20251001",
          "tokens": "475,7 mi",
          "amount": "R$ 3.777,53"
        }
      ]
    },
    {
      "id": "openai:busca-semantica",
      "kind": "api",
      "vendor": "openai",
      "title": "busca-semantica",
      "subtitle": "API OpenAI · projeto",
      "team": "Dados",
      "amount": "R$ 3.363,75",
      "amountUsd": "US$ 622,92",
      "delta": "+14%",
      "models": [
        {
          "model": "gpt-4.1",
          "tokens": "230,2 mi",
          "amount": "R$ 3.363,75"
        }
      ]
    },
    {
      "id": "cursor",
      "kind": "subscription",
      "vendor": "other",
      "title": "Cursor Business",
      "subtitle": "Assinatura · 12 assentos × R$ 216,00",
      "team": "Engenharia",
      "amount": "R$ 1.505,03",
      "amountUsd": null,
      "delta": null,
      "models": []
    },
    {
      "id": "chatgpt-team",
      "kind": "subscription",
      "vendor": "openai",
      "title": "ChatGPT Team",
      "subtitle": "Assinatura · 14 assentos × R$ 165,00",
      "team": "Produto",
      "amount": "R$ 1.341,29",
      "amountUsd": null,
      "delta": null,
      "models": []
    },
    {
      "id": "openai:experimentos",
      "kind": "api",
      "vendor": "openai",
      "title": "experimentos",
      "subtitle": "API OpenAI · projeto",
      "team": null,
      "amount": "R$ 1.325,31",
      "amountUsd": "US$ 245,43",
      "delta": "+90%",
      "models": [
        {
          "model": "gpt-5",
          "tokens": "98,2 mi",
          "amount": "R$ 1.325,31"
        }
      ]
    },
    {
      "id": "openai:conteudo",
      "kind": "api",
      "vendor": "openai",
      "title": "conteudo",
      "subtitle": "API OpenAI · projeto",
      "team": "Marketing",
      "amount": "R$ 1.309,40",
      "amountUsd": "US$ 242,48",
      "delta": "−11%",
      "models": [
        {
          "model": "gpt-5-mini",
          "tokens": "485 mi",
          "amount": "R$ 1.309,40"
        }
      ]
    },
    {
      "id": "claude-team",
      "kind": "subscription",
      "vendor": "anthropic",
      "title": "Claude Team",
      "subtitle": "Assinatura · 10 assentos × R$ 160,00",
      "team": "Engenharia",
      "amount": "R$ 929,03",
      "amountUsd": null,
      "delta": null,
      "models": []
    },
    {
      "id": "copilot",
      "kind": "subscription",
      "vendor": "other",
      "title": "GitHub Copilot Business",
      "subtitle": "Assinatura · 8 assentos × R$ 103,00",
      "team": null,
      "amount": "R$ 478,45",
      "amountUsd": null,
      "delta": null,
      "models": []
    },
    {
      "id": "claude-pro",
      "kind": "subscription",
      "vendor": "anthropic",
      "title": "Claude Pro",
      "subtitle": "Assinatura · 4 assentos × R$ 110,00",
      "team": "Marketing",
      "amount": "R$ 255,48",
      "amountUsd": null,
      "delta": null,
      "models": []
    }
  ],
  "previousMonth": "setembro",
  "currency": "BRL"
};
