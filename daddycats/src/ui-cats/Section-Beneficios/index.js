import React from "react";
import "./index.css"

function BeneficiosSection() {
    return (
        <section id="servicios">
            <div className="contenedor">
                <div className="contenido-servicios">
                    <h2><span>BENEFICIOS</span> POR SER MIEMBRO</h2>

                    <p className="textsection3-p">Desde el equipo de Cats Family ofrecemos ayuda a todo aquel que esté interesado en crear su propio
                        <span className="textsection3-p--span"> proyecto NFT o Web3</span>. Ofrecemos servicios de mentoría para resolver todas las dudas que se planteen.
                        Además, contamos con un <span className="textsection3-p--span">equipo especializado</span> tanto en regularización y tokenización, como en el
                        diseño de NFTs, por lo que también ofrecemos la <span className="textsection3-p--span">posibilidad de involucranos directamente</span> en el
                        desarrollo de la colección a través de servicios contratados.
                    </p>

                    <div className="botones">
                        <a href="#contacto" className="btn-ghost primary contactanos">contáctanos <i className="fa-solid fa-envelope-open-text"></i></a>
                    </div>

                    <div className="lista-servicios">
                        <div className="elemento-lista">
                            <i className="fa-solid fa-user-gear"></i>
                            <p className="textsection3-p">Mentorías y cursos de programación</p>
                        </div>

                        <div className="elemento-lista">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <p className="textsection3-p">Mentorías y cursos de trading</p>
                        </div>

                        <div className="elemento-lista">
                            <i className="fa-solid fa-handshake"></i>
                            <p className="textsection3-p">Clases recurrentes sobre tecnología blockchain</p>
                        </div>

                        <div className="elemento-lista">
                            <i className="fa-solid fa-people-group"></i>
                            <p className="textsection3-p">Análisis diario del mercado cripto y NFT.</p>
                        </div>

                        <div className="elemento-lista">
                            <i className="fa-solid fa-bullhorn"></i>
                            <p className="textsection3-p">Apoyo y seguimiento en el lanzamiento de proyectos personales</p>
                        </div>

                        <div className="elemento-lista">
                            <i className="fa-solid fa-chart-line"></i>
                            <p className="textsection3-p">Mentoría y asesoramiento legal</p>
                        </div>

                        <div className="elemento-lista">
                            <i className="fa-solid fa-people-group"></i>
                            <p className="textsection3-p">Acceso a las whitelist de proyectos NFT más exclusivas</p>
                        </div>

                        <div className="elemento-lista">
                            <i className="fa-solid fa-bullhorn"></i>
                            <p className="textsection3-p">Merchandising oficial de 555 LABS</p>
                        </div>

                        <div className="elemento-lista">
                            <i className="fa-solid fa-people-group"></i>
                            <p className="textsection3-p">Eventos exclusivos de la comunidad</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { BeneficiosSection }