import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} TechEdu. Todos os direitos reservados.</p>
      <div className="footer-links">
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
        <a href="/politica">Política de Privacidade</a>
      </div>
    </footer>
  );
};

export default Footer;
