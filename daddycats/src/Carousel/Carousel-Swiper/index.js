import {React, useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css"
// import "swiper/css/effect-fade"
// import "swiper/css/navigation"
import {Navigation, EffectFade, Autoplay, Controller} from "swiper"
import image1 from "../../assets/carousel01.webp"
import image2 from "../../assets/carousel02.webp"
import image3 from "../../assets/carousel03.webp"
import image4 from "../../assets/carousel04.webp"
import image5 from "../../assets/carousel05.webp"
import image6 from "../../assets/carousel06.webp"
import image7 from "../../assets/carousel07.webp"
import image8 from "../../assets/carousel08.webp"
import image9 from "../../assets/carousel09.webp"
import image10 from "../../assets/carousel10.webp"


function SwiperCarousel (){
    return (
        <div>
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