import React from "react";
import '../../style/components/layout/Proyectos.css'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Example from './Modal'






const Proyectos = (props) => {
    return (
        <Card className="Card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require(`../../img/img-proy/proy-${props.img}.jpeg`)} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
        {props.text}
          </Card.Text>
          <Button variant="primary"> <Example /></Button>
        </Card.Body>
      </Card>
      
    )
};

export default Proyectos;

