import React from "react";
import "../Contact.css"; 

export function Contact() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2>Kontakta oss</h2>
          <p>
            Har du frågor eller vill du boka ett bord? Fyll i formuläret nedan så
            återkommer vi inom 24 timmar.
          </p>

          <form className="contact-form" method="POST" action="https://formshow.systementor.se/">
            <div className="form-group">
              <label htmlFor="name">Namn</label>
              <input
                id="name"
                type="text"
                placeholder="Ditt namn"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-post</label>
              <input
                id="email"
                type="email"
                placeholder="din@email.se"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Meddelande</label>
              <textarea
                id="message"
                placeholder="Skriv ditt meddelande här..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Skicka meddelande
            </button>
          </form>

          <div className="contact-info">
            <p>📧 info@grönagaffeln.se</p>
            <p>📞 070-123 45 67</p>
          </div>
        </div>
      </section>
    </>
  );
}
