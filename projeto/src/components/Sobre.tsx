import { motion } from "framer-motion";
import { Avatar } from "./Avatar";
import "./Sobre.css";

const FATOS = [
  { numero: "3", label: "projetos em produção" },
  { numero: "2", label: "stacks full-stack dominadas" },
  { numero: "1", label: "automação com IA rodando 24/7" },
];

export function Sobre() {
  return (
    <section className="section section--soft" id="sobre">
      <div className="container sobre-grid">
        <motion.div
          className="sobre-foto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar size={220} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Sobre mim</p>
          <h2 className="section-title">Programar deixou de ser hobby — virou ofício.</h2>
          <p className="sobre-texto">
            Comecei mexendo em código por curiosidade e, em pouco tempo, passei a entregar sistemas
            que rodam de verdade: um app de gestão para uma empresa do agronegócio (com mapa
            satélite, sincronização em nuvem e versão desktop), um app de finanças pessoais
            full-stack e uma automação com IA que atende clientes via WhatsApp 24 horas por dia.
          </p>
          <p className="sobre-texto">
            Gosto de pegar um problema real, entender o contexto de quem vai usar e levar a solução
            até produção — não fico só no protótipo. Sem stack fixa: hoje trabalho com React,
            TypeScript, Spring Boot, Supabase e automação com n8n + IA, e estou aprofundando também
            em segurança ofensiva.
          </p>

          <div className="sobre-fatos">
            {FATOS.map((fato) => (
              <div key={fato.label} className="fato-item">
                <span className="fato-numero">{fato.numero}</span>
                <span className="fato-label">{fato.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
