import React from "react";
import './index.css'


function Button() {
    return (
        <button className="container-button">
            <a className="button" href="https://discord.com/invite/JpfC8jRZhW" target="_blank">
                <i className="fa-brands fa-discord logo-discord"></i>
            </a>
        </button>
    )
}

export { Button }