
import "./Exemplo.css";

function Exemplo() {
  return (
    <section className="list">
   <Foto />
    </section>
  );
}


 const Foto = () =>{
  return(
    <article>
      <Image />
    </article>
  )
};
const Image = () =>{
  <img src="data:image/jpeg;base64,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" 
  alt=""/>


}

export default Exemplo;

