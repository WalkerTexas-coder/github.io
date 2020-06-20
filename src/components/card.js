
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';



const Example = (props) => {
  const {cardTitle, cardSubtitle, cardText, button, cardImg, linkToProject} = props;

  return (
    <div className="cardWrapper">
    <a className="cards" href={linkToProject} target="_blank">
      <Card >
        <CardImg top className="cardImage" src={cardImg} alt="picture running project" />
        <CardBody>
          <CardTitle>{cardTitle}</CardTitle>
          <CardSubtitle>{cardSubtitle}</CardSubtitle>
          <CardText>{cardText}</CardText>
        </CardBody>
      </Card>
      </a>
    </div>
  );
};

export default Example;
