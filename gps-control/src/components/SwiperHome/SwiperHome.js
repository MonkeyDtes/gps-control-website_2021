import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Navigation } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "./swiper.css"
import FormatoCarrusel from "../../assets/FormatoCarrusel.svg"

const SwiperHome = () => {
    SwiperCore.use([Keyboard, Mousewheel]);
  return (
    <div
    style={{
        overflow: "hidden",
        alignItems: "center",
      }}>
        <Swiper
             style={{
                height:"80vh"                
            }}
          centeredSlides={true}
          navigation={true}
          modules={[ Pagination, Navigation]}
          initialSlide={0}
          mousewheel={true}>
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