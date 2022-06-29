import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faSun} from '@fortawesome/free-solid-svg-icons'





import './App.css'
import Header from './component/layout/Header';
import Presentacion from './component/layout/Presentacion';
import Footer from './component/layout/Footer';







import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';




function App() {

  return (

    <div className="App">



      <BrowserRouter >
        <Header />

        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() =>
            document.querySelector("body").classList.toggle("darkmode")


          } /> 

        </div>


        <Presentacion
          text=' FULL STACK  DEVELOPER '>

        </Presentacion>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='ContactPage' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}




export default App;
