import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";

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
import Login from './components/Login';
import Miproyecto from './components/Miproyecto';
import Miconfiguracion from './components/Miconfiguracion';
import RecuperarC from './components/RecuperarC';

// import ogImage from './images/Logo_soloverde.png'

function App() {
  const [user, setUser] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const dynamicImage = ogImage;
  // document.querySelector('meta[name="twitter:image"]').setAttribute('content', dynamicImage);
  return (
    <Router>
      <Subheader user={user}  setUser={setUser}/>
      <Header />

      <Routes>

        <Route path="" element={
          <>
            <Carousel />
          </>
        } />

        <Route path="/registrarse" element={<Registro />} />

        <Route path="/miproyecto" element={<Miproyecto />} />

        <Route path="/miconfiguracion" element={<Miconfiguracion user={user}/>} />

        <Route path="/login" element={<Login setUser={setUser} />} />

        <Route path="/servicios" element={<Servicios />} />

        <Route path="/recuperar_pwd" element={<RecuperarC />} />

        <Route path="/testimonios" element={<Testimonios />} />

        <Route path="/ingresosextra" element={<Ingresos />} />

        <Route path="/investigacionsostenible" element={<Investigacion />} />

        <Route path="/emprendimientojoven" element={<Emprendimiento />} />

        <Route path="/contactanos" element={<Contacto />} />

        <Route path="/nosotros" element={<Nosotros />} />

      </Routes>

      <Footer />
      <a href="https://walink.co/4d2ac9" target="_blank" rel="noreferrer">
        <img src={require('../src/images/LogoRedesSociales/Whatsapp.png')} alt='Whatsapp' height={'80px'} width={'80x'} className="whatsapp-icon" />
      </a>
    </Router>
  );

}

export default App;