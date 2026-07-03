import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mae from "../../img/mae.jpeg";
import gestaoPlantio from "../../img/gestao-plantio.png";
import financeiro from "../../img/financeiro.png";
import { useReveal, useStaggerReveal } from "../../lib/useReveal";
import { ProjetoCard } from "./ProjetoCard";
import type { Projeto } from "./types";
import "./Projetos.css";

gsap.registerPlugin(ScrollTrigger);

const PROJETOS: Projeto[] = [
  {
    id: 1,
    titulo: "Gestão Plantio",
    descricao:
      "Sistema de gestão agrícola por talhão para uma empresa do agronegócio: mapa satélite com desenho de polígonos, controle de safras simultâneas, estoque e relatórios em PDF/CSV. Sincroniza entre dispositivos via Supabase e também roda como app desktop.",
    tags: ["React", "TypeScript", "Supabase", "Tauri", "Leaflet"],
    destaque: "Em produção",
    imagem: gestaoPlantio,
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
    imagem: financeiro,
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
  const introRef = useReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(".projeto-card", { stagger: 0.14 });
  const parallaxRoot = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = parallaxRoot.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      root.querySelectorAll<HTMLElement>(".projeto-visual-inner").forEach((el) => {
        gsap.to(el, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section projetos-secao curtain curtain--fechada" id="projetos">
      <div className="container">
        <div ref={introRef}>
          <p className="eyebrow eyebrow--claro">Projetos</p>
          <h2 className="section-title section-title--claro">O que eu já levei até produção</h2>
        </div>

        <div
          className="projetos-lista"
          ref={(node) => {
            gridRef.current = node;
            parallaxRoot.current = node;
          }}
        >
          {PROJETOS.map((projeto, index) => (
            <ProjetoCard key={projeto.id} projeto={projeto} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
