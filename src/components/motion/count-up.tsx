"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const round = (n: number, decimals: number) => {
  const f = 10 ** decimals;
  return Math.round(n * f) / f;
};

const format = (n: number, decimals: number) =>
  n.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

/**
 * Número que conta de zero até o valor quando chega à tela.
 *
 * O HTML do servidor já traz o valor final — sem JS ou com movimento reduzido
 * é ele que aparece. A parte animada é `aria-hidden`; leitores de tela leem o
 * valor final no `sr-only`. O número cresce alinhado à esquerda e o sufixo
 * o acompanha; a altura da linha não muda, então nada em volta se mexe.
 * Com `decimals`, conta em passos decimais e escreve com vírgula (3,2).
 */
export function CountUp({
  value,
  suffix = "",
  singular,
  decimals = 0,
  className,
}: {
  value: number;
  /** Texto depois do número, ex. "%" ou " meses". */
  suffix?: string;
  /** Sufixo usado quando a contagem passa pelo 1, ex. " mês". */
  singular?: string;
  /** Casas decimais, escritas com vírgula: 1 para "3,2". */
  decimals?: number;
  className?: string;
}) {
  const root = useRef<HTMLSpanElement>(null);
  const number = useRef<HTMLSpanElement>(null);
  const unit = useRef<HTMLSpanElement>(null);
  const text = format(value, decimals);

  useGSAP(
    () => {
      const el = number.current;
      if (!el || !root.current) return;

      const render = (n: number) => {
        el.textContent = format(n, decimals);
        if (unit.current) unit.current.textContent = n === 1 && singular ? singular : suffix;
      };

      const reveal = () => root.current?.setAttribute("data-countup-ready", "");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        reveal();
        return;
      }

      const counter = { n: 0 };
      render(0);
      reveal();

      gsap.to(counter, {
        n: value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: root.current, start: "top 88%", once: true },
        onUpdate: () => render(round(counter.n, decimals)),
      });
    },
    { scope: root, dependencies: [value, suffix, singular, decimals] },
  );

  return (
    <span ref={root} data-countup="" className={className}>
      <span aria-hidden="true">
        <span ref={number}>{text}</span>
        <span ref={unit}>{suffix}</span>
      </span>
      <span className="sr-only">
        {text}
        {suffix}
      </span>
    </span>
  );
}
