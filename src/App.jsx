// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa tus componentes de diseño
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';

// Importa tus nuevas páginas
import Home from './pages/Home';
import Registro from './pages/Registro';
import Conferencistas from './pages/Conferencistas';
import Programa from './pages/Programa';
import Patrocinadores from './pages/Patrocinadores';
import About from './pages/About';
import Hospedaje from './pages/Hospedaje';
import Costos from './pages/Costos'; // Importa la nueva página


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="page-body">
        <SideNav />
        <Routes> {/* Aquí es donde el contenido cambiará */}
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/conferencistas" element={<Conferencistas />} />
          <Route path="/programa" element={<Programa />} />
          <Route path="/patrocinadores" element={<Patrocinadores />} />
          <Route path="/about" element={<About />} />
          <Route path="/hospedaje" element={<Hospedaje />} />
          <Route path="/costos" element={<Costos />} /> {/* Añade la nueva ruta */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
