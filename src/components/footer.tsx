"use client";

import { m, useReducedMotion } from "motion/react";
import type React from "react";
import { LogoWordmark } from "@/components/domain/logo";
import {
  CONTACT_URL,
  PRIVACY_URL,
  SIGN_IN_URL,
  TERMS_URL,
  WAITLIST_ANCHOR,
} from "@/components/landing/links";

const footerLinkGroups = [
  {
    label: "Produto",
    links: [
      { title: "Visão geral", href: "#produto" },
      { title: "Como funciona", href: "#como-funciona" },
      { title: "Segurança e confiança", href: "#confianca" },
      { title: "Perguntas frequentes", href: "#perguntas-frequentes" },
    ],
  },
  {
    label: "Denarius",
    links: [
      { title: "Entrar na conta", href: SIGN_IN_URL },
      { title: "Falar com a equipe", href: CONTACT_URL },
      { title: "Entrar na lista de acesso", href: WAITLIST_ANCHOR },
    ],
  },
  {
    label: "Legal",
    links: [
      { title: "Política de privacidade", href: PRIVACY_URL },
      { title: "Termos de uso", href: TERMS_URL },
    ],
  },
];

export function StickyFooter() {
  return (
    <footer
      className="relative h-(--footer-height) w-full bg-card [--footer-height:560px] md:[--footer-height:440px]"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-50 h-px bg-(--frame-line)"
      />
      <div className="fixed bottom-0 h-(--footer-height) w-full bg-card">
        <div className="sticky top-[calc(100vh-var(--footer-height))] h-full overflow-y-auto">
          <div className="relative mx-auto flex size-full max-w-6xl flex-col justify-between gap-8 px-6 pt-12">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-5">
              <AnimatedContainer className="col-span-2 space-y-5">
                <a href="#topo" aria-label="Denarius — início" className="inline-flex rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                  <LogoWordmark className="h-6 w-auto text-foreground" />
                </a>
                <p className="explainer max-w-sm text-muted-foreground">
                  Governança de gastos com IA para empresas de tecnologia.
                  Entenda o consumo, acompanhe orçamentos e antecipe decisões.
                </p>
              </AnimatedContainer>

              {footerLinkGroups.map((group, index) => (
                <AnimatedContainer delay={0.1 + index * 0.08} key={group.label}>
                  <nav aria-label={group.label}>
                    <h2 className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-foreground">{group.label}</h2>
                    <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                      {group.links.map((link) => (
                        <li key={link.title}>
                          <a className="rounded-sm transition-colors duration-(--duration-standard) hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring" href={link.href}>
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </AnimatedContainer>
              ))}
            </div>

            <div className="flex flex-col gap-2 border-t border-(--frame-line) py-5 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>&copy; {new Date().getFullYear()} Denarius. Todos os direitos reservados.</p>
              <p>Gasto com IA sob controle.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type AnimatedContainerProps = React.ComponentProps<typeof m.div> & {
  children: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({ delay = 0.1, children, ...props }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <m.div {...props}>{children}</m.div>;
  }

  return (
    <m.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      {...props}
    >
      {children}
    </m.div>
  );
}
