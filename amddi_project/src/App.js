import './App.css';
import Header from './components/Header' 
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Contacto from './components/Contacto'
import Nosotros from './components/Nosotros';

function App() {
  return (
    <div className='div-principal'>
      <Header />
      <Carousel />
      <Nosotros />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
