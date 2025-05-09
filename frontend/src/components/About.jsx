import { Element, Link } from "react-scroll";
import image7 from "../assets/laptop.avif";

const About = () => {
  return (
    <Element name="about">
      <div className="about">
        <div className="about-pic">
          <img src={image7} alt="" />
        </div>
        <div className="about-text">
          <h2>Acerca de mí</h2>
          <p>
          Soy desarrollador full stack con formación en el Centro de e-Learning UTN BA, donde completé un bootcamp de desarrollo web en línea. Además, he ampliado mis conocimientos a través de numerosos cursos en Udemy, explorando diversas tecnologías y metodologías de desarrollo.
          </p>
          <p>
          Mi enfoque principal es React, la biblioteca con la que trabajo a diario para crear aplicaciones web dinámicas y eficientes. Me apasiona mantenerme al día con las últimas tendencias y avances en el ecosistema JavaScript, explorando constantemente nuevas herramientas y frameworks que puedan mejorar tanto la experiencia del usuario como el rendimiento de las aplicaciones.
          </p>
          <p>
          Soy un desarrollador curioso y autodidacta, sé que el aprendizaje nunca termina, por eso estoy en constante crecimiento buscando maneras de mejorar mis habilidades y optimizar mis proyectos. Disfruto afrontando desafíos técnicos y descubriendo soluciones innovadoras para problemas complejos en el desarrollo web. 
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
      </div>
    </Element>
  );
};

export default About;
