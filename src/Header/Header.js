
import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header className="app-header">
      <nav className="navbar-container p-3">
        <NavLink to="/" className="logo">
          <h3>Energytic <em>AI</em></h3>
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end className="nav-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className="nav-item">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="nav-item btn-link">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


