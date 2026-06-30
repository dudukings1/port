import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiSpringboot,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiVite,
  SiN8N,
} from "react-icons/si";
import "./Habilidades.css";

interface Skill {
  nome: string;
  icone: ReactNode;
}

interface Grupo {
  titulo: string;
  skills: Skill[];
}

const GRUPOS: Grupo[] = [
  {
    titulo: "Frontend",
    skills: [
      { nome: "React", icone: <FaReact /> },
      { nome: "TypeScript", icone: <SiTypescript /> },
      { nome: "JavaScript", icone: <FaJs /> },
      { nome: "Vite", icone: <SiVite /> },
      { nome: "Tailwind CSS", icone: <SiTailwindcss /> },
      { nome: "HTML", icone: <FaHtml5 /> },
      { nome: "CSS", icone: <FaCss3Alt /> },
    ],
  },
  {
    titulo: "Backend",
    skills: [
      { nome: "Spring Boot", icone: <SiSpringboot /> },
      { nome: "Java", icone: <FaJava /> },
      { nome: "Python", icone: <FaPython /> },
      { nome: "Supabase", icone: <SiSupabase /> },
      { nome: "PostgreSQL", icone: <SiPostgresql /> },
    ],
  },
  {
    titulo: "Automação & Ferramentas",
    skills: [
      { nome: "n8n", icone: <SiN8N /> },
      { nome: "Git", icone: <FaGitAlt /> },
      { nome: "Docker", icone: <FaDocker /> },
    ],
  },
];

export function Habilidades() {
  return (
    <section className="section" id="habilidades">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Habilidades</p>
          <h2 className="section-title">Stack que uso no dia a dia</h2>
          <p className="section-subtitle">
            Sem stack fixa — escolho a ferramenta certa pra cada problema, mas estas são as que mais
            aparecem nos meus projetos em produção.
          </p>
        </motion.div>

        <div className="habilidades-grupos">
          {GRUPOS.map((grupo, grupoIndex) => (
            <motion.div
              key={grupo.titulo}
              className="habilidade-grupo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: grupoIndex * 0.08 }}
            >
              <h3 className="grupo-titulo">{grupo.titulo}</h3>
              <div className="grupo-badges">
                {grupo.skills.map((skill) => (
                  <span key={skill.nome} className="skill-badge">
                    <span className="skill-icone">{skill.icone}</span>
                    {skill.nome}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
