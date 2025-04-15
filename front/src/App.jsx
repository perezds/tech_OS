import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.css';
import Login from './pages/login/login';
import Cadastro from './pages/cadastro/cadastro';
import Patrimonios from './pages/patrimonio/patrimonio';
import Responsaveis from './pages/responsaveis';


const Home = () => <h2 className="content">Bem-vindo ao Sistema TechEdu</h2>;
const Ordens = () => <h2 className="content">Lista de Ordens de Serviço</h2>;
const SignUp = () => <h2 className="content">Página de Cadastro</h2>;


function LayoutWrapper() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <div>
      {!hideHeaderFooter && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ordens" element={<Ordens />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Cadastro />} />
          <Route path="/patrimonios" element={<Patrimonios/>} />
          <Route path="/responsaveis" element={<Responsaveis/>} />
          
        </Routes>
      </main>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}



