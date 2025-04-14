import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./cadastro.css";
import { FaUser } from "react-icons/fa";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function Cadastro() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const cadastrar = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    
    const userData = {
      username,
      email,
      password,
    };
  
    console.log("Enviando dados de cadastro:", userData);
  
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/create-user/", userData);
      console.log("Usuário cadastrado:", response.data);
      navigate("/signin");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };


  return (
    <div>
      <Header />

      <div className="signup-container">
        <div className="signup-box">
          <div className="icon-top">
            <FaUser />
          </div>
          <h2>Crie sua conta</h2>
          <form onSubmit={cadastrar}>
            <input
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

