import { useState } from "react";
import NavbarGPS from "../../components/NavbarGPS";
import "./soluciones.css";
import navbarNube from "../../assets/navbarNube.svg";
import camaraSoluciones from "../../assets/camaraSoluciones.png";
import eyeSensor from "../../assets/eyeSensor.png";
import FMB_120 from "../../assets/FMB_120.png";
import Llaves_Dallas from "../../assets/Llaves_Dallas.png";
import PersonalizacionConductores from "../../assets/PersonalizacionConductores.png";
import Vigilancia_Vehicular1 from "../../assets/Vigilancia_Vehicular1.png";
import Temperatura_CarrosBG from "../../assets/Temperatura_CarrosBG.png";
import IdentificacionQR from "../../assets/IdentificacionQR.png";
import gifNegativo from "../../assets/gifNegativo.gif";
import LECTOR_QR from "../../assets/LECTOR_QR.png";
import Rastreo from "../../assets/Rastreo.png";
import circulosRojos from "../../assets/circulosRojos.svg";
import usuariosSoluciones from "../../assets/usuariosSoluciones.svg";
import wifiHorizontal from "../../assets/wifiHorizontal.svg";
import GifGPS from "../../components/gifGPS/index";
import Leads from "../../components/Leads/index";
import Footer from "../../components/Footer/index";
import termometro from "../../assets/termometro.svg";
import Vector4 from "../../assets/Vector4.svg";
import Section_solutions from "../../components/Section_solutions/Section_solutions";

export default function Soluciones() {

  let listData = [{
    "title": "VIDEO PARA",
    "subtitle": "Monitoreo vehicular",
    "image": camaraSoluciones,
    "text": "Ofrecemos diferentes opciones de cámaras para vehículos son la elección perfecta para garantizar la seguridad y eficiencia en tus operaciones de transporte. Permiten tener una vista completa del entorno de tu vehículo, detectando posibles peligros y evitar colisiones. Adaptadas para monitorear la calidad del transporte, verificando con imágenes los productos, las vías y la situación del conductor.",
    "imgf": Vigilancia_Vehicular1
  },

  {
    "title": "CALOR/FRIO",
    "subtitle": "Reporte cada minuto",
    "image": eyeSensor,
    "text": "Las Termocuplas son la solución perfecta para monitorear y medir temperaturas en tiempo real. Facilitando la necesidad de supervisar el rendimiento térmico de una máquina, la temperatura de un entorno, nuestras termocuplas/beacons te ofrecen una precisión inigualable y una fácil integración en tu sistema existente. Brindan seguridad en mediciones exactas y confiables en todo momento controlando la eficiencia de tu negocio.",
    "imgf": Temperatura_CarrosBG,
    "gif": gifNegativo
  },

  {
    "title": "EQUIPO DE RASTREO",
    "subtitle": "Sistema de posición global",
    "image": FMB_120,
    "text": "Dispositivos aplicables a los equipos, para mayor pertinencia en el caso de uso y funciones extra.",
    "imgf": Rastreo,
    "gif": gifNegativo

  },

  {
    "title": "PERSONALIZACIÓN",
    "subtitle": "ID única de usuario",
    "image": Llaves_Dallas,
    "text": "Dispositivos aplicables a los equipos, para mayor pertinencia en el caso de uso y funciones extra.",
    "imgf": PersonalizacionConductores,
    "gif": gifNegativo
  },

  {
    "title": "IDENTIFICACIÓN",
    "subtitle": "QR por persona/pasajero",
    "image": LECTOR_QR,
    "text": "Dispositivos aplicables a los equipos, para mayor pertinencia en el caso de uso y funciones extra.",
    "imgf": IdentificacionQR,
    "gif": gifNegativo
  }];

  const [data, setData] = useState(listData[0]);
  const HandleClick = (e) => {
    setData(listData[e.target.id.slice(-1)])
    console.log(listData[e.target.id]);
  };


  return (
    <div>
      <NavbarGPS
        Home={false}
        Plataforma={false}
        Equipos={false}
        transporte={true}
        Apps={false}
        Promociones={false}
      ></NavbarGPS>

      {/*<GifGPS type="2"></GifGPS>*/}

      {/*-----------------------------------------------------------------*/}

      <section className="soluciones_section">
        <div className="soluciones_buttons">

          <div>
            <input type="radio" name="op1" onClick={(e) => HandleClick(e)} id="radio0" />
            <label htmlFor="radio0">Vigilancia vehicular</label>
          </div>
          {/*
          <div className="apps_button_check">
            <div className="dot"></div>
          </div>
           */}
          <div>
            <input type="radio" name="op1" onClick={(e) => HandleClick(e)} id="radio1" />
            <label htmlFor="radio1">Control de temperatura</label>
          </div>

          <div>
            <input type="radio" name="op1" onClick={(e) => HandleClick(e)} id="radio2" />
            <label htmlFor="radio2">Equipos de avanzada</label>
          </div>

          <div>
            <input type="radio" name="op1" onClick={(e) => HandleClick(e)} id="radio3" />
            <label htmlFor="radio3">Reconocimiento conductores</label>
          </div>

          <div>
            <input type="radio" name="op1" onClick={(e) => HandleClick(e)} id="radio4" />
            <label htmlFor="radio4">Identificación QR</label>
          </div>
        </div>

        {/*----------------------------------------------------------------- */}
        <div className="soluciones_slides">
          <Section_solutions data={data}></Section_solutions>
        </div>
        <div className="cont--side__rigth">
        </div>
      </section>



      <Leads></Leads>
      <Footer></Footer>
    </div>
  );
}
