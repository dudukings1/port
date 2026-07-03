import { useEffect, useState } from "react";
import { startSmoothScroll, stopSmoothScroll } from "../lib/smoothScroll";
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

  useEffect(() => {
    if (open) {
      stopSmoothScroll();
      document.body.style.overflow = "hidden";
    } else {
      startSmoothScroll();
      document.body.style.overflow = "";
    }

    return () => {
      startSmoothScroll();
      document.body.style.overflow = "";
    };
  }, [open]);

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
        <p className="eyebrow nav-overlay-eyebrow">Aonde quer ir?</p>
        {LINKS.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-overlay-link"
            style={{ transitionDelay: open ? `${index * 0.05}s` : "0s" }}
            onClick={() => setOpen(false)}
          >
            <span className="nav-overlay-link-prefix" aria-hidden="true">+</span>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
