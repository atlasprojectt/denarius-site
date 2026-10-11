import Link from "next/link";
import { Brand } from "@/components/site/brand";
import { MobileMenu, type MenuGroup } from "@/components/site/mobile-menu";
import { NavLinks } from "@/components/site/nav-links";
import { ProductMenu } from "@/components/site/product-menu";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/section";
import { FEATURE_IDS, FEATURES, PAGES, SIGNIN_URL, SIGNUP_URL } from "@/lib/links";

// Ao lado do menu Produto: o contexto, a confiança e as dúvidas.
const HEADER_LINKS = [PAGES.whyNow, PAGES.security, PAGES.faq];

const MENU_GROUPS: MenuGroup[] = [
  { links: [PAGES.home] },
  {
    title: "Produto",
    links: [...FEATURE_IDS.map((id) => FEATURES[id]), PAGES.howItWorks],
  },
  { links: HEADER_LINKS },
  // A partir de sm, "Entrar" já está no cabeçalho.
  { links: [{ href: SIGNIN_URL, label: "Entrar" }], className: "sm:hidden" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-canvas">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Denarius, governança de gasto com IA. Ir para o início"
          className="rounded-sm"
        >
          <Brand decorative />
        </Link>

        {/* A navegação completa só cabe ao lado dos dois botões a partir de lg. */}
        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          <ProductMenu />
          <NavLinks links={HEADER_LINKS} variant="header" className="flex items-center gap-1" />
        </nav>

        <div className="flex items-center gap-2">
          <MobileMenu groups={MENU_GROUPS} />
          <div className="hidden sm:block">
            <ButtonLink href={SIGNIN_URL} variant="tertiary" size="md">
              Entrar
            </ButtonLink>
          </div>
          <ButtonLink href={SIGNUP_URL} size="md">
            Criar conta
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
