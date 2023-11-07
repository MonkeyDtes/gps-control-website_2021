import NavbarGPS from "../../components/NavbarGPS";
import "./monitoreo.css";
import PlataformaPantallas from "../../assets/PlataformaPantallas.png";
import GifGPS from "../../components/gifGPS/index";
import Leads from "../../components/Leads/index";
import Footer from "../../components/Footer/index";
import YoutubeEmbed from "../../components/youtubeVideos/index";
import SwiperPromo from "../../components/SwiperPromo";
import { useState } from "react";
import Camion from "../../components/camion/index";

export default function Monitoreo() {
  const [modal, setModal] = useState(false)
  const [inicialSlide, setInicialSlide] = useState(false)

  const ModalClick = (e) => {
    setModal(!modal)
    setInicialSlide(e.currentTarget.value);
    const body = document.getElementsByTagName("body");
    if (modal === false) {
      body[0].style.overflow = "hidden";
    } else {
      body[0].style.overflow = "auto";
    }
  }
  return (
    <div>
      <NavbarGPS
        Home={false}
        Plataforma={true}
        Equipos={false}
        transporte={false}
        Apps={false}
        Promociones={false}
      ></NavbarGPS>
      <GifGPS type="2"></GifGPS>
      <section className="plataforma_section2">
        <YoutubeEmbed embedId="NPZ9K4G9Z9w"></YoutubeEmbed>
        <div className="plataforma_section2_body">
          <div className="plataforma_section2_body_line"></div>
          <h6>
            Esta aplicación conecta los dispositivos móviles como herramientas
            de rastreo, permite hacer seguimiento de diferentes tareas y
            controla su ejecución de forma remota.
          </h6>
          <div className="plataforma_section2_body_ticket">MONITOREO VEHICULAR</div>
          <div className="plataforma_section2_body_ticket">SEGUIMIENTO GPS</div>
          <div className="plataforma_section2_body_ticket">MONITOREO FLOTAS DE VEHICULOS</div>
        </div>
      </section>
      <section className="plataforma_section1">
        {modal ? (
          <>
            <div onClick={ModalClick} className="modal_home"></div>
            <div className="modal_home_fade">
              <SwiperPromo incialSlide={inicialSlide}></SwiperPromo>
              <div className="Camion">
                <Camion className="Camion"></Camion>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="plataforma_section1_header">
          <div className="plataforma_sectionq_body_text_a1">
            <button value={0} onClick={(e) => ModalClick(e)}>MANTENIMIENTO PREVENTIVO Y CORRECTIVO</button>
          </div>
          <div className="plataforma_sectionq_body_text_a1">
            <button value={1} onClick={(e) => ModalClick(e)}>CONTROL Y CALIFICACIÓN DE CONDUCTORES</button>
          </div>
        </div>
        <div className="plataforma_section1_body">
          <div className="plataforma_section1_body_text">
            <div className="plataforma_sectionq_body_text_a2">
              <button value={2} onClick={(e) => ModalClick(e)}>APAGADO REMOTO</button>
            </div>
            <div className="plataforma_sectionq_body_text_a2">
              <button value={3} onClick={(e) => ModalClick(e)}>INFORMES A LA MEDIDA</button>
            </div>
          </div>
          <img alt="pantallas plataforma" src={PlataformaPantallas}></img>
          <div className="plataforma_section1_body_text">
            <div className="plataforma_sectionq_body_text_a">
              <button value={4} onClick={(e) => ModalClick(e)}>GEOCERCAS</button>
            </div>
            <div className="plataforma_sectionq_body_text_a">
              <button value={5} onClick={(e) => ModalClick(e)}>APLICACIÓN MÓVIL</button>
            </div>
            <div className="plataforma_sectionq_body_text_a">
              <button value={6} onClick={(e) => ModalClick(e)}>PRE ALISTAMIENTO</button>
            </div>
          </div>
        </div>
        <div className="plataforma_sectionq_body_text_a3">
          <div>SEGUIMIENTO EN TIEMPO REAL</div>
        </div>
        <img alt="pantallas plataforma" src={PlataformaPantallas}></img>
      </section>
      <Leads></Leads>
      <Footer></Footer>
    </div>
  );
}
