import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        dmSans.variable,
        geistMono.variable,
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
