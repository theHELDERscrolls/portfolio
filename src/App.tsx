import { Header } from "./components";
import { HeroSection } from "./sections";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full bg-stone-100">
        <HeroSection />
      </main>
    </>
  );
}

export default App;
