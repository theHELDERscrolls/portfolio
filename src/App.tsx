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
  // This effect listens for scroll and resize events to determine which section is most visible in the viewport.
  // It updates the activeSection state accordingly, which can be used for highlighting navigation or other UI changes.
  useEffect(() => {
    // Handler to check which section is most visible
    const handleScroll = () => {
      // Array of section refs and their corresponding IDs
      const sections = [
        { id: "about", ref: aboutRef },
        { id: "experience", ref: experienceRef },
        { id: "projects", ref: projectsRef },
        { id: "contact", ref: contactRef },
      ];

      let maxVisible = 0; // Tracks the maximum visible height among sections
      let current = "about"; // Default section, can be "home" if you have a hero section

      // Iterate through each section to determine visibility
      for (const section of sections) {
        const el = section.ref.current;
        if (el) {
          // Get the bounding rectangle of the section
          const rect = el.getBoundingClientRect();
          // Calculate the visible part of the section in the viewport
          const visible =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

          // If this section is more visible than previous ones, update current
          if (visible > maxVisible && visible > 0) {
            maxVisible = visible;
            current = section.id;
          }
        }
      }
      // Update the active section state
      setActiveSection(current);
    };

    // Attach event listeners for scroll and resize
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    // Initial check on mount
    handleScroll();
    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Memoize the Particles component to prevent unnecessary re-renders
  // This ensures the Particles background does not re-render unless its props change
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
