import '../style/components/pages/HomePage.css'
import yo from '../img/yo.jpg';
import html from '../img/html.png';
import css3 from '../img/CSS3.svg.png';
import javascript from '../img/js.svg.png';
import react from '../img/react.png';
import python from '../img/python.png';


const HomePage = (props) => {
  return (
    <div className="contenedor-about">
      <h2 >¡Un placer conocerte!</h2>

      <div className="div-about">
        <div className='div-about-p'>
          <p>
            Hola! Me llamo Nicolas Caliari, naci en Argentina Buenos Aires. Soy
            desarrollador web full stack con react js en la universidad
            tecnologica de Buenso Aires (UTN), tambien hice un curso de developer

          </p>
        </div>


        <div className='contenedor-img'>
          <img className='fotoMia' src={yo} />

        </div>

      </div>



      <div className="div-estudios">
        <div className='misEstudios'>
          <h3>Mis estudios</h3>
        </div>


        <div className='contenedor-p-estudios'>
          <p>
            Soy desarrollador web full stack con REACT JS, estudie en el instituto
            tecnologico de Buenos Aires (ITBA) developer web gracias a una beca y
            tambien soy estudiante de la universidad tecnologica de Buenos Aires
            (UTN) de la carrera analista en sistemas. Estudie mecanica automotriz

          </p>
        </div>
      </div>

      <div className='contenedor-skills'>
        <img src={html} alt="" />
        <img src={css3} alt="" />
        <img src={javascript} alt="" />
        <img src={react} alt="" />
        <img src={python} alt="" />
      </div>

    </div>
  )
}

export default HomePage;