import "./contato.css";

export function Contato() {
    return (
        <div className="contato-container" id="contato">
            <div className="contato-titulo">
                <h1>Contato</h1>
            </div>

            <div className="contatos-wrapper2">
                <div className="contact-box2">
    <p className="contact-title2">Formulário</p>
    <input type="text" placeholder="nome" />
    <input type="text" placeholder="número" />
    <input type="email" placeholder="Seu email" />
    <textarea placeholder="Sua mensagem"></textarea>
    <button className="send-btn2">Enviar</button>
  </div>
  </div>
                <div style={{
                    display: "flex",
                    gap: "10px"
                }}>{/* GITHUB */}
                <div className="caixas-contatos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg1"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <a href="https://github.com/dudukings1" 
   target="_blank" 
   style={{
     color: '#000',
     textDecoration: 'none',
     fontFamily: "Inter, sans-serif",
     fontSize: '14px',
     display: 'inline-flex',
     alignItems: 'center',
     gap: '8px',
     transition: '0.2s'
   }}>
   Github
</a>
                </div>

                {/* EMAIL */}
                <div className="caixas-contatos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <a href="mailto:eduardodutrarosolen@gmail.com" 
   target="_blank" 
   style={{
     color: '#000',
     textDecoration: 'none',
     fontFamily: "Inter, sans-serif",
     fontSize: '14px',
     display: 'inline-flex',
     alignItems: 'center',
     gap: '8px',
     transition: '0.2s'
   }}>
   Email
</a>
                </div>

                {/* TELEFONE */}
                <div className="caixas-contatos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <a href="https://wa.me/5551995783061??text=Olá%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!" 
   target="_blank" 
   style={{
     color: '#000',
     textDecoration: 'none',
     fontFamily: "Inter, sans-serif",
     fontSize: '14px',
     display: 'inline-flex',
     alignItems: 'center',
     gap: '8px',
     transition: '0.2s'
   }}>
    Telefone
</a>
</div>
<div className="caixas-contatos">
<svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="icon-svg-instagram"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
<a href="https://instagram.com/eduardo_rosolen" target="_blank" rel="noreferrer" style={{
     color: '#000',
     textDecoration: 'none',
     fontFamily: "Inter, sans-serif",
     fontSize: '14px',
     display: 'inline-flex',
     alignItems: 'center',
     gap: '8px',
     transition: '0.2s'
   }}>
  Instagram
</a>
</div>          
    
            </div>
        </div>
    );
}