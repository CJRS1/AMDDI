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

function App() {

  return (
    <Router>

      <Header />

      <Routes>

        <Route path="/AMDDI" element={
          <>
            <Carousel />
          </>
        } />

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