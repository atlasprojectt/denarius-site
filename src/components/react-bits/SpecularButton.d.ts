import type { CSSProperties, JSX, MouseEventHandler, ReactNode } from "react";

// Tipos do SpecularButton (React Bits, versão JS + CSS), para o TypeScript não
// deduzir as props pelos valores padrão do .jsx.
export type SpecularButtonProps = {
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  /** Aceita qualquer cor CSS, inclusive var() e light-dark(). */
  textColor?: string;
  /** Cores do brilho: só valores que o canvas entende (hex, rgb), sem var(). */
  lineColor?: string;
  baseColor?: string;
  /** Opacidade da borda de base do shader (padrão 0.6); 0 deixa só o brilho. */
  baseOpacity?: number;
  intensity?: number;
  idleIntensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  glow?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  /** Rapidez com que o brilho segue o mouse e acende (padrão 8); menor = mais suave. */
  followEase?: number;
  autoAnimate?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
  /** "span" para um selo que não é ação. */
  as?: "button" | "span";
  style?: CSSProperties;
};

declare function SpecularButton(props: SpecularButtonProps): JSX.Element;
export default SpecularButton;
