import { BrowserRouter, Routes, Route } from 'react-router-dom';







import './App.css';
import Header from './component/layout/Header';
import Presentacion from './component/layout/Presentacion';
import Proyectos from './component/layout/Proyectos';
import Footer from './component/layout/Footer';







import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';




function App() {

  return (

    <div className="App">


      <Header />

      
      <Presentacion
        text=' FULL STACK  DEVELOPER '>

      </Presentacion>

      {/*  
      <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() =>
                (document.querySelector("body").style.background = "#3D3D3D")
                 (refLetra.current.style.color = "#fff")
                 (refFooter.current.style.color = "#fff")
                 
            } />
            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div> */}

      <BrowserRouter >

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='ContactPage' element={<ContactPage />} />

        </Routes>
      </BrowserRouter>

      <h2 className='proyectos-titulo'>Proyectos</h2>
      <div className='contenedor-proyectos'>
        <Proyectos
          title='fidelityCode'
          text='Hola esta es una pagina de fidelityCode'
          boton='ver detalle'
          img='fidelity'

        />
        <Proyectos
          title='Homebanking'
          text='Hola esta es una pagina de un HomeBnaking'
          boton='ver detalle'
          img='home'
        />
        <Proyectos
          title='Gimnasio'
          text='Hola esta es una pagino de un gimnasio'
          boton='ver detalle'
          img='gym'
        />
        <Proyectos
          title='Pomodoro'
          text='Hola esta es una pagina de proyecto pomodoro'
          boton='ver detalle'
          img='gym'
        />
        <Proyectos
          title='Dsiney'
          text='Hola esta es una pagina de proyecto disney'
          boton='ver detalle'
          img='gym'
        />
        <Proyectos
          title='Emprendimiento'
          text='Hola esta es una pagina de emprendimiento'
          boton='ver detalle'
          img='emprendimiento'
        />
      </div>


      <Footer />
    </div>
  );
}




export default App;
