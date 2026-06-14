import { Footer, Header } from "./components";
import {
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectSection,
} from "./sections";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full bg-stone-100">
        <HeroSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
