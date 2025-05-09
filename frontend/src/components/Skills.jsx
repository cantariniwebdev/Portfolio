import { Element, Link } from "react-scroll";
import image1 from "../assets/react.svg";
import image2 from "../assets/nodejs.svg";
import image3 from "../assets/html.svg";
import image4 from "../assets/css3.svg";
import image5 from "../assets/javascript.svg";
import image6 from "../assets/github.svg";

const Skills = () => {
  const cardData = [
    {
      id: 1,
      pic: image1,
      background: "one",
    },
    {
      id: 2,
      pic: image2,
      background: "two",
    },
    {
      id: 3,
      pic: image3,
      background: "three",
    },
    {
      id: 4,
      pic: image4,
      background: "four",
    },
    {
      id: 5,
      pic: image5,
      background: "five",
    },
    {
      id: 6,
      pic: image6,
      background: "six",
    },
  ];

  return (
    <Element name="skills">
      <div className="skills">
        <div className="skills-text">
          <h2>Habilidades de desarrollo</h2>
          <p>
            Tengo experiencia en desarrollo web con React, mi herramienta
            principal para crear interfaces dinámicas e interactivas.
            Complemento mis proyectos con HTML, CSS y JavaScript (ES6), lo que
            garantiza una estructura sólida, estilos atractivos y
            funcionalidades modernas.
          </p>
          <p>
            En cuanto al backend, tengo conocimientos de Node.js, que he
            utilizado para desarrollar pequeños servidores, incluyendo la
            implementación de servicios como el envío de correos electrónicos.
            Además, tengo conocimientos sobre Git y GitHub para el control de
            versiones y la colaboración en proyectos, lo que garantiza un flujo
            de trabajo eficiente y organizado.
          </p>
          <Link
            className="button"
            to="contact"
            smooth={true}
            offset={-60}
            duration={500}
          >
            Hablemos
          </Link>
        </div>

        <div className="card-container">
          {cardData.map((item) => (
            <div className={`card ${item.background}`} key={item.id}>
              <img src={item.pic} />
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skills;
