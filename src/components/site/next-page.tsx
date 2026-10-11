import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/state-icons";
import { Container } from "@/components/ui/section";
import type { SiteLink } from "@/lib/links";

/** Fim de página interna: a próxima leitura, como uma linha do livro-razão. */
export function NextPage({ page }: { page: SiteLink }) {
  return (
    <nav aria-label="Próxima página" className="border-t border-hairline">
      <Container>
        <Link
          href={page.href}
          className="group grid gap-x-12 gap-y-3 py-12 md:grid-cols-[1fr_auto] md:items-center md:py-16"
        >
          <span className="flex flex-col gap-3">
            <span className="type-caption text-ash">Próxima página</span>
            <span className="type-display-section text-ink">{page.label}</span>
            {page.summary ? (
              <span className="type-lead max-w-[52ch] text-graphite">{page.summary}</span>
            ) : null}
          </span>
          <ArrowRightIcon className="size-8 text-ink transition-transform duration-150 ease-standard group-hover:translate-x-1 motion-reduce:transition-none" />
        </Link>
      </Container>
    </nav>
  );
}
