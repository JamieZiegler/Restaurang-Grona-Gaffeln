import React from "react";
import "../Header.css";
import logo from "../assets/logo-transparent.png"; // använd din logga

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logga och namn */}
        <a href="#" className="logo-area">
          <img src={logo} alt="Gröna Gaffeln logga" className="logo-img" />
        </a>

        {/* Navigation */}
        <nav className="nav">
          <a href="#" className="nav-link">Hem</a>
          <a href="#" className="nav-link">Om oss</a>
          <a href="#" className="nav-link">Meny</a>
          <a href="#" className="nav-link">Kontakt</a>
        </nav>

        {/* Valfri call-to-action */}
        <a href="#" className="cta-button">Boka bord</a>
      </div>
    </header>
  );
}
