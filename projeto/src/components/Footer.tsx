import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Eduardo Dutra Rosolen</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}
