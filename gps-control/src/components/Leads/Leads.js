import iconosGroup from "../../assets/iconosGroup.svg";
import iconsWhite from "../../assets/iconsWhite.svg";
import Leads1 from "../../assets/Leads1.svg";
import Leads2 from "../../assets/Leads2.svg";
import Leads3 from "../../assets/Leads3.svg";
import P_bgleadstrama from "../../assets/Home/P_bgleadstrama.png"
import P_leadscontrol from "../../assets/Home/P_leadscontrol.png"
import emailjs from "emailjs-com";
import { useState } from "react";
import "./leads.css";
export default function Leads() {
  const [button1, setButton1] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    company: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0w4i9mt",
        "template_crj11xu",
        e.target,
        "_3fygBOsMTOZe3d42"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload(false);
          alert("Su correo ha sido enviado");
          // Hacer algo cuando se envió el correo electrónico con éxito
        },
        (error) => {
          console.log(error.text);
          alert("Error intente de nuevo mas tarde");
          // Hacer algo cuando se produjo un error al enviar el correo electrónico
        }
      );
  };
  const HandleClick = (e) => {
    e.preventDefault();
    if (e.currentTarget.id === "1") {
      setButton1(true);
    } else {
      setButton1(false);
    }
  };
  return (
    <div>
      <section className="container--form">
        <div className="container--imgParticles__form">
          <img className="img--particles__form" src={P_bgleadstrama} alt="" />
        </div>
        <div className="container--icons__form">
          <img className="icons--form" alt="iconosHome" src={iconosGroup}></img>
          <img className="icons--form__white" alt="iconosHome" src={iconsWhite}></img>
        </div>
        <div className="content--form">
          <div className="content--formLeft">
            <div className="cont--text">
              <img className="img--contText__form" src={P_leadscontrol} alt="" />
            </div>
            <form className="leads_page_form" onSubmit={handleSubmit}>
              <div className="leads_page_form_start">
                <div className="leads_page_form_start_control">
                  <img alt="usuario" src={Leads3}></img>
                  <label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre y Apellido"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="leads_page_form_start_control">
                  <img alt="telefono" src={Leads1}></img>
                  <label>
                    <input
                      type="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+00 0000000"
                    />
                  </label>
                </div>
                <div className="leads_page_form_start_control">
                  <img alt="correo" src={Leads2}></img>
                  <label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="gpscomercial@gpscontrol.co"
                    />
                  </label>
                </div>
                <div className="leads_buttons">
                  <button onClick={(e) => HandleClick(e)} id="1">
                    {" "}
                    {button1 ? (
                      <div className="soluciones_button_check">
                        <div className="dot"></div>
                      </div>
                    ) : (
                      <div className="leads_button_dontcheck"></div>
                    )}{" "}
                    <p className="letra">Empresa</p>
                  </button>
                  <button onClick={(e) => HandleClick(e)} id="2">
                    {" "}
                    {button1 ? (
                      <div className="leads_button_dontcheck"></div>
                    ) : (
                      <div className="soluciones_button_check">
                        <div className="dot"></div>
                      </div>
                    )}{" "}
                    <p>Independiente</p>
                  </button>
                </div>
                <div className="leads_page_form_start_control">
                  <label>
                    <input
                    className="input__company"
                      type="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={
                        button1 ? "Nombre de la Empresa" : "Independiente"
                      }
                    />
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="copntent--formRight">
            <div className="content--text__form">
              <p className="leads_page_start_text"><span>Aumenta la productividad de tu flota con nuestra
                plataforma</span> de gestión lógistica. Todos los beneficios están incluidos por una misma mensualidad.
                llena el formulario y obtén una asesoría completa.</p>
            </div>
            <div className="leads_page_form_end">
              <label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Únete a nuestra Comunidad y se cliente de la mejor plataforma con múltiples opciones en innovación tecnológica, beneficios de Suscribirte:
                  - Acceso exclusivo a contenido Premium
                  - Ofertas y descuentos especiales para suscriptores
                  - Actualizaciones regulares sobre nuevos productos/servicios
                  - Consejos y recursos útiles directamente de nuestro equipo"
                  cols="40"
                />
              </label>
              <button type="submit" value="Enviar">
                Enviar
              </button>
            </div>
            <div className="container--text--mobile__form">
              <p className="text--mobile__form">Seguimos los requerimientos del cliente ofreciendo la mejor solución.</p>
              </div>
          </div>
          <div className="pruebas"></div>
        </div>
      </section>
    </div>
  );
}
