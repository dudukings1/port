import { FaArrowRight, FaWhatsapp } from "react-icons/fa6";
import { useReveal, useStaggerReveal } from "../lib/useReveal";
import "./Servicos.css";

const WHATSAPP =
  "https://wa.me/5551995783061?text=Olá%2C%20vi%20seus%20servi%C3%A7os%20e%20quero%20conversar%20sobre%20um%20projeto";

interface Servico {
  numero: string;
  titulo: string;
  descricao: string;
}

const SERVICOS: Servico[] = [
  {
    numero: "01",
    titulo: "Desenvolvimento full-stack",
    descricao: "Aplicações web completas, do front-end React ao backend, prontas pra produção.",
  },
  {
    numero: "02",
    titulo: "Automação com IA",
    descricao: "Agentes e fluxos automatizados (n8n, WhatsApp, CRM) que rodam sozinhos 24/7.",
  },
  {
    numero: "03",
    titulo: "Landing pages",
    descricao: "Páginas de captação rápidas, responsivas e pensadas pra converter.",
  },
  {
    numero: "04",
    titulo: "Sistemas internos",
    descricao: "Ferramentas sob medida pra organizar processos e dados do seu negócio.",
  },
];

export function Servicos() {
  const introRef = useReveal<HTMLDivElement>();
  const listaRef = useStaggerReveal<HTMLDivElement>(".servico-item", { stagger: 0.1 });
  const fantasmaRef = useStaggerReveal<HTMLDivElement>(".servico-fantasma", {
    stagger: 0.2,
    x: 60,
    scale: 1.15,
    duration: 0.8,
  });
  const setaRef = useStaggerReveal<HTMLDivElement>(".servico-seta", {
    stagger: 0.1,
    delay: 0.25,
    x: 8,
    duration: 0.4,
  });

  return (
    <section className="section servicos-secao curtain" id="servicos">
      <div className="container">
        <div ref={introRef}>
          <p className="eyebrow">Serviços</p>
          <h2 className="section-title">O que eu posso construir pra você</h2>
        </div>

        <div
          className="servicos-lista"
          ref={(node) => {
            listaRef.current = node;
            fantasmaRef.current = node;
            setaRef.current = node;
          }}
        >
          {SERVICOS.map((servico) => (
            <div key={servico.numero} className="servico-item">
              <span className="servico-fantasma" aria-hidden="true">
                {servico.numero}
              </span>

              <div className="servico-linha">
                <span className="servico-numero">{servico.numero}</span>
                <h3 className="servico-titulo">{servico.titulo}</h3>
                <p className="servico-descricao">{servico.descricao}</p>
                <FaArrowRight className="servico-seta" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>

        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="servicos-cta">
          <FaWhatsapp />
          Vamos conversar sobre o seu projeto
        </a>
      </div>
    </section>
  );
}
