import { Header } from "./components";
import {
  ContactSection,
  ExperienceSection,
  HeroSection,
  PorjectSection,
} from "./sections";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full bg-stone-100">
        <HeroSection />
        <ExperienceSection />
        <PorjectSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
