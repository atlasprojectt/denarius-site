import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronLeftIcon } from "@/components/ui/state-icons";
import { Container } from "@/components/ui/section";

/**
 * Abertura das páginas internas: volta ao início, o título, o resumo e os
 * atalhos para as seções da página.
 */
export function PageIntro({
  title,
  lead,
  sections,
}: {
  title: ReactNode;
  lead: ReactNode;
  sections?: Array<{ id: string; label: string }>;
}) {
  return (
    <section aria-labelledby="pagina-titulo" className="pt-8 pb-[clamp(3.5rem,2.5rem+4vw,6.5rem)] md:pt-14">
      <Container>
        <Link
          href="/"
          className="type-ui inline-flex min-h-11 items-center gap-1 text-graphite transition-colors duration-150 ease-standard hover:text-ink md:min-h-0"
        >
          <ChevronLeftIcon className="size-3.5" />
          Início
        </Link>

        <h1 id="pagina-titulo" className="type-display-hero mt-4 max-w-[18ch] text-ink md:mt-6">
          {title}
        </h1>
        <p className="type-narrative mt-6 max-w-[58ch] text-graphite">{lead}</p>

        {sections ? (
          <nav aria-labelledby="nesta-pagina" className="mt-10 md:mt-12">
            <h2 id="nesta-pagina" className="type-caption-strong text-ink">
              Nesta página
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="type-ui-strong inline-flex h-11 items-center rounded-full px-3.5 text-graphite ring-1 ring-inset ring-hairline transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink md:h-8"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </Container>
    </section>
  );
}
