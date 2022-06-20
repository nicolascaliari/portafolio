import { BrowserRouter, Routes, Route } from 'react-router-dom';



import './App.css';
import Header from './component/layout/Header';
import Presentacion from './component/layout/Presentacion';
import Proyectos from './component/layout/Proyectos';
import Footer from './component/layout/Footer'





import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';


function App() {
  return (

    <div className="App">

      <Presentacion
        text=' FULL STACK  DEVELOPER '>

      </Presentacion>
     

      <BrowserRouter >
        <Header />
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='ContactPage' element={<ContactPage />} />

        </Routes>
      </BrowserRouter>

      <h2 className='proyectos-titulo'>Proyectos</h2>
<div className='contenedor-proyectos'>  
<Proyectos
title = 'fidelityCode'
boton = 'ver detalle'
img = 'fidelity'
/>
<Proyectos
title = 'Homebanking'
boton = 'ver detalle'
img = 'home'
/>
<Proyectos
title = 'Gimnasio'
boton = 'ver detalle'
img = 'gym'
/>
<Proyectos
title = 'Pomodoro'
boton = 'ver detalle'
img = 'gym'
/>
<Proyectos
title = 'Dsiney'
boton = 'ver detalle'
img = 'gym'
/>
<Proyectos
title = 'Emprendimiento'
boton = 'ver detalle'
img = 'emprendimiento'
/>




</div>
<Footer />
    </div>
  );
}

export default App;
