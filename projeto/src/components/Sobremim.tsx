import { useEffect, useRef, useState } from "react";
import './StyleSobre.css';
export function Sobremim() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={ref} className="sobre-section">
       <h1 className="meu-nome2">Eduardo Dutra Rosolen</h1>
    <h1 className={`sobre-text ${visible ? "show" : ""}`}>
        Desenvolvedor Full Stack focado em criar soluções completas e eficientes.
        Sempre evoluindo para transformar ideias em sistemas reais.
    </h1>
    <button className={`botao1 ${visible ? "show" : ""}`} onClick={() => window.location.href = "/sobremim"}>Mais sobre mim</button>
    
    
    
    
    </section>
  );
}