import { ContactMe, Header } from "../shared";
import { Outlet } from "react-router-dom";
import Particles from "@/components/effects/Particles";

export const MobileLayout = () => {
  return (
    <main className="relative flex flex-col items-center justify-around w-full min-h-screen p-5 sm:px-20 text-neutral-100">
      <Particles
        alphaParticles={true}
        className="fixed inset-0 w-screen h-screen bg-[radial-gradient(circle,_#000_70%,_#0c0a1f_100%)] -z-10"
        disableRotation={false}
        moveParticlesOnHover={false}
        particleBaseSize={50}
        particleColors={["#615fff", "#EEF2FF"]}
        particleCount={1000}
        particleSpread={15}
        speed={0.1}
      />

      <Header />

      <Outlet />

      <ContactMe />
    </main>
  );
};
