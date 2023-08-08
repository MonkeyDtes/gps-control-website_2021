import "./ButtonsSocialMedia.css"
import ytIcon from "../../assets/ytRed.svg";
import waIcon from "../../assets/waRed.svg";


export default function ButtonsSocialMedia() {

    return (
        <>
        <div className="equipos_section2_start_buttons">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg" target="_blank">
                <img className="icons" alt="youtube icon " src={ytIcon}></img>
                <p className="textContainerIcons">VIDEO DEL EQUIPO</p>
              </a>
              <a href=" https://wa.me/qr/HVC55BD4ZJMLH1">
                <img className="icons" alt="youtube icon " src={waIcon}></img>
                <p className="textContainerIcons">CHATEE CON NOSOTROS</p>
              </a>
            </div>
        </>
  
    )
}
