import { DecryptedText } from "../effects";

const PrincipalLogo = () => {
  return (
    <section
      id="logo-title"
      aria-label="Logo personal de Helder Ruiz con título animado"
      className="grid grid-cols-[auto_2px_auto] items-center gap-3 text-white"
    >
      <div className="overflow-hidden w-36">
        <img
          src="src/assets/HR_logo_light.svg"
          alt="Logo de Helder Ruiz: letras HR en blanco"
          className="w-36 animate-slide-in drop-shadow-[0_1px_2px_rgba(99,102,241,0.7)]"
        />
      </div>

      <span className="w-0.5 h-24 bg-indigo-500 rounded-full shadow-[0_0_25px_5px_#6366f1] animate-pulse"></span>

      <div className="font-mono leading-tight w-36 text-start">
        <span className="text-amber-400">&lt;</span>
        <DecryptedText
          text="FullStack Developer"
          speed={150}
          maxIterations={50}
          sequential
          revealDirection="start"
          useOriginalCharsOnly={false}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+1234567890"
          className="text-emerald-400"
          encryptedClassName="text-emerald-900"
          parentClassName=""
        />
        <span className="text-amber-400">/&gt;</span>
      </div>
    </section>
  );
};

export default PrincipalLogo;
