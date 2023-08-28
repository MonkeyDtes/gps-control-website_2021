import Group71 from "../../assets/Group71.png";
import Group73 from "../../assets/Group73.svg";
import Frame3 from "../../assets/Frame3.png";
import Frame4 from "../../assets/Frame4.png";
import flecha from "../../assets/FLECHA_SELECT.svg";
import "./plataforma.css"
export default function Plataforma() {

    return <section className="platform">

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
                <img src={Group71} className="vehiculo" alt="camionesdos"></img>
            </div>
            <div className="content__form-platform">
                <form>
                    <div className="content__form">
                        <p>OBTÉN UNA ASESORÍA COMPLETA CON NUESTROS EXPERTOS</p>
                        <input placeholder="Nombre completo" type="text" name="name" />
                        <input placeholder="Correo electrónico" type="text" name="name" />
                        <input placeholder="Número de teléfono" type="text" name="name" />
                        <div className="content__form-select">
                            <select>
                                <option>Departamento</option>
                            </select>
                            <img src={flecha} />
                        </div>
                        <div className="content__form-texarea">
                            <textarea rows="5" cols="33" placeholder="Describe tu solicitud">
                            </textarea>
                        </div>
                        <div className="content__button-form">
                            <img src={Frame3} className="img-bottom" alt="b"></img>
                            <p>www.gpscontrol.co</p>
                            <button>Enviar</button>
                        </div>
                    </div>
                </form>
                <img src={Group73} className="img_bg_left" alt="camiones" />
                <img src={Frame4} className="gato" alt="a"></img>
            </div>
        </div>

    </section>
}