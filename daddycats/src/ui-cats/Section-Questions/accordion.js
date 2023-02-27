import React, { useState } from 'react';
import "./index.css"
import plus from "../assets/plus.svg"

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div 
        className={isActive ? "contenedor-pregunta activa" : "contenedor-pregunta"} 
        onClick={() => setIsActive(!isActive)}
      >
        <div className="pregunta">
          {title} 
          <img src={plus} alt="open answer" />
        </div>
        {isActive && <div className="respuesta">{content}</div>}
      </div>
    </div>
  );
};

export {Accordion};