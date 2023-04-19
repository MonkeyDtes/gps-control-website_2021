import "./navbarGPS.css"
import GPSControlLogo from "../../assets/gpsControl_logo.svg"
import GPSControlLogoRed from "../../assets/gpsControl_logo_red.svg"
import navbarNube from "../../assets/navbarNube.svg"
import navbarNubeWhite from "../../assets/navbarNubeWhite.svg"
import navbarLogo1 from "../../assets/navbarLogo1.svg"
import navbarLogowhite1 from "../../assets/navbarLogoWhite1.svg"
import navbarLogo2 from "../../assets/navbarLogo2.svg"
import navbarLogowhite2 from "../../assets/navbarLogoWhite2.svg"
import navbarLogo3 from "../../assets/navbarLogo3.svg"
import navbarLogowhite3 from "../../assets/navbarLogoWhite3.svg"
import navbarLogo4 from "../../assets/navbarLogo4.svg"
import navbarLogowhite4 from "../../assets/navbarLogoWhite4.svg"
import navbarMail from "../../assets/navbarMail.svg"
import navbarWa from "../../assets/navbarWa.svg"
import navbarYT from "../../assets/navbarYT.svg"
import navbarTel from "../../assets/navbarPhone.svg"
import ingresoLogo1 from "../../assets/ingresoLogo1.svg"
import ingresoLogo2 from "../../assets/ingresoLogo2.svg"
import {history} from "../History"

export default function NavbarGPS(e){
    const Home = e.Home
    const Plataforma = e.Plataforma
    const Equipos = e.Equipos
    const transporte = e.transporte
    const Apps = e.Apps
    const Promociones = e.Promociones
    const handleClick =(index)=>{
        if(index.currentTarget.id === "1"){    
            history.push("/")
        } else if(index.currentTarget.id === "2"){
            history.push("/plataforma")
        }
        else if(index.currentTarget.id === "3"){
            history.push("/equipos")
        }
        else if(index.currentTarget.id === "4"){
            
            history.push("/soluciones")
        }
        else if(index.currentTarget.id==="5"){
            history.push("/apps")
        }
        else if(index.currentTarget.id === "6"){
            history.push("/promociones")
        }
    }
    return(
        <div className="navbar_app">
            <nav>
                <div className="main_box">
                    {
                        Home ? (
                        <button className="navbar_home"
                        id="1"
                        onClick={e=>handleClick(e)}>
                            <img alt="logo gps control" src={GPSControlLogo}></img>
                            <h1>Home</h1>
                        </button>):(
                        <button className="navbar_home_click"
                        id="1"
                        onClick={e=>handleClick(e)}
                        >
                            <img alt="logo gps control" src={GPSControlLogoRed}></img>
                            <h1>Home</h1>
                        </button>
                        )
                    }
                    
                </div>
                <div className="main_box">
                    {
                        Plataforma ? (
                            <button className="navbar_section_click"
                            id="2"
                            onClick={e=>handleClick(e)}>
                                <div className="navbar_section_text">
                                    <h2>Plataforma</h2>
                                    <img alt="nube" src={navbarNubeWhite}></img>
                                </div>
                                <div className="navbar_section_text">
                                    <div className="navbar_section_linea_click"></div>
                                    <h2>de monitoreo</h2>
                                </div>
                            </button>
                        ):(
                            <button className="navbar_section"
                            id="2"
                            onClick={e=>handleClick(e)}
                            >
                                <div className="navbar_section_text">
                                    <h2>Plataforma</h2>
                                    <img alt="nube" src={navbarNube}></img>
                                </div>
                                <div className="navbar_section_text">
                                    <div className="navbar_section_linea"></div>
                                    <h2>de monitoreo</h2>
                                </div>
                            </button>
                        )
                    }                    
                </div>
                <div className="main_box">
                    {
                        Equipos ? (
                            <button className="navbar_section_click">
                                <div className="navbar_section_text">
                                    <h2>Soluciones</h2>
                                    <img alt="nube" src={navbarLogowhite1}></img>
                                </div>
                                <div className="navbar_section_text">
                                    <div className="navbar_section_linea_click"></div>
                                    <h2>de monitoreo</h2>
                                </div>
                            </button>
                        ):(
                            <button 
                            className="navbar_section"
                            id="3"
                            onClick={e=>handleClick(e)}>
                                <div className="navbar_section_text">
                                    <h2>Soluciones</h2>
                                    <img alt="nube" src={navbarLogo1}></img>
                                </div>
                                <div className="navbar_section_text">
                                    <div className="navbar_section_linea"></div>
                                    <h2>de monitoreo</h2>
                                </div>

                            </button>
                        )
                    }
                </div>
                <div className="main_box">
                    {
                        transporte ? (
                            <button className="navbar_section_click">
                                <div className="navbar_section_text">
                                    <h2>Soluciones</h2>
                                    <img alt="nube" src={navbarLogowhite2}></img>
                                </div>
                                <div className="navbar_section_text">
                                    <div className="navbar_section_linea_click"></div>
                                    <h2>de transporte</h2>
                                </div>

                            </button>    ):(
                            <button className="navbar_section"
                            id="4"
                            onClick={e=>handleClick(e)}>
                                <div className="navbar_section_text">
                                    <h2>Soluciones</h2>
                                    <img alt="nube" src={navbarLogo2}></img>
                                </div>
                                <div className="navbar_section_text">
                                    <div className="navbar_section_linea"></div>
                                    <h2>de transporte</h2>
                                </div>
                            </button>    )
                    }
                                    
                </div>
                <div className="main_box">
                    {
                        Apps ? (
                            <button className="navbar_section_click">
                                <div className="navbar_section_text">
                                    <h2>Nuestras</h2>
                                    <img alt="nube" src={navbarLogowhite3}></img>
                                </div>
                                <div className="navbar_section_text">
                                    <div className="navbar_section_linea_click"></div>
                                    <h2>Aplicaciones</h2>
                                </div>
                            </button>    
                        ):(
                            <button className="navbar_section"
                            id="5"
                            onClick={e=>handleClick(e)}>
                                <div className="navbar_section_text">
                                    <h2>Nuestras</h2>
                                    <img alt="nube" src={navbarLogo3}></img>
                                </div>
                                <div className="navbar_section_text">
                                    <div className="navbar_section_linea"></div>
                                    <h2>Aplicaciones</h2>
                                </div>
                            </button>    
                        )

                    }
                                   
                </div>
                <div className="main_box">
                    {
                        Promociones ? (
                            <button className="navbar_section_click">
                                <div className="navbar_section_text">
                                    <h2>Tu negocio</h2>
                                    <img alt="nube" src={navbarLogowhite4}></img>
                                </div>
                                <div className="navbar_section_text">
                                    <div className="navbar_section_linea_click"></div>
                                    <h2>propio de GPS</h2>
                                </div>
                            </button>       
                        ):(
                            <button className="navbar_section"
                            id="6"
                            onClick={e=>handleClick(e)}>
                                <div className="navbar_section_text">
                                    <h2>Tu negocio</h2>
                                    <img alt="nube" src={navbarLogo4}></img>
                                </div>
                                <div className="navbar_section_text">
                                    <div className="navbar_section_linea"></div>
                                    <h2>propio de GPS</h2>
                                </div>
                            </button>       
                        )
                    }
                                 
                </div>
                
            </nav>
            <div className="navbar_contacts">
                <button><img alt="mail" src={navbarMail}></img></button>
                <button><img alt="telefono" src={navbarWa}></img></button>
                <button><img alt="WhatsApp" src={navbarYT}></img></button>
                <button><img alt="Youtube" src={navbarTel}></img></button>
            </div>
            <div className="navbar_ingresos">
                <button>
                    <img alt="ingreso plataforma" src={ingresoLogo1}></img>
                    <div>
                        <h2>Ingreso</h2>
                        <h2>plataforma</h2>
                    </div>
                </button>
                <button>
                    <img alt="atencion al cliente" src={ingresoLogo2}></img>
                    <div>
                        <h2>Atención</h2>
                        <h2>Inmediata</h2>
                    </div>
                </button>
            </div>
        </div>
    )
}