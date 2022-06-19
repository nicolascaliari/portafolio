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
text = ''
boton = 'ver detalle'
/>

<Proyectos 
title = 'GYM'
boton = 'vsssss'
/>
<Proyectos 
title = 'Restaurant'
boton ='ver detalle'
/>
<Proyectos 
title = 'homebanking'
boton = 'ver detalle'
/>
<Proyectos 
title = 'disney'
boton = 'ver detalle'
/>
<Proyectos 
title = 'pomodoro'
boton ='ver detalle'
/>

</div>
<Footer />
    </div>
  );
}

export default App;
