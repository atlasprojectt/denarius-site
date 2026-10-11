import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { THEME_SCRIPT } from "@/components/theme/theme";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Denarius — governança de gasto com IA",
    template: "%s · Denarius",
  },
  description:
    "Conecte OpenAI e Anthropic sem mudar uma linha de código. O Denarius converte tokens em reais, projeta onde o mês de cada time fecha e compara, num plano, o que muda com outro modelo ou menos volume. Antes da fatura.",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="bg-canvas font-sans text-ink">
        <a
          href="#conteudo"
          className="type-body-strong sr-only rounded-full bg-action px-4 py-2 text-on-action focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
