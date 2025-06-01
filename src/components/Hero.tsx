import { PrincipalTitle } from "./ui";

const Hero = () => {
  return (
    <>
      <header className="relative h-dvh w-full flex flex-col justify-center items-center">
        {/* barra de navegación */}
        <PrincipalTitle
          name="HELDER"
          lastName="RUIZ"
          roleLine1="FullStack"
          roleLine2="Developer"
        />
        {/* Texto estoico o frase célebre sobre filosofía o similar */}
        {/* Enlaces de mail, linkedin y github */}
      </header>
    </>
  );
};

export default Hero;
