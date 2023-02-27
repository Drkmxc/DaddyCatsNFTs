import React from "react";
import "./index.css";
import utilidad from "../assets/daddy_utilidad-removebg-preview.png";


function UtilidadesSection(){
    return (
        <section id="utilidad">
            <div className="contenedor">

                <div className="derecha">
                    <h2>Utilidades</h2>

                    <p>Nuestro objetivo es convertirnos en la <span>comunidad hispanoablante de NFTs más grande e importante de todo el sector.</span> Nuestra función principal es educar y ayudar a todos los holders a saber desenvolverse en el mundo NFT, además de aportar valor a través de colaboraciones.
                    </p>

                    <a href="https://twitter.com/KittyCatsSOL" target="_blank" className="btn-ghost primary btn-utilidades">Saber Más <i className="fa-brands  fa-twitter">
                    </i></a>
                </div>

                <div className="izquierda">
                    <img src={utilidad} alt="Daddy Cat" />
                </div>
            </div>
        </section>
    )
}

export { UtilidadesSection }