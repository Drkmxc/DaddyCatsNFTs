import React from "react";
import { useState } from "react";
import './index.css'
import adquirir from "./egipcio-min.webp";


function AdquirirSection() {

    const [activeUno, setActiveUno] = useState(false)
    const [activeDos, setActiveDos] = useState(false)
    const [activeTres, setActiveTres] = useState(false)

    return ( 
        <section id="adquirir" className="general-section-adquirir-cats">
            <div className="container-titulo-section-adquirir-cats">
                <h2 className="h2-titulo-section-adquirir-cats">¿Cómo puedo conseguir un NFT de la colección?</h2>
            </div>

            <div className="contianer-pasos-section-adquirir-cats">
                <article className="article-pasos-section-adquirir-cats">
                    <div className="div-arrow-article-pasos-section-adquirir-cats" onClick={() => setActiveUno(!activeUno)}>
                        <i className={activeUno? "fa-solid fa-arrow-right i-activo" : "fa-solid fa-arrow-right"}></i>
                        <h3>Descargar una wallet de la red de Solana</h3>
                    </div>

                    <div className={activeUno ? 'div-texto-uno-article-pasos-section-adquirir-cats respuesta-active' : 'div-texto-uno-article-pasos-section-adquirir-cats'}>
                        <p>Como por ejemplo: <a href="https://phantom.app/download" className="phantom">Phantom</a>.</p>
                    </div>
                </article>

                <article className="article-pasos-section-adquirir-cats">
                    <div className="div-arrow-article-pasos-section-adquirir-cats" onClick={() => setActiveDos(!activeDos)}>
                        <i className={activeDos? "fa-solid fa-arrow-right i-activo" : "fa-solid fa-arrow-right"}></i>
                        <h3>¿Dónde puedo comprar un NFT de la colección?</h3>
                    </div>

                    <div className={activeDos ? 'div-texto-dos-article-pasos-section-adquirir-cats respuesta-active' : 'div-texto-dos-article-pasos-section-adquirir-cats'}>
                        <p>Para comprar un NFT de la colección debes acceder a un marketplace de la red de solana, como por ejemplo MagicEden o Hyperspace.</p>
                    </div>
                </article>

                <article className="article-pasos-section-adquirir-cats">
                    <div className="div-arrow-article-pasos-section-adquirir-cats" onClick={() => setActiveTres(!activeTres)}>
                        <i className={activeTres? "fa-solid fa-arrow-right i-activo" : "fa-solid fa-arrow-right"}></i>
                        <h3>Una vez comprado el NFT, ¿Qué hago?</h3>
                    </div>

                    <div className={activeTres ? 'div-texto-tres-article-pasos-section-adquirir-cats respuesta-active' : 'div-texto-tres-article-pasos-section-adquirir-cats'}>
                        <p>Para disfrutar de todos los beneficios que ofrece la colección, por ser propietario de uno de estos NFTs, debes acceder al servidor de <a href="https://discord.com/invite/JpfC8jRZhW">Discord</a> y verificarte como holder.</p>
                    </div>
                </article>
            </div>

            <div className="container-image-adquirir">
                <img src={adquirir} className="img-adquirir" />
            </div>
        </section>
    )
}

export { AdquirirSection }