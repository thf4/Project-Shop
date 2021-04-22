import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const firstItem = {
  img:"https://73c166dfsi.execute-api.us-east-1.amazonaws.com/prod/thumborVerify?w=237&h=237&u=https%3A%2F%2Fduisktnou8b89.cloudfront.net%2Fimg%2Fitems%2F6022bb971f350.png&o=",
  title:"Agrião (Maço)",
  text: "Tamanhos variados entre: 25 à 29 cm Peso unitário: 250 à 300 gramas Atenção: Os produtos podem variar de tamanho e peso dependendo da colheita.”
  
  
}


const Example = (props) => {

  const {img, title, text, value} = props;
  
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{value}</CardSubtitle>
          <CardText>{text}</CardText>
          <Button>Adicionar</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;