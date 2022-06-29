import React from "react";
import '../../style/components/layout/Proyectos.css'
import { Card } from 'react-bootstrap';







const Proyectos = (props) => {
    return (
        <Card className="Card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require(`../../img/img-proy/proy-${props.img}.jpeg`)} />
        <Card.Body>
          <Card.Title className="title">{props.title}</Card.Title>
          <Card.Text className="text">
        {props.text}
          </Card.Text>
          <div className="contenedor-boton">
            <a href={props.href} className="boton">Ver mas</a>
          </div>
        </Card.Body>
      </Card>
      
    )
};

export default Proyectos;

