import type { DemoDelivery, DemoMessage } from "./types";

/**
 * Só para desenvolvimento: mostra o pedido no terminal do `next dev` em vez de
 * enviar. Permite testar o formulário inteiro sem conta em serviço nenhum.
 */
export function createConsoleDelivery(): DemoDelivery {
  return {
    name: "console",
    async send(message: DemoMessage) {
      console.info(
        `[demo] Pedido recebido (envio simulado)\nAssunto: ${message.subject}\nResponder para: ${message.replyTo}\n\n${message.text}`,
      );
    },
  };
}
