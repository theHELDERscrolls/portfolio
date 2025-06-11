import { About, ContactMe, Experience, Hero, Projects } from "./sections";
import { Particles } from "./components";

function App() {
  /* You can modify these props to change background styles */
  const particlesDefaultProps = {
    alphaParticles: true,
    disableRotation: false,
    moveParticlesOnHover: false,
    particleBaseSize: 50,
    particleColors: ["#615fff", "#EEF2FF"],
    particleCount: 2000,
    particleSpread: 10,
    speed: 0.1,
    className:
      "fixed w-screen h-screen -z-10 bg-[radial-gradient(circle,_#000_70%,_#0c0a1f_100%)]", //! DONT CHANGE THIS PROP
  };

  return (
    <main className="relative">
      <Particles {...particlesDefaultProps} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <ContactMe />
    </main>
  );
}

export default App;
