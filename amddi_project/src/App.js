import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Testimonios from './components/Testimonios';
import Servicios from './components/Servicios';

function App() {
  return (
    <div className='div-principal'>
      <Header />

      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/">
              <Carousel />
              <Servicios />
            </Route>
            <Route path="/servicios">
              <Servicios />
            </Route>
            <Route path="/testimonios">
              <Testimonios />
            </Route>
            <Route path="/contactanos">
              <Contacto />
            </Route>
            <Route path="/nosotros">
              <Nosotros />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;