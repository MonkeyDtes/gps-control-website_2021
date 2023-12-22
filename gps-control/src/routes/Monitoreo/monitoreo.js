import NavbarGPS from "../../components/NavbarGPS";
import "./monitoreo.css";
import PlataformaPantallas from "../../assets/PlataformaPantallas.png";
import Pl_pantallas from "../../assets/Assets1/Plataforma de monitoreo/Pl_pantallas.png";
import GifGPS from "../../components/gifGPS/index";
import Leads from "../../components/Leads/index";
import Footer from "../../components/Footer/index";
import YoutubeEmbed from "../../components/youtubeVideos/index";
import SwiperPromo from "../../components/SwiperPromo";
import { useState } from "react";
import Camion from "../../components/camion";
import Modal from '@mui/material/Modal';
import SwiperHome from "../../components/SwiperHome/index";
import GifLogo from "../../components/GifLogo";

export default function Monitoreo() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [inicialSlide, setInicialSlide] = useState(0);
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const handleOpen = (value, setState) => {
    setInicialSlide(value);
    setState(true);
  };
  const handleClose = (setState) => setState(false);

  const ModalClick = (e) => {
    setModal(!modal);
    setInicialSlide(e.currentTarget.value);
    const body = document.getElementsByTagName("body");
    if (modal === false) {
      body[0].style.overflow = "hidden";
    } else {
      body[0].style.overflow = "auto";
    }
  };
  const ModalClick2 = (e) => {
    setModal2(!modal2);
    setInicialSlide(e.currentTarget.value);
    const body = document.getElementsByTagName("body");
    if (modal2 === false) {
      body[0].style.overflow = "hidden";
    } else {
      body[0].style.overflow = "auto";
    }
  };

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
        <GifLogo />
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
        <GifLogo />
        <Modal
          open={open}
          onClose={() => handleClose(setOpen)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="cont__camion__swiper">
            <SwiperPromo incialSlide={inicialSlide}></SwiperPromo>
            <div className="content__Camion">
              <Camion className="Camion"></Camion>
            </div>
          </div>
        </Modal>
        <div className="plataforma_section1_header">
          <div className="plataforma_sectionq_body_text_a1 plataforma_sectionq_body_text_a11">
            <button onClick={() => handleOpen(0, setOpen)}>
              MANTENIMIENTO PREVENTIVO Y CORRECTIVO
            </button>
          </div>
          <div className="plataforma_sectionq_body_text_a1 plataforma_sectionq_body_text_a12">
            <button onClick={() => handleOpen(1, setOpen)}>
              CONTROL Y CALIFICACIÓN DE CONDUCTORES
            </button>
          </div>
        </div>
        <div className="plataforma_section1_body">
          <div className="plataforma_section1_body_text plataforma_section1_body_text1">
            <div className="plataforma_sectionq_body_text_a2">
              <button onClick={() => handleOpen(5, setOpen)}>
                APAGADO REMOTO
              </button>
            </div>
            <div className="plataforma_sectionq_body_text_a2">
              <button onClick={() => handleOpen(6, setOpen)}>
                INFORMES A LA MEDIDA
              </button>
            </div>
          </div>
          <img className="img__pantallas" alt="pantallas plataforma" src={Pl_pantallas}></img>
          <div className="plataforma_section1_body_text plataforma_section1_body_text2">
            <div className="plataforma_sectionq_body_text_a plataforma_sectionq_body_text_a1">
              <button onClick={() => handleOpen(4, setOpen)}>
                GEOCERCAS
              </button>
            </div>
            <div className="plataforma_sectionq_body_text_a plataforma_sectionq_body_text_a2">
              <button onClick={() => handleOpen(3, setOpen)}>
                APLICACIÓN MÓVIL
              </button>
            </div>
            <div className="plataforma_sectionq_body_text_a plataforma_sectionq_body_text_a33">
              <button onClick={() => handleOpen(2, setOpen)}>
                PRE ALISTAMIENTO
              </button>
            </div>
          </div>
        </div>
        <div className="plataforma_sectionq_body_text_a3">
          <div>SEGUIMIENTO EN TIEMPO REAL</div>
        </div>
        <img alt="pantallas plataforma" src={Pl_pantallas}></img>
      </section>
      <Leads></Leads>
      <Footer></Footer>
    </div>
  );
}