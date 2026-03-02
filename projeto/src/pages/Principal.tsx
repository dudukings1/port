import { Header } from "../components/Header";
import { Inicio } from "../components/inicio/inicio";
import { Sobremim } from "../components/Sobremim";
import { Partebranca } from "../components/partebranca";
import Habilidades from "../components/Habilidades";
import { Projetos } from "../components/projects/Projetos";
import { Contato } from "../components/contato";
export function Principal() {
  return (
    <>
<div>
<Header />
<Inicio />
</div>
<Partebranca />
<section>
    <Sobremim />
</section>
<Partebranca />
<div style={{ height: "100vh", padding: "40px" }}>
      <Habilidades />
</div>
<Partebranca />
<section>
    <Projetos />
</section>
<Partebranca />
<section>
    <Contato />
</section>
    </>
  );
}
