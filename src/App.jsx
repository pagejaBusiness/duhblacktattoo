import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import About from "./components/About";
import Contact from "./components/Contact";

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
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
