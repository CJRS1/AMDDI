import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Testimonios from './components/Testimonios';
import Servicios from './components/Servicios';

function App() {

  return (
    <Router>
      
      <Header />

      <Routes>

        <Route path="/" element={
          <>
            <Carousel />
            <Servicios />  
          </>
        } />

        <Route path="/servicios" element={<Servicios />} />
        
        <Route path="/testimonios" element={<Testimonios />} />
        
        <Route path="/contactanos" element={<Contacto />} />
        
        <Route path="/nosotros" element={<Nosotros />} />

      </Routes>

      <Footer />

    </Router>
  );

}

export default App;