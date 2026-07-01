import { useState } from "react";
import { LinkCta } from "./LinkCta";
import "./Header.css";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-inner container">
          <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-nome">Eduardo</span>
            <span className="brand-barra">/</span>
            <span className="brand-cargo">Developer</span>
          </a>
        </div>
      </header>

      <button
        className={`nav-toggle ${open ? "is-open" : ""}`}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
      </button>

      <nav className={`nav-overlay ${open ? "is-open" : ""}`}>
        {LINKS.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-overlay-link"
            style={{ transitionDelay: open ? `${index * 0.05}s` : "0s" }}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <LinkCta href="#contato" className="nav-overlay-cta" onClick={() => setOpen(false)}>
          Vamos conversar
        </LinkCta>
      </nav>
    </>
  );
}
