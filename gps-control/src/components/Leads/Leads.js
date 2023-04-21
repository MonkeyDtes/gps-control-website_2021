
import iconosGroup from "../../assets/iconosGroup.svg"
import Leads1 from "../../assets/Leads1.svg"
import Leads2 from "../../assets/Leads2.svg"
import Leads3 from "../../assets/Leads3.svg"
import "./leads.css"
export default function Leads(){
    
    return(
    <section className="leads_page">
        <div className="leads_page_background">
            <div className="leads_page_start">
                <form className="leads_page_form"  >
                    <div className="leads_page_form_start">
                        <div className="leads_page_form_start_control">
                            <img alt="usuario" src={Leads3}></img>
                            <label>
                                <input type="text" placeholder="Nombre y Apellido" name="name" />
                            </label>
                            
                        </div>
                        <div className="leads_page_form_start_control">
                            <img alt="telefono" src={Leads1}></img>
                            <label>
                                <input type="text" placeholder="+00 0000000" name="name" />
                            </label>
                        </div>
                        <div className="leads_page_form_start_control">
                            <img alt="correo" src={Leads2}></img>   
                            <label>
                                <input type="text" placeholder="gpscomercial@gpscontrol.co" name="name" />
                            </label>
                        </div>
                        <div className="leads_page_form_start_control">
                            <label>
                                <input type="text" placeholder="Nombre de la empresa" name="name" />
                            </label>
                        </div>
                        <h6>Seguimos los requerimientos del cliente ofreciendo la mejor solución.</h6>
                    </div>
                    <div className="leads_page_form_end">
                            <label>
                                <textarea  type="text" placeholder="Más información" cols="40"  name="name" />
                            </label>
                        <input type="submit" value="Enviar"></input>
                        <h2>control is better</h2>
                    </div>
                </form>
            </div>
            <div className="leads_page_end">
                <div className="leads_page_end_img">
                    <img alt="iconosHome" src={iconosGroup}></img>
                </div>
                <div className="leads_page_end_gray"></div>
                <div className="leads_page_end_white"></div>
                <div className="leads_page_end_green"></div>
                <div className="leads_page_end_blue"></div>
                <div className="leads_page_end_red"></div>
                <div className="leads_page_end_redwine"></div>
                
            </div>
        </div>
    </section>)
}