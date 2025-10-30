import React from "react";
import '../menu.css';

export function Menu() {
    return (
    <>
    <div className="menu-container">
    <h1>Gröna gaffelns meny</h1>
    <p className="menu-description">
        Här hittar du vår fantasktiska helt vegetariska meny med olika valmöjligheter. 
        Välj vilken som faller dig i smaken! Har du några frågor om menyn kan du alltid 
        kontakta oss på telefonnummer: 012-345 67 89.
    </p>
        <div className="menu-item">
            <img className="menu-img" src="src/assets/menu/blomkålssoppa.png" alt="Blomkålssoppa"/>
            <h3>Rostad blomkålssoppa med tryffelolja</h3>
            <p>Serveras med ett knaprigt örtfocaccia.</p>
            <p>149kr</p>
        </div>
        <div className="menu-item">
            <img className="menu-img" src="src/assets/menu/Risotto.png" alt="Svamprisotto"/>
            <h3>Svamprisotto med parmesan och timjan</h3>
            <p>Krämig arborioris med kantareller, portabello och en skvätt vitt vin.</p>
            <p>169kr</p>
        </div>
        <div className="menu-item">
            <img className="menu-img" src="src/assets/menu/Kikärtsgryta.png" alt="Indisk kikärtsgryta"/>
            <h3>Indisk kikärtsgryta (Chana Masala)</h3>
            <p>Serveras med jasminris, naanbröd och en klick yoghurt.</p>
            <p>155kr</p>
        </div>
        <div className="menu-item">
            <img className="menu-img" src="src/assets/menu/Lasagne.png" alt="Lasagne"/>
            <h3>Lasagne med grillade grönsaker och linser</h3>
            <p>Linsragu, zucchini, paprika, bechamelsås och mozzarella.</p>
            <p>169kr</p>
        </div>
        <div className="menu-item">
            <img className="menu-img" src="src/assets/menu/Pannacotta.png" alt="Pannacotta"/>
            <h3>Pannacotta på kokosmjölk med passionsfrukt</h3>
            <p>Laktosfri och exotiskt len.</p>
            <p>99kr</p>
        </div>
    </div>
    </>
    )
}