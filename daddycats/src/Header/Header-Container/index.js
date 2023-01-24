import React from "react";
import "./index.css";
import logoFondo from "./LOGO-1024x1024.webp"

function ContainerTitulo(){
    return (
        <div className="portada">
            <div className="contenido-portada">

                <img src={logoFondo}></img>
                <h1>DADDY CATS</h1>
                <p className="texto-portada">
                    From the people who brought you <a href="https://magiceden.io/marketplace/kittycats" target="_blank" className="link-kitty">Kitty Cats</a>
                </p>

            </div>
            <a href="#quienes-somos" className="link-quienes-somos">
                <i className="fa-solid fa-angles-down"></i>
            </a>
        </div>
    )
}

export { ContainerTitulo };