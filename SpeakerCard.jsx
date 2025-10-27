// src/components/SpeakerCard.jsx
import React from 'react';

// Este componente recibe 'name', 'affiliation' y 'imageUrl' como props
function SpeakerCard({ name, affiliation, imageUrl }) {
  // Si no hay imagen, usamos un placeholder o simplemente un espacio vacío
  const defaultImageUrl = 'https://via.placeholder.com/100?text=Foto'; // Imagen de placeholder

  return (
    <div className="speaker-card">
      <div className="speaker-image-container">
        <img 
          src={imageUrl || defaultImageUrl} // Usa la imagen pasada o el placeholder
          alt={`Foto de ${name}`} 
          className="speaker-image" 
        />
      </div>
      <div className="speaker-details">
        <h3 className="speaker-name">{name}</h3>
        <p className="speaker-affiliation">{affiliation}</p>
      </div>
    </div>
  );
}

export default SpeakerCard;