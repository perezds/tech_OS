import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const logar = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/token/',
        { username: user, password }
      );
      localStorage.setItem('token', response.data.access);
      navigate('/home');
    } catch (error) {
      console.error(error);
      alert("Usuário ou senha inválidos");
    }
  };

  return (
    <div className="login-page">
      <Header />

      <div className="login-card">
        <FaUser className="login-icon" />
        <h2 className="login-title">Entrar no TechEdu OS</h2>

        <input
          className="login-input"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Usuário"
        />

        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />

        <button className="login-btn" onClick={logar}>
          Entrar
        </button>
      </div>

      <Footer />
    </div>
  );
}
