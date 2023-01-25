import React from 'react';
import "./index.css"
import {Accordion} from './accordion';

const QuestionsSection = () => {
  const accordionData = [
    {
      title: '¿Qué es Daddy Cats?',
      content: `Daddy Cats es una colección NFT desarrollada en la red de Solana.`
    },
    {
      title: '¿Cuál es el supply total y el precio de mint?',
      content: `El supply de la colección es de 1717 NFTs únicos hechos a mano. El precio de mint fue de 2.5 SOL.`
    },
    {
      title: '¿A qué da acceso ser poseedor de un NFT de la colección Daddy Cats? ',
      content: `Al ser poseedor de un NFT de la colección de Daddy Cats tienes acceso a un chat exclusivo con otros poseedores de uno de estos NFTs, y podrás disfrutar de todos los recursos y ventajas que se ofrecen dentro de ese chat.`
    },
    {
      title: '¿Cómo puedo comprar un NFT de Daddy Cats? ',
      content: `Puedes adquier un Daddy Cat en los mejores marketplaces de Solana como <a
      href="#">Magic Eden</a>.`
    },
    {
      title: '¿Cuándo será la fecha de minteo? ',
      content: `El lanzamiento oficial de la colección fue del 22 al 24 de julio del 2022.`
    },
    {
      title: '¿Como verifico que soy poseedor de un Daddy Cat para poder acceder a todos los beneficios que tiene ser holder?',
      content: `Una vez finalice el minteo, se habilitará una verificación detallada paso a paso en el chat de discord, para que todos los poseedores puedan verificarse y comenzar a disfrutar de las ventajas que ofrece formar parte de esta comunidad.`
    }
  ];

  return (
    <section id="faq">
        <div className="titulo-faq">
            <h2>Frequently asked questions</h2>
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