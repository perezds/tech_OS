import { useState } from 'react';
import './modal.css';

const ModalLogin = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default ModalLogin;