import { useState } from "react";
import NavbarGPS from "../../components/NavbarGPS";
import "./soluciones.css";
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
import Leads from "../../components/Leads/index";
import Footer from "../../components/Footer/index";
import Section_solutions from "../../components/Section_solutions/Section_solutions";
import GifLogo from "../../components/GifLogo";

export default function Soluciones() {

  let listData = [{
    "title": "VIDEO PARA",
    "subtitle": "Monitoreo vehicular",
    "image": camaraSoluciones,
    "text": "Ofrecemos diferentes opciones de cámaras para vehículos son la elección perfecta para garantizar la seguridad y eficiencia en tus operaciones de transporte. Permiten tener una vista completa del entorno de tu vehículo, detectando posibles peligros y evitar colisiones. Adaptadas para monitorear la calidad del transporte, verificando con imágenes los productos, las vías y la situación del conductor.",
    "imgf": Vigilancia_Vehicular1,
    "textradio": "Vigilancia vehícular"
  },

  {
    "title": "CALOR/FRIO",
    "subtitle": "Reporte cada minuto",
    "image": eyeSensor,
    "text": "Las Termocuplas son la solución perfecta para monitorear y medir temperaturas en tiempo real. Facilitando la necesidad de supervisar el rendimiento térmico de una máquina, la temperatura de un entorno, nuestras termocuplas/beacons te ofrecen una precisión inigualable y una fácil integración en tu sistema existente. Brindan seguridad en mediciones exactas y confiables en todo momento controlando la eficiencia de tu negocio.",
    "imgf": Temperatura_CarrosBG,
    "gif": gifNegativo,
    "textradio": "Control de temperatura"
  },

  {
    "title": "EQUIPO DE RASTREO",
    "subtitle": "Sistema de posición global",
    "image": FMB_120,
    "text": "Dispositivos aplicables a los equipos, para mayor pertinencia en el caso de uso y funciones extra.",
    "imgf": Rastreo,
    "gif": gifNegativo,
    "textradio": "Equipos de avanzada"

  },

  {
    "title": "PERSONALIZACIÓN",
    "subtitle": "ID única de usuario",
    "image": Llaves_Dallas,
    "text": "Dispositivos aplicables a los equipos, para mayor pertinencia en el caso de uso y funciones extra.",
    "imgf": PersonalizacionConductores,
    "gif": gifNegativo,
    "textradio": "Reconocimiento conductores"
  },

  {
    "title": "IDENTIFICACIÓN",
    "subtitle": "QR por persona/pasajero",
    "image": LECTOR_QR,
    "text": "Dispositivos aplicables a los equipos, para mayor pertinencia en el caso de uso y funciones extra.",
    "imgf": IdentificacionQR,
    "gif": gifNegativo,
    "textradio": "Identificación QR"
  }];

  const [data, setData] = useState(listData[0]);
  const [selectedRadio, setSelectedRadio] = useState(0);
  const HandleClick = (i) => {
    setSelectedRadio(i)
    setData(listData[i])
    console.log(i);
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
        <GifLogo />
        <div className="soluciones_buttons">
          <div className="monitoreo_buttons_solutions_trans">
            {listData.map((obj, index) => {
              return <div>
                <input checked={selectedRadio === index} onChange={() => { }} type="radio" name={"op" + index} onClick={() => HandleClick(index)} id={"btn" + index} />
                <label htmlFor={"btn" + index}>{obj.textradio}</label>
                <span className={selectedRadio === index ? "classspan" : "displaynone"}></span>
              </div>
            })}
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