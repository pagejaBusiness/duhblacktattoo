import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Herosection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
