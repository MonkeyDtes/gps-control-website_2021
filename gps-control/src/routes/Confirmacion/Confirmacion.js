import MONTAJE_PANTALLAS_PLAT6 from "../../assets/MONTAJE_PANTALLAS_PLAT6.png";
import Email from "../../assets/Email.svg";
import Group68 from "../../assets/Group68.svg"
import "./Confirmacion.css"
export default function Confirmacion() {
    return <section className="confirmation">
        <div className="content1__confirmation-red">
            <img src={Email}></img>
            <p>Correo enviado</p>
        </div>

        <div className="content2__confirmation-info">
            <div className="content-text">
                <h2>¡gracias!</h2>
                <p className="content2__container-blue">EN UN MOMENTO UNO DE NUESTROS EXPERTOS TE CONTACTARÁ</p>
                <div className="mediamovile">
                    <p className="p1">EN UN MOMENTO</p>
                    <p className="p2">UNO DE NUESTROS</p>
                    <p className="p3">EXPERTOS TE CONTACTARÁ</p>
                </div>
                <img className="pantallas" src={MONTAJE_PANTALLAS_PLAT6}></img>
                <img src={Group68}></img>
            </div>

        </div>
    </section>
}