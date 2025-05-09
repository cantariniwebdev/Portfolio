import { Element, Link } from "react-scroll";

const Header = () => {
  return (
    <Element name="home">
      <div className="header">
        <div className="header-text">
          <h1>Hola!</h1>
          <h2>
            Soy <strong>Sebastián</strong> <strong>Cantarini</strong>
          </h2>
          <p>Desarrolador web</p>
        </div>

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
    </Element>
  );
};

export default Header;
