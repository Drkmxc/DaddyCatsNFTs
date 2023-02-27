import React from "react";
import "./index.css"

function ContactSection() {
    return (
        <section id="contacto">
            <div className="contenedor">
                <div className="contenido-contacto">
                    <h2><span>CONTACTA</span> CON NOSOTROS</h2>
                
                    <p className="textsection-p">Puedes establecer contacto con nosotros <span className="textsection-p--span">sin ningún tipo de compromiso</span> a través del siguiente formulario. Una vez estudiemos tu caso te daremos un presupuesto acorde al mismo.</p>

                    <form action="https://formspree.io/f/{form_id}" method="POST">
                        <input type="text" name="name" placeholder="Tu nombre" required />

                        <input type="email" name="email" placeholder="Tu E-mail" required />

                        <input type="text" name="asunto" placeholder="Asunto" required />

                        <textarea name="mensaje" id="mensaje" placeholder="Mensaje" rows="5" required></textarea>

                        <button type="submit" className="btn-ghost primary">Enviar <i className="fa-solid fa-paper-plane"></i></button>
                    </form> 
                </div>
            </div>
        </section>
    )
}

export { ContactSection }