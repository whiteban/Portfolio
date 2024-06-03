import React from "react";
import "./navbar.css";
import MLogo from "../assets/Mlogo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src={MLogo} alt="MLogo" className="logo" />
          <ul>
            <li>
              <a className="menu-item" href="#home">
                Accueil
              </a>
            </li>
            <li>
              <a className="menu-item" href="#about">
                À propos
              </a>
            </li>
            <li>
              <a className="menu-item" href="#lab">
                Laboratoire
              </a>
            </li>
            <li>
              <a className="menu-item" href="#"></a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
