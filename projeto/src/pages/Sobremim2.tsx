import { Header } from "../components/Header";
import "./sobremim2.css";
// import minhaFoto from "../../img/perfil.jpeg";
import minhaFoto from "../img/logo10.jpeg";

export function Sobremim2() {
  return (
    <>
    <Header />
    <div className="sobremim-container" id="sobre">
      <div className="sobremim-conteudo">
        
        {/* COLUNA DO TEXTO */}
        <div className="sobremim-texto">
          <p className="sobremim-titulo">SOBRE MIM</p>
          <h1 className="sobremim-descricao">
            Olá, eu sou o Eduardo. Tenho 15 anos e transformo curiosidade em código desde o começo de 2026.
          </h1>

          <div className="sobremim-historia">
            <h3>O que me levou à programação?</h3>
            <p>
              Tudo começou com um interesse em entender como funcionavam os <strong>cheats de GTA</strong>. 
              Pode parecer estranho, mas foi "tentando quebrar o jogo" que descobri o mundo 
              do desenvolvimento e as infinitas oportunidades que ele oferece.
            </p>
          </div>

          <div className="sobremim-listas-wrapper">
            <div className="sobremim-secao-lista">
              <h1>O que eu gosto:</h1>
              <ol>
                <li>Programar</li>
                <li>Jogar video games</li>
                <li>Assistir Filmes</li>
              </ol>
            </div>

            <div className="sobremim-secao-lista">
              <h1>Minhas Características:</h1>
              <ol>
                <li className="char-item">Resiliência</li>
                <li className="char-item">Calma sob pressão</li>
                <li className="char-item">Energia e Determinação</li>
              </ol>
            </div>
          </div>
        </div>

        {/* COLUNA DA FOTO */}
        <div className="sobremim-foto-container">
          <div className="sobremim-foto-placeholder">
           <img src={minhaFoto} alt="" />
            
          </div>
        </div>

      </div>

      <div className="sobremim-chamada">
        <h2>
           Busco minha primeira oportunidade para aplicar minha determinação em projetos reais.
        </h2>
      </div>
    </div>
    </>
  );
}