export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "denarius-theme";

/**
 * Roda no <head>, durante o parse do HTML, para o tema escolhido valer antes
 * da primeira pintura. Sem escolha salva, o CSS segue o tema do sistema.
 * Também marca `data-js`, que libera o CSS de entrada dos números que contam.
 */
export const THEME_SCRIPT = `(function(){document.documentElement.setAttribute("data-js","");try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

/** A escolha salva, ou null quando a página segue o sistema. */
export function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

/** Fixa o tema escolhido; null devolve a página ao tema do sistema. */
export function applyTheme(theme: Theme | null) {
  const root = document.documentElement;
  if (theme === null) root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", theme);
}
