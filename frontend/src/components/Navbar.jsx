import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import image3 from "../assets/open.svg";
import image4 from "../assets/close.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [withTransition, setWithTransition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setWithTransition(true);
    } else {
      const timer = setTimeout(() => setWithTransition(false), 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleActive = (to) => {
    setActiveLink(to);
    setIsOpen(false);
  };

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo"></div>
      <ul className={`${isOpen ? "open" : ""} ${withTransition ? "with-transition" : ""}`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => handleActive("home")}
            className={activeLink === "home" ? "activo" : ""}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => handleActive("about")}
            className={activeLink === "about" ? "activo" : ""}
          >
            Acerca de mí
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-60}
            onClick={() => handleActive("skills")}
            className={activeLink === "skills" ? "activo" : ""}
          >
            Habilidades
          </Link>
        </li>
        <li>
          <Link
            to="works"
            smooth={true}
            duration={500}
            offset={-100}
            onClick={() => handleActive("works")}
            className={activeLink === "works" ? "activo" : ""}
          >
            Trabajos
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-60}
            onClick={() => handleActive("contact")}
            className={activeLink === "contact" ? "activo" : ""}
          >
            Contacto
          </Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <img src={image3} /> : <img src={image4} />}
      </div>
    </div>
  );
};

export default Navbar;
