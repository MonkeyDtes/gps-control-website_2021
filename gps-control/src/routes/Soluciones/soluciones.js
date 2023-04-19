import { useState } from "react";
import NavbarGPS from "../../components/NavbarGPS";
import "./soluciones.css"
import navbarNube from "../../assets/navbarNube.svg"
import camaraSoluciones from "../../assets/camaraSoluciones.svg"

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
                <div>
                    {
                        button1 ?(
                        <div className="soluciones_section1">
                            <div>
                                <h1>VIDEO PARA</h1>
                                <div>
                                    <img alt="nube" src={navbarNube}></img>
                                    <h2>Monitoreo vehicular</h2>
                                </div>
                                <img alt="nube" src={navbarNube}></img>
                            </div>
                            <img alt="camara" src={camaraSoluciones}></img>
                            

                        </div>):(<></>)
                    }
                </div>
            
            </section>

        </div>
        )
}