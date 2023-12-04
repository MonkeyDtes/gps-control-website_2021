import { useState } from "react";
import iconoApps3 from "../../assets/iconoApps3.svg";
import Modalplataforma_fleetrun from "../../assets/Modales_plataforma/Modalplataforma_fleetrun.mp4";
import Camion from "../camion";
import Ondas from "../Ondas/Ondas";
import { useEffect } from "react";

function Modales_plataforma({data}) {
    console.log(data);
    console.log(data.textWhite);
    const [dataA,setDataA] = useState(data);
    useEffect(()=>{
        setDataA(data);
    },[data])
    return <div className="swiper_promo_slide">
        <div className="container__img__swiper">
            <img className="grid__container__img__swiper" src={dataA.imgCenter} alt="" />
        </div>
        <div className="swiper_promo_slide_red">
            {/* <img alt="fleet img" src={FleetImg}></img> */}
            {/* <p className="hr-c"><hr /></p> */}
            <p className="text--slideWhite__home">{dataA.textRed}</p>
            <div className="cont__video__modal">
                <video autoPlay loop className="video__modal" src={dataA.videoRed}></video>
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