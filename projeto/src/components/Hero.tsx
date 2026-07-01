import { useEffect, useRef } from "react";
import gsap from "gsap";
import { LinkCta } from "./LinkCta";
import { HeroVideo } from "./HeroVideo";
import "./Hero.css";

export function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-title-line",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 0.9, stagger: 0.08, ease: "power3.out" },
      );
      gsap.fromTo(
        ".hero-actions",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: "power3.out" },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" id="inicio" ref={rootRef}>
      <div className="hero-ghost" aria-hidden="true">
        2026
      </div>

      <div className="container hero-inner">
        <h1 className="hero-title">
          <span className="hero-title-line-wrap">
            <span className="hero-title-line">Eu construo sistemas reais</span>
          </span>
          <span className="hero-title-line-wrap">
            <span className="hero-title-line">
              do zero à <span className="hero-title-accent">produção</span>
            </span>
          </span>
        </h1>

        <div className="hero-actions">
          <LinkCta href="#projetos">Ver projetos</LinkCta>
          <a href="#contato" className="hero-link-secundario">
            Falar comigo
          </a>
        </div>
      </div>

      <div className="container">
        <HeroVideo videoSrc="/videos/hero-demo.mp4" />
      </div>
    </section>
  );
}
