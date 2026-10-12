import type { DemoDelivery, DemoMessage } from "./types";

/**
 * Envio pelo Resend (resend.com), pela API HTTP, sem SDK.
 *
 * Versão simples: sem domínio verificado, o Resend envia a partir de
 * `onboarding@resend.dev`, e só para o e-mail dono da conta, que é o único
 * destinatário de que o site precisa. Para enviar de um endereço próprio
 * (ex.: demo@usedenarius.pro), verifique o domínio no Resend e defina
 * DEMO_FROM_EMAIL.
 */
export function createResendDelivery(config: {
  apiKey: string;
  from: string;
  to: string[];
}): DemoDelivery {
  return {
    name: "resend",
    async send(message: DemoMessage) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: config.from,
          to: config.to,
          reply_to: message.replyTo,
          subject: message.subject,
          text: message.text,
          html: message.html,
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(10_000),
      });
      if (!response.ok) {
        // O corpo de erro do Resend descreve a configuração (domínio, chave),
        // não o pedido: seguro para o log e essencial para diagnosticar.
        throw new Error(`Resend recusou o envio (${response.status}): ${await response.text()}`);
      }
    },
  };
}
