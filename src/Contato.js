import React from 'react';
import './Contato.css'; 
function Contato() {
  return (
    <div className="contato-section">
      <h2 className="section-title">ENTRE EM CONTATO</h2>
      <div className="contato-container">
        <div className="contato-info">
          <p><strong>Telefones:</strong></p>
          <p>(XX) XXXX-XXXX</p>
          <p>(XX) XXXX-XXXX</p>
          <p><strong>E-mail:</strong></p>
          <p>suporte@tagarela.org</p>
        </div>
        <div className="social-media-info">
          <p><strong>Redes sociais:</strong></p>
          <div className="social-media-icons">
            <a href="#"><img src="/whatsapp.png" alt="WhatsApp" /></a>
            <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="/youtube.png" alt="YouTube" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
