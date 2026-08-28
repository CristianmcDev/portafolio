import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Portafolio sections*/}
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;