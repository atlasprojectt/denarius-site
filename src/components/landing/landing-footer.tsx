import { LogoWordmark } from "@/components/domain/logo";
import {
  BOOK_DEMO_ANCHOR,
  CONTACT_URL,
  PRIVACY_URL,
  SIGN_IN_URL,
  TERMS_URL,
} from "./links";

const COLUMNS = [
  {
    heading: "Produto",
    links: [
      { href: "#produto", label: "Produto" },
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#seguranca", label: "Segurança" },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { href: CONTACT_URL, label: "Contato" },
      { href: PRIVACY_URL, label: "Privacidade" },
      { href: TERMS_URL, label: "Termos" },
    ],
  },
  {
    heading: "Conta",
    links: [
      { href: SIGN_IN_URL, label: "Entrar" },
      { href: BOOK_DEMO_ANCHOR, label: "Agendar demonstração" },
    ],
  },
];

export function LandingFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <LogoWordmark className="h-5 w-auto text-foreground" />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Governança de gastos com IA para empresas de tecnologia.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <p className="text-sm font-medium">{column.heading}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Denarius</p>
          <ul className="flex gap-6">
            <li>
              <a
                href={PRIVACY_URL}
                className="transition-colors hover:text-foreground"
              >
                Privacidade
              </a>
            </li>
            <li>
              <a
                href={TERMS_URL}
                className="transition-colors hover:text-foreground"
              >
                Termos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
