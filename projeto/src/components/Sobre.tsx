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
        <p className="sobre-frase">
          Programar deixou de ser hobby — virou <span className="sobre-destaque">ofício.</span>
        </p>
        <p className="sobre-texto">
          Comecei mexendo em código por curiosidade e, em pouco tempo, passei a entregar sistemas
          que rodam de verdade: um app de gestão para uma empresa do agronegócio, um app de
          finanças pessoais full-stack e uma automação com IA que atende clientes via WhatsApp 24
          horas por dia. Gosto de pegar um problema real e levar a solução até produção — não fico
          só no protótipo.
        </p>
        <p className="sobre-fatos">
          3 projetos em produção &nbsp;·&nbsp; 2 stacks full-stack dominadas &nbsp;·&nbsp; 1
          automação com IA rodando 24/7
        </p>
      </div>
    </section>
  );
}
