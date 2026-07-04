import { useRef, type MouseEvent, type ReactNode } from "react";
import gsap from "gsap";
import { FaReact, FaPython, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiSupabase, SiTauri, SiLeaflet, SiSpringboot, SiN8N, SiAnthropic } from "react-icons/si";
import { useReveal, useStaggerReveal } from "../../lib/useReveal";
import type { Projeto } from "./types";

const ICONE_STACK: Record<string, ReactNode> = {
  React: <FaReact />,
  TypeScript: <SiTypescript />,
  Supabase: <SiSupabase />,
  Tauri: <SiTauri />,
  Leaflet: <SiLeaflet />,
  "Spring Boot": <SiSpringboot />,
  n8n: <SiN8N />,
  "Claude (Anthropic)": <SiAnthropic />,
  Python: <FaPython />,
  CSS: <FaCss3Alt />,
};

interface ProjetoCardProps {
  projeto: Projeto;
  index: number;
}

export function ProjetoCard({ projeto, index }: ProjetoCardProps) {
  const linkExplorar = projeto.linkDeploy ?? projeto.linkGithub;
  const pillRef = useRef<HTMLSpanElement | null>(null);
  const quickX = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const quickY = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const visualInnerRef = useReveal<HTMLDivElement>({ scale: 1.08, y: 0, duration: 0.9 });
  const stackRef = useStaggerReveal<HTMLDivElement>(".projeto-stack-icone", {
    stagger: 0.06,
    scale: 0.6,
    y: 0,
    delay: 0.3,
    duration: 0.35,
  });

  function ensureQuick() {
    if (!pillRef.current || quickX.current) return;
    gsap.set(pillRef.current, { xPercent: -50, yPercent: -50 });
    quickX.current = gsap.quickTo(pillRef.current, "x", { duration: 0.45, ease: "power3.out" });
    quickY.current = gsap.quickTo(pillRef.current, "y", { duration: 0.45, ease: "power3.out" });
  }

  function handleMouseEnter(event: MouseEvent<HTMLAnchorElement>) {
    ensureQuick();
    const rect = event.currentTarget.getBoundingClientRect();
    gsap.set(pillRef.current, { x: event.clientX - rect.left, y: event.clientY - rect.top });
    gsap.to(pillRef.current, { opacity: 1, scale: 1, duration: 0.3, ease: "power3.out" });
  }

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    quickX.current?.(event.clientX - rect.left);
    quickY.current?.(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    gsap.to(pillRef.current, { opacity: 0, scale: 0.5, duration: 0.3, ease: "power3.out" });
  }

  const visualInner = (
    <div className="projeto-visual-frame">
      <div className="projeto-visual-inner" ref={visualInnerRef}>
        {projeto.video ? (
          <video src={projeto.video} autoPlay loop muted playsInline className="projeto-imagem" />
        ) : projeto.imagem ? (
          <img
            src={projeto.imagem}
            alt={projeto.titulo}
            className="projeto-imagem"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="projeto-placeholder" />
        )}
      </div>
    </div>
  );

  return (
    <article className={`projeto-card ${index % 2 === 1 ? "projeto-card--invertido" : ""}`}>
      {linkExplorar ? (
        <a
          href={linkExplorar}
          target="_blank"
          rel="noreferrer"
          className="projeto-visual"
          aria-label={`Explorar o projeto ${projeto.titulo}`}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {visualInner}
          <span ref={pillRef} className="projeto-explorar">
            Explorar
          </span>
        </a>
      ) : (
        <div className="projeto-visual">{visualInner}</div>
      )}

      <div className="projeto-info">
        <h3>{projeto.titulo}</h3>

        <div className="projeto-stack" ref={stackRef}>
          {projeto.tags.map((tag) =>
            ICONE_STACK[tag] ? (
              <span key={tag} className="projeto-stack-icone" title={tag} role="img" aria-label={tag}>
                {ICONE_STACK[tag]}
              </span>
            ) : (
              <span key={tag} className="projeto-stack-texto">
                {tag}
              </span>
            ),
          )}
        </div>
      </div>
    </article>
  );
}
