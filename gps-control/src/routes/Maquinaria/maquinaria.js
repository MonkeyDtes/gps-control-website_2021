import Form from "../../components/Form";
import excavadora2 from "../../assets/excavadora2.png";
import heavyExcavator from "../../assets/heavyExcavator.png";
import excavator from "../../assets/excavator.png";
import Group73 from "../../assets/Group73.png";
import Vector8 from "../../assets/Vector8.png";
import Frame4 from "../../assets/Frame4.png";
import Group from "../../assets/Group.png";
import constructionCity from "../../assets/constructionCity.png";
import particles from "../../assets/back_particulas.svg"
import "./maquinaria.css"
import "../../components/Form/Form.css"
export default function Plataforma() {
    return <section className="maquinaria">
        <img className="bg-maq bg_constructionCity" src={constructionCity}></img>
        <img className="bg-maq bg_particles" src={particles}></img>
        <img className="bg-maq Group" src={Group}></img>
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

            </div>
            <img className="vehiculo" src={excavadora2}></img>
            <div className="cont1form">
                <div className="container__form">
                    <Form></Form>
                </div>
            </div>
        </div>
        <img src={Frame4} className="gato" alt="a"></img>
    </section>
}