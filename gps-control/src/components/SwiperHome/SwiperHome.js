import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Navigation, Autoplay  } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "./swiper.css"
import FormatoCarrusel from "../../assets/formatoCarrusel.jpg"

const SwiperHome = () => {
    SwiperCore.use([Keyboard, Mousewheel, Autoplay]);
  return (
    <div
    style={{
        overflow: "hidden",
        alignItems: "center",
      }}>
        <Swiper
          className="swiper_home"
          centeredSlides={true}
          navigation={true}
          modules={[ Pagination, Navigation]}
          initialSlide={0}
          mousewheel={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}>
            <SwiperSlide> 
                <img alt="carrusel1" src={FormatoCarrusel} ></img>  
            </SwiperSlide>     
            <SwiperSlide>   
                <img alt="carrusel1" src={FormatoCarrusel} ></img>  
            </SwiperSlide>                  
        </Swiper>
    </div>
  );
};

export default SwiperHome;