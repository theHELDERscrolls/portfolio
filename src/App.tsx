import { Header } from "./components";
import { ExperienceSection, HeroSection, PorjectSection } from "./sections";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full bg-stone-100">
        <HeroSection />
        <ExperienceSection />
        <PorjectSection />
      </main>
    </>
  );
}

export default App;
