"use client";

import type { ComponentProps } from "react";

/**
 * O vídeo do hero, um pouco acelerado (pedido do fundador, 16/10/2026). A
 * velocidade não existe como atributo HTML: entra pela ref. O
 * defaultPlaybackRate sobrevive ao carregamento e ao loop; o playbackRate vale
 * para o vídeo que já começou.
 */
const PLAYBACK_RATE = 1.25;

export function HeroVideo(props: ComponentProps<"video">) {
  return (
    <video
      {...props}
      ref={(video) => {
        if (!video) return;
        video.defaultPlaybackRate = PLAYBACK_RATE;
        video.playbackRate = PLAYBACK_RATE;
      }}
    />
  );
}
