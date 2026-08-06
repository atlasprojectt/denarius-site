"use client";

import { useId, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { EASE_OUT_QUART, DURATION } from "./motion";

/**
 * Disclosure com altura animada.
 *
 * Substitui o `<details>` nativo, que não anima altura de forma confiável. Como
 * a semântica deixa de ser nativa, ela é reconstruída à mão: o gatilho é um
 * `<button>` de verdade (então Enter e Espaço funcionam sem código extra),
 * `aria-expanded` reflete o estado e `aria-controls` aponta para a região.
 */
export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const reduced = useReducedMotion();

  const answerBody = (
    <p className="max-w-2xl pb-4 text-sm leading-7 text-muted-foreground">
      {answer}
    </p>
  );

  return (
    <div>
      <h3>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-md py-4 text-left font-medium transition-colors duration-(--duration-standard) ease-(--ease-out-quart) hover:text-brand-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {question}
          <m.span
            aria-hidden="true"
            animate={reduced ? undefined : { rotate: open ? 45 : 0 }}
            style={reduced ? { rotate: open ? 45 : 0 } : undefined}
            transition={{ duration: DURATION.small, ease: EASE_OUT_QUART }}
            className="shrink-0 text-lg leading-none text-muted-foreground transition-colors duration-(--duration-standard) ease-(--ease-out-quart) group-hover:text-brand-accent-light"
          >
            +
          </m.span>
        </button>
      </h3>

      {/* Com movimento reduzido a resposta abre direto: animar altura a partir
          de zero deixaria o texto inacessível se a animação não rodasse. */}
      {reduced ? (
        open ? (
          <div id={panelId}>{answerBody}</div>
        ) : null
      ) : (
        <AnimatePresence initial={false}>
          {open ? (
            <m.div
              id={panelId}
              key="painel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: EASE_OUT_QUART }}
              className="overflow-hidden"
            >
              {answerBody}
            </m.div>
          ) : null}
        </AnimatePresence>
      )}
    </div>
  );
}
