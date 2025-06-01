import Hero from "./components/Hero";
import Particles from "./components/effects/Particles";
import PrincipalTitle from "./components/ui/PrincipalTitle";

function App() {
  return (
    <main className="relative">
      {/* Fondo de partículas, fijo al fondo */}
      <Particles
        alphaParticles={true}
        disableRotation={false}
        moveParticlesOnHover={false}
        particleBaseSize={50}
        particleColors={["#615fff", "#EEF2FF"]}
        particleCount={2000}
        particleSpread={10}
        speed={0.1}
        className="fixed w-screen h-screen -z-10 bg-black"
      />
      <Hero children={<PrincipalTitle />} />
    </main>
  );
}

export default App;
