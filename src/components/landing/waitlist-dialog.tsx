"use client";

import { useRef, type ReactNode } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import { WaitlistForm } from "./waitlist-form";

/**
 * Modal da lista de acesso.
 *
 * O `Dialog` do Base UI cuida do que é fácil errar à mão: foco preso dentro do
 * modal, `Escape` para fechar, rolagem da página travada e o par
 * `aria-labelledby`/`aria-describedby` ligado ao título e à descrição.
 *
 * O mesmo modal atende os gatilhos do header, do hero e da seção de fechamento,
 * então toda chamada para a lista de acesso leva aos mesmos campos.
 *
 * Nomenclatura: o app está em `v0.1.0-MVP`, então não é "beta" (que pressupõe
 * escopo fechado e em estabilização). "Acesso antecipado" descreve o que de
 * fato acontece: liberação gradual, produto ainda em construção.
 */
export function WaitlistDialog({ trigger }: { trigger: ReactNode }) {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <Dialog.Root>
      <Dialog.Trigger render={trigger as React.ReactElement} />
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-100 bg-background/80 backdrop-blur-sm transition-opacity duration-(--duration-standard) ease-(--ease-out-quart) data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        {/* Foco explícito no primeiro campo: sem isso ele depende de o
            navegador resolver o alvo padrão depois da animação de entrada, e
            quem abre pelo teclado cai fora do formulário. */}
        <Dialog.Popup
          initialFocus={() => formRef.current?.querySelector("input") ?? null}
          className="fixed top-1/2 left-1/2 z-100 w-[calc(100vw-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-6 shadow-2xl transition-all duration-(--duration-standard) ease-(--ease-out-quart) focus-visible:outline-none data-[ending-style]:scale-[0.98] data-[ending-style]:opacity-0 data-[starting-style]:scale-[0.98] data-[starting-style]:opacity-0 sm:p-8">
          <Dialog.Close
            aria-label="Fechar"
            className="absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors duration-(--duration-standard) ease-(--ease-out-quart) hover:bg-foreground/5 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <XIcon aria-hidden="true" className="size-4" />
          </Dialog.Close>

          <Dialog.Title className="pr-8 text-lg font-normal tracking-tight">
            Entrar na lista de acesso
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm leading-6 text-muted-foreground">
            Estamos liberando o acesso antecipado aos poucos. Deixe seu nome e
            e-mail e avisamos quando abrir a próxima rodada.
          </Dialog.Description>

          <div ref={formRef} className="mt-6">
            <WaitlistForm
              secondaryAction={
                /* Par "Começar / Cancelar" do moodboard: os dois com corpo e o
                   mesmo raio, o secundário subordinado pela cor, não pelo peso. */
                <Dialog.Close className="inline-flex h-11 items-center justify-center rounded-lg bg-secondary px-5 text-sm font-medium text-foreground transition-colors duration-(--duration-standard) ease-(--ease-out-quart) hover:bg-secondary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                  Cancelar
                </Dialog.Close>
              }
            />
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
