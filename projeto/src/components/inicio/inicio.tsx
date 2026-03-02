import { useState, useEffect } from "react";
import "./inicio.css";
import logo3 from "../../img/logo3.png";
export function Inicio() {
  const palavras = [
    "portfólio",
    "projeto",
    "trabalho",
    
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prev) => (prev + 1) % palavras.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="inicio-section" id="inicio">
    
    <div className="hero">
      <p>Inicio</p>
      <h1 className="hero-title">
        Olá, eu sou <span>Eduardo</span>, seja bem-vindo ao meu{" "}
        <span key={indice} className="animated-word">
          {palavras[indice]}
        </span>
      </h1>
      <div className="linha"></div>
      <p className="hero-subtitle">Role para mais</p>
    </div>
    <div>
      <img src={logo3} alt="Gif de rolar para baixo" className="scroll-gif" />
    </div>
    </section>
    </>
  );
}