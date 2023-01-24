import React from "react";
import "./index.css";
import image1 from "../assets/carousel01.webp"
import image2 from "../assets/carousel02.webp"
import image3 from "../assets/carousel03.webp"
import image4 from "../assets/carousel04.webp"
import image5 from "../assets/carousel05.webp"
import image6 from "../assets/carousel06.webp"
import image7 from "../assets/carousel07.webp"
import image8 from "../assets/carousel08.webp"
import image9 from "../assets/carousel09.webp"
import image10 from "../assets/carousel10.webp"

function Carousel(){
    return (
        <div className="carousel">
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src={image1} />
                    </div>

                    <div className="swiper-slide">
                        <img src={image2} />
                    </div>

                    <div className="swiper-slide">
                        <img src={image3} />
                    </div>

                    <div className="swiper-slide">
                        <img src={image4} />
                    </div>

                    <div className="swiper-slide">
                        <img src={image5} />
                    </div>

                    <div className="swiper-slide">
                        <img src={image6} />
                    </div>

                    <div className="swiper-slide">
                        <img src={image7} />
                    </div>

                    <div className="swiper-slide">
                        <img src={image8} />
                    </div>

                    <div className="swiper-slide">
                        <img src={image9} />
                    </div>

                    <div className="swiper-slide">
                        <img src={image10} />
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    )
}

export { Carousel };