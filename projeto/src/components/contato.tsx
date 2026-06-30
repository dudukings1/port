import { motion } from "framer-motion";
import { FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./contato.css";

const CANAIS = [
  {
    nome: "Email",
    valor: "eduardodutrarosolen@gmail.com",
    href: "mailto:eduardodutrarosolen@gmail.com",
    icone: <HiOutlineMail />,
  },
  {
    nome: "GitHub",
    valor: "github.com/dudukings1",
    href: "https://github.com/dudukings1",
    icone: <FaGithub />,
  },
  {
    nome: "WhatsApp",
    valor: "Chamar no WhatsApp",
    href: "https://wa.me/5551995783061?text=Olá%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!",
    icone: <FaWhatsapp />,
  },
  {
    nome: "Instagram",
    valor: "@eduardo_rosolen",
    href: "https://instagram.com/eduardo_rosolen",
    icone: <FaInstagram />,
  },
];

export function Contato() {
  return (
    <section className="section" id="contato">
      <div className="container">
        <motion.div
          className="contato-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Contato</p>
          <h2 className="section-title">Vamos conversar sobre o seu projeto</h2>
          <p className="section-subtitle">
            Estou disponível para novas oportunidades e projetos freelance. Escolha o canal que
            preferir.
          </p>
        </motion.div>

        <div className="contato-grid">
          {CANAIS.map((canal, index) => (
            <motion.a
              key={canal.nome}
              href={canal.href}
              target="_blank"
              rel="noreferrer"
              className="contato-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <span className="contato-icone">{canal.icone}</span>
              <span>
                <span className="contato-nome">{canal.nome}</span>
                <span className="contato-valor">{canal.valor}</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
