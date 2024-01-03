import "./notFound.css";
import mailRed from "../../assets/mailRed.svg";
import internetIcon from "../../assets/internetLogo.svg";
import fbRed from "../../assets/fbRed.svg";
import waRed from "../../assets/waRed.svg";
import instagramRed from "../../assets/instagramRedIcon.svg";
import GifGPS from "../../components/gifGPS";
import notFoundImg from "../../assets/notFoundImg.png";

export default function NotFound() {
  return (
    <section className="notFound_page">
      <div className="notFound_bg">
        <div className="notFound_img">
          <img alt="404 not found" src={notFoundImg}></img>
        </div>
        <div className="notFound_body">
          <p>
            Ruta de acceso incorrecta, Puede redirigir la página en el siguiente
            enlace.
          </p>
          <div className="main_box">
            <div className="notFound_body_label">
              <img alt="Enthernet" src={internetIcon}></img>
              <a href="https://www.gpscontrol.co">www.gpscontrol.co</a>
            </div>
          </div>
          <p>O comunicarse con nosotros en nuestras Redes</p>
          <div className="notFound_socialmedia">
            <a href="https://www.instagram.com/gpscontrolsat/?fbclid=IwAR2AqTdN3wwqYcwnal4gexTfp1hYXZQRr3wRvTsFBjoSI8-xj3CA1Wj-Mfk">
              <img alt="instagram" src={instagramRed}></img>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100083589572070">
              <img alt="facebook" src={fbRed}></img>
            </a>
            <a href="https://wa.me/qr/AFTZFJYUOAWOM1">
              <img alt="WhatsApp" src={waRed}></img>
            </a>
            <a href="mailto:sales@gpscontrol.co">
              <img alt="mail" src={mailRed}></img>
            </a>
          </div>
        </div>
      </div>
      <GifGPS type="2"></GifGPS>
    </section>
  );
}
