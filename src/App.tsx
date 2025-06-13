import { About, ContactMe, Experience, Hero, Projects } from "./sections";
import { Footer, Navbar, Particles } from "./components";
import { useEffect, useMemo, useRef, useState } from "react";

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

function App() {
  // State to keep track of the currently active section (for scrollspy)
  const [activeSection, setActiveSection] = useState<string>("home");

  // Create refs for each section of the page
  const aboutRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  // useEffect to implement the scrollspy effect
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Get the current scroll position, adding an offset for better accuracy
      const scrollY = window.scrollY + 120; // Adjust the offset as needed

      // Array of sections with their corresponding refs and IDs
      const sections = [
        {
          id: "about",
          ref: aboutRef,
        },
        {
          id: "experience",
          ref: experienceRef,
        },
        {
          id: "projects",
          ref: projectsRef,
        },
        {
          id: "contact",
          ref: contactRef,
        },
      ];

      // Default to "home" section
      let current = "home";
      // Loop through each section to determine which is currently in view
      for (const section of sections) {
        const el = section.ref.current;
        // If the section exists and its top is above the scroll position, set it as current
        if (el && el.offsetTop <= scrollY) {
          current = section.id;
        }
      }
      // Update the active section state
      setActiveSection(current);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount to set initial state

    // Cleanup: remove the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoize the Particles component to prevent unnecessary re-renders
  const memoParticles = useMemo(
    () => <Particles {...particlesDefaultProps} />,
    []
  );
  return (
    <>
      {memoParticles}
      <header className="relative">
        <Hero />
      </header>
      <main className="relative">
        <Navbar activeSection={activeSection} />
        <section ref={aboutRef} id="sect-about">
          <About />
        </section>
        <section ref={experienceRef} id="sect-work-exp">
          <Experience />
        </section>
        <section ref={projectsRef} id="sect-projects">
          <Projects />
        </section>
        <section ref={contactRef} id="sect-contact">
          <ContactMe />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
