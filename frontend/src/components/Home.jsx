import Navbar from "./Navbar";
import Header from "./Header";
import Skills from "./Skills";
import Contact from "./Contact";
import About from "./About";
import Works from "./Works";
import Footer from "./Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
