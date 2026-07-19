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

export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-semibold">Denarius</p>
          <p className="mt-2 max-w-xs text-sm text-zinc-500 dark:text-zinc-400">
            Governança de gastos com IA para empresas de tecnologia.
          </p>
        </div>

        {COLUMNS.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <p className="text-sm font-medium">{column.heading}</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {column.links.map((link) => (
                <li key={link.label}>
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
        ))}
      </div>
    </footer>
  );
}
