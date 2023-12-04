import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "./swiper.css";
import FleetImg from "../../assets/Fleet-img.png";
import FleetText from "../../assets/Fleet-txt.png";
import EcoImg from "../../assets/Eco-img.png";
import EcoText from "../../assets/Eco-txt.png";
import EnlistImg from "../../assets/Enlist-img.png";
import EnlistText from "../../assets/Enlist-txt.png";
import PlataformaImg from "../../assets/Plataforma-img.png";
import PlataformaText from "../../assets/Plataforma-txt.png";
import GeocercasImg from "../../assets/Geocercas-img.png";
import GeocercasText from "../../assets/Geocercas-txt.png";
import ApagadoImg from "../../assets/Apagado-img.png";
import ApagadoText from "../../assets/Apagado-txt.png";
import InformesImg from "../../assets/Informes-img.png";
import InformesText from "../../assets/Informes-txt.png";
import ApagadoResponsive from "../../assets/Apagado-responsive.png";
import FleetResponsive from "../../assets/Fleet-responsive.png";
import EcoResponsive from "../../assets/Eco-responsive.png";
import EnlistResponsive from "../../assets/Enlist-responsive.png";
import PlataformaResponsive from "../../assets/Plataforma-responsive.png";
import GeocercasResponsive from "../../assets/Geocercas-responsive.png";
import InformesResponsive from "../../assets/Informes-responsive.png";
import iconoApps3 from "../../assets/iconoApps3.svg";
import iconoApps5 from "../../assets/iconoApps5.svg";
import Modalplataforma_fleetrun from "../../assets/Modales_plataforma/Modalplataforma_fleetrun.mp4";
import Camion from "../camion";
import Ondas from "../Ondas/Ondas";
import Modales_plataforma from "../Modales_plataforma/Modales_plataforma";

const SwiperPromo = (e) => {
  SwiperCore.use([Keyboard, Mousewheel]);
  const [inicialSlide, setInicialSlide] = useState(e.incialSlide);
  const swiperRef = useRef(null);
  const [dataB,setDataB] = useState([
    {
      imgCenter: iconoApps3,
      textRed: "Programa servicios técnicos y lleva trazabilidad sobre el mantenimiento de la flota:",
      videoRed: Modalplataforma_fleetrun,
      textWhite: ["Notificaciones", "Control especifico de cada unidad"]
    },
    {
      imgCenter: iconoApps3,
      textRed: "Programa servicios técnicos y lleva trazabilidad sobre el mantenimiento de la flota:",
      videoRed: Modalplataforma_fleetrun,
      textWhite: ["Notificaciones", "Control especifico de cada unidad"]
    },
    {
      imgCenter: iconoApps3,
      textRed: "Programa servicios técnicos y lleva trazabilidad sobre el mantenimiento de la flota:",
      videoRed: Modalplataforma_fleetrun,
      textWhite: ["Notificaciones", "Control especifico de cada unidad"]
    },
    {
      imgCenter: iconoApps3,
      textRed: "Programa servicios técnicos y lleva trazabilidad sobre el mantenimiento de la flota:",
      videoRed: Modalplataforma_fleetrun,
      textWhite: ["Notificaciones", "Control especifico de cada unidad"]
    }
  ])
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
        touchRatio={0}
        centeredSlides={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        initialSlide={inicialSlide}
        mousewheel={true}
        ref={swiperRef}
        loop={true}
        className="swiper_home_m"
      >
        {dataB.map((obj) => {
          return <SwiperSlide className="content__swiper">
            <Modales_plataforma data={obj} />
            {/* <img alt="responsive" src={FleetResponsive}></img> */}
          </SwiperSlide>
        })}
        {/* <SwiperSlide className="swiper_promo_slide">
          <div className="swiper_promo_slide_white">
            <img alt="fleet img" src={EcoImg}></img>
            <img src={iconoApps5} alt="" />
          </div>
          <div className="swiper_promo_slide_red">
            
            <div className="content--slideRed__monitoreo">
              <p>Consumo de combustible</p>
              <p>Chat con el conductor</p>
            </div>
          </div>
          <img alt="responsive" src={EcoResponsive}></img>
        </SwiperSlide>
        <SwiperSlide className="swiper_promo_slide">
          <div className="swiper_promo_slide_white">
            <img alt="fleet img" src={EnlistImg}></img>
          </div>
          <div className="swiper_promo_slide_red">
            
            <div className="content--slideRed__monitoreo">
              <p>Exportar datos</p>
              <p>App móvil y web</p>
              <p>Cuenta para supervisores</p>
            </div>
          </div>
          <img alt="responsive" src={EnlistResponsive}></img>
        </SwiperSlide>
        <SwiperSlide className="swiper_promo_slide">
          <div className="swiper_promo_slide_white">
            <img alt="fleet img" src={PlataformaImg}></img>
          </div>
          <div className="swiper_promo_slide_red">
           
            <div className="content--slideRed__monitoreo">
              <p>Datos de la plataforma</p>
              <p>Diseño  familiar en la
                plataforma web y móvil</p>
            </div>
          </div>
          <img alt="responsive" src={PlataformaResponsive}></img>
        </SwiperSlide>
        <SwiperSlide className="swiper_promo_slide">
          <div className="swiper_promo_slide_white">
            <img alt="fleet img" src={GeocercasImg}></img>
          </div>
          <div className="swiper_promo_slide_red">
            
            <div className="content--slideRed__monitoreo">
              <p>Tecnología geográfica</p>
              <p>Posibilidad de agrupar
                zonas del mapa</p>
            </div>
          </div>
          <img alt="responsive" src={GeocercasResponsive}></img>
        </SwiperSlide>
        <SwiperSlide className="swiper_promo_slide">
          <div className="swiper_promo_slide_white">
            <img alt="fleet img" src={ApagadoImg}></img>
          </div>
          <div className="swiper_promo_slide_red">
            <img alt="fleet text" src={ApagadoText}></img>
          </div>
          <img alt="responsive" src={ApagadoResponsive}></img>
        </SwiperSlide>
        <SwiperSlide className="swiper_promo_slide">
          <div className="swiper_promo_slide_white">
            <img alt="fleet img" src={InformesImg}></img>
          </div>
          <div className="swiper_promo_slide_red">
            <img alt="fleet text" src={InformesText}></img>
          </div>
          <img alt="responsive" src={InformesResponsive}></img>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default SwiperPromo;
