import React from "react";
import "../footer.css";
import logo from "../assets/logo-transparent.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logga och beskrivning */}
        <div className="footer-logo">
          <img src={logo} alt="Gröna Gaffeln logga" />
          <p>Grön mat med smak av lyx – tillagad med omtanke.</p>
        </div>

        {/* Sociala medier */}
        <div className="footer-links">
          <h4>Följ oss</h4>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">TikTok</a>
            <a href="#">Facebook</a>
          </div>
        </div>

        {/* Kontaktinformation */}
        <div className="footer-contact">
          <h4>Kontakt</h4>
          <p>📍 Matgatan 2, 123 45 Matholm</p>
          <p>📞 012-345 67 89</p>
          <p>📧 info@gronagaffeln.se</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Gröna Gaffeln. Alla rättigheter reserverade.</p>
      </div>
    </footer>
  );
}
