import React from 'react';
import "./index.css"
import {Accordion} from './accordion';

const QuestionsSection = () => {


  const accordionData = [
    {
      title: '¿Qué es Cats Family?',
      content: `Cats Family es una colección NFT desarrollada en la red de Solana.`
    },
    {
      title: '¿Cuál es el supply total y el precio de mint?',
      content: `El supply de la colección es de 1717 NFTs únicos hechos a mano. El precio de mint fue de 2.5 SOL.`
    },
    {
      title: '¿Cómo puedo comprar un NFT de Cats Family? ',
      content: `Puedes adquier un Cats Family en los mejores marketplaces de Solana como Magic Eden.`
    },
    {
      title: '¿Cuándo será la fecha de minteo? ',
      content: `El lanzamiento oficial de la colección fue del 22 al 24 de julio del 2022.`
    },
    {
      title: '¿Como verifico que soy poseedor de un Cats Family para poder acceder a todos los beneficios que tiene ser holder?',
      content: `En el canal oficial de discord se ha habilitado una verificación detallada paso a paso, para que todos los poseedores puedan verificarse y comenzar a disfrutar de las ventajas que ofrece formar parte de esta comunidad`
    }
  ];

  return (
    <section id="faq">
        <div className="titulo-faq">
            <h2>Preguntas Frecuentes</h2>
        </div>
        <div className="preguntas">
            <div className="contenedor-preguntas">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </div>
    </section>
  );
};

export { QuestionsSection };