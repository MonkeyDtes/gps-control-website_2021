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
import L_ecodriving from "../../assets/Componentes/Logos_aplicaciones/L_ecodriving.svg";
import iconoApps5 from "../../assets/iconoApps5.svg";
import Modalplataforma_fleetrun from "../../assets/Modales_plataforma/Modalplataforma_fleetrun.mp4";
import Modalplataforma_eco from "../../assets/Modales_plataforma/Modalplataforma_eco.mp4";
import Modalplataforma_enlist from "../../assets/Modales_plataforma/Modalplataforma_enlist.mp4";
import Modalplataforma_apagado from "../../assets/Modales_plataforma/Modalplataforma_apagado.mp4";
import Modalplataforma_googleplay from "../../assets/Modales_plataforma/Modalplataforma_googleplay.svg";
import Modalplataforma_aplicaciones from "../../assets/Modales_plataforma/Modalplataforma_aplicaciones.png";
import Camion from "../camion";
import Ondas from "../Ondas/Ondas";
import Modales_plataforma from "../Modales_plataforma/Modales_plataforma";

const SwiperPromo = (e) => {
  SwiperCore.use([Keyboard, Mousewheel]);
  const [inicialSlide, setInicialSlide] = useState(e.incialSlide);
  const swiperRef = useRef(null);
  const [dataB, setDataB] = useState([
    {
      imgCenter: iconoApps3,
      textRed: "Programa servicios técnicos y lleva trazabilidad sobre el mantenimiento de la flota:",
      videoRed: Modalplataforma_fleetrun,
      textWhite: ["Notificaciones", "Control especifico de cada unidad"],
      imgRed: false,
      videoWhite: false
    },
    {
      imgCenter: L_ecodriving,
      textRed: "Obtén informes sobre la calidad de conducción, en cada unidad de la flota, controlando:",
      videoRed: Modalplataforma_eco,
      textWhite: ["Consumo de combustible", "Chat con el conductor"],
      imgRed: false,
      videoWhite: false
    },
    {
      imgCenter: FleetResponsive,
      textRed: "App destinada al alistamiento pre-operativo, para verificar el estado del vehículo y dejar reportes antes de los viajes: ",
      videoRed: Modalplataforma_enlist,
      textWhite: ["Exportar datos", "App móvil y web", "Cuenta para supervisores"],
      imgRed: false,
      videoWhite: false
    },
    {
      imgCenter: Modalplataforma_googleplay,
      textRed: "Nuestra plataforma cuenta con una versión descargable para seguir monitoreando fuera de la versión web:",
      videoRed: false,
      textWhite: ["Datos de la plataforma", "Diseño  familiar en la plataforma web y móvil"],
      imgRed: Modalplataforma_aplicaciones,
      videoWhite: false
    },
    {
      imgCenter: false,
      textRed: "Las geocercas o cercas geográficas son áreas determinadas en el mapa que se utilizan para controlar el movimiento de unidades dentro de estas áreas o fuera de ellas:",
      videoRed: false,
      textWhite: ["Tecnología geográfica", "Posibilidad de agrupar zonas del mapa"],
      imgRed: false,
      videoWhite: true
    },
    {
      imgCenter: false,
      textRed: "Dispositivos aplicables a los equipos, para mayor pertinencia en el caso de uso y funciones extra:",
      videoRed: Modalplataforma_apagado,
      textWhite: ["Tecnología precisa", "Soporte constante"],
      imgRed: false,
      videoWhite: false
    },
    {
      imgCenter: false,
      textRed: "Posibilidades de exportar y analizar diferentes tipos de métricas, según los dispositivos instalados:",
      videoRed: Modalplataforma_fleetrun,
      textWhite: ["Llenados de combustible", "Informes de viajes", "Estadísticas de la flota"],
      imgRed: true,
      videoWhite: false
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
      </Swiper>
    </div>
  );
};

export default SwiperPromo;
