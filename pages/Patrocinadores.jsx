// src/pages/Patrocinadores.jsx
import React from 'react';
import './Patrocinadores.css'; // Importa el CSS

function Patrocinadores() {
  // Lista de patrocinadores por nivel
  const patrocinadoresPrincipales = [
    { name: 'CICESE', logoUrl: '/logos/cicese.png' },
    { name: 'Google', logoUrl: '/logos/Google_DeepMind_Logo.png' },
    { name: 'EMBL', logoUrl: '/logos/Ebi_official_logo.png' },
    { name: 'Bourbaki', logoUrl: '/logos/bourbaki.png' },
  ];

  const colaboradores = [
    { name: 'RMB', logoUrl: '/logos/rmb.png' },
    { name: 'RMB', logoUrl: '/logos/Iner.jpeg' },
    { name: 'Sci Art Studio', logoUrl: '/logos/Sciart.jpg' },
  ];

  return (
    <main className="main-content">

      {/* Sección de Patrocinadores Principales */}
      <h3 className="sponsor-level-title">Patrocinadores Principales</h3>
      <div className="logo-grid">
        {patrocinadoresPrincipales.map(sponsor => (
          <div key={sponsor.name} className="logo-item">
            <img src={sponsor.logoUrl} alt={`Logo de ${sponsor.name}`} />
          </div>
        ))}
      </div>

      {/* Sección de Colaboradores */}
      <h3 className="sponsor-level-title">Colaboradores</h3>
      <div className="logo-grid">
        {colaboradores.map(sponsor => (
          <div key={sponsor.name} className="logo-item">
            <img src={sponsor.logoUrl} alt={`Logo de ${sponsor.name}`} />
          </div>
        ))}
      </div>

    </main>
  );
}

export default Patrocinadores;
