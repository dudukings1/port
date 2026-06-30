import { motion } from "framer-motion";
import mae from "../../img/mae.jpeg";
import "./Projetos.css";

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tags: string[];
  imagem?: string;
  destaque?: string;
  linkGithub?: string;
  linkDeploy?: string;
}

const PROJETOS: Projeto[] = [
  {
    id: 1,
    titulo: "Gestão Plantio",
    descricao:
      "Sistema de gestão agrícola por talhão para uma empresa do agronegócio: mapa satélite com desenho de polígonos, controle de safras simultâneas, estoque e relatórios em PDF/CSV. Sincroniza entre dispositivos via Supabase e também roda como app desktop.",
    tags: ["React", "TypeScript", "Supabase", "Tauri", "Leaflet"],
    destaque: "Em produção",
    linkGithub: "https://github.com/dudukings1/gestao-plantio",
    linkDeploy: "https://gestao-plantio.vercel.app",
  },
  {
    id: 2,
    titulo: "Financeiro",
    descricao:
      "App full-stack de finanças pessoais: dashboard de financiamentos, contas parceladas e métricas, com login social via OAuth (Google/GitHub) e backend próprio em Spring Boot + Supabase.",
    tags: ["React", "TypeScript", "Spring Boot", "Supabase"],
    destaque: "Em produção",
    linkDeploy: "https://financeiro-web-snowy.vercel.app",
  },
  {
    id: 3,
    titulo: "Agente de Vendas via WhatsApp",
    descricao:
      "Automação ponta a ponta que qualifica leads automaticamente: webhook recebe a mensagem, um agente de IA conduz a conversa e os dados caem direto num CRM próprio, sem intervenção manual.",
    tags: ["n8n", "Claude (Anthropic)", "Python", "Z-API"],
    destaque: "Rodando 24/7",
  },
  {
    id: 4,
    titulo: "Land Page — Dra. Michele",
    descricao:
      "Página de captação para uma nutricionista especializada em saúde intestinal, com formulário de agendamento e contato direto via WhatsApp.",
    tags: ["React", "TypeScript", "CSS"],
    imagem: mae,
    linkDeploy: "https://www.dramichelerosolen.com.br",
  },
];

export function Projetos() {
  return (
    <section className="section section--soft" id="projetos">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Projetos</p>
          <h2 className="section-title">O que eu já levei até produção</h2>
          <p className="section-subtitle">
            Sistemas reais, usados por pessoas reais — não só exercícios de curso.
          </p>
        </motion.div>

        <div className="projetos-grid">
          {PROJETOS.map((projeto, index) => (
            <motion.article
              key={projeto.id}
              className="projeto-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (index % 2) * 0.1 }}
            >
              <div className="projeto-visual">
                {projeto.imagem ? (
                  <img src={projeto.imagem} alt={projeto.titulo} className="projeto-imagem" />
                ) : (
                  <div className="projeto-placeholder">{projeto.titulo.charAt(0)}</div>
                )}
                {projeto.destaque && <span className="projeto-selo">{projeto.destaque}</span>}
              </div>

              <div className="projeto-info">
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>

                <div className="projeto-tags">
                  {projeto.tags.map((tag) => (
                    <span key={tag} className="tag-item">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="projeto-links">
                  {projeto.linkGithub && (
                    <a href={projeto.linkGithub} target="_blank" rel="noreferrer" className="link-projeto">
                      Código
                    </a>
                  )}
                  {projeto.linkDeploy && (
                    <a href={projeto.linkDeploy} target="_blank" rel="noreferrer" className="link-projeto link-projeto--principal">
                      Ver demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
