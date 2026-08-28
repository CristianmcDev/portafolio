import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Portafolio sections*/}
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;