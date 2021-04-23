/* eslint-disable no-unused-vars */
import "./Navegacao.css";

import { navegation } from "./navegation";

function Navegacao() {
  return (
    <div>
      <h2>Navegue por departamento</h2>
      <section className="list">
        {navegation.map((foto, img) => {
          return <Foto key={img} foto={foto}></Foto>;
        })}
      </section>
    </div>
  );
}

const Foto = (props) => {
  const { img, alt, links, nameSection } = props.foto;

  return (
    <article className="foto-banner">
      <a className="link" href={links}>
        <img className="foto" src={img} alt={alt} /> {nameSection}
      </a>
    </article>
  );
};

export default Navegacao;
