import React from "react";
import './StylesLabs.css'
import { NavLabs } from "../ui-labs/Nav";
import { HeaderLabs } from "../ui-labs/Header";
import { SectionNftLabs } from "../ui-labs/Section-Nft";
import { SectionServicesLabs } from "../ui-labs/Section-Services";
import { SectionContadorLabs } from "../ui-labs/Section-Contador";
import { AutorLabs } from "../ui-labs/Autor"
import { FooterLabs } from "../ui-labs/Footer";


function Labs() {
    return (
        <React.Fragment>
            <NavLabs />

            <HeaderLabs />

            <SectionNftLabs />

            <SectionServicesLabs />

            <SectionContadorLabs />

            <FooterLabs />

            <AutorLabs />

        </React.Fragment>
    )
}

export { Labs }