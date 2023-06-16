import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "./swiper.css";
import modalImg1 from "../../assets/modal1.jpg";
import modalImg2 from "../../assets/Modal_carga.jpg";
import modalImg3 from "../../assets/Modal_pasajeros.jpg";
import modalImg4 from "../../assets/Modal_conductores.jpg";
import modalImg5 from "../../assets/Modal_flota.jpg";
import resImg1 from "../../assets/swResponsive1.jpg";
import resImg2 from "../../assets/swResponsive2.jpg";
import resImg3 from "../../assets/swResponsive3.jpg";
import resImg4 from "../../assets/swResponsive4.jpg";
import resImg5 from "../../assets/swResponsive5.jpg";

const SwiperHome = (e) => {
  SwiperCore.use([Keyboard, Mousewheel]);
  const [inicialSlide, setInicialSlide] = useState(e.incialSlide);

  const swiperRef = useRef(null);
  useEffect(() => {
    setInicialSlide(e.incialSlide);
  }, [e.incialSlide]);

  return (
    <div
      style={{
        overflow: "hidden",
        alignItems: "center",
      }}
    >
      <Swiper
        centeredSlides={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        initialSlide={inicialSlide}
        mousewheel={true}
        ref={swiperRef}
        className="swiper_home"
      >
        <SwiperSlide className="swiper_home_slide">
          <img alt="swiper" src={modalImg1}></img>
          <div>
            <img alt="swiper" src={resImg1}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_home_slide">
          <img alt="swiper" src={modalImg2}></img>
          <div>
            <img alt="swiper" src={resImg2}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_home_slide">
          <img alt="swiper" src={modalImg3}></img>
          <div>
            <img alt="swiper" src={resImg3}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_home_slide">
          <img alt="swiper" src={modalImg4}></img>
          <div>
            <img alt="swiper" src={resImg4}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_home_slide">
          <img alt="swiper" src={modalImg5}></img>
          <div>
            <img alt="swiper" src={resImg5}></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHome;
