"use client";

import ColorBends from "@/components/ColorBends";

/**
 * Camada de fundo com o efeito ColorBends, fixa atrás de todo o conteúdo.
 * `pointer-events-none` garante que ela nunca intercepte clique ou rolagem.
 */
export function ColorBendsBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
    >
      <div style={{ width: "1080px", height: "1080px", position: "relative" }}>
        <ColorBends
          rotation={90}
          speed={0.2}
          colors={["#FC5000", "#FC5000"]}
          transparent
          autoRotate={0}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.2}
          parallax={0.5}
          noise={0.15}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
        />
      </div>
    </div>
  );
}
