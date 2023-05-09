import "./footer.css";
import fbWhite from "../../assets/fbWhite.svg";
import navbarMail from "../../assets/navbarMail.svg";
import navbarWa from "../../assets/navbarWa.svg";
import navbarYT from "../../assets/navbarYT.svg";
import instagramWhite from "../../assets/instagramWhite.svg";

export default function Footer() {
  return (
    <footer className="footer_gpscontrol">
      <h6>© GPS Control</h6>
      <div className="footer_body">
        <div className="footer_body_start">
          <div className="footer_column">
            <h2>Correos</h2>
            <h3>Comercial@gpscontrol.co</h3>
            <h3>Soporte@gpscontrol.co</h3>
            <h3>Soporte2@gpscontrol.co</h3>
            <h3>Sales@gpscontrol.co</h3>
            <h3>Sales2@gpscontrol.co</h3>
          </div>
          <div className="footer_column">
            <h2>Teléfonos móviles</h2>
            <h3>+57 3187810059</h3>
            <h3>+57 3202410632</h3>
            <h3>+57 3174021086</h3>
            <h3>+57 3225406709</h3>
            <h3>+57 3245598681</h3>
          </div>
        </div>

        <div className="footer_column">
          <h2>Teléfonos Sucurasales</h2>
          <h3>+57 3187810059</h3>
          <h3>+57 3202410632</h3>
          <div className="footer_redes">
            <h2>Social media</h2>
            <a href=" https://www.instagram.com/gpscontrolsat/?fbclid=IwAR2AqTdN3wwqYcwnal4gexTfp1hYXZQRr3wRvTsFBjoSI8-xj3CA1Wj-Mfk">
              <img alt="instagram" src={instagramWhite}></img>
            </a>
            <a href=" https://www.facebook.com/profile.php?id=100083589572070 ">
              <img alt="facebook" src={fbWhite}></img>
            </a>
            <a href="https://wa.me/qr/AFTZFJYUOAWOM1">
              <img alt="whatsApp" src={navbarWa}></img>
            </a>
            <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
              <img alt="youtube" src={navbarYT}></img>
            </a>
            <a href=" mailto:sales@gpscontrol.co">
              <img alt="mail" src={navbarMail}></img>
            </a>
          </div>
        </div>
      </div>
      <h6>Copyright 2023 © AB Comercial S.A.S</h6>
    </footer>
  );
}
