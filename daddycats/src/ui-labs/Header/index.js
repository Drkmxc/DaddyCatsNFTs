import React from "react";
import "./index.css";
import videoPortadaLabs from '../assets/video-portada-bajo.mp4'

function HeaderLabs() {
    return (
        <section id="header" className="container-header-labs">
            <video className="video-fondo-labs" src={videoPortadaLabs} muted autoPlay loop />

            <h4 className="h4-header-labs">La tecnología NFT ha llegado para quedarse. <br />Únete a la revolución.</h4>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="ola"><path className="ola-2" fill="#000" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,138.7C672,117,768,75,864,74.7C960,75,1056,117,1152,144C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="ola-dos"><path fill="#000" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,186.7C384,171,480,85,576,90.7C672,96,768,192,864,218.7C960,245,1056,203,1152,202.7C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </section>
    )
}
 
export { HeaderLabs }