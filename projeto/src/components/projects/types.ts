export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tags: string[];
  imagem?: string;
  // Nenhum projeto tem vídeo ainda — quando gravar uma demo, preencher aqui
  // que o card troca a imagem por <video loop muted> automaticamente.
  video?: string;
  destaque?: string;
  linkGithub?: string;
  linkDeploy?: string;
}
