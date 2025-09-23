import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Herosection />
      </section>
    </div>
  );
}

export default App;
