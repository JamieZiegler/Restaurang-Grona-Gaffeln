import React from "react";
import "../review.css";
import gronsaksMan from "../assets/review/grönsaks-man.jpg";

export function Review() {
  return (
    <>
      <section>
        <div className="area-header">
          <h1>Recensioner</h1>
        </div>

        {/* Lägg alla recensioner i en container */}
        <div className="review-list">
          <div className="review-item">
            <img
              src={gronsaksMan}
              alt="Porträtt av grönsaksman"
              className="review-image"
            />
            <h2>“Det var gott!”</h2>
            <i>Jag åt väldigt mycket.</i>
            <div className="stars">★★★★★</div>
            <p className="review-name">Morots-Micke</p>
          </div>

          <div className="review-item">
            <img
              src={gronsaksMan}
              alt="Porträtt av grönsaksman"
              className="review-image"
            />
            <h2>“Fantastisk service!”</h2>
            <i>Personalen var supertrevlig och snabb.</i>
            <div className="stars">★★★★★</div>
            <p className="review-name">Broccoli-Bosse</p>
          </div>

          <div className="review-item">
            <img
              src={gronsaksMan}
              alt="Porträtt av grönsaksman"
              className="review-image"
            />
            <h2>“Jag kommer tillbaka!”</h2>
            <i>En av de bästa måltiderna jag haft!</i>
            <div className="stars">★★★★★</div>
            <p className="review-name">Vitlöks-Viktor</p>
          </div>
        </div>
      </section>
    </>
  );
}
