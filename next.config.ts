import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * No Next 16 `images.qualities` virou allowlist, com `[75]` por padrão, e
     * qualquer outro valor é coagido para o mais próximo da lista. O fundo do
     * hero é uma textura de gradiente — justamente o tipo de imagem em que a
     * compressão aparece como faixas — então ele é servido sem perda.
     */
    qualities: [75, 100],
  },
};

export default nextConfig;
