import {React, useRef} from "react";
import "../index.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, EffectFade, Autoplay, Controller} from "swiper"
import image1 from "../../assets/0.webp"
import image2 from "../../assets/11.webp"
import image3 from "../../assets/12.webp"
import image4 from "../../assets/2.webp"
import image5 from "../../assets/21.webp"
import image6 from "../../assets/14.webp"
import image7 from "../../assets/28.webp"
import image8 from "../../assets/6.webp"
import image9 from "../../assets/8.webp"
import image10 from "../../assets/20.webp"


function SwiperCarousel (){
    return (
        <div className="carousel">
            <Swiper
                className="carousel"
                autoplay= {{
                    delay: 800,
                    disableOnInteraction: false
                }}
                modules={[Navigation, EffectFade, Autoplay, Controller]}
                navigation
                effect
                controller= {"false"}
                speed={800}
                slidesPerView= {"auto"}
                loop
                
                effect= {"coverflow"}
                centeredSlides= {true}
                coverflowEffect= {{
                    rotate: 0, //50
                    stretch: -10, //0
                    depth: 0, //100
                    modifier: 1,
                    slideShadows: false
                }}
            >
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <img src={image1} />
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <img src={image2} />
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <img src={image3} />
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <img src={image4} />
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <img src={image5} />
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <img src={image6} />
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <img src={image7} />
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <img src={image8} />
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <img src={image9} />
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <img src={image10} />
                        </SwiperSlide>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export { SwiperCarousel }