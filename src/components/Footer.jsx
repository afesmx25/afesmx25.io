// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h2>¿Dudas acerca de AFESMX25? ¡Contáctanos!</h2>
        <div className="contact-details">
          <p>
            <strong>AFESMX25</strong><br/>
            c/o CICESE<br/>
            Ensenada, Baja California, México
          </p>
          <p>
            <strong>Teléfono:</strong> +52 646 175 0500 <br/>
            <strong>Correo:</strong> afesmx25@gmail.com
          </p>
          <p className="copyright">
            AFESMX25 Copyright © 2025 - 2026
          </p>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="social-media-section">
          <h4>Síguenos en nuestras redes</h4>
          <ul className="social-icons-list">
            <li>
              <a href="https://www.facebook.com/share/1B9iSZ4B6b/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://x.com/afesmx25" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/CICESEciencia" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/afesmx25" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/afesmx25" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://chat.whatsapp.com/ICVyiewyhL36Z4SlmdwQRb?mode=wwc" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
