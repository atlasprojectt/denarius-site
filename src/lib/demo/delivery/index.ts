import { CONTACT_EMAIL } from "@/lib/links";
import { createConsoleDelivery } from "./console";
import { createResendDelivery } from "./resend";
import type { DemoDelivery } from "./types";

export type { DemoDelivery, DemoMessage } from "./types";

/** Remetente padrão do Resend, que funciona sem domínio verificado. */
const RESEND_TEST_SENDER = "Denarius <onboarding@resend.dev>";

/**
 * Escolhe como os pedidos saem, pelas variáveis de ambiente:
 *
 * - RESEND_API_KEY: envia pelo Resend. É a única obrigatória.
 * - DEMO_TO_EMAIL (opcional): quem recebe; vários endereços separados por
 *   vírgula. Sem ela, vai para o e-mail de contato do site (CONTACT_EMAIL).
 * - DEMO_FROM_EMAIL (opcional): o remetente; ver RESEND_TEST_SENDER.
 * - Sem a chave, em desenvolvimento: mostra o pedido no terminal.
 * - Sem a chave, em produção: devolve null, e a rota responde que o envio
 *   está indisponível, com o e-mail de contato (nada se perde em silêncio).
 *
 * Para trocar de serviço, crie outra implementação de `DemoDelivery` ao lado
 * desta e escolha-a aqui.
 */
export function getDemoDelivery(): DemoDelivery | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const configured = process.env.DEMO_TO_EMAIL?.split(",")
    .map((address) => address.trim())
    .filter(Boolean);
  const to = configured && configured.length > 0 ? configured : [CONTACT_EMAIL];

  if (apiKey) {
    return createResendDelivery({
      apiKey,
      to,
      from: process.env.DEMO_FROM_EMAIL?.trim() || RESEND_TEST_SENDER,
    });
  }
  if (process.env.NODE_ENV !== "production") return createConsoleDelivery();
  return null;
}
