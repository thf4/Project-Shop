import React from "react";
import { CardTitle, CardBody, CardImg, CardText } from "reactstrap";
import { cardProduto } from "./cardProdutos";

import "./CardProduto.css";

const CardProduct = () => {
  return (
    <ul className="wall">
      {cardProduto.map((prod, name) => {
        return <Product key={name} prod={prod}></Product>;
      })}
    </ul>
  );
};

const Product = (props) => {
  const { img, alt, title, value } = props.prod;

  return (
    <li className="cardFlex">
      <CardBody className="card">
        <CardImg className="fotos" src={img} alt={alt} />
        <CardTitle className="titulo"> {title} </CardTitle>
        <CardText className="btns">{value}</CardText>
      </CardBody>
    </li>
  );
};

export default CardProduct;
