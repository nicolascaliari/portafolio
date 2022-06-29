import '../style/components/pages/HomePage.css'
import Proyectos from '../component/layout/Proyectos';



import yo from '../img/yo.jpg';
import html from '../img/html.png';
import css3 from '../img/CSS3.svg.png';
import javascript from '../img/js.svg.png';
import react from '../img/react.png';
import python from '../img/py.png';
import sass from '../img/sass.png';
import vs from '../img/vs.png';
import bs from '../img/bs.png';
import git from '../img/git.png';
import sql from '../img/sql.png';
import node from '../img/node.png';

const HomePage = (props) => {

  return (
   <div> 
    
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
          <img className='fotoMia' src={yo} alt='imagen mia'/>

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
        <img src={html} alt="foto de html" />
        <img src={css3} alt="foto de css" />
        <img src={javascript} alt="foto javascript" />
        <img src={react} alt="foto react" />
        <img src={python} alt="foto python" />
        <img src={sass} alt="foto sass" /> 
        <img src={bs} alt="foto bs" />
        <img src={git} alt="foto git" />
        <img src={vs} alt="foto vs" />
        <img src={node} alt="foto node" />
        <img src={sql} alt="foto sql" />
      </div>

    </div>

<div>
  <h2 className='proyectos-titulo'>Proyectos</h2>
      <div className='contenedor-proyectos'>
        <Proyectos
          title='fidelityCode'
          text='Hola esta es una pagina de fidelityCode'
          boton='ver detalle'
          img='fidelity'
          href = "https://fidelitycode.org/"

        />
        <Proyectos
          title='Homebanking'
          text='Hola esta es una pagina de un HomeBnaking'
          boton='ver detalle'
          img='home'
          href ="https://github.com/rostrofioriloabril/HomeBanking"
        />
        <Proyectos
          title='Gimnasio'
          text='Hola esta es una pagino de un gimnasio'
          boton='ver detalle'
          img='gym'
          href ="https://fidelitycode-gym.netlify.app/"
        />
        <Proyectos
          title='Pomodoro'
          text='Hola esta es una pagina de proyecto pomodoro'
          boton='ver detalle'
          img='gym'
          href ="https://github.com/nicolascaliari/pomodoro"
        />
        <Proyectos
          title='Disney'
          text='Hola esta es una pagina de proyecto disney'
          boton='ver detalle'
          img='gym'
          href =""
        />
        <Proyectos
          title='Emprendimiento'
          text='Hola esta es una pagina de emprendimiento'
          boton='ver detalle'
          img='emprendimiento'
          href = ""
        />
      </div>

</div>

    
    </div>
  )
}

export default HomePage;