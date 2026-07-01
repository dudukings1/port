import { useEffect } from "react";
import "mouse-follower/dist/mouse-follower.min.css";
import "./app.css";
import "./cursor.css";
import { initSmoothScroll, destroySmoothScroll } from "./lib/smoothScroll";
import { initCursor, destroyCursor } from "./lib/cursor";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Sobre } from "./components/Sobre";
import { Habilidades } from "./components/Habilidades";
import { Projetos } from "./components/projects/Projetos";
import { Servicos } from "./components/Servicos";
import { Contato } from "./components/contato";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    initSmoothScroll();
    initCursor();

    return () => {
      destroySmoothScroll();
      destroyCursor();
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Projetos />
      <Servicos />
      <Habilidades />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
