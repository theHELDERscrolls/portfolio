import type { ReactNode } from "react";

interface HeroProps {
  children: ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <>
      <header className="relative h-dvh w-full flex flex-col justify-center items-center">
        {children}
      </header>
    </>
  );
};

export default Hero;
