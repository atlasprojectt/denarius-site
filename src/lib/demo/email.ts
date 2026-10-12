// O e-mail interno que chega a cada pedido de demonstração. Puro, sem I/O:
// só monta a mensagem; quem envia é o módulo `delivery`.
// O visual espelha o layout transacional do app (`lib/email/layout.ts` no
// repositório Denarius): mesma paleta, cartão e rodapé — estilos inline, porque
// clientes de e-mail removem blocos <style>.

import {
  COMPANY_SIZES,
  MONTHLY_SPEND,
  PROVIDERS,
  ROLES,
  labelOf,
  type DemoRequest,
} from "./request";
import type { DemoMessage } from "./delivery/types";

const palette = {
  canvas: "#f5f4f1",
  card: "#ffffff",
  panel: "#fafaf9",
  border: "#e7e5e4",
  divider: "#f0efed",
  ink: "#1c1917",
  body: "#44403c",
  secondary: "#57534e",
  muted: "#78716c",
  faint: "#a8a29e",
  amber: "#b45309",
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export type DemoEmailContext = {
  /** Sinais para a triagem, como e-mail de provedor pessoal. */
  flags: string[];
  receivedAt: Date;
};

const NOT_INFORMED = "Não informado";

function rows(data: DemoRequest): [string, string][] {
  return [
    ["Nome", data.name],
    ["E-mail", data.email],
    ["Telefone", data.phone || NOT_INFORMED],
    ["Papel", labelOf(ROLES, data.role)],
    ["Empresa", data.company],
    ["Tamanho", labelOf(COMPANY_SIZES, data.companySize)],
    [
      "Provedores",
      data.providers.length > 0
        ? data.providers.map((p) => labelOf(PROVIDERS, p)).join(", ")
        : NOT_INFORMED,
    ],
    [
      "Gasto mensal com IA",
      data.monthlySpend ? labelOf(MONTHLY_SPEND, data.monthlySpend) : NOT_INFORMED,
    ],
  ];
}

function formatReceivedAt(date: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }).format(date);
}

export function demoEmailSubject(data: DemoRequest): string {
  const size = labelOf(COMPANY_SIZES, data.companySize);
  return `Pedido de demonstração: ${data.company} (${size})`;
}

export function renderDemoEmailText(data: DemoRequest, ctx: DemoEmailContext): string {
  const lines = [
    "Novo pedido de demonstração pelo site do Denarius.",
    "",
    ...rows(data).map(([label, value]) => `${label}: ${value}`),
    "",
    "Mensagem:",
    data.message || NOT_INFORMED,
  ];
  if (ctx.flags.length > 0) {
    lines.push("", "Atenção:", ...ctx.flags.map((flag) => `- ${flag}`));
  }
  lines.push(
    "",
    `Recebido em ${formatReceivedAt(ctx.receivedAt)} (horário de Brasília).`,
    "Responda este e-mail para falar direto com quem pediu.",
  );
  return lines.join("\n");
}

export function renderDemoEmailHtml(data: DemoRequest, ctx: DemoEmailContext): string {
  const facts = rows(data)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:${palette.secondary};font-size:14px;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td><td style="padding:6px 0;color:${palette.ink};font-size:14px;font-weight:700">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const flags =
    ctx.flags.length > 0
      ? `<div style="margin:24px 0 0;padding:14px 16px;border-radius:12px;border:1px solid ${palette.border};background:${palette.panel}"><p style="margin:0;color:${palette.amber};font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase">Atenção</p><ul style="margin:8px 0 0;padding-left:20px;color:${palette.body};font-size:14px;line-height:1.6">${ctx.flags.map((flag) => `<li>${escapeHtml(flag)}</li>`).join("")}</ul></div>`
      : "";

  return `<!doctype html>
<html lang="pt-BR">
  <body style="margin:0;background:${palette.canvas};color:${palette.ink};font-family:Arial,Helvetica,sans-serif">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(`${data.name} · ${data.company}`)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;background:${palette.canvas}">
      <tr>
        <td align="center" style="padding:32px 12px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;max-width:560px;background:${palette.card};border:1px solid ${palette.border};border-radius:16px;overflow:hidden">
            <tr>
              <td style="padding:24px 32px 18px;border-bottom:1px solid ${palette.divider}">
                <p style="margin:0;color:${palette.muted};font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase">Pedido de demonstração</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 32px">
                <h1 style="margin:0;color:${palette.ink};font-size:24px;line-height:1.2;letter-spacing:-.02em">${escapeHtml(data.company)}</h1>
                <div style="margin:20px 0 0;padding:12px 16px;border-radius:12px;background:${palette.panel}">
                  <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse">${facts}</table>
                </div>
                <p style="margin:24px 0 0;color:${palette.muted};font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase">Mensagem</p>
                <p style="margin:8px 0 0;color:${palette.body};font-size:15px;line-height:1.6;white-space:pre-line">${escapeHtml(data.message || NOT_INFORMED)}</p>
                ${flags}
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px;border-top:1px solid ${palette.divider};color:${palette.faint};font-size:11px;line-height:1.5">Recebido em ${escapeHtml(formatReceivedAt(ctx.receivedAt))} (horário de Brasília). Responda este e-mail para falar direto com quem pediu.<br>Denarius · Governança de gasto com IA</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/** A mensagem pronta para qualquer forma de envio (ver `delivery`). */
export function buildDemoEmail(data: DemoRequest, ctx: DemoEmailContext): DemoMessage {
  return {
    subject: demoEmailSubject(data),
    text: renderDemoEmailText(data, ctx),
    html: renderDemoEmailHtml(data, ctx),
    replyTo: data.email,
  };
}
