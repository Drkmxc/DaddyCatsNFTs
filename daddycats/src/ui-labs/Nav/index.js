import { React, useState} from "react";
import "./index.css"
import logo from "../assets/logo-labs.png"

function NavLabs() {

    const [hamburguer, setHamburguer] = useState(false);
    const [hamEffect, setHamEffect] = useState(false);

    return (
        <div className={hamburguer ? "container-nav filter-nav" : "container-nav"}>
            <div className={hamburguer ? "container-img filter" : "container-img"}>
                <a href="#header" className="a-logo-nav">
                    <img className="logo-nav" src={logo} />
                </a>
            </div>

            <ul className={hamburguer ? "ul-nav show" : "ul-nav"}>
                <li className="li-nav"> 
                    <a className="a-nav" href="#nfts">NFTs</a>
                    <a className="a-nav" href="#services">SERVICIOS</a>
                    <a className="a-nav" href="#community">COMUNIDAD</a>
                    <a className="a-nav" href="/dady">CATS FAMILY</a>
                </li>
            </ul>

            <div id="hamburguer" className={hamburguer ? "three col filter" : "three col"} onClick={() => {setHamburguer(!hamburguer)}}>
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
    )
}

export { NavLabs }