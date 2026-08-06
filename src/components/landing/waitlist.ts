/**
 * Envio da lista de acesso.
 *
 * ============================ NÃO ESTÁ LIGADO ============================
 * `WAITLIST_ENABLED` é `false`: nada é persistido nem enviado hoje. O
 * formulário existe por completo no frontend, mas o e-mail digitado é
 * descartado ao final desta função.
 *
 * TODO: implementar o destino real antes de divulgar a página.
 * Fluxo pretendido: e-mail submetido no site → notificação para o e-mail
 * pessoal do fundador → liberação manual do acesso.
 *
 * Caminho sugerido: um Route Handler em `src/app/api/waitlist/route.ts` que
 * valide o e-mail no servidor e dispare a notificação (Resend já está previsto
 * no PRD). Trocar o corpo de `submitWaitlist` por um `fetch` para essa rota e
 * virar `WAITLIST_ENABLED` para `true`.
 * =========================================================================
 */
export const WAITLIST_ENABLED = false;

/** Validação simples e permissiva — o servidor é quem valida de verdade. */
export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

export type WaitlistResult = { ok: true } | { ok: false; message: string };

export async function submitWaitlist(email: string): Promise<WaitlistResult> {
  if (!isValidEmail(email)) {
    return { ok: false, message: "Confira o e-mail digitado." };
  }

  if (!WAITLIST_ENABLED) {
    // Simula a latência de rede para que os estados de carregamento sejam
    // visíveis durante o desenvolvimento. O e-mail é descartado aqui.
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { ok: true };
  }

  // TODO: substituir pelo POST em /api/waitlist.
  return { ok: false, message: "Não foi possível enviar. Tente novamente." };
}
