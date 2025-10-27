// src/components/SideNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom'; // Importa NavLink

function SideNav() {
  return (
    <aside className="side-navigation">
      <nav>
        <ul>
          {/* Cambiamos <a> por NavLink y href por to */}
          <li><NavLink to="/">INICIO</NavLink></li>
          <li><NavLink to="/About">ACERCA DEL EVENTO</NavLink></li>
          <li><NavLink to="/registro">REGISTRO</NavLink></li>
          {/* Asegúrate de que la ruta 'to' coincida con la que definiste en App.jsx */}
          <li><NavLink to="/conferencistas">CONFERENCISTAS</NavLink></li>
          <li><NavLink to="/programa">PROGRAMA</NavLink></li>
          <li><NavLink to="/hospedaje">HOSPEDAJE</NavLink></li>
          <li><NavLink to="/costos">COSTOS</NavLink></li>
          <li><NavLink to="/patrocinadores">PATROCINADORES</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideNav;