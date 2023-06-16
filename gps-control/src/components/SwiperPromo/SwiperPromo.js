import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "./swiper.css";
import modalImg2 from "../../assets/Modal_carga.jpg"
import modalImg3 from "../../assets/Modal_pasajeros.jpg"
import modalImg4 from "../../assets/Modal_conductores.jpg"
import modalImg5 from "../../assets/Modal_flota.jpg"

const SwiperPromo = (e) => {
  SwiperCore.use([Keyboard, Mousewheel]);
  const [inicialSlide, setInicialSlide] =useState(e.incialSlide)
  const swiperRef = useRef(null);
  useEffect(() => {
    setInicialSlide(e.incialSlide)
  }, [
    e.incialSlide
  ]);
  return (
    <div
      style={{
        overflow: "hidden",
        alignItems: "center",
      }}
    >
      <Swiper
        touchRatio= {0}
        centeredSlides={true}
        navigation={false}
        modules={[Pagination, Navigation]}
        initialSlide={inicialSlide}
        mousewheel={true}
        ref={swiperRef}
        className="swiper_home"
      >
        <SwiperSlide className="swiper_home_slide" ></SwiperSlide>
        <SwiperSlide className="swiper_home_slide" ><img alt="swiper" src={modalImg2}></img></SwiperSlide>
        <SwiperSlide className="swiper_home_slide" ><img alt="swiper" src={modalImg3}></img></SwiperSlide>
        <SwiperSlide className="swiper_home_slide" ><img alt="swiper" src={modalImg4}></img></SwiperSlide>
        <SwiperSlide className="swiper_home_slide" ><img alt="swiper" src={modalImg5}></img></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperPromo;