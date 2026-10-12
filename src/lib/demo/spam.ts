// Filtros anti-spam do pedido de demonstração. Só roda no servidor.
//
// São camadas baratas, cada uma pegando um tipo de abuso:
// - campo isca e tempo mínimo: robôs que preenchem tudo e enviam na hora;
// - limite por IP: rajadas de um mesmo remetente;
// - domínio descartável e domínio sem e-mail: pedidos com contato falso;
// - links em excesso: spam de SEO na mensagem.
// Se o spam crescer, a próxima camada é um desafio como o Cloudflare
// Turnstile, conferido em ./handle.ts antes do envio.
//
// Pedidos de robô recebem a mesma resposta de sucesso de um pedido real e são
// descartados em silêncio, para que quem testa o formulário não aprenda qual
// regra o barrou.

import { createHash } from "node:crypto";
import { resolve4, resolveMx } from "node:dns/promises";

/** Menos que isso entre abrir a página e enviar não é uma pessoa digitando. */
const MIN_FILL_MS = 3_000;
/** Um formulário aberto há mais de um dia vira token reaproveitado. */
const MAX_FILL_MS = 24 * 60 * 60 * 1_000;

export function isHoneypotFilled(website: unknown): boolean {
  return typeof website === "string" && website.trim().length > 0;
}

export function isTooFast(startedAt: unknown, now = Date.now()): boolean {
  if (typeof startedAt !== "number" || !Number.isFinite(startedAt)) return true;
  const elapsed = now - startedAt;
  return elapsed < MIN_FILL_MS || elapsed > MAX_FILL_MS;
}

const URL_SOURCE = String.raw`(https?:\/\/|www\.)\S+`;

/** Links no nome ou na empresa, ou mais de dois na mensagem: spam. */
export function looksLikeLinkSpam(fields: {
  name: string;
  company: string;
  message: string;
}): boolean {
  const hasUrl = new RegExp(URL_SOURCE, "i");
  if (hasUrl.test(fields.name) || hasUrl.test(fields.company)) return true;
  return (fields.message.match(new RegExp(URL_SOURCE, "gi"))?.length ?? 0) > 2;
}

/* ---------------------------------------------------------------- domínios */

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "guerrillamail.net",
  "sharklasers.com",
  "10minutemail.com",
  "temp-mail.org",
  "tempmail.com",
  "tempmail.net",
  "throwawaymail.com",
  "yopmail.com",
  "yopmail.net",
  "getnada.com",
  "trashmail.com",
  "dispostable.com",
  "maildrop.cc",
  "mohmal.com",
  "fakeinbox.com",
  "emailondeck.com",
  "mintemail.com",
  "spamgourmet.com",
]);

/** Provedores pessoais: o pedido passa, mas chega marcado no e-mail. */
const PERSONAL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "hotmail.com",
  "hotmail.com.br",
  "outlook.com",
  "outlook.com.br",
  "live.com",
  "msn.com",
  "yahoo.com",
  "yahoo.com.br",
  "icloud.com",
  "me.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "bol.com.br",
  "uol.com.br",
  "terra.com.br",
  "ig.com.br",
]);

export function emailDomain(email: string): string {
  return email.slice(email.lastIndexOf("@") + 1).toLowerCase();
}

export function isDisposableDomain(domain: string): boolean {
  return DISPOSABLE_DOMAINS.has(domain);
}

export function isPersonalDomain(domain: string): boolean {
  return PERSONAL_DOMAINS.has(domain);
}

const DNS_TIMEOUT_MS = 2_500;

function withTimeout<T>(promise: Promise<T>): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), DNS_TIMEOUT_MS),
    ),
  ]);
}

function isMissing(error: unknown): boolean {
  const code = (error as { code?: string } | null)?.code;
  return code === "ENOTFOUND" || code === "ENODATA";
}

/**
 * `false` só quando o DNS responde que o domínio não existe ou não recebe
 * e-mail (sem MX e sem A). Timeout ou falha do resolvedor contam como `true`:
 * um DNS instável não pode derrubar pedidos reais.
 */
export async function domainAcceptsMail(domain: string): Promise<boolean> {
  try {
    const records = await withTimeout(resolveMx(domain));
    if (records.length > 0) return true;
  } catch (error) {
    if (!isMissing(error)) return true;
  }
  // Sem MX, o padrão de e-mail ainda aceita entrega pelo registro A.
  try {
    const addresses = await withTimeout(resolve4(domain));
    return addresses.length > 0;
  } catch (error) {
    return !isMissing(error);
  }
}

/* ------------------------------------------------------------- limite por IP */

/**
 * Cabeçalhos de IP, do mais confiável para o menos — a mesma ordem do app.
 * Os da plataforma são carimbados na borda; `x-forwarded-for` pode vir do
 * próprio cliente e fica por último.
 */
const CLIENT_IP_HEADERS = ["x-vercel-forwarded-for", "x-real-ip", "x-forwarded-for"];

export function clientIp(headers: Headers): string {
  for (const name of CLIENT_IP_HEADERS) {
    const value = headers.get(name)?.split(",")[0]?.trim();
    if (value) return value;
  }
  return "unknown";
}

/** O IP é dado pessoal (LGPD): a memória guarda só um hash truncado. */
function hashSubject(value: string): string {
  return createHash("sha256").update(value).digest("hex").slice(0, 32);
}

const RATE_LIMIT = { limit: 5, windowMs: 10 * 60 * 1_000 };
const hits = new Map<string, number[]>();

/**
 * Até 5 pedidos por IP a cada 10 minutos. A memória é da instância: em
 * serverless cada instância conta por conta própria, então isto segura
 * rajadas, não um ataque distribuído.
 */
export function takeRateLimitSlot(ip: string, now = Date.now()): boolean {
  const key = hashSubject(ip);
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  if (recent.length >= RATE_LIMIT.limit) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  // Faxina ocasional para a memória não crescer sem limite.
  if (hits.size > 5_000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT.windowMs)) hits.delete(k);
    }
  }
  return true;
}
