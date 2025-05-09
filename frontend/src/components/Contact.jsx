import { Element, Link } from "react-scroll";
import Form from "./Form";
import image11 from "../assets/email.svg";
import image12 from "../assets/phone.svg";

const Contact = () => {
  return (
    <Element name="contact">
      <div className="contact">
        <div className="address">
          <h2>Contacto</h2>
          <p>
            Déjame un mensaje a través del formulario y me pondré en contacto
            contigo lo antes posible. También puedes enviarme un mensaje de
            texto o llamarme al número que aparece a continuación.
          </p>
          <p>
            Ya sea para consultas sobre contratación, colaboraciones o
            desarrollo web, estaré encantado de ayudarte.
          </p>
          <div className="form-icon">
            <a
              href="mailto:cantarini.webdeveloper@gmail.com"
              target="_self"
              rel="noopener noreferrer"
            >
              <img src={image11} alt="" />
              <p>cantarini.webdeveloper@gmail.com</p>
            </a>
          </div>
          <div className="form-icon">
            <a
              href="https://wa.me/+34622133884"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image12} alt="" />
              <p>+34622133884</p>
            </a>
          </div>
        </div>
        <Form />
      </div>
    </Element>
  );
};

export default Contact;
