// src/pages/About.jsx
import React from 'react';
import Collapsible from '../components/Collapsible';

function About() {
  return (
    <main className="main-content">
      <h2>AlphaFold Education Summit México 2025 (AFESMX25)</h2>

      <p>
      El AFESMX25 tiene el objetivo de difundir el uso avanzado de <a href="https://deepmind.google/science/alphafold/" target="_blank" rel="noopener noreferrer">AlphaFold</a>, una herramienta basada en Inteligencia Artificial que predice de la estructura compleja de las proteínas, y que recientemente fue reconocida con el Premio Nobel de Química. <br/>
      </p>

      <Collapsible title="A quién está dirigido">
        <p>
        AFESMX25 está diseñado para personas afines a la biología estructural, incluyendo educadores, investigadores y estudiantes de posgrado del área de la biotecnología, ciencias de la computación, y ciencias de la vida interesados en implementar soluciones bioinformáticas innovadoras que fortalezcan la soberanía científica y tecnológica de su entorno. 
        <br/>
        <br/>
        Nuestra meta es contribuir a la creación de una red de expertos en Latinoamérica y promover la colaboración regional, y democratizar el acceso a AlphaFold. <br/>
        </p>
      </Collapsible>

      <Collapsible title="Lo que aprenderás">
        <ul className="key-points-list">
          <li> Comprender la biología estructural antes y después de AlphaFold, la teoría, historia y arquitectura del modelo. Buscar en bases de datos y visualizar estructuras de proteínas, y ejecutar el flujo de trabajo (pipeline) de AlphaFold/ColabFold.</li>
          <li> Realizar una predicción práctica con AlphaFold 3 / ColabFold y evaluar sus resultados. Entender las limitaciones y mejores prácticas, así como las diferencias entre versiones. Aprenderán a combinar AlphaFold con otros datos biológicos (multi-ómicos) y a simular un proyecto de investigación para planificar y ejecutar análisis en un contexto real. </li>
          <li> Adquirir habilidades básicas de interpretación de resultados, evaluación de confianza y aplicaciones biológicas. Conocer los avances recientes en IA para el descubrimiento y diseño computacional de péptidos en un contexto de estudio. </li>
          <li> Ser equipado con las habilidades y el conocimiento necesarios para convertirse en formadores y capacitar a otras personas con el uso de estas herramientas. </li>
        </ul>
      </Collapsible>

      <Collapsible title="Antecedente">
      <p> 
      AlphaFold ha revolucionado la biología estructural al predecir la estructura tridimensional de proteínas con una precisión sin precedentes. Su impacto fue tan trascendental que el año pasado el Premio Nobel de Química fue otorgado a sus creadores, reconociendo esta innovación como un hito que transforma la investigación en el área bioinformática, transformando el área biomédica, la biotecnología y la educación científica.
      </p>

      <p> 
      El antecedente de este evento es el <a href="https://www.ebi.ac.uk/training/events/alphafold-education-summit-1/" target="_blank" rel="noopener noreferrer">AlphaFold Education Summit 2025</a>, celebrado del 14 al 16 de enero del presente año en Hinxton, Reino Unido. Esta iniciativa internacional se diseñó para que investigadores y educadores de todo el mundo puedan aprovechar el potencial transformador de AlphaFold, integrándose tanto en la investigación como en la enseñanza. 
      </p>
      </Collapsible>
    </main>
  );
}

export default About;
