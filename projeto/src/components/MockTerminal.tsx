import { useEffect, useState } from "react";
import "./MockTerminal.css";

const LINHAS = [
  { texto: "$ git push origin main", cor: "" },
  { texto: "✓ build concluído em 8s", cor: "sucesso" },
  { texto: "$ npm run deploy", cor: "" },
  { texto: "✓ deploy em produção — tudo certo", cor: "sucesso" },
];

const VELOCIDADE_DIGITACAO = 35;
const PAUSA_ENTRE_LINHAS = 900;
const PAUSA_NO_FINAL = 2200;

interface MockTerminalProps {
  atrasoInicialMs?: number;
}

export function MockTerminal({ atrasoInicialMs = 0 }: MockTerminalProps) {
  const [pronto, setPronto] = useState(atrasoInicialMs === 0);
  const [linhaAtual, setLinhaAtual] = useState(0);
  const [textoDigitado, setTextoDigitado] = useState("");
  const [linhasProntas, setLinhasProntas] = useState<string[]>([]);

  useEffect(() => {
    if (pronto || atrasoInicialMs === 0) return;
    const timeout = setTimeout(() => setPronto(true), atrasoInicialMs);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!pronto) return;
    const linha = LINHAS[linhaAtual];
    if (textoDigitado.length < linha.texto.length) {
      const timeout = setTimeout(() => {
        setTextoDigitado(linha.texto.slice(0, textoDigitado.length + 1));
      }, VELOCIDADE_DIGITACAO);
      return () => clearTimeout(timeout);
    }

    const ehUltimaLinha = linhaAtual === LINHAS.length - 1;
    const timeout = setTimeout(
      () => {
        if (ehUltimaLinha) {
          setLinhasProntas([]);
          setLinhaAtual(0);
        } else {
          setLinhasProntas((prev) => [...prev, textoDigitado]);
          setLinhaAtual((prev) => prev + 1);
        }
        setTextoDigitado("");
      },
      ehUltimaLinha ? PAUSA_NO_FINAL : PAUSA_ENTRE_LINHAS,
    );
    return () => clearTimeout(timeout);
  }, [textoDigitado, linhaAtual, pronto]);

  return (
    <div className="mock-terminal">
      <div className="mock-terminal-barra">
        <span className="mock-terminal-ponto" />
        <span className="mock-terminal-ponto" />
        <span className="mock-terminal-ponto" />
      </div>
      <div className="mock-terminal-corpo">
        {linhasProntas.map((linha, index) => (
          <p key={index} className={LINHAS[index].cor === "sucesso" ? "mock-terminal-sucesso" : ""}>
            {linha}
          </p>
        ))}
        <p className={LINHAS[linhaAtual].cor === "sucesso" ? "mock-terminal-sucesso" : ""}>
          {textoDigitado}
          <span className="mock-terminal-cursor" />
        </p>
      </div>
    </div>
  );
}
