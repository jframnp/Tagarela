import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Contato from './Contato';
import AreaDoUsuario from './AreaDoUsuario';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <nav>
            <ul className="navbar-lista">
              <li><Link to="/">Sobre Nós</Link></li>
              <li><Link to="/contatos">Contatos</Link></li>
              <li><Link to="/area-do-usuario">Área do Usuário</Link></li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            
            <Route path="/contatos" element={<Contato />} />
            
            
            <Route path="/area-do-usuario" element={<AreaDoUsuario />} />
            
            
            <Route path="/" element={
              <section className="destaque">
                
                <img src="/tagarela.png" alt="Tagarela" className="sobre-nos-image" />
                <h2 className="section-titulo">OBJETIVOS</h2>
                <div className="objectives-grid">
                  <img src="/card-amarelo.png" alt="Card Promover a Inclusão" className="card-image" />
                  <img src="/card-azul.png" alt="Card Atender Necessidades" className="card-image" />
                  <img src="/card-verde.png" alt="Card Desenvolvimento" className="card-image" />
                  <img src="/card-vermelho.png" alt="Card Parceria com as Escolas" className="card-image" />
                </div>
              </section>
            } />
          </Routes>
        </main>

        <footer className="footer">
          <div className="contato-info">
            <p>Entre em contato</p>
            <p>(XX) XXXX-XXXX</p>
            <p>(XX) XXXX-XXXX</p>
            <p>suporte@tagarela.org</p>
          </div>
          <div className="rede-social">
            <a href="#"><img src="whatsapp.png" alt="WhatsApp" /></a>
            <a href="#"><img src="facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="youtube.png" alt="YouTube" /></a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
