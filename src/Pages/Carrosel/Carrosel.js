import { UncontrolledCarousel } from "reactstrap";
import { items } from "./carroselImagens";
import "./Carrosel.css";

const Carrosel = () => {
  return (
    <div id="carrosel">
      <UncontrolledCarousel items={items} />
    </div>
  );
};

export default Carrosel;
