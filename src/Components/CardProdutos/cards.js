import React from "react";
import { cardProduto } from "./cardProdutos";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
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
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={img} alt={alt}/>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" >{value}</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Adicionar</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={img} alt={alt}/>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" >{value}</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Adicionar</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={img} alt={alt}/>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6">{value}</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Adicionar</Button>
        </CardBody>
      </Card>
    </CardDeck>
    </li>
  );
};

export default CardProduct;
