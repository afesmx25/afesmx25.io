// src/pages/Home.jsx
import React from 'react';
import Countdown from '../components/Countdown';

function Home() {
  return (
    <main className="main-content">
      <h2>BIENVENIDOS</h2>
      <p>
      AlphaFold Education Summit México 2025 (AFESMX25) se llevará acabo en Ensenada Baja California del 1 al 3 de Diciembre, 2025.
      </p>
      
      <h3><strong>Organizadores:</strong></h3>

      Yalbi Balderas-Martínez, INER <br/>
      Paulyna Magaña-Gómez, EMBL-EBI <br/>
      Alexei Licea-Navarro, CICESE <br/>
      Ricardo Gómez-Reyes, CICESE <br/> 

       <p>¡La inscripción está ABIERTA!</p>  




       <p>Para dudas y comentarios, únete al grupo AFESMX25 en  <a href="https://chat.whatsapp.com/ICVyiewyhL36Z4SlmdwQRb?mode=wwc" target="_blank" rel="noopener noreferrer"> whatsapp</a>, o siguenos en redes sociales </p> 

      <Countdown targetDate="2025-12-01T00:00:00" />
    </main>
  );
}

export default Home;