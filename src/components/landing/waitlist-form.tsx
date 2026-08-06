"use client";

import { useId, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { EASE_OUT_QUART, DURATION, SMALL } from "./motion";
import { WAITLIST_ENABLED, isValidEmail, submitWaitlist } from "./waitlist";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Formulário da lista de acesso — o único ponto interativo da página, e por
 * isso o único Client Component.
 *
 * Atenção: enquanto `WAITLIST_ENABLED` for `false`, o envio não guarda nada.
 * Ver `waitlist.ts`.
 */
export function WaitlistForm() {
  const inputId = useId();
  const errorId = useId();

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

    const result = await submitWaitlist(email);
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
        <p className="font-medium">E-mail registrado.</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Entramos em contato com o acesso assim que abrirmos a próxima leva de
          testes. Você não precisa fazer mais nada.
        </p>
      </m.div>
    );
  }

  const hasError = status === "error" && Boolean(error);

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      data-waitlist-connected={WAITLIST_ENABLED}
      className="w-full"
    >
      <label htmlFor={inputId} className="block text-sm font-medium">
        E-mail corporativo
      </label>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          id={inputId}
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
          disabled={status === "submitting"}
          className="h-11 min-w-0 flex-1 rounded-lg border border-input bg-background px-3.5 text-sm text-foreground transition-colors duration-(--duration-standard) ease-(--ease-out-quart) placeholder:text-muted-foreground focus-visible:border-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-60 aria-invalid:border-destructive"
        />

        <m.button
          type="submit"
          disabled={status === "submitting"}
          variants={{ rest: { y: 0 }, hover: { y: -1 }, tap: { y: 0 } }}
          initial="rest"
          whileHover={status === "submitting" ? undefined : "hover"}
          whileFocus={status === "submitting" ? undefined : "hover"}
          whileTap="tap"
          transition={SMALL}
          className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors duration-(--duration-standard) ease-(--ease-out-quart) hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-70"
        >
          {status === "submitting" ? "Enviando…" : "Entrar na lista"}
          <m.span
            aria-hidden="true"
            variants={{ rest: { x: 0 }, hover: { x: 2 }, tap: { x: 2 } }}
            transition={SMALL}
            className="inline-block"
          >
            →
          </m.span>
        </m.button>
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

      <p className="mt-1 text-xs leading-5 text-muted-foreground">
        Usamos seu e-mail apenas para liberar o acesso e falar sobre o teste.
      </p>

      {process.env.NODE_ENV === "development" && !WAITLIST_ENABLED ? (
        <p className="mt-4 rounded-md border border-status-amber/40 px-3 py-2 font-mono text-xs text-status-amber">
          Aviso de desenvolvimento: o envio ainda não está ligado — o e-mail é
          descartado. Ver `waitlist.ts`.
        </p>
      ) : null}
    </form>
  );
}
