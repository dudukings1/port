interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tags: string[];
  imagem: string;
  linkGithub?: string;
  linkDeploy?: string;
}

export interface CardProps {
  projeto: Projeto;
}
export const CardProjeto = ({ projeto }: CardProps) => {
  return (
    <div>
      <img src={projeto.imagem} alt={projeto.titulo} />
      <span>{projeto.tags.join(' | ')}</span>
      <h3>{projeto.titulo}</h3>
      <p>{projeto.descricao}</p>
      
      {projeto.linkGithub && <a href={projeto.linkGithub}>GitHub</a>}
      {projeto.linkDeploy && <a href={projeto.linkDeploy}>Live Demo</a>}
    </div>
  );
};