"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { ArrowRightIcon, CircleCheckIcon, LoaderCircleIcon } from "lucide-react";
import { EASE_OUT_QUART, DURATION, SMALL } from "./motion";
import { WAITLIST_ENABLED, isValidEmail, submitWaitlist } from "./waitlist";

type Status = "idle" | "submitting" | "success" | "error";

const FIELD_CLASS =
  "h-11 w-full min-w-0 rounded-lg border border-input bg-background px-3.5 text-sm text-foreground transition-colors duration-(--duration-standard) ease-(--ease-out-quart) placeholder:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-60 aria-invalid:border-destructive";

type WaitlistFormProps = {
  /** Ação secundária ao lado do envio — o "Cancelar" quando está num modal. */
  secondaryAction?: ReactNode;
};

/**
 * Formulário da lista de acesso — a conversão da página, e o único ponto que
 * envia dados. É o mesmo componente na seção de fechamento e dentro do modal,
 * então os dois caminhos não podem divergir.
 *
 * Atenção: enquanto `WAITLIST_ENABLED` for `false`, o envio não guarda nada.
 * Ver `waitlist.ts`.
 */
export function WaitlistForm({ secondaryAction }: WaitlistFormProps) {
  const nameId = useId();
  const emailId = useId();
  const errorId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const reduced = useReducedMotion();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setError("Confira o e-mail digitado.");
      setStatus("error");
      return;
    }

    setError(null);
    setStatus("submitting");

    const result = await submitWaitlist({ name: name.trim(), email });
    if (result.ok) {
      setStatus("success");
      return;
    }

    setError(result.message);
    setStatus("error");
  }

  if (status === "success") {
    return (
      <m.div
        role="status"
        initial={reduced ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.reveal, ease: EASE_OUT_QUART }}
        className="rounded-xl border border-brand-accent-border bg-brand-accent-muted p-6"
      >
        <p className="flex items-center gap-2 font-medium">
          <CircleCheckIcon
            aria-hidden="true"
            className="size-4 shrink-0 text-brand-accent-light"
          />
          E-mail registrado.
        </p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Entramos em contato assim que abrirmos a próxima rodada de acesso
          antecipado. Você não precisa fazer mais nada.
        </p>
      </m.div>
    );
  }

  const hasError = status === "error" && Boolean(error);
  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      data-waitlist-connected={WAITLIST_ENABLED}
      className="w-full"
    >
      <div className="grid gap-4">
        <div>
          <label htmlFor={nameId} className="block text-sm font-medium">
            Nome
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Como podemos te chamar"
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={submitting}
            className={`mt-2 ${FIELD_CLASS}`}
          />
        </div>

        <div>
          <label htmlFor={emailId} className="block text-sm font-medium">
            E-mail corporativo
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="voce@suaempresa.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status === "error") {
                setStatus("idle");
                setError(null);
              }
            }}
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : undefined}
            disabled={submitting}
            className={`mt-2 ${FIELD_CLASS}`}
          />
        </div>
      </div>

      <div aria-live="polite" className="min-h-5">
        <AnimatePresence>
          {hasError ? (
            <m.p
              id={errorId}
              key="erro"
              initial={reduced ? false : { opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -4 }}
              transition={SMALL}
              className="mt-2 text-sm text-destructive"
            >
              {error}
            </m.p>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-end gap-3">
        {secondaryAction}
        <m.button
          type="submit"
          disabled={submitting}
          variants={{ rest: { y: 0 }, hover: { y: -1 }, tap: { y: 0 } }}
          initial="rest"
          whileHover={submitting ? undefined : "hover"}
          whileFocus={submitting ? undefined : "hover"}
          whileTap="tap"
          transition={SMALL}
          /* Espelha `CtaLink` no tamanho `lg` + variante `primary`. Não usa o
             componente porque precisa do estado de envio; se o botão mudar lá,
             muda aqui também. */
          className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium whitespace-nowrap text-primary-foreground transition-colors duration-(--duration-standard) ease-(--ease-out-quart) hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-70"
        >
          {submitting ? "Enviando…" : "Entrar na lista"}
          {submitting ? (
            <LoaderCircleIcon
              aria-hidden="true"
              className="size-4 shrink-0 motion-safe:animate-spin"
            />
          ) : (
            <m.span
              aria-hidden="true"
              variants={{ rest: { x: 0 }, hover: { x: 2 }, tap: { x: 2 } }}
              transition={SMALL}
              className="inline-flex"
            >
              <ArrowRightIcon className="size-4 shrink-0" />
            </m.span>
          )}
        </m.button>
      </div>

      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        Usamos seus dados apenas para liberar o acesso e falar sobre essa
        primeira rodada.
      </p>

      {process.env.NODE_ENV === "development" && !WAITLIST_ENABLED ? (
        <p className="mt-4 rounded-md border border-status-amber/40 px-3 py-2 font-mono text-xs text-status-amber">
          Aviso de desenvolvimento: o envio ainda não está ligado — os dados são
          descartados. Ver `waitlist.ts`.
        </p>
      ) : null}
    </form>
  );
}
