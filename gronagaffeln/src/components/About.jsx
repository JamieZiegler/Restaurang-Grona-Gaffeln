import React from "react";
import sallad from "../assets/about/sallad.png";
import '../about.css';

export function About () {

    return (
        <>
            <section id="about-page">
                <div className="about-container">
                    <div className="about-information">            
                        <h1>Hållbarhet i fokus</h1>
                        <h2>Vi är en restaurang med god vegetarisk mat för alla tillfällen!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut eius aliquid consectetur, corrupti architecto ipsum inventore. Molestias nostrum minima nulla quas. Hic numquam eaque in atque consequatur, harum reiciendis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, expedita asperiores. Totam commodi officiis, modi maxime, esse distinctio nisi magni veniam doloremque ex earum, quia error? Rerum assumenda esse labore.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloremque. Repudiandae, voluptatibus? Quod, doloremque. Quasi, doloremque. Repudiandae, voluptatibus? Quod, doloremque.</p>
                    </div>
                    <div className="about-image">
                        <img src={sallad} alt="En fräsch sallad med olika grönsaker" />
                    </div>
                    <div className="cta-about">
                        <button className="aboutBtn">Läs mer om oss</button>
                        <button className="ytBtn">Besök vår YouTube</button>
                    </div>

                    
                </div>
            </section>
        </>
    )
}