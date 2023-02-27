import React from "react";
import './StyleCats.css'
import { Header } from "../ui-cats/Header";
import { VideoFondo } from "../ui-cats/Header/Header-Video";
import { ContainerTitulo } from "../ui-cats/Header/Header-Container";
import { NavHeader } from "../ui-cats/Header/Header-Nav";
import { QuienesSomosSection } from "../ui-cats/Section-Quienes Somos/index";
import { SwiperCarousel } from "../ui-cats/Carousel/Carousel-swiper";
import { UtilidadesSection } from "../ui-cats/Section-Utilidades";
import { Roadmap } from "../ui-cats/Roadmap";
import { AdquirirSection } from "../ui-cats/Section-Adquirir";
import { BeneficiosSection } from "../ui-cats/Section-Beneficios";
import { QuestionsSection } from "../ui-cats/Section-Questions";
import { ContactSection } from "../ui-cats/Section-Contact"
import { Footer } from "../ui-cats/Footer ";
import { ContainerFooter } from "../ui-cats/Footer /Footer - Container";
import { AutorCats } from "../ui-cats/Autor"
import { Button } from "../ui-cats/Button";


function Cats(){

    return (
        <React.Fragment>
            
            <Header>
                <VideoFondo />
                <ContainerTitulo />
                <NavHeader />
            </Header>

            <QuienesSomosSection />

            <SwiperCarousel />

            <UtilidadesSection />

            <Roadmap /> 

            <AdquirirSection /> 

            <BeneficiosSection />

            <QuestionsSection />

            <ContactSection />

            <Button />

            <Footer>
                <VideoFondo />
                <ContainerFooter />
            </Footer>

            <AutorCats />

        </React.Fragment>
    )
}

export { Cats }