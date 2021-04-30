import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import Skill from "./components/Skill";
import About from "./components/About"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Particles
      className="particals-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                eneble: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          },
        }}
      />
      <Navbar />
      <Header />
      <Skill />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
