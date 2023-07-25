import './App.css';
import Header from './components/Header' 
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Contacto from './components/Contacto'

function App() {
  return (
    <div className='div-principal'>
      <Header />
      <Carousel />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
