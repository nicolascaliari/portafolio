import React from "react";
import '../../style/components/layout/Proyectos.css'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';






const Proyectos = (props) => {
    return (
        <Card className="Card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require(`../../img/img-proy/proy-${props.img}.jpeg`)} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">{props.boton}</Button>
        </Card.Body>
      </Card>
    )
};

export default Proyectos;

