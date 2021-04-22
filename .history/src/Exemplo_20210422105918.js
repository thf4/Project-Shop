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
const Product = (props)=>{

  return(
    <article>
      <img src={props.img} alt=""/>
      <h1>{props.title}</h1>
      <h4>{props.text}</h4>
      <h5>{props.value}</h5>
    </article>
  )
}


const Example = (props) => {

  const {img, title, text, value} = props;
  
  return (
    <div>
      <Card>
        <CardImg/>
        <CardBody>
          <CardTitle tag="h5"><Product
          title={firstItem.title}
       /></CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{value}</CardSubtitle>
          <CardText>{text}</CardText>
          <Button>Adicionar</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;