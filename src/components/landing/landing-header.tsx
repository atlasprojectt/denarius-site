import { LogoWordmark } from "@/components/domain/logo";
import { CtaLink } from "./cta-link";
import { HeaderShell } from "./header-shell";
import { MobileNav } from "./mobile-nav";
import { SIGN_IN_URL } from "./links";
import { WaitlistDialog } from "./waitlist-dialog";

const NAV_LINKS = [
  { href: "#produto", label: "Produto" },
  { href: "#confianca", label: "Confiança" },
  { href: "#perguntas-frequentes", label: "Perguntas" },
];

/**
 * O container e a altura da barra vivem no `HeaderShell`, que é quem precisa
 * saber o estado de rolagem. Aqui fica só o conteúdo.
 */
export function LandingHeader() {
  return (
    <HeaderShell>
      <a
        href="#topo"
        className="flex items-center rounded-md opacity-100 transition-opacity duration-(--duration-standard) ease-(--ease-out-quart) hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
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
                className="rounded-md px-3 py-2 transition-colors duration-(--duration-standard) ease-(--ease-out-quart) hover:bg-foreground/5 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
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
          className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors duration-(--duration-standard) ease-(--ease-out-quart) hover:bg-foreground/5 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:inline-block"
        >
          Entrar
        </a>
        {/* Pílula: na barra, a altura reduzida pede o raio total. */}
        <WaitlistDialog
          trigger={<CtaLink size="sm">Entrar na lista</CtaLink>}
        />
        <MobileNav links={NAV_LINKS} />
      </div>
    </HeaderShell>
  );
}
