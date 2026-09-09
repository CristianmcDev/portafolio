import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/ui/BackToTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Portafolio sections*/}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;