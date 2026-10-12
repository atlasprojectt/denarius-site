// O fluxo de um pedido de demonstração, de ponta a ponta: filtros anti-spam,
// validação, montagem do e-mail e envio. Não sabe de HTTP (a rota faz a ponte)
// nem de qual serviço envia (`getDemoDelivery` escolhe).

import { CONTACT_EMAIL } from "@/lib/links";
import { getDemoDelivery } from "./delivery";
import { buildDemoEmail } from "./email";
import { parseDemoRequest, type FieldErrors } from "./request";
import {
  domainAcceptsMail,
  emailDomain,
  isDisposableDomain,
  isHoneypotFilled,
  isPersonalDomain,
  isTooFast,
  looksLikeLinkSpam,
  takeRateLimitSlot,
} from "./spam";

export type DemoReply = { ok: boolean; message: string; errors?: FieldErrors };
export type DemoResult = { status: number; body: DemoReply };

const RECEIVED: DemoResult = { status: 200, body: { ok: true, message: "Pedido enviado." } };

const CHECK_FIELDS = "Confira os campos destacados.";

function fail(status: number, message: string, errors?: FieldErrors): DemoResult {
  return { status, body: { ok: false, message, ...(errors ? { errors } : {}) } };
}

/**
 * Processa um pedido já lido do corpo da requisição. Pedidos de robô recebem a
 * mesma resposta de um pedido real e são descartados, para quem testa o
 * formulário não aprender qual regra o barrou.
 */
export async function handleDemoRequest(
  raw: Record<string, unknown>,
  ip: string,
): Promise<DemoResult> {
  if (isHoneypotFilled(raw.website) || isTooFast(raw.startedAt)) return RECEIVED;

  if (!takeRateLimitSlot(ip)) {
    return fail(429, "Muitos envios em pouco tempo. Aguarde alguns minutos e tente de novo.");
  }

  const parsed = parseDemoRequest(raw);
  if (!parsed.ok) return fail(400, CHECK_FIELDS, parsed.errors);
  const data = parsed.data;

  if (looksLikeLinkSpam(data)) return RECEIVED;

  const domain = emailDomain(data.email);
  if (isDisposableDomain(domain)) {
    return fail(400, CHECK_FIELDS, {
      email: "Use um e-mail que você acompanha, de preferência o corporativo.",
    });
  }
  if (!(await domainAcceptsMail(domain))) {
    return fail(400, CHECK_FIELDS, { email: "Esse domínio não recebe e-mails. Confira o endereço." });
  }

  const delivery = getDemoDelivery();
  if (!delivery) {
    console.error("[demo] Envio não configurado: defina RESEND_API_KEY.");
    // Sem envio configurado, o pedido não se perde: a pessoa recebe o e-mail
    // direto para escrever.
    return fail(503, `O envio está temporariamente indisponível. Escreva para ${CONTACT_EMAIL}.`);
  }

  const flags = isPersonalDomain(domain)
    ? [`E-mail de provedor pessoal (${domain}), não corporativo.`]
    : [];

  try {
    await delivery.send(buildDemoEmail(data, { flags, receivedAt: new Date() }));
    return RECEIVED;
  } catch (error) {
    console.error(`[demo] Falha no envio (${delivery.name}):`, error);
    return fail(
      502,
      "Não foi possível enviar agora. Seus dados continuam no formulário; tente novamente.",
    );
  }
}
