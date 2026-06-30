import { useState } from "react";
import "./Header.css";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner container">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          Eduardo<span>.</span>
        </a>

        <nav className="nav-desktop">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#contato" className="nav-cta">
            Vamos conversar
          </a>
        </nav>

        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label="Abrir menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="nav-mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
