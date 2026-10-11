import Link from "next/link";
import { Brand } from "@/components/site/brand";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { Container } from "@/components/ui/section";
import {
  CONTACT_EMAIL,
  CONTACT_URL,
  FEATURE_IDS,
  FEATURES,
  PAGES,
  PRIVACY_URL,
  TERMS_URL,
  type SiteLink,
} from "@/lib/links";

const COLUMNS: Array<{ id: string; title: string; links: SiteLink[]; external?: boolean }> = [
  {
    id: "rodape-produto",
    title: "Produto",
    links: [...FEATURE_IDS.map((id) => FEATURES[id]), PAGES.howItWorks],
  },
  {
    id: "rodape-saiba-mais",
    title: "Saiba mais",
    links: [PAGES.home, PAGES.whyNow, PAGES.security, PAGES.faq],
  },
  {
    id: "rodape-contato",
    title: "Contato",
    external: true,
    links: [
      { href: CONTACT_URL, label: CONTACT_EMAIL },
      { href: PRIVACY_URL, label: "Privacidade" },
      { href: TERMS_URL, label: "Termos de uso" },
    ],
  },
];

const LINK_CLASS =
  "type-ui link-hover-underline flex min-h-11 items-center text-graphite hover:text-ink md:min-h-8";

export function SiteFooter() {
  return (
    <footer className="band-rail">
      <Container className="flex flex-col gap-12 py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
          <div className="flex flex-col gap-3 sm:col-span-3 lg:col-span-1">
            <Brand />
            <p className="type-body max-w-[36ch] text-graphite">
              Governança de gasto com IA: orçamento, veredito e simulação para empresas de
              tecnologia.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.id} aria-labelledby={column.id}>
              <h2 id={column.id} className="type-caption-strong mb-2 text-ink">
                {column.title}
              </h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href}>
                    {column.external ? (
                      <a href={link.href} className={LINK_CLASS}>
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className={LINK_CLASS}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* O tema fica no canto de baixo, à esquerda, fora do conteúdo. */}
        <div className="type-caption flex flex-col gap-4 border-t border-hairline pt-6 text-ash md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <p>© 2026 Denarius</p>
          </div>
          <p>Os exemplos com números neste site são ilustrativos.</p>
        </div>
      </Container>
    </footer>
  );
}
