import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import './App.css';

// Páginas simuladas
const Home = () => <h2 className="content">Bem-vindo ao Sistema TechEdu</h2>;
const Ordens = () => <h2 className="content">Lista de Ordens de Serviço</h2>;
const SignIn = () => <h2 className="content">Página de Login</h2>;
const SignUp = () => <h2 className="content">Página de Cadastro</h2>;

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ordens" element={<Ordens />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
