"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { ArrowRightIcon, CircleCheckIcon, LoaderCircleIcon } from "lucide-react";
import "@/components/GlareHover.css";
import { EASE_OUT_QUART, DURATION, SMALL } from "./motion";
import { isValidEmail, isValidName, submitWaitlist } from "./waitlist";

type Status = "idle" | "submitting" | "success" | "error";

const FIELD_CLASS =
  "h-11 w-full min-w-0 rounded-lg border border-input bg-background px-3.5 text-sm text-foreground transition-colors duration-(--duration-standard) ease-(--ease-out-quart) placeholder:text-muted-foreground focus-visible:border-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-60 aria-invalid:border-destructive";

export function WaitlistForm({ secondaryAction }: { secondaryAction?: ReactNode }) {
  const nameId = useId();
  const emailId = useId();
  const errorId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const reduced = useReducedMotion();

  function clearError() {
    if (status === "error") {
      setStatus("idle");
      setError(null);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidName(name)) {
      setError("Informe seu nome.");
      setStatus("error");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Confira o e-mail digitado.");
      setStatus("error");
      return;
    }

    setError(null);
    setStatus("submitting");
    const result = await submitWaitlist({ name, email });
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
          <CircleCheckIcon aria-hidden="true" className="size-4 text-brand-accent-light" />
          Inscrição enviada.
        </p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Recebemos seus dados e entraremos em contato quando a próxima rodada
          de acesso abrir.
        </p>
      </m.div>
    );
  }

  const hasError = status === "error" && Boolean(error);
  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="grid gap-4">
        <div>
          <label htmlFor={nameId} className="block text-sm font-medium">Nome</label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            placeholder="Como podemos te chamar"
            value={name}
            onChange={(event) => { setName(event.target.value); clearError(); }}
            aria-invalid={hasError && !isValidName(name)}
            aria-describedby={hasError ? errorId : undefined}
            disabled={submitting}
            className={`mt-2 ${FIELD_CLASS}`}
          />
        </div>
        <div>
          <label htmlFor={emailId} className="block text-sm font-medium">E-mail corporativo</label>
          <input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="voce@suaempresa.com"
            value={email}
            onChange={(event) => { setEmail(event.target.value); clearError(); }}
            aria-invalid={hasError && !isValidEmail(email)}
            aria-describedby={hasError ? errorId : undefined}
            disabled={submitting}
            className={`mt-2 ${FIELD_CLASS}`}
          />
        </div>
      </div>

      <div aria-live="polite" className="min-h-7">
        <AnimatePresence>
          {hasError ? (
            <m.p
              id={errorId}
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
          className="glare-overlay group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium whitespace-nowrap text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-70"
        >
          {submitting ? "Enviando…" : "Entrar na lista"}
          {submitting ? (
            <LoaderCircleIcon aria-hidden="true" className="size-4 motion-safe:animate-spin" />
          ) : (
            <ArrowRightIcon aria-hidden="true" className="size-4" />
          )}
        </m.button>
      </div>
      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        Usamos seus dados apenas para liberar o acesso e falar sobre esta rodada.
      </p>
    </form>
  );
}
