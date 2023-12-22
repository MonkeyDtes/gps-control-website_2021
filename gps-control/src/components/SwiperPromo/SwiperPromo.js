import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "./swiper.css";
import iconoApps3 from "../../assets/iconoApps3.svg";
import L_ecodriving from "../../assets/Componentes/Logos_aplicaciones/L_ecodriving.svg";
import Modalplataforma_fleetrun from "../../assets/Modales_plataforma/Modalplataforma_fleetrun.mp4";
import Modalplataforma_eco from "../../assets/Modales_plataforma/Modalplataforma_eco.mp4";
import Modalplataforma_enlist from "../../assets/Modales_plataforma/Modalplataforma_enlist.mp4";
import Modalplataforma_apagado from "../../assets/Modales_plataforma/Modalplataforma_apagado.mp4";
import Modalplataforma_googleplay from "../../assets/Modales_plataforma/Modalplataforma_googleplay.svg";
import Modalplataforma_enlist1 from "../../assets/Modales_plataforma/Modalplataforma_enlist.svg";
import Modalplataforma_aplicaciones from "../../assets/Modales_plataforma/Modalplataforma_aplicaciones.png";
import Imagen_modal_geocerca from "../../assets/Modales_plataforma/Imagen_modal_geocerca.png";
import Pantallas_llenados from "../../assets/Modales_plataforma/Pantallas_llenados.png";
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
      imgRed: false
    },
    {
      imgCenter: L_ecodriving,
      textRed: "Obtén informes sobre la calidad de conducción, en cada unidad de la flota, controlando:",
      videoRed: Modalplataforma_eco,
      textWhite: ["Consumo de combustible", "Chat con el conductor"],
      imgRed: false
    },
    {
      imgCenter: Modalplataforma_enlist1,
      textRed: "App destinada al alistamiento pre-operativo, para verificar el estado del vehículo y dejar reportes antes de los viajes: ",
      videoRed: Modalplataforma_enlist,
      textWhite: ["Exportar datos", "App móvil y web", "Cuenta para supervisores"],
      imgRed: false
    },
    {
      imgCenter: Modalplataforma_googleplay,
      textRed: "Nuestra plataforma cuenta con una versión descargable para seguir monitoreando fuera de la versión web:",
      videoRed: false,
      textWhite: ["Datos de la plataforma", "Diseño  familiar en la plataforma web y móvil"],
      imgRed: Modalplataforma_aplicaciones
    },
    {
      imgCenter: false,
      textRed: "Las geocercas o cercas geográficas son áreas determinadas en el mapa que se utilizan para controlar el movimiento de unidades dentro de estas áreas o fuera de ellas:",
      videoRed: false,
      textWhite: ["Tecnología geográfica", "Posibilidad de agrupar zonas del mapa"],
      imgRed: Imagen_modal_geocerca
    },
    {
      imgCenter: false,
      textRed: "Dispositivos aplicables a los equipos, para mayor pertinencia en el caso de uso y funciones extra:",
      videoRed: Modalplataforma_apagado,
      textWhite: ["Tecnología precisa", "Soporte constante"],
      imgRed: false
    },
    {
      imgCenter: false,
      textRed: "Posibilidades de exportar y analizar diferentes tipos de métricas, según los dispositivos instalados:",
      videoRed: false,
      textWhite: ["Llenados de combustible", "Informes de viajes", "Estadísticas de la flota"],
      imgRed: Pantallas_llenados
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
        gridColumn: "1/9",
        gridRow: "1/12"
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
        {dataB.map((obj, i) => {
          return <SwiperSlide key={i} className="content__swiper">
            <Modales_plataforma data={obj} />
          </SwiperSlide>
        })}
      </Swiper>
    </div>
  );
};

export default SwiperPromo;
