import React from "react";
import "./index.css"
import { Header } from "../Header";
import { VideoFondo } from "../Header/Header-Video";
import { ContainerTitulo } from "../Header/Header-Container";
import { NavHeader } from "../Header/Header-Nav";
import { QuienesSomosSection } from "../Section-Quienes Somos/index";
import { Carousel } from "../Carousel";
import { UtilidadesSection } from "../Section-Utilidades";
import { ServicesSection } from "../Section-Services";
import { QuestionsSection } from "../Section-Questions";
import { ContactSection } from "../Section-Contact"
import { Footer } from "../Footer ";
import { ContainerFooter } from "../Footer /Footer - Container";
import { Autor } from "../Autor"
import { Context } from "../Context";


function AppUI(){

    const {
        nav,
        showNavBar,
        menuBurguer,
        preguntas,
        addActive
    } = React.useContext(Context)

    return (
        <React.Fragment>

            <Header>
                <VideoFondo />
                <ContainerTitulo />
                <NavHeader 
                    nav = { nav }
                    showNavBar={ showNavBar }
                    menuBurguer = { menuBurguer }
                />
            </Header>

            <QuienesSomosSection />

            <Carousel />
            
            <UtilidadesSection />
                
            <ServicesSection />

            <QuestionsSection 
                preguntas = { preguntas }
                addActive = { addActive }
            />

            <ContactSection />

            <Footer>
                <VideoFondo />
                <ContainerFooter />
            </Footer>

            <Autor />

        </React.Fragment>
    )
}

export { AppUI }