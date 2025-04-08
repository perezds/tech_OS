import { useState } from 'react';
import './modal.css';

const ModalCadastro = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Cadastro</h2>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button>Cadastrar</button>
          <button onClick={onClose}>Fechar</button>
        </div>
      </div>
    );
  };
  
  export default ModalCadastro;
  