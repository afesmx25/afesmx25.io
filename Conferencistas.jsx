// src/pages/Conferencistas.jsx
import React from 'react';
import SpeakerCard from '../components/SpeakerCard'; // Importamos el componente SpeakerCard
import '../components/SpeakerCard.css'; // Importamos el CSS para las tarjetas

function Conferencistas() {
  // Datos reales de los conferencistas
  const conferencistasData = [
    {
      id: 1,
      name: 'Dr. Enrique Rudiño Piñera',
      affiliation: 'Instituto de Biotecnología, UNAM',
      imageUrl: '/Conferencistas/enriqueRudino.jpeg'
    },
    {
      id: 2,
      name: 'Dr. Alvaro De Obeso-Fernández del Valle',
      affiliation: 'Tecnológico de Monterrey',
      imageUrl: '/Conferencistas/alvaroDeobeso.jpeg' 
    },
    {
      id: 3,
      name: 'Mtro. Joaquin López Carrillo',
      affiliation: 'Centro de Investigación Científica y de Educación Superior (CICESE)',
      imageUrl: '/Conferencistas/JoaquinLopez.jpg'
    },
    {
      id: 4,
      name: 'Dr. Carlos Alfonso Ruiz Guido',
      affiliation: 'Colegio Bourbaki',
      imageUrl: '/Conferencistas/alfonso_ruiz.jpeg'
    },
    {
      id: 5,
      name: 'Mtra. Blanca Valdovino Navarro',
      affiliation: 'Centro de Investigación Científica y de Educación Superior (CICESE)',
      imageUrl: '/Conferencistas/BlancaValdovino.jpeg'
    },
    {
      id: 6,
      name: 'Dr. Jose Molina Mora',
      affiliation: 'Universidad de Costa Rica, San Pedro, San José',
      imageUrl: '/Conferencistas/JoseMolina.jpg'
    },
    {
      id: 7,
      name: 'Dr. Oleg Jovalenskiy',
      affiliation: 'Google DeepMind',
      imageUrl: '/Conferencistas/oleg.jpeg'
    },
    {
      id: 8,
      name: 'Mtro. Luis Meza Cova',
      affiliation: 'Instituto Nacional de Enfermedades Respiratorias (INER)',
      imageUrl: '/Conferencistas/Luis.jpeg'
    },
    {
      id: 9,
      name: 'Dr. Jahaziel Gasperin Bulbare',
      affiliation: 'Centro de Investigación Científica y de Educación Superior (CICESE)',
      imageUrl: '/Conferencistas/JahazielGasperin.jpg'
    },
    {
      id: 10,
      name: 'Dra. Susana Vázquez Torres',
      affiliation: 'Centro Nacional de Investigaciones Oncológicas (CNIO), España',
      imageUrl: '/Conferencistas/SusanaVazquez.jpeg'
    },
    {
      id: 11,
      name: 'Dr. Carlos Alberto Brizuela Rodríguez',
      affiliation: 'Centro de Investigación Científica y de Educación Superior',
      imageUrl: '/Conferencistas/CarlosBrizuela.jpeg'
    },
    {
      id: 12,
      name: 'Dra. Paulyna Magaña Gomez',
      affiliation: 'European Bioinformatics Institute (EMBL-EBI)',
      imageUrl: '/Conferencistas/PaulynaMagana.jpeg'
    }
  ];

  // Datos del comité organizador
  const staffData = [
    {
      id: 1,
      name: 'Dra. Yalbi Balderas Martinez',
      affiliation: 'Instituto Nacional de Enfermedades Respiratorias (INER)',
      imageUrl: '/Conferencistas/YalbiBalderas.jpeg'
    },
    {
      id: 2,
      name: 'Dr. Alexei Licea Navarro',
      affiliation: 'Centro de Investigación Científica y de Educación Superior (CICESE)',
      imageUrl: '/Conferencistas/AlexeiLicea.jpg'
    },
    {
      id: 3,
      name: 'Dr. Ricardo Gómez Reyes',
      affiliation: 'Centro de Investigación Científica y de Educación Superior',
      imageUrl: '/Conferencistas/RicardoGomez.png'
    },
    {
      id: 4,
      name: 'Dra. Maria Teresa Ortiz Melo',
      affiliation: 'Facultad de Estudios Superiores Iztacalaca, UNAM',
      imageUrl: '/Conferencistas/Teresa.png'
    },
    {
      id: 5,
      name: 'Mauricio Guzman Araiza',
      affiliation: 'Nodo Nacional de Bioinformática (NNB-CCG)',
      imageUrl: '/Conferencistas/Mauricio.png'
    },
    {
      id: 6,
      name: 'Mtro. Fernado Díaz Castillo',
      affiliation: 'Centro de Investigación Científica y de Educación Superior (CICESE)',
      imageUrl: '/Conferencistas/Fernando.jpeg'
    }
  ];

  return (
    <main className="main-content">
      <h2 className="section-title">Conferencistas</h2>
      <div className="speakers-grid">
        {conferencistasData.map(speaker => (
          <SpeakerCard 
            key={speaker.id}
            name={speaker.name}
            affiliation={speaker.affiliation}
            imageUrl={speaker.imageUrl}
          />
        ))}
      </div>

      <h2 className="section-title">Comité Organizador / Staff</h2>
      <div className="speakers-grid">
        {staffData.map(member => (
          <SpeakerCard 
            key={member.id}
            name={member.name}
            affiliation={member.affiliation}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}

export default Conferencistas;
