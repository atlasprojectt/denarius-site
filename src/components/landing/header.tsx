import { CtaLink } from "./cta-link";
import { BOOK_DEMO_ANCHOR, SIGN_IN_URL } from "./links";

const NAV_LINKS = [
  { href: "#produto", label: "Produto" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#perguntas-frequentes", label: "Perguntas frequentes" },
];

export function Header() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-6 px-6">
        <a href="#topo" className="flex items-baseline gap-2 font-semibold">
          Denarius
          <span className="hidden text-xs font-normal text-zinc-500 dark:text-zinc-400 sm:inline">
            Governança de gastos com IA
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={SIGN_IN_URL}
            className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Entrar
          </a>
          <CtaLink href={BOOK_DEMO_ANCHOR}>Agendar demonstração</CtaLink>
        </div>
      </div>
    </header>
  );
}
