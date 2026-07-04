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
import { useReveal, useStaggerReveal } from "../lib/useReveal";
import { MockTerminal } from "./MockTerminal";
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
  const introRef = useReveal<HTMLDivElement>();
  const gruposRef = useStaggerReveal<HTMLDivElement>(".habilidade-grupo", { stagger: 0.12 });
  const badgesRef = useStaggerReveal<HTMLDivElement>(".skill-badge", {
    stagger: 0.03,
    scale: 0.8,
    y: 0,
    delay: 0.3,
    duration: 0.4,
  });
  const terminalRef = useReveal<HTMLDivElement>({ scale: 0.96, y: 16, duration: 0.6 });

  return (
    <section className="section section--escura curtain" id="habilidades">
      <div className="container">
        <div className="habilidades-intro" ref={introRef}>
          <p className="eyebrow eyebrow--claro">Habilidades</p>
          <h2 className="section-title section-title--claro">Stack que uso no dia a dia</h2>
        </div>

        <div
          className="habilidades-grupos"
          ref={(node) => {
            gruposRef.current = node;
            badgesRef.current = node;
          }}
        >
          {GRUPOS.map((grupo) => (
            <div key={grupo.titulo} className="habilidade-grupo">
              <h3 className="grupo-titulo">{grupo.titulo}</h3>
              <div className="grupo-badges">
                {grupo.skills.map((skill) => (
                  <span key={skill.nome} className="skill-badge">
                    <span className="skill-icone">{skill.icone}</span>
                    {skill.nome}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={terminalRef}>
          <MockTerminal atrasoInicialMs={700} />
        </div>
      </div>
    </section>
  );
}
