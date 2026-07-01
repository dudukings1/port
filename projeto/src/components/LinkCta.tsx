import type { AnchorHTMLAttributes, ReactNode } from "react";
import "./LinkCta.css";

interface LinkCtaProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

// Botão "principal": texto sublinhado que troca de linha no hover (marquee) + muda pra azul.
// Usar só nas 2-3 ações centrais do site (CTA do header, botão primário do Hero) — não em todo botão.
export function LinkCta({ children, className, ...rest }: LinkCtaProps) {
  return (
    <a className={`link-cta ${className ?? ""}`} {...rest}>
      <span className="link-cta-track">
        <span className="link-cta-label">{children}</span>
        <span className="link-cta-label" aria-hidden="true">
          {children}
        </span>
      </span>
    </a>
  );
}
