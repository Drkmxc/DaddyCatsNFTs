import React from "react";
import "./index.css";
import plus from "../assets/plus.svg"


function QuestionsSection({ addActive }){

    return (
        <section id="faq" >
            <div className="titulo-faq">
                <h2>Frequently asked questions</h2>
            </div>

            <div className="preguntas">
                <div className="contenedor-preguntas">

                    <div className="contenedor-pregunta" onClick={addActive}>
                        <p className="pregunta">¿Qué es Daddy Cats? <img src={plus} alt="open answer" /></p>
                        <p className="respuesta">Daddy Cats es una colección NFT desarrollada en la red de Solana.</p>
                    </div>

                    <div className="contenedor-pregunta" onClick={addActive}>
                        <p className="pregunta">¿Cuál es el supply total y el precio de mint? <img src={plus}
                                alt="open answer" /></p>
                        <p className="respuesta">El supply de la colección es de 1717 NFTs únicos hechos a mano. El precio de
                            mint fue de 2.5 SOL.</p>
                    </div>

                    <div className="contenedor-pregunta" onClick={addActive}>
                        <p className="pregunta">¿A qué da acceso ser poseedor de un NFT de la colección Daddy Cats? <img
                                src={plus} alt="open answer" /></p>
                        <p className="respuesta">Al ser poseedor de un NFT de la colección de Daddy Cats tienes acceso a un chat
                            exclusivo con otros poseedores de uno de estos NFTs, y podrás disfrutar de todos los recursos y
                            ventajas que se ofrecen dentro de ese chat.</p>
                    </div>

                    <div className="contenedor-pregunta" onClick={addActive}>
                        <p className="pregunta">¿Cómo puedo comprar un NFT de Daddy Cats? <img src={plus}
                                alt="open answer" />
                        </p>
                        <p className="respuesta">Puedes adquier un Daddy Cat en los mejores marketplaces de Solana como <a
                                href="#">Magic Eden</a>.</p>
                    </div>

                    <div className="contenedor-pregunta" onClick={addActive}>
                        <p className="pregunta">¿Cuándo será la fecha de minteo? <img src={plus} alt="open answer" />
                        </p>
                        <p className="respuesta">El lanzamiento oficial de la colección fue del 22 al 24 de julio del 2022.</p>
                    </div>

                    <div className="contenedor-pregunta" onClick={addActive}>
                        <p className="pregunta">¿Como verifico que soy poseedor de un Daddy Cat para poder acceder a todos los
                            beneficios que tiene ser holder? <img src={plus} alt="open answer" />
                        </p>
                        <p className="respuesta">Una vez finalice el minteo, se habilitará una verificación detallada paso a
                            paso en el chat de discord, para que todos los poseedores puedan verificarse y comenzar a
                            disfrutar de las ventajas que ofrece formar parte de esta comunidad.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { QuestionsSection }