// src/components/AccordionItem.jsx
import React, { useState } from 'react';

// Este componente recibe un 'title' y el contenido se pasa como 'children'
function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button className="accordion-header" onClick={toggleAccordion}>
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon">
          {/* Este es un icono de chevron (>) que rotará */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      <div className="accordion-content">
        <div className="accordion-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;