import "./ButtonsSocialMedia.css"
import Iconob_whatsapp from "../../assets/Componentes/Iconos_botones/Iconob_whatsapp.svg"
import Iconob_youtubec from "../../assets/Componentes/Iconos_botones/Iconob_youtubec.svg"


export default function ButtonsSocialMedia() {

    return (
        <>
        <div className="equipos_section2_start_buttons">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg" target="_blank">
                <img className="icons" alt="youtube icon " src={Iconob_youtubec}></img>
                <p className="textContainerIcons">VIDEO DEL EQUIPO</p>
              </a>
              <a href=" https://wa.me/qr/HVC55BD4ZJMLH1" target="_blank">
                <img className="icons" alt="youtube icon " src={Iconob_whatsapp}></img>
                <p className="textContainerIcons">CHATEE CON NOSOTROS</p>
              </a>
            </div>
        </>
  
    )
}
