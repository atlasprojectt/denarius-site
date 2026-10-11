import Link from "next/link";
import { Brand } from "@/components/site/brand";
import { HeaderShell } from "@/components/site/header-shell";
import { MobileMenu, type MenuGroup } from "@/components/site/mobile-menu";
import { NavLinks } from "@/components/site/nav-links";
import { ProductMenu } from "@/components/site/product-menu";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/section";
import { DEMO_URL, FEATURE_IDS, FEATURES, PAGES, SIGNIN_URL } from "@/lib/links";

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
    <HeaderShell>
      <Container className="flex h-14 items-center justify-between gap-4">
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
          {/* "Demo" e não "demonstração": a barra precisa caber no celular. */}
          <ButtonLink href={DEMO_URL} size="md">
            Pedir demo
          </ButtonLink>
        </div>
      </Container>
    </HeaderShell>
  );
}
