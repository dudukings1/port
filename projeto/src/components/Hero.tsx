import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Hero.css";

const PALAVRAS = ["produção", "performance", "soluções reais", "código limpo"];

export function Hero() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prev) => (prev + 1) % PALAVRAS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="inicio">
      <div className="container hero-inner">
        <motion.p
          className="hero-kicker"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Desenvolvedor Full Stack
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Eu sou o Eduardo. Construo sistemas pensados para{" "}
          <span className="hero-word-wrap">
            <AnimatePresence mode="wait">
              <motion.span
                key={indice}
                className="hero-word"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                {PALAVRAS[indice]}
              </motion.span>
            </AnimatePresence>
          </span>
          .
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Da ideia ao deploy: front-end, back-end e automação com IA, hoje rodando em produção
          para clientes reais.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#projetos" className="btn btn-primary">
            Ver projetos
          </a>
          <a href="#contato" className="btn btn-ghost">
            Falar comigo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
