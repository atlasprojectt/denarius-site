// Como um pedido de demonstração sai do site. Este é o único ponto a trocar
// para mudar o destino (outro serviço de e-mail, um CRM, uma planilha, um
// webhook): basta uma implementação nova de `DemoDelivery`, registrada em
// `./index.ts`. O formulário, a validação e o e-mail não mudam.

/** A mensagem pronta, montada por `buildDemoEmail` (../email.ts). */
export type DemoMessage = {
  subject: string;
  text: string;
  html: string;
  /** O e-mail de quem pediu: responder a mensagem fala direto com a pessoa. */
  replyTo: string;
};

export interface DemoDelivery {
  /** Nome curto para os logs ("resend", "console"). */
  readonly name: string;
  /** Envia a mensagem. Lança um erro se o envio falhar. */
  send(message: DemoMessage): Promise<void>;
}
