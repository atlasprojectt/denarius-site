import { LogoWordmark } from "@/components/domain/logo";
import { CtaLink } from "./cta-link";
import { BOOK_DEMO_ANCHOR, SIGN_IN_URL } from "./links";

const NAV_LINKS = [
  { href: "#produto", label: "Produto" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#planos", label: "Planos" },
  { href: "#perguntas-frequentes", label: "Perguntas frequentes" },
];

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6">
        <a
          href="#topo"
          className="flex items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          aria-label="Denarius — início"
        >
          <LogoWordmark className="h-5 w-auto text-foreground" />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-sm text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SIGN_IN_URL}
            className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground sm:inline-block"
          >
            Entrar
          </a>
          <CtaLink href={BOOK_DEMO_ANCHOR}>Agendar demonstração</CtaLink>
        </div>
      </div>
    </header>
  );
}
