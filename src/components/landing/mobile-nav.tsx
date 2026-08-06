"use client";

import { useEffect, useRef, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { SIGN_IN_URL } from "./links";

type NavLink = { href: string; label: string };

/**
 * Navegação para telas estreitas. Antes de existir, abaixo de 1024px a página
 * não tinha nenhuma navegação — só o logo e o CTA.
 */
export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const panelId = "menu-mobile";
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors duration-(--duration-standard) ease-(--ease-out-quart) hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {open ? (
          <XIcon aria-hidden="true" className="size-5" />
        ) : (
          <MenuIcon aria-hidden="true" className="size-5" />
        )}
      </button>

      {open ? (
        <div
          id={panelId}
          className="absolute inset-x-0 top-full border-b border-border bg-background/95 backdrop-blur-lg"
        >
          <nav aria-label="Navegação principal" className="px-6 py-4">
            <ul className="divide-y divide-border">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md py-3 text-sm text-foreground transition-colors hover:text-brand-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SIGN_IN_URL}
                  onClick={() => setOpen(false)}
                  className="block rounded-md py-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Entrar
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
