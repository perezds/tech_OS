import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">TechEdu OS</Link>
      </div>

      <nav className="nav-links">
        <Link to="/ordens-servico">Ordens de Serviço</Link>
        <Link to="/patrimonios">Patrimônios</Link>
        <Link to="/ambientes">Ambientes</Link>
        <Link to="/manutentores">Manutentores</Link>
        <Link to="/responsaveis">Responsáveis</Link>
        <Link to="/gestores">Gestores</Link>
      </nav>

      <div className="auth-buttons">
        <Link to="/signin" className="signin">Sign In</Link>
        <Link to="/signup" className="signup">Sign Up</Link>
      </div>
    </header>
  );
}
