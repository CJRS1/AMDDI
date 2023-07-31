import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Testimonios from './components/Testimonios';
import Servicios from './components/Servicios';
import Programa from './components/Programa';

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

        <Route path="/AMDDI/programadeingresos" element={<Programa />} />

        <Route path="/AMDDI/contactanos" element={<Contacto />} />

        <Route path="/AMDDI/nosotros" element={<Nosotros />} />

      </Routes>

      <Footer />
      <a href="https://api.whatsapp.com/send?phone=51937965909" target="_blank" rel="noreferrer">
        <img src={require('../src/images/LogoRedesSociales/Whatsapp.png')} alt='Whatsapp' height={'80px'} width={'80x'} className="whatsapp-icon" />
      </a>
    </Router>
  );

}

export default App;