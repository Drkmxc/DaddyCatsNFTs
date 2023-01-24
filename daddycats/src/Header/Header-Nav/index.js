import {React, useState} from "react";
import "./index.css";
import logoMenu from "./assets/LOGO-1024x1024.webp"
import MagicEden from "./assets/MagicEden.png"

function NavHeader({ menuBurguer }){
    
    const [nav , setNav] = useState(false);
    const [hamburguer, setHamburguer] = useState(false)
    
    const showNavbar = () => {
        if(window.scrollY > 0){
            setNav(true)
        } else {
            setNav(false)
        }
    }

    // const spliceHamburguer = () => setHamburguer(!hamburguer)

    window.addEventListener("scroll", showNavbar)

    // (document).ready(function(){
    //     ('#hamburguer').click(function(){
    //         ('.menu').toggleClass('show');
    //     });
    //     ('li , .logo-menu').click(function(){
    //         ('.menu').removeClass('show');
    //     });
    // });

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <div className="contenedor-menu">

                <div className="logo-menu">
                    <a href="#">
                        <img src={logoMenu}></img>
                    </a>
                    <a href="#">
                        <p>DADDY CATS</p>
                    </a>
                </div>

                <ul className="menu ">
                    <li>
                        <a href="#quienes-somos">¿Quiénes somos?</a>
                    </li>

                    <li>
                        <a href="#utilidad">Utilidades</a>
                    </li>

                    <li>
                        <a href="#servicios">Servicios</a>
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

                    <li>
                        <a href="#" target="_blank">
                            <span>Discord</span>
                            <i className="fa-brands fa-discord"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://magiceden.io/marketplace/daddy_cats" target="_blank">
                            <span>Magic Eden</span>
                            <img src={MagicEden} alt="Buy a Daddy Cat on MagicEden"></img>
                        </a>
                    </li>
                </ul>

                <label id="hamburguer">
                    <i className="fa-solid fa-bars"></i>
                </label>

            </div>
        </nav>
    ) 
}

export { NavHeader }