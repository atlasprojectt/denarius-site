"use client";

import { useLayoutEffect, useSyncExternalStore, type ComponentType, type SVGProps } from "react";
import { cn } from "@/lib/cn";
import { Frame } from "@/components/ui/state-icons";
import { applyTheme, readStoredTheme, THEME_STORAGE_KEY, type Theme } from "@/components/theme/theme";

type IconProps = SVGProps<SVGSVGElement>;

function SunIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.75v1.5M12 19.75v1.5M2.75 12h1.5M19.75 12h1.5M5.46 5.46l1.06 1.06M17.48 17.48l1.06 1.06M5.46 18.54l1.06-1.06M17.48 6.52l1.06-1.06" />
    </Frame>
  );
}

function MoonIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M20.25 14.5A8.25 8.25 0 0 1 9.5 3.75a8.25 8.25 0 1 0 10.75 10.75z" />
    </Frame>
  );
}

const OPTIONS: Array<{ value: Theme; label: string; icon: ComponentType<IconProps> }> = [
  { value: "light", label: "Tema claro", icon: SunIcon },
  { value: "dark", label: "Tema escuro", icon: MoonIcon },
];

const DARK_QUERY = "(prefers-color-scheme: dark)";

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  const system = window.matchMedia(DARK_QUERY);
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  system.addEventListener("change", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
    system.removeEventListener("change", onChange);
  };
}

/** O tema na tela: a escolha salva ou, sem ela, o do sistema. */
function shownTheme(): Theme {
  return readStoredTheme() ?? (window.matchMedia(DARK_QUERY).matches ? "dark" : "light");
}

/** No servidor não se sabe o tema do sistema: nenhuma opção marcada. */
function getServerSnapshot(): Theme | null {
  return null;
}

function choose(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Sem armazenamento, o tema vale só nesta visita.
  }
  applyTheme(theme);
  listeners.forEach((listener) => listener());
}

/**
 * Seletor de tema do footer: claro ou escuro, só com os ícones. Sem escolha
 * salva, a página segue o sistema e a opção marcada é a do tema na tela. A
 * opção marcada usa o laranja de sinal, como o DESIGN.md pede.
 */
export function ThemeSwitcher({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, shownTheme, getServerSnapshot);

  // Em desenvolvimento, o Strict Mode limpa os atributos do <html> que o
  // script inline aplicou; reaplica antes da pintura. Em produção não muda nada.
  useLayoutEffect(() => {
    applyTheme(readStoredTheme());
  }, []);

  return (
    <fieldset className={cn("inline-flex w-fit gap-0.5 rounded-full bg-control p-0.5 ring-1 ring-inset ring-hairline", className)}>
      <legend className="sr-only">Tema</legend>
      {OPTIONS.map(({ value, label, icon: Icon }) => (
        <label key={value} className="relative">
          <input
            type="radio"
            name="theme"
            value={value}
            aria-label={label}
            checked={theme === value}
            onChange={() => choose(value)}
            className="peer sr-only"
          />
          <span className="flex size-11 cursor-pointer items-center justify-center rounded-full text-graphite transition-colors duration-150 ease-standard peer-checked:bg-signal peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-focus hover:text-ink peer-checked:hover:text-white md:size-7">
            <Icon className="size-4" />
          </span>
        </label>
      ))}
    </fieldset>
  );
}
