import { useReveal } from "../lib/useReveal";
import "./Footer.css";

export function Footer() {
  const footerRef = useReveal<HTMLDivElement>({ y: 20, duration: 0.7 });

  return (
    <footer className="footer">
      <div className="container footer-inner" ref={footerRef}>
        <span>© {new Date().getFullYear()} Eduardo Dutra Rosolen</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}
