import React from "react";
import './index.css';
import magic from "./MagicEden.png"
import cats from './logo-cats.webp'

function FooterLabs() {
    return (
        <footer className="footer-labs">
            <div className="contenedor">
                <div className="contenido-footer">
                    <div className="rrss">
                        <a href="https://twitter.com/KittyCatsSOL" target="_blank">
                            <i className="fa-brands fa-twitter fa-footer a-twitter-footer"></i>
                        </a>

                        <a href="discord.gg/JpfC8jRZhW" target="_blank">
                            <i className="fa-brands fa-discord fa-footer a-discord-footer"></i>
                        </a>

                        <a href="https://magiceden.io/marketplace/daddy_cats" target="_blank">
                            <img className="magic-eden-logo" src={magic} alt="Buy a Daddy Cat on MagicEden" />
                        </a>

                        <a href="/dady">
                            <img className="labs-logo-footer-cats" src={cats} alt="Visit the 555Labs website" className="cats-logo" />
                        </a>
                    </div>

                    <div className="condiciones-legales">
                        <a href="" className="terminos">Términos y Condiciones</a>
                        <a href="" className="privacidad">Condiciones legales y política de privacidad</a>
                        <a href="" className="cookies">Política de cookies</a>
                    </div>

                    <div className="copyright">
                        <p>© Cats Family 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { FooterLabs }