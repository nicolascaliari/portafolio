import React from "react";
import '../../style/components/layout/Card.css'
import '../../App.css'







function Card(props) {
  return (

    <div className="container__cards">
      <div className="card">
        <div className="cover__card">
          <img src={require(`../../img/img-proy/proy-${props.img}.jpeg`)}  alt="imagen de los proyectos" />
        </div>
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
        
          <div className="footer__card">
            <h3 className="user__name">Mamie Barnett</h3>
          </div>
      </div>
    </div>
  );
}



export default Card;




