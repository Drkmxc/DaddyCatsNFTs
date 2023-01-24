import React from "react";
import "./index.css"

function ServicesSection() {
    return (
        <section id="servicios">
            <div className="contenedor">
                <div className="contenido-servicios">
                    <h2><span>MENTORÍA</span> Y SERVICIOS</h2>

                    <p className="textsection3-p">Desde el equipo de Daddy Cats ofrecemos ayuda a todo aquel que esté interesado en crear su propio
                        <span className="textsection3-p--span"> proyecto NFT o Web3</span>. Ofrecemos servicios de mentoría para resolver todas las dudas que se planteen.
                        Además, contamos con un <span className="textsection3-p--span">equipo especializado</span> tanto en regularización y tokenización, como en el
                        diseño de NFTs, por lo que también ofrecemos la <span className="textsection3-p--span">posibilidad de involucranos directamente</span> en el
                        desarrollo de la colección a través de servicios contratados.
                    </p>

                    <div className="botones">
                        <a href="#contacto" className="btn-ghost primary">contáctanos <i className="fa-solid fa-envelope-open-text"></i></a>
                    </div>

                    <div className="lista-servicios">
                        <div className="elemento-lista">
                            <i className="fa-solid fa-user-gear"></i>
                            <p className="textsection3-p">Asistencia Completa</p>
                        </div>

                        <div className="elemento-lista">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <p className="textsection3-p">Análisis personalizado</p>
                        </div>

                        <div className="elemento-lista">
                            <i className="fa-solid fa-handshake"></i>
                            <p className="textsection3-p">Colaboraciones y acuerdos</p>
                        </div>

                        <div className="elemento-lista">
                            <i className="fa-solid fa-people-group"></i>
                            <p className="textsection3-p">Gestion de comunidad</p>
                        </div>

                        <div className="elemento-lista">
                            <i className="fa-solid fa-bullhorn"></i>
                            <p className="textsection3-p">Gestión canales de comunicación</p>
                        </div>

                        <div className="elemento-lista">
                            <i className="fa-solid fa-chart-line"></i>
                            <p className="textsection3-p">Marketing orgánico</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { ServicesSection }