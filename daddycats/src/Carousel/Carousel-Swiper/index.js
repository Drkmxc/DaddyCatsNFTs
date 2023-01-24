import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
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


function SwiperCarousel (){
    return (
        <Swiper
            loop= {true}
            autoplay= {{
                delay: 1000,
                disableOnInteraction: false
            }}
            
            effect= {"coverflow"}
            centeredSlides= {true}
            slidesPerView= {"auto"}
            coverflowEffect= {{
                rotate: 0, //50
                stretch: -10, //0
                depth: 0, //100
                modifier: 1,
                slideShadows: false
            }}
        >

            <SwiperSlide class="swiper-slide">
                <img src={image1} />
            </SwiperSlide>

            <SwiperSlide class="swiper-slide">
                <img src={image2} />
            </SwiperSlide>

            <SwiperSlide class="swiper-slide">
                <img src={image3} />
            </SwiperSlide>

            <SwiperSlide class="swiper-slide">
                <img src={image4} />
            </SwiperSlide>

            <SwiperSlide class="swiper-slide">
                <img src={image5} />
            </SwiperSlide>

            <SwiperSlide class="swiper-slide">
                <img src={image6} />
            </SwiperSlide>

            <SwiperSlide class="swiper-slide">
                <img src={image7} />
            </SwiperSlide>

            <SwiperSlide class="swiper-slide">
                <img src={image8} />
            </SwiperSlide>

            <SwiperSlide class="swiper-slide">
                <img src={image9} />
            </SwiperSlide>

            <SwiperSlide class="swiper-slide">
                <img src={image10} />
            </SwiperSlide>
        </Swiper>
    )
}

export { SwiperCarousel }