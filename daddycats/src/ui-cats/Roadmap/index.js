import React from "react";
import './index.css';
import roadmap from '../assets/roadmap.png'

function Roadmap() {
    return (
        <section id="roadmap" className="section-roadmap-cats">
            <div className="container-roadmap-section-roadmap-cats">
                <h2>ROADMAP</h2>
                <img src={roadmap} className="img-roadmap" />
            </div>

            <div className="container-partners-section-roadmap-cats">
                <h2>SOCIOS</h2>
                {/* <img src={} className="" />
                <img src={} className="" />
                <img src={} className="" />
                <img src={} className="" /> */}
            </div>
        </section>
    )
}

export { Roadmap }