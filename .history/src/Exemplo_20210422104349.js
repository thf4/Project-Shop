import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const firstItem = {

  img:"https://73c166dfsi.execute-api.us-east-1.amazonaws.com/prod/thumborVerify?w=237&h=237&u=https%3A%2F%2Fduisktnou8b89.cloudfront.net%2Fimg%2Fitems%2F6022bb971f350.png&o=",
  title:"Agrião (Maço)",
  text: "Tamanhos variados entre 25 à 29 cm ",
  value: "R$ 2,09"
  
}


const Example = (props) => {

  const {img, title, text, value} = props;
  
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={img.firstItem} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{title.firstItem}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{value.firstItem}</CardSubtitle>
          <CardText>{text.firstItem}</CardText>
          <Button>Adicionar</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;