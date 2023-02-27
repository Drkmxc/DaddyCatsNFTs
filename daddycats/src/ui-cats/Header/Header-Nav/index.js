import {React, useState} from "react";
import "./index.css";
import logoMenu from "./assets/LOGO-1024x1024.webp"
import MagicEden from "./assets/MagicEden.png"

function NavHeader({ menuBurguer }){
    
    const [nav , setNav] = useState(false);
    const [hamburguer, setHamburguer] = useState(false);
    const [hamEffect, setHamEffect] = useState(false)
    
    const showNavbar = () => {
        if(window.scrollY > 0){
            setNav(true)
        } else {
            setNav(false)
        }
    }


    window.addEventListener("scroll", showNavbar)

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <div className="contenedor-menu">

                <div className="logo-menu">
                    <a href="#">
                        <img src={logoMenu}></img>
                    </a>
                    <a href="#">
                        <p>CATS FAMILY</p>
                    </a>
                </div>

                <ul className={hamburguer ? "menu show" : "menu"}>
                    <li>
                        <a href="#quienes-somos">¿Quiénes somos?</a>
                    </li>

                    <li>
                        <a href="#utilidad">Utilidades</a>
                    </li>

                    <li>
                        <a href="#roadmap">Roadmap</a>
                    </li>

                    <li>
                        <a href="#adquirir">Adquirir NFTs</a>
                    </li>

                    <li>
                        <a href="#servicios">Beneficios</a>
                    </li>

                    <li>
                        <a href="#faq">FAQs</a>
                    </li>

                    <li>
                        <a href="#contacto">Contáctanos</a>
                    </li>

                    <li>
                        <a href="https://twitter.com/KittyCatsSOL" target="_blank">
                            <span>Twitter</span>
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </li>

                </ul>


                <div id="hamburguer" className="three col" onClick={() => {setHamburguer(!hamburguer)}}>
                    <div 
                        className={hamEffect ? 'hamburger is-active' : 'hamburger'} 
                        onClick={() => setHamEffect(!hamEffect)}
                        id="hamburger-6"
                    >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>

            </div>
        </nav>
    ) 
}

export { NavHeader }