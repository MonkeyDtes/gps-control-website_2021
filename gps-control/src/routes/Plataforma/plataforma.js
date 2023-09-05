import carro from "../../assets/carro.svg";
import Group73 from "../../assets/Group73.svg";
import Frame4 from "../../assets/Frame4.png";
import Group721 from "../../assets/Group721.svg";
import bg_bolitas from "../../assets/bg_bolitas.png"
import "./plataforma.css"
import Form from "../../components/Form";
export default function Plataforma() {

    return <section className="platform">
        <div className="platform__back">
            <img src={bg_bolitas}></img>
        </div>
        <img className="img1" src={Group721}></img>
        <div className="platform__title">
            <h1>¿Buscas un rastreador gps para vehículos?</h1>
            <h2>¡TENEMOS MÁS QUE ESO!</h2>
        </div>
        <div className="platform__content">
            <div className="content__info-platform">
                <div className="info__platform-container-text">
                    <div className="info__platform-container-back"></div>
                    <p>Controla de forma integral tu operación logística, monitorea en tiempo real tu flota, ahorra tiempos de gestión y reduce costos.</p>
                </div>
            </div>
            <div className="cont-vehicule-n">
                <img src={carro} className="vehiculo" alt="camionesdos"></img>
            </div>
            <div className="cont1form">
                <Form></Form>
            </div>
        </div>
        <img src={Group73} className="img_bg_left" alt="camiones" />
        <img src={Frame4} className="gato" alt="a"></img>

    </section>
}