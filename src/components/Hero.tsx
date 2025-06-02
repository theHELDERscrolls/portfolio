import { PrincipalTitle } from "./ui";
import QuoteCard from "./ui/QuoteCard";

const Hero = () => {
  return (
    <>
    {/* El gap no es necesario porque cuando tengamos todos los componentes le vamos a meter un justify space arround de modo
    que se generen los huecos necesarios de manera dinámica. */}
      <header className="relative h-dvh w-full flex flex-col justify-around items-center">
        {/* barra de navegación */}
        <PrincipalTitle
          name="HELDER"
          lastName="RUIZ"
          roleLine1="FullStack"
          roleLine2="Developer"
        />
        {/* Texto estoico o frase célebre sobre filosofía o similar */}
        <QuoteCard/>
        {/* Enlaces de mail, linkedin y github */}
      </header>
    </>
  );
};

export default Hero;
