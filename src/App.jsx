import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Github from "./components/Github";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
