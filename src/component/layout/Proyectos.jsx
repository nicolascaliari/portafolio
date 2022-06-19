import React from "react";
import '../../style/components/layout/Proyectos.css'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



const Proyectos = (props) => {
    return (
        <div className="contenedor-card">

            <Card className="Card">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    {props.text}
                    </Card.Text>
                    <Button className="boton-card" size="sm">{props.boton}</Button>
                </Card.Body>
            </Card>
        </div>
    )
};

export default Proyectos;

