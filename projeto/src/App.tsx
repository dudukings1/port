import "./app.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Sobre } from "./components/Sobre";
import { Habilidades } from "./components/Habilidades";
import { Projetos } from "./components/projects/Projetos";
import { Contato } from "./components/contato";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Projetos />
      <Habilidades />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
