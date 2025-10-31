import React from 'react';
import '../home.css';
import sallad from "../assets/about/sallad.svg";


export function Home() {
    return (
        <>
        <section className="hero-section">
            <div className="hero-filter"></div>
            <div className="leaf-overlay-container">
                <div className="leaf-overlay"></div>
            </div>
            <div className="hero-content">
                <div className="welcome-txt">
                    <img className='sallad-img' src={sallad} alt="En fräsch sallad med olika grönsaker" />
                    <h1>Gröna gaffeln</h1>

                    <h2>Hållbarhet med smak av lyx.</h2>

                    <p>På Gröna Gaffeln är hållbarhet och lyx inte är motsatser. Vår passion är att skapa mat som smakar bra i hjärtat och på tallriken.</p>
                    <p>Varje rätt vi serverar är ett steg mot en mer hållbar framtid, där omtanke om naturen och respekt för råvaran går hand i hand med gastronomisk njutning. Vi tror att det går att äta utsökt, vackert och medvetet – utan kompromisser.</p>
                    <p>Hos oss får du uppleva hur grön mat verkligen kan glänsa. En plats där maten tillagas med passion, där varje detalj räknas, och där måltiden blir en stund av både njutning och eftertanke. Vi vill inspirera till ett nytt sätt att se på mat – där lyx handlar om närvaro, smak och kvalitet, inte överflöd.</p>
                    <p>Gröna Gaffeln – hållbarhet med smak av lyx, för alla som vill njuta med gott samvete.</p>

                </div>
                
                <div className="cta">
                    <button className="aboutBtn">Läs mer om oss</button>
                    <button className="ytBtn">Besök vår YouTube</button>
                </div>
            </div>
        </section>
        </>
    );
}
