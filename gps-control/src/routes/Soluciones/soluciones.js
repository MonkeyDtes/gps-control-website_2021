import { useState } from "react";
import NavbarGPS from "../../components/NavbarGPS";
import "./soluciones.css"
import navbarNube from "../../assets/navbarNube.svg"
import camaraSoluciones from "../../assets/camaraSoluciones.svg"
import eyeSensor from "../../assets/eyeSensor.svg"
import FMB_120 from "../../assets/FMB_120.svg"
import Llaves_Dallas from "../../assets/Llaves_Dallas.svg"
import LECTOR_QR from "../../assets/LECTOR_QR.svg"
import circulosRojos from "../../assets/circulosRojos.svg"
import usuariosSoluciones from "../../assets/usuariosSoluciones.svg"
import wifiHorizontal from "../../assets/wifiHorizontal.svg"
import GifGPS from "../../components/gifGPS/index";
import Leads from "../../components/Leads/index";
import Footer from "../../components/Footer/index";
export default function Soluciones(){
    const [button1, setButton1] = useState(true)
    const [button2, setButton2] = useState(false)
    const [button3, setButton3] = useState(false)
    const [button4, setButton4] = useState(false)
    const [button5, setButton5] = useState(false)

    const HandleClick=(index)=>{
        if(index.currentTarget.id==="1"){
            setButton1(true)
            setButton2(false)
            setButton3(false)
            setButton4(false)
            setButton5(false)
        }else if( index.currentTarget.id==="2"){
            setButton1(false)
            setButton2(true)
            setButton3(false)
            setButton4(false)
            setButton5(false)
        }else if( index.currentTarget.id==="3"){
            setButton1(false)
            setButton2(false)
            setButton3(true)
            setButton4(false)
            setButton5(false)
        }else if( index.currentTarget.id==="4"){
            setButton1(false)
            setButton2(false)
            setButton3(false)
            setButton4(true)
            setButton5(false)
        }else if( index.currentTarget.id==="5"){
            setButton1(false)
            setButton2(false)
            setButton3(false)
            setButton4(false)
            setButton5(true)
        }
    }
    return(

        <div>
            <NavbarGPS Home={false} Plataforma={false} Equipos={false} transporte={true} Apps={false} Promociones={false}></NavbarGPS>
            
            <section className="soluciones_section">
                <div className="soluciones_buttons">
                    <button onClick={e=>HandleClick(e)} id="1"> {button1 ?(<div className="soluciones_button_check"><div className="dot"></div></div>):(<div className="soluciones_button_dontcheck"></div>)}  Vigilancia vehicular</button>
                    <button onClick={e=>HandleClick(e)} id="2"> {button2 ?(<div className="soluciones_button_check"><div className="dot"></div></div>):(<div className="soluciones_button_dontcheck"></div>)}  Control de temperatura</button>
                    <button onClick={e=>HandleClick(e)} id="3"> {button3 ?(<div className="soluciones_button_check"><div className="dot"></div></div>):(<div className="soluciones_button_dontcheck"></div>)}  Equipos de avanzada</button>
                    <button onClick={e=>HandleClick(e)} id="4"> {button4 ?(<div className="soluciones_button_check"><div className="dot"></div></div>):(<div className="soluciones_button_dontcheck"></div>)}  Reconocimiento conductores</button>
                    <button onClick={e=>HandleClick(e)} id="5"> {button5 ?(<div className="soluciones_button_check"><div className="dot"></div></div>):(<div className="soluciones_button_dontcheck"></div>)}  Identificación QR</button>
                </div>
                <div className="soluciones_slides">
                    {
                        button1 ?(
                        <div className="soluciones_section1">
                            <div className="soluciones_section1_header">
                                <h1>VIDEO PARA</h1>
                                <div className="soluciones_section1_row">
                                    <div className="main_box">
                                        <div className="soluciones_section1_label">
                                            <img alt="nube" src={navbarNube}></img>
                                            <h2>Monitoreo vehicular</h2>
                                        </div>
                                    </div>
                                    <img alt="nube" src={navbarNube}></img>
                                </div>
                            </div>
                            <img alt="camara" src={camaraSoluciones}></img>
                            <div className="soluciones_section1_greenColumn"></div>
                            <GifGPS type="2"></GifGPS>
                            

                        </div>):(<></>)
                    }
                    {
                        button2 ?(
                        <div className="soluciones_section2">
                            <div className="soluciones_section1_header">
                                <h1>CALOR/FRIO</h1>
                                <div className="soluciones_section1_row">
                                    <div className="main_box">
                                        <div className="soluciones_section1_label">
                                            <img alt="nube" src={navbarNube}></img>
                                            <h2>Reporte cada minuto</h2>
                                        </div>
                                    </div>
                                    <img alt="nube" src={navbarNube}></img>
                                </div>
                            </div>
                            <img alt="camara" src={eyeSensor}></img>
                            <div className="soluciones_section_greenColumn"></div>
                            <GifGPS type="1"></GifGPS>
                            

                        </div>):(<></>)
                    }
                    {
                        button3 ?(
                        <div className="soluciones_section3">
                            <div className="soluciones_section3_header">
                                <h1>EQUIPO DE RASTREO</h1>
                                <div className="soluciones_section3_row">
                                    <div className="main_box">
                                        <div className="soluciones_section1_label">
                                            <img alt="nube" src={circulosRojos}></img>
                                            <h2>Sistema de posición global</h2>
                                        </div>
                                    </div>
                                    <img alt="nube" src={circulosRojos}></img>
                                </div>
                            </div>
                            <img alt="camara" src={FMB_120}></img>
                            <div className="soluciones_section_greenColumn"></div>
                            <GifGPS type="1"></GifGPS>
                            

                        </div>):(<></>)
                    }
                    {
                        button4 ?(
                        <div className="soluciones_section4">
                            <div className="soluciones_section1_header">
                                <h1>PERSONALIZACIÓN</h1>
                                <div className="soluciones_section1_row">
                                    <div className="main_box">
                                        <div className="soluciones_section1_label">
                                            <img alt="nube" src={usuariosSoluciones}></img>
                                            <h2>ID única de usuario</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img alt="camara" src={Llaves_Dallas}></img>
                            <div className="soluciones_section_greenColumn"></div>
                            <GifGPS type="1"></GifGPS>
                            

                        </div>):(<></>)
                    }
                    {
                        button5 ?(
                        <div className="soluciones_section5">
                            <div className="soluciones_section1_header">
                                <h1>IDENTIFICACIÓN</h1>
                                <div className="soluciones_section3_row">
                                    <div className="main_box">
                                        <div className="soluciones_section1_label">
                                            <h2>QR por persona/pasajero</h2>
                                        </div>
                                    </div>
                                    <img alt="nube" src={wifiHorizontal}></img>
                                </div>
                            </div>
                            <img alt="camara" src={LECTOR_QR}></img>
                            <div className="soluciones_section_greenColumn"></div>
                            <GifGPS type="1"></GifGPS>
                            

                        </div>):(<></>)
                    }
                </div>
            
            </section>
            <Leads></Leads>
            <Footer></Footer>

        </div>
        )
}