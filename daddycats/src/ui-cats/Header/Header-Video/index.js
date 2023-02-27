import React from "react";
import "./index.css";
import videoPortada from "./fondo_portada.mp4"

function VideoFondo(){
    return (
        <video className="video-fondo" src={videoPortada} muted autoPlay loop />
    )
}

export { VideoFondo }