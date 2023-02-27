import React from "react";
import "./index.css";
import image1 from "../assets/0.webp"
import image2 from "../assets/11.webp"
import image3 from "../assets/12.webp"
import image4 from "../assets/14.webp"
import image5 from "../assets/2.webp"
import image6 from "../assets/20.webp"
import image7 from "../assets/21.webp"
import image8 from "../assets/28.webp"
import image9 from "../assets/6.webp"
import image10 from "../assets/8.webp"

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