import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Testimonios from './components/Testimonios';
import Servicios from './components/Servicios';
import Ingresos from './components/Ingresos';
import Investigacion from './components/Investigacion';
import Emprendimiento from './components/Emprendimiento';
import Subheader from './components/Subheader';
import Registro from './components/Registro';
import Registro2 from './components/Registro2';
import Registro3 from './components/Registro3';
import Login from './components/Login';

function App() {

  return (
    <Router>
      <Subheader />
      <Header />

      <Routes>

        <Route path="/AMDDI" element={
          <>
            <Carousel />
          </>
        } />

        <Route path="/AMDDI/registrarse" element={<Registro />} />

        <Route path="/AMDDI/registrarse-p1" element={<Registro />} />

        <Route path="/AMDDI/registrarse-p2" element={<Registro2 />} />

        <Route path="/AMDDI/registrarse-p3" element={<Registro3 />} />


        <Route path="/AMDDI/login" element={<Login />} />

        <Route path="/AMDDI/servicios" element={<Servicios />} />

        <Route path="/AMDDI/testimonios" element={<Testimonios />} />

        <Route path="/AMDDI/ingresosextra" element={<Ingresos />} />

        <Route path="/AMDDI/investigacionsostenible" element={<Investigacion />} />

        <Route path="/AMDDI/emprendimientojoven" element={<Emprendimiento/>} />

        <Route path="/AMDDI/contactanos" element={<Contacto />} />

        <Route path="/AMDDI/nosotros" element={<Nosotros />} />

      </Routes>

      <Footer />
      <a href="https://walink.co/4d2ac9" target="_blank" rel="noreferrer">
        <img src={require('../src/images/LogoRedesSociales/Whatsapp.png')} alt='Whatsapp' height={'80px'} width={'80x'} className="whatsapp-icon" />
      </a>
    </Router>
  );

}

export default App;