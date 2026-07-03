import { useReveal } from "../lib/useReveal";
import "./Sobre.css";

export function Sobre() {
  const textoRef = useReveal<HTMLDivElement>();

  return (
    <section className="section curtain" id="sobre">
      <span className="sobre-aspas" aria-hidden="true">
        &rdquo;
      </span>
      <span className="sobre-anel" aria-hidden="true" />

      <div className="container sobre-conteudo" ref={textoRef}>
        <p className="sobre-texto">
          Soluciono seus problemas de forma produtiva, com sistemas que saem do papel e vão
          direto para a produção.
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
