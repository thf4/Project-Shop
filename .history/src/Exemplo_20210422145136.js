/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Exemplo.css";

function Exemplo() {
  return (
    <section className="list">
      <NovaFoto />
      <NovaFoto />
      <NovaFoto />
      <NovaFoto />
      <NovaFoto />
      <NovaFoto />
      <NovaFoto />
      <NovaFoto />
    </section>
  );
}

function NovaFoto() {
  return (
    <div >
      <Foto 
    
          />
           
      </div>
          
  );
}
function Foto (props) {
  const { img, link, alt, name } = props;

  return (
    <figure>
      <picture className="foto-banner">
        <img className="foto" src={img.props} alt={alt.props} />
        <figcaption>
          <a className="link" href={link.props}>{name.props}</a>
        </figcaption>
      </picture>
    </figure>
  );
}

export default Exemplo;
