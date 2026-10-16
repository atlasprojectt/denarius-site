"use client";

import { useEffect, useRef, useState, type ComponentProps } from "react";

/**
 * O vídeo do hero, um pouco acelerado (pedido do fundador, 16/10/2026). A
 * velocidade não existe como atributo HTML: entra pela ref. O
 * defaultPlaybackRate sobrevive ao carregamento e ao loop; o playbackRate vale
 * para o vídeo que já começou.
 *
 * No canto inferior direito, um botão meio transparente pausa e retoma o
 * vídeo; ele fica inteiro sob o mouse e no foco. Com movimento reduzido, o
 * vídeo começa parado e o botão o põe para tocar.
 */
const PLAYBACK_RATE = 1.25;

export function HeroVideo({ className, ...props }: ComponentProps<"video">) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);

  // Com movimento reduzido, o vídeo não toca sozinho. O estado do botão segue
  // o vídeo, que pode ter começado antes da hidratação.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.autoplay = false;
      video.pause();
    }
    setPlaying(!video.paused);
  }, []);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  }

  return (
    <div className="relative">
      <video
        {...props}
        ref={(video) => {
          videoRef.current = video;
          if (!video) return;
          video.defaultPlaybackRate = PLAYBACK_RATE;
          video.playbackRate = PLAYBACK_RATE;
        }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className={className}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pausar vídeo" : "Tocar vídeo"}
        className="group absolute right-1 bottom-1 flex size-11 items-center justify-center rounded-full md:right-3 md:bottom-3"
      >
        {/* O alvo tem 44px; o círculo à vista é menor, para não cobrir o
            vídeo no celular. */}
        <span className="flex size-8 items-center justify-center rounded-full bg-black/45 text-white opacity-60 ring-1 ring-white/15 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none md:size-10">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className="size-3.5 md:size-4">
            {playing ? (
              <>
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </>
            ) : (
              <path d="M8 5.6v12.8a1 1 0 0 0 1.52.85l10.2-6.4a1 1 0 0 0 0-1.7L9.52 4.75A1 1 0 0 0 8 5.6Z" />
            )}
          </svg>
        </span>
      </button>
    </div>
  );
}
