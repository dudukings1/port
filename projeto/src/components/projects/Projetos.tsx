import "./Cards.css"; // Certifique-se de importar o arquivo CSS aqui
import type { CardProps } from "./cards";
import eu from "../../img/eu.jpeg";
import gestao from "../../img/gestao.png";
import mae from "../../img/mae.jpeg";
export function Projetos() {
  const meusProjetos: CardProps[] = [
    {
      projeto: {
        id: 1,
        titulo: "Meu Portfólio",
        descricao: "Desenvolvido com React e TypeScript e Css, este portfólio é uma vitrine digital que destaca minhas habilidades e projetos. Com um design moderno e responsivo, ele apresenta uma navegação intuitiva e uma seção de projetos interativa, permitindo que os visitantes explorem meu trabalho da melhor forma possível.",
        tags: ["React", "TypeScript", "Css"],
        imagem: eu,
        linkGithub: "https://github.com/...",
      },
    },
    {
      projeto: {
        id: 2,
        titulo: "Gestão de Aluguéis de Carros",
        descricao: "Sistema completo de gestão de aluguéis de carros, com funcionalidades para gerenciar veículos, clientes e aluguéis. Desenvolvido com  Java, o sistema oferece uma interface intuitiva para facilitar a administração de uma locadora de veículos, permitindo o controle eficiente de reservas, disponibilidade e histórico de aluguéis.",
        tags: ["Java", "Json"],
        imagem: gestao,
        linkGithub: "https://github.com/dudukings1/gesta0-de-veiculos",
      },
    },{
      projeto: {
        id: 3,
        titulo: "Land Page Dra.Michele",
        descricao: "Land Page para a Dra. Michele, uma médica especializada em Nutrição. A página apresenta informações sobre os serviços oferecidos, depoimentos de pacientes e um formulário de contato para agendamento de consultas. Desenvolvida com React e TypeScript, a Land Page é responsiva e oferece uma experiência agradável para os visitantes.",
        tags: ["React", "TypeScript", "Css"],
        imagem: mae,
        linkDeploy: "https://www.dramichelerosolen.com.br/?srsltid=AfmBOoq4vwlXyjVyEhmCdBH1mq6M0EO2x9Efvvh53zPMU5lrEA6vANwz",
      },
    },
  ];

  return (
    <div className="projetos-container">
      <h1 className="projetos-titulo">Projetos</h1>
      
      <div className="projetos-grid">
        {meusProjetos.map(({ projeto }) => (
          <div key={projeto.id} className="projeto-card">
            <img 
              src={projeto.imagem} 
              alt={projeto.titulo} 
              className="projeto-imagem" 
            />
            
            <div className="projeto-info">
              <div className="projeto-tags">
                {projeto.tags.map(tag => (
                  <span key={tag} className="tag-item">{tag}</span>
                ))}
              </div>

              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              
              <div className="projeto-links">
                {projeto.linkGithub && (
                  <a href={projeto.linkGithub} className="link-github" target="_blank">
                    GitHub
                  </a>
                )}
                {projeto.linkDeploy && (
                  <a href={projeto.linkDeploy} className="link-deploy" target="_blank">
                    Ver Deploy
                  </a>
                )}
                
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}