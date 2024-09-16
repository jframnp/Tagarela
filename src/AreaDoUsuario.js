import React, { useState } from 'react';
import './AreaDoUsuario.css';

function AreaDoUsuario() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
  };

  return (
    <div className="area-usuario-section">
      <h2 className="section-title">OLÁ!</h2>
      <p className="section-subtitle">FAÇA O SEU LOGIN PARA TER ACESSO À PLATAFORMA</p>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="login-input"
        />
        <a href="#" className="forgot-password">Esqueceu sua senha?</a>
        <button type="submit" className="login-button">Entrar</button>
        <p>Ainda não possui uma conta? <a href="#">Cadastre-se agora</a></p>
        <div className="login-alternatives">
          <button className="login-google">Entrar com Google</button>
          <button className="login-microsoft">Entrar com Microsoft</button>
        </div>
      </form>
    </div>
  );
}

export default AreaDoUsuario;
