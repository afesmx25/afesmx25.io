// src/pages/Hospedaje.jsx
import React from 'react';
import Collapsible from '../components/Collapsible'; 

function Hospedaje() {
  return (
    <main className="main-content">
      <h2 className="section-title">Hospedaje y Logística</h2>
      
      <div className="accordion-container">
        <Collapsible title="Acerca de Ensenada">
          <div className="image-container">
            <img src="/Ensenada.jpg" alt="Vista área de la zona centro de la ciudad de Ensenada" className="collapsible-image" />
            <span className="image-credit">Crédito: Por Soy leo fotografía, CC0, https://commons.wikimedia.org/w/index.php?curid=146227538</span>
          </div>
          <p> 
          Ensenada alberga aproximadamente a 450,000 habitantes. Este encantador destino ofrece un agradable clima mediterráneo estepario. Durante el mes de diciembre, se experimenta la transición entre el otoño, e invierno, el clima se vuelve más fresco, las temperaturas descienden y comienzan a aumentar las posibilidades de lluvia. Ensenada se encuentra a unos 120 kilómetros al sur del cruce fronterizo de San Diego (EE. UU.), una de las fronteras terrestres internacionales más transitadas. La economía de Ensenada combina el abastecimiento de alimentos marinos, la agricultura, el turismo, el transporte marítimo y los sectores científico-tecnológico que complementan las industrias de las Californias. Los vínculos culturales y comerciales de la ciudad con el sur de California fomentan un entorno de colaboración para los negocios, la investigación y la educación
          </p>
        </Collapsible>

        <Collapsible title="Acerca de CICESE">
          <div className="image-container">
            <img src="/CICESE.jpg" alt="Vista panorámica de CICESE" className="collapsible-image" />
            <span className="image-credit">Crédito: Archivo CICESE</span>
          </div>
          <p>
          El Centro de Investigación Científica y de Educación Superior de Ensenada (CICESE) ofrece un entorno ideal para talleres de bioinformática gracias a su liderazgo pionero en esta área desde 2002, con presencia nacional e internacional. Actualmente, cuenta con infraestructura avanzada, personal académico calificado y un entorno colaborativo para la realización de talleres de bioinformática que fomentan el aprendizaje, la creación de redes y la investigación de impacto entre profesionales de las ciencias de la vida, abordando problemas nacionales relevantes, fortaleciendo la transferencia de tecnología y el desarrollo científico aplicado.
          </p>
        </Collapsible>

        <Collapsible title="Información de viaje">
          <p>
          El Aeropuerto Internacional de Tijuana (TIJ) es una de las principales puertas de entrada a Baja California, con una terminal que, aunque concurrida, ofrece una conexión conveniente para quienes viajan a otras ciudades cercanas como Ensenada. Justo al salir de la terminal, los viajeros pueden acceder a una mini-terminal de autobuses, que simplifica enormemente el traslado sin necesidad de tomar un taxi hasta la Central de Autobuses de Tijuana. Para llegar a Ensenada, la opción más directa y popular en transporte público es el servicio de Autobuses ABC, los cuales ofrecen una ruta específica desde el aeropuerto. Al salir de la zona de equipajes, se debe caminar hacia la derecha, pasando por un estacionamiento y unas tiendas de conveniencia, para encontrar la taquilla de ABC donde se pueden adquirir los boletos. Estos autobuses operan con regularidad, aproximadamente cada hora durante el día, con salidas desde las 8:00 a.m. hasta la 1:00 a.m, de lunes a domingo. 
          <br/>
          <br/>
          El viaje, que suele durar alrededor de 1 hora y 50 minutos, ofrece la oportunidad de disfrutar de la carretera escénica que bordea la costa, y el destino final es la Central de Autobuses de Ensenada. Es importante considerar que, aunque es un trayecto directo, la duración puede variar dependiendo del tráfico. Además, mientras que el servicio de autobús es una opción económica y segura, también existe la posibilidad de contratar servicios como Uber, cuya duración promedio es similar, aunque el costo es generalmente más elevado. Finalmente, para una experiencia más fluida, 
          
          se recomienda <a href="https://abc.com.mx/" target="_blank" rel="noopener noreferrer"> revisar</a> los horarios actualizados y adquirir los boletos con cierta anticipación, especialmente en temporadas altas.
          </p>
        </Collapsible>
        
        <Collapsible title="Recomendaciones (equipaje y hospedaje)">
          <p>
          Aproveche al máximo su tiempo en AFESMX25 y reserve una habitación en el <a href="https://www.snhotelcasino.com/?lang=es" target="_blank" rel="noopener noreferrer"> hotel San Nicolas</a>, u habitación en la zona centro de Ensenada  (Nota: Todas las reservas deben incluir, respectivamente la noche y día del 30 de noviembre al 4 de diciembre para cumplir con el mínimo de 3 noches, y 3 días requeridos. 
          <br/>
          <br/> 
        
          Para las temperaturas frescas y las posibles lluvias en Ensenada durante el mes de diciembre, se recomienda vestir en capas (por ejemplo, Usa camisetas de manga larga o blusas ligeras de manga larga, Un suéter o una sudadera son ideales para usar sobre la capa base cuando baje la temperatura, y un abrigo o una chaqueta cortavientos son esenciales para las mañanas y noches frías) para adaptarse a las variaciones del clima. El enfoque debe ser la comodidad y la versatilidad, preparando tu equipaje para la lluvia y el frío          </p>
        </Collapsible>
      </div>
    </main>
  );
}

export default Hospedaje;
