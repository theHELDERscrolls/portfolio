import Particles from "@/components/effects/Particles";
import { DesktopHeader } from "../shared/header";
import { DesktopNavbar } from "./DesktopNavbar";
import { Outlet } from "react-router-dom";

export const DesktopLayout = () => {
  return (
    <main className="relative flex flex-col items-center justify-around w-full px-5 sm:px-20 min-h-dvh text-neutral-100">
      <Particles
        alphaParticles={true}
        className="fixed inset-0 w-screen h-screen bg-[radial-gradient(circle,_#000_70%,_#0c0a1f_100%)] -z-10"
        disableRotation={false}
        moveParticlesOnHover={false}
        particleBaseSize={50}
        particleColors={["#615fff", "#EEF2FF"]}
        particleCount={2000}
        particleSpread={15}
        speed={0.1}
      />

      <DesktopHeader />

      <DesktopNavbar />

      <Outlet />

      <section className="flex items-center justify-center w-full border-2 h-dvh border-lime-500">
        CONTACT ME
      </section>

      <footer className="flex items-center justify-center w-full border-2 border-amber-500">
        <p>FOOTER</p>
      </footer>
    </main>
  );
};
