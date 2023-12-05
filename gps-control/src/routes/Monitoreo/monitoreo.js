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
import Camion from "../../components/camion/index";
import Modal from '@mui/material/Modal';
import SwiperHome from "../../components/SwiperHome/index";

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
  // const [modal, setModal] = useState(false)
  // const [inicialSlide, setInicialSlide] = useState(false)

  // const ModalClick = (e) => {
  //   setModal(!modal)
  //   setInicialSlide(e.currentTarget.value);
  //   const body = document.getElementsByTagName("body");
  //   if (modal === false) {
  //     body[0].style.overflow = "hidden";
  //   } else {
  //     body[0].style.overflow = "auto";
  //   }
  // }
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
        <Modal
          open={open}
          onClose={() => handleClose(setOpen)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <SwiperPromo incialSlide={inicialSlide}></SwiperPromo>
        </Modal>
        {/* {modal ? (
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
        )} */}
        <div className="plataforma_section1_header">
          <div className="plataforma_sectionq_body_text_a1">
            <button onClick={() => handleOpen(0, setOpen)}>
              MANTENIMIENTO PREVENTIVO Y CORRECTIVO
            </button>
            {/* <button value={0} onClick={(e) => ModalClick(e)}>MANTENIMIENTO PREVENTIVO Y CORRECTIVO</button> */}
          </div>
          <div className="plataforma_sectionq_body_text_a1">
            <button onClick={() => handleOpen(3, setOpen)}>
              CONTROL Y CALIFICACIÓN DE CONDUCTORES
            </button>
            {/* <button value={1} onClick={(e) => ModalClick(e)}>CONTROL Y CALIFICACIÓN DE CONDUCTORES</button> */}
          </div>
        </div>
        <div className="plataforma_section1_body">
          <div className="plataforma_section1_body_text">
            <div className="plataforma_sectionq_body_text_a2">
              <button onClick={() => handleOpen(2, setOpen)}>
                APAGADO REMOTO
              </button>
              {/* <button value={2} onClick={(e) => ModalClick(e)}>APAGADO REMOTO</button> */}
            </div>
            <div className="plataforma_sectionq_body_text_a2">
              <button onClick={() => handleOpen(2, setOpen)}>
                INFORMES A LA MEDIDA
              </button>
              {/* <button value={3} onClick={(e) => ModalClick(e)}>INFORMES A LA MEDIDA</button> */}
            </div>
          </div>
          <img className="img__pantallas" alt="pantallas plataforma" src={Pl_pantallas}></img>
          <div className="plataforma_section1_body_text">
            <div className="plataforma_sectionq_body_text_a">
              <button onClick={() => handleOpen(2, setOpen)}>
                GEOCERCAS
              </button>
              {/* <button value={4} onClick={(e) => ModalClick(e)}>GEOCERCAS</button> */}
            </div>
            <div className="plataforma_sectionq_body_text_a">
              <button onClick={() => handleOpen(2, setOpen)}>
                APLICACIÓN MÓVIL
              </button>
              {/* <button value={5} onClick={(e) => ModalClick(e)}>APLICACIÓN MÓVIL</button> */}
            </div>
            <div className="plataforma_sectionq_body_text_a">
              <button onClick={() => handleOpen(2, setOpen)}>
                PRE ALISTAMIENTO
              </button>
              {/* <button value={6} onClick={(e) => ModalClick(e)}>PRE ALISTAMIENTO</button> */}
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