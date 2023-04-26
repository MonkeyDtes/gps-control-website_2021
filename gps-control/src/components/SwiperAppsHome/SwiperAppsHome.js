import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Navigation, Autoplay  } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "./swiperAppsHome.css"
import BANNERFLEETRUN from "../../assets/BANNER-FLEETRUN.png"
import BANNERHECTERRA from "../../assets/BANNER-HECTERRA.png"
import BANNERFUEC from "../../assets/BANNER-FUEC.png"
import BANNERMISIM from "../../assets/BANNER-MISIM.png"


const SwiperAppsHome = () => {
    SwiperCore.use([Keyboard, Mousewheel, Autoplay]);
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
            className="swiperAppsHome"
            centeredSlides={true}
            navigation={true}
            modules={[ Pagination, Navigation]}
            initialSlide={1}
            slidesPerView={1}
            mousewheel={false}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}>
            <SwiperSlide className="swiperAppsHome_slide"> 
                <img alt="carrusel1" src={BANNERFLEETRUN} ></img>  
            </SwiperSlide>     
            <SwiperSlide className="swiperAppsHome_slide">   
                <img alt="carrusel1" src={BANNERHECTERRA} ></img>  
            </SwiperSlide>  
            <SwiperSlide className="swiperAppsHome_slide"> 
                <img alt="carrusel1" src={BANNERFUEC} ></img>  
            </SwiperSlide>     
            <SwiperSlide className="swiperAppsHome_slide">   
                <img alt="carrusel1" src={BANNERMISIM} ></img>  
            </SwiperSlide>                    
        </Swiper>
    </div>
  );
};

export default SwiperAppsHome;