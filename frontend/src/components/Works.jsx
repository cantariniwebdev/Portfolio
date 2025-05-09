import { Element, Link } from "react-scroll";
import image10 from "../assets/lab.png";
import image13 from "../assets/git.svg";
import image14 from "../assets/portfolio.png";

const Works = () => {
  return (
    <Element name="projects">
      <div className="works">
        <h2>Trabajos</h2>
        <div className="works-cards">
          <div className="w-card">
            <div className="w-pic">
              <img src={image10} alt="" />
            </div>
            <div className="w-description">
              <div className="git">
                <h3>GR Lab.</h3>
                <div className="form-icon">
                  <a
                    href="https://github.com/cantariniwebdev/GRLab-final-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image13} alt="" />
                  </a>
                </div>
              </div>
              <div className="w-text">
                <p>
                  Sitio web desarrollado y diseñado para el Laboratorio de
                  Análisis Clínicos GR, cliente de Córdoba, Argentina.
                </p>
              </div>

              <a
                className="button"
                href="https://grlab.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar
              </a>
            </div>
          </div>
          <div className="w-card">
            <div className="w-pic">
              <img src={image14} alt="" />
            </div>
            <div className="w-description">
              <div className="git">
                <h3>Portfolio</h3>
                <div className="form-icon">
                  <a
                    href="https://github.com/cantariniwebdev/GRLab-final-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image13} alt="" />
                  </a>
                </div>
              </div>
              <div className="w-text">
                <p>
                  Sitio web desarrollado y diseñado para portfolio personal.
                </p>
              </div>

              <a
                className="button crd"
                href="https://grlab.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar
              </a>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Works;
