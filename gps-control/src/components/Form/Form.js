import Frame3 from "../../assets/Frame3.png";
import flecha from "../../assets/FLECHA_SELECT.svg";
import "./Form.css"
export default function Form() {
    return (
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
                    <div className="content__link">
                        <img src={Frame3} className="img-bottom" alt="b"></img>
                        <a href="https://gpscontrolcolombia.com/">www.gpscontrol.co</a>
                    </div>
                    <button>Enviar</button>
                </div>
            </div>
        </form>)
}