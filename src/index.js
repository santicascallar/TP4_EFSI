import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import Footer from './components/Footer';
import inscripcion from './inscipcion.jpeg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Carousel />
    <Cards 
          titulo="Inscripción ciclo lectivo 2021 - Nivel Secundario"
          texto="Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo
          2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"
          img= {inscripcion}
    />
    <Footer />
  </React.StrictMode>
);
