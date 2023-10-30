import { Link } from "react-router-dom";
import './header.css';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <div className="logo">
            <img src={require('../assets/images/logo_pizzaria.jpg')}></img>
        </div>
        
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ms-md-auto justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <strong>Página Inicial</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cardapio" className="nav-link">
                <strong>Cardápio</strong>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}