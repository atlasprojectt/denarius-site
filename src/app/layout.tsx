import type { Metadata } from "next";
import { DM_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

/**
 * Poppins carrega os títulos; DM Mono, os textos explicativos e os rótulos.
 *
 * Nenhuma das duas é variable font no Google Fonts, então os pesos precisam ser
 * declarados um a um — e DM Mono só existe em 300/400/500, não há negrito.
 */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const TITLE = "Denarius — Governança de gastos com IA";
const DESCRIPTION =
  "O Denarius reúne o gasto com IA da empresa, compara com o orçamento todos os dias e avisa antes da fatura. Somente leitura, sem acesso a prompts ou respostas.";

export const metadata: Metadata = {
  // TODO: trocar pelo domínio real quando ele existir.
  metadataBase: new URL("https://denarius.app"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Denarius",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    images: [
      {
        url: "/hero-dashboard.png",
        width: 1751,
        height: 934,
        alt: "Painel do Denarius mostrando o gasto do mês contra o orçamento, a projeção de fechamento e o orçamento dos times.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/hero-dashboard.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "dark",
        "h-full",
        "antialiased",
        "font-sans",
        poppins.variable,
        dmMono.variable,
      )}
    >
      <head>
        {/* Os blocos com entrada animada são renderizados em `opacity: 0` e o
            Motion os revela na hidratação. Sem JavaScript não haveria quem os
            revelasse, então aqui o estado escondido é anulado — conteúdo nunca
            depende de script para ser lido. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
