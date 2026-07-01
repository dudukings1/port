import { FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useReveal, useStaggerReveal } from "../lib/useReveal";
import "./contato.css";

const CANAIS_SECUNDARIOS = [
  {
    nome: "Email",
    valor: "eduardodutrarosolen@gmail.com",
    href: "mailto:eduardodutrarosolen@gmail.com",
    icone: <HiOutlineMail />,
  },
  {
    nome: "GitHub",
    valor: "github.com/dudukings1",
    href: "https://github.com/dudukings1",
    icone: <FaGithub />,
  },
  {
    nome: "Instagram",
    valor: "@eduardo_rosolen",
    href: "https://instagram.com/eduardo_rosolen",
    icone: <FaInstagram />,
  },
];

const WHATSAPP =
  "https://wa.me/5551995783061?text=Olá%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!";

export function Contato() {
  const introRef = useReveal<HTMLDivElement>();
  const chipsRef = useStaggerReveal<HTMLDivElement>(".contato-chip", { stagger: 0.08, delay: 0.15 });

  return (
    <section className="section section--escura " id="contato">
      <div className="container contato-conteudo" ref={introRef}>
        <p className="eyebrow eyebrow--claro">Contato</p>
        <h2 className="contato-titulo">
          Tem um projeto <br />
          em mente?
        </h2>

        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="contato-cta">
          <FaWhatsapp />
          Chamar no WhatsApp
        </a>

        <div className="contato-chips" ref={chipsRef}>
          {CANAIS_SECUNDARIOS.map((canal) => (
            <a key={canal.nome} href={canal.href} target="_blank" rel="noreferrer" className="contato-chip">
              <span className="contato-chip-icone">{canal.icone}</span>
              {canal.valor}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
