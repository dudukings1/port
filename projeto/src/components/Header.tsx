import { useState } from "react";
import logo from "../img/logo.png";
import "./Header.css";

export function Header() {
  const [mostrar, setMostrar] = useState(false);
    const [mostrarMenu, setMostrarMenu] = useState(false);

  return (
    <nav>
      <section>
        <div>
          <img src={logo} alt="Logo" className="profile-img" />
        </div>

        <div style={{ position: "relative" }}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMostrar((prev) => !prev);
            }}
          >
            <p style={{
                fontSize: "20px"
            }}>MENU</p>
          </a>

          {mostrar && (
            <div className="menu-dropdown">
              <a href="/#inicio">HOME</a>
              <a href="/#sobre">SOBRE MIM</a>
              <a href="/#habilidades">HABILIDADES</a>
              <a href="/#contato">CONTATO</a>
            </div>
          )}
        </div>
      </section>

      <div>
        
        
        
        
        
        
        <button
  className="contact-btn"
  onClick={(e) => {
    e.preventDefault();
    setMostrarMenu((prev) => !prev);
  }}
>
  CONTATO
</button>
        {mostrarMenu && (
  <div className="contact-box">
    <p className="contact-title">Formulário</p>
    <input type="text" placeholder="nome" />
    <input type="text" placeholder="número" />
    <input type="email" placeholder="Seu email" />
    <textarea placeholder="Sua mensagem"></textarea>
    <button className="send-btn">Enviar</button>
  </div>
)}
      </div>
    </nav>
  );
}