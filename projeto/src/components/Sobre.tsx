import { useReveal, useStaggerReveal } from "../lib/useReveal";
import "./Sobre.css";

const FRASE =
  "Soluciono seus problemas de forma produtiva, com sistemas que saem do papel e vão direto para a produção.";

export function Sobre() {
  const aspasRef = useReveal<HTMLSpanElement>({ delay: 0.2, duration: 0.8 });
  const anelRef = useReveal<HTMLSpanElement>({ scale: 0.7, rotate: -12, duration: 1 });
  const containerRef = useReveal<HTMLDivElement>();
  const palavrasRef = useStaggerReveal<HTMLDivElement>(".sobre-palavra", {
    stagger: 0.02,
    duration: 0.4,
    y: 10,
  });

  const palavras = FRASE.split(" ");

  return (
    <section className="section curtain" id="sobre">
      <span className="sobre-aspas" aria-hidden="true" ref={aspasRef}>
        &rdquo;
      </span>
      <span className="sobre-anel" aria-hidden="true" ref={anelRef} />

      <div
        className="container sobre-conteudo"
        ref={(node) => {
          containerRef.current = node;
          palavrasRef.current = node;
        }}
      >
        <p className="sobre-texto">
          {palavras.map((palavra, index) => (
            <span key={index} className="sobre-palavra">
              {palavra}
              {index < palavras.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
        <p className="sobre-fatos">
          3 projetos em produção &nbsp;·&nbsp; data analyst &nbsp;·&nbsp;
          Web desenvolvedor &nbsp;·&nbsp; Founder Fintrack
        </p>

        <a href="#projetos" className="sobre-cta">
          Saiba mais
        </a>
      </div>
    </section>
  );
}
