import { BrowserRouter, Routes, Route } from 'react-router-dom';







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
        <Presentacion
        text=' FULL STACK  DEVELOPER '>

      </Presentacion>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='ContactPage' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>


      

      {/*  
      <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() =>
                (document.querySelector("body").style.background = "#3D3D3D")
                 
                 
            } />
            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div> */}




    


      <Footer />
    </div>
  );
}




export default App;
