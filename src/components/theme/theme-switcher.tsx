"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import {
  applyTheme,
  readStoredTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/components/theme/theme";

const OPTIONS: Array<{ value: Theme; label: string }> = [
  { value: "system", label: "Sistema" },
  { value: "light", label: "Claro" },
  { value: "dark", label: "Escuro" },
];

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getServerSnapshot(): Theme {
  return "system";
}

function choose(theme: Theme) {
  try {
    if (theme === "system") localStorage.removeItem(THEME_STORAGE_KEY);
    else localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Sem armazenamento, o tema vale só nesta visita.
  }
  applyTheme(theme);
  listeners.forEach((listener) => listener());
}

/**
 * Seletor de tema do footer. A opção marcada usa o laranja de sinal, como o
 * DESIGN.md pede para o seletor de tema.
 */
export function ThemeSwitcher({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, readStoredTheme, getServerSnapshot);

  // Em desenvolvimento, o Strict Mode limpa os atributos do <html> que o
  // script inline aplicou; reaplica antes da pintura. Em produção não muda nada.
  useLayoutEffect(() => {
    applyTheme(readStoredTheme());
  }, []);

  return (
    <fieldset className={cn("flex flex-col gap-2", className)}>
      <legend className="type-caption-strong mb-2 text-ink">Tema</legend>
      <div className="inline-flex w-fit gap-0.5 rounded-full bg-control p-0.5 ring-1 ring-inset ring-hairline">
        {OPTIONS.map((option) => (
          <label key={option.value} className="relative">
            <input
              type="radio"
              name="theme"
              value={option.value}
              checked={theme === option.value}
              onChange={() => choose(option.value)}
              className="peer sr-only"
            />
            <span className="type-ui-strong flex h-11 cursor-pointer items-center rounded-full px-3.5 text-graphite transition-colors duration-150 ease-standard peer-checked:bg-signal peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-focus hover:text-ink peer-checked:hover:text-white md:h-7">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
