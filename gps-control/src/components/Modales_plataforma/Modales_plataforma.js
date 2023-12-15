import { useState } from "react";
import iconoApps3 from "../../assets/iconoApps3.svg";
import Modalplataforma_fleetrun from "../../assets/Modales_plataforma/Modalplataforma_fleetrun.mp4";
import Camion from "../camion";
import Ondas from "../Ondas/Ondas";
import { useEffect } from "react";
import "./Modales_plataforma.css"

function Modales_plataforma({ data }) {
    const [dataA, setDataA] = useState(data);
    useEffect(() => {
        setDataA(data);
    }, [data])
    return <div className="swiper_promo_slide">
        {/* <div className="content__hr">
            <p className="hr-c"><hr /></p>
        </div> */}
        {dataA.imgCenter ?
            <div className="container__img__swiper">
                <img className="grid__container__img__swiper" src={dataA.imgCenter} alt="" />
            </div> : ''
        }
        <div className="swiper_promo_slide_red">
            <p className={dataA.videoRed || dataA.imgRed ? "text--slideWhite__home" : "text--slideWhite__home_big"}>{dataA.textRed}</p>
            
            <div className={dataA.videoRed || dataA.imgRed ? "cont__video__modal" : "display--none"}>
                {dataA.videoRed ? <video autoPlay loop className="video__modal" src={dataA.videoRed}></video>:""}
                {dataA.imgRed ? <img className="imgRed__modal" src={dataA.imgRed}/>:""}
            </div>
        </div>
        <div className="swiper_promo_slide_white">
            <div className="content--slideRed__monitoreo">
                {dataA.textWhite.map((el) => {
                    return <div className="content__p">
                        <Ondas />
                        <p>{el}</p>
                    </div>
                })}
            </div>
            <div className="content__Camion">
                <Camion className="Camion"></Camion>
            </div>
        </div>
    </div>
}

export default Modales_plataforma;