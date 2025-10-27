// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="hero-banner">
      <img 
        src="/banner_arriba.jpeg" 
        // Actualizamos el 'alt' para describir mejor la imagen
        alt="Banner oficial del AlphaFold Education Summit México 2025" 
        className="hero-banner-image"
      />
    </header>
  );
}

export default Header;