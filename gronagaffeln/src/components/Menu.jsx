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
    <div className="icons-container">
        <div className="icon">
            <img className="icon-img" src="src/assets/icons/organic.png" alt="Ekologisk"/>
            <p>Maträtter med denna symbol är helt ekologiska.</p>
        </div>
        <div className="icon">
            <img className="icon-img" src="src/assets/icons/vegan.png" alt="Vegansk"/>
            <p>Maträtter med denna symbol är helt veganska.</p>
        </div>
        <div className="icon">
            <img className="icon-img" src="src/assets/icons/gluten-free.png" alt="Glutenfri"/>
            <p>Maträtter med denna symbol är fria från gluten.</p>
        </div>
    </div>
        <div className="menu-item">
            <img className="menu-img" src="src/assets/menu/blomkålssoppa.png" alt="Blomkålssoppa"/>
            <img className="menu-icon-img" src="src/assets/icons/organic.png" alt="Ekologisk"/>
            <h3>Rostad blomkålssoppa med tryffelolja</h3>
            <p>Serveras med ett knaprigt örtfocaccia.</p>
            <p>149kr</p>
        </div>
        <div className="menu-item">
            <img className="menu-img" src="src/assets/menu/Risotto.png" alt="Svamprisotto"/>
            <div className="menu-icon-container">
                <img className="menu-icon-img" src="src/assets/icons/gluten-free.png" alt="Glutenfri"/>
                <img className="menu-icon-img" src="src/assets/icons/vegan.png" alt="Vegansk"/>
            </div>
            <h3>Svamprisotto med parmesan och timjan</h3>
            <p>Krämig arborioris med kantareller, portabello och en skvätt vitt vin.</p>
            <p>169kr</p>
        </div>
        <div className="menu-item">
            <img className="menu-img" src="src/assets/menu/Kikärtsgryta.png" alt="Indisk kikärtsgryta"/>
            <img className="menu-icon-img" src="src/assets/icons/organic.png" alt="Ekologisk"/>
            <h3>Indisk kikärtsgryta (Chana Masala)</h3>
            <p>Serveras med jasminris, naanbröd och en klick yoghurt.</p>
            <p>155kr</p>
        </div>
        <div className="menu-item">
            <img className="menu-img" src="src/assets/menu/Lasagne.png" alt="Lasagne"/>
            <img className="menu-icon-img" src="src/assets/icons/organic.png" alt="Ekologisk"/>
            <h3>Lasagne med grillade grönsaker och linser</h3>
            <p>Linsragu, zucchini, paprika, bechamelsås och mozzarella.</p>
            <p>169kr</p>
        </div>
        <div className="menu-item">
            <img className="menu-img" src="src/assets/menu/Pannacotta.png" alt="Pannacotta"/>
            <img className="menu-icon-img" src="src/assets/icons/gluten-free.png" alt="Glutenfri"/>
            <h3>Pannacotta på kokosmjölk med passionsfrukt</h3>
            <p>Laktosfri och exotiskt len.</p>
            <p>99kr</p>
        </div>
    </div>
    </>
    )
}