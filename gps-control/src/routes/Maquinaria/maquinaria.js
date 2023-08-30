import Form from "../../components/Form";
import excavadora2 from "../../assets/excavadora2.png";
import heavyExcavator from "../../assets/heavyExcavator.png";
import excavator from "../../assets/excavator.png";
import Group73 from "../../assets/Group73.png";
import Vector8 from "../../assets/Vector8.png";
import Frame4 from "../../assets/Frame4.png";
import "./maquinaria.css"
import "../../components/Form/Form.css"
export default function Plataforma() {
    return <section className="maquinaria">
        <div className="title__maquinaria">
        <h1>¡QUE NO INMOVILICEN TU MÁQUINA AMARILLA!</h1>

        </div>
        <div className="container__elements-maquinaria">
        <div className="container__info">
                <img className="container__info-img1" src={excavator}></img>
                <img src={heavyExcavator}></img>
                </div>
            <div className="container1__elemnts">
            <img className="container__elements-img" src={Vector8}></img>
            <div className="info__maquinaria-container-text">
                    <div className="info__maquinaria-container-back"></div>
                    <p>toda Maquinaria Amarilla debe contar por ley con un GPS. #GPSControl SOMOS PROVEEDORES AUTORIZADOS por la Policía Nacional de Colombia para la prestación de SERVICIOS DE POSICIONAMIENTO GLOBAL (GPS) para Maquinaria Amarilla.</p>
                    <div className="mixb"></div>
                    <img className="imgCont" src={Group73}></img>
                </div>
                <img className="vehiculo" src={excavadora2}></img>
            </div>
            <div className="container__form">
            <Form></Form>
            <img src={Frame4} className="gato" alt="a"></img>

            </div>

        </div>

    </section>
}