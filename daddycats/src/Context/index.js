import React from "react";

const Context = React.createContext();

function Provider(props){
    const nav = document.querySelector('.nav');
    
    const showNavBar = () => {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('active', window.scrollY > 0);
        })
    } 

    const menuBurguer = () => { 
    }

    // const swiper = () => {
    //     return (
    //         new Swiper(".mySwiper", {
    //             loop: true,
    //             autoplay: {
    //                 delay: 1000,
    //                 disableOnInteraction: false,
    //             },
    //             effect: "coverflow",
    //             centeredSlides: true,
    //             slidesPerView: "auto",
    //             coverflowEffect: {
    //             rotate: 0, //50
    //             stretch: -10, //0
    //             depth: 0, //100
    //             modifier: 1,
    //             slideShadows: false,
    //             }
    //         })
    //     )
    // }

    const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
    
    const addActive = () => {
        preguntas.forEach((pregunta) => {
            pregunta.addEventListener('click', (e) => {
                e.currentTarget.classList.toggle('activa');
    
                const respuesta = pregunta.querySelector('.respuesta');
                const alturaRealRespuesta = respuesta.scrollHeight;
    
                if(!respuesta.style.maxHeight){
                    respuesta.style.maxHeight = alturaRealRespuesta + 'px';
                } else {
                    respuesta.style.maxHeight = null;
                }
    
                preguntas.forEach((elemento) => {
                    if(pregunta !== elemento){
                        elemento.classList.remove('activa');
                        elemento.querySelector('.respuesta').style.maxHeight = null;  
                    }
                     
                });
            });
        });
    }
    
    return (
        <Context.Provider
            value = {{
                nav,
                showNavBar,
                menuBurguer,
                // swiper,
                preguntas,
                addActive
            }}
        >   
            {props.children}     
        </Context.Provider>
    )
}

export { Context , Provider }