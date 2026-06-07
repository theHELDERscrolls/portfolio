import { Header } from "./components";
import { ExperienceSection, HeroSection } from "./sections";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full bg-stone-100">
        <HeroSection />
        <ExperienceSection />
      </main>
    </>
  );
}

export default App;
