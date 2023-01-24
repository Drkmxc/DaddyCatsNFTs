import React from "react";
import "./index.css"

function Header({ children }){
    return (
        <header>
            { children }
        </header>
    )
}

export { Header };