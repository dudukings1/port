import { FaPlay } from "react-icons/fa6";
import "./HeroVideo.css";

interface HeroVideoProps {
  videoSrc?: string;
}

// Sem gravação ainda: mostra o placeholder. Quando tiver um vídeo real,
// passar videoSrc pra trocar automaticamente pelo <video> em loop mudo.
export function HeroVideo({ videoSrc }: HeroVideoProps) {
  return (
    <div className="hero-video">
      {videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="hero-video-media"
        />
      ) : (
        <>
          <div className="hero-video-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <button className="hero-video-play" aria-label="Reproduzir vídeo de demonstração" disabled>
            <FaPlay />
          </button>
          <span className="hero-video-legenda">Demo em vídeo — a gravar</span>
        </>
      )}
    </div>
  );
}
