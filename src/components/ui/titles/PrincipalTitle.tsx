import { DecryptedText } from "../../effects";

interface PrincipalTitleProps {
  name: string;
  lastName: string;
  roleLine1: string;
  roleLine2: string;
}

// Modify to change Title style
const decryptedCommonProps = {
  speed: 150,
  maxIterations: 50,
  sequential: true,
  revealDirection: "start" as const, // start | center | end | undefined
  useOriginalCharsOnly: false,
  characters:
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+1234567890",
  className: "text-2xl font-mono text-emerald-400",
  parentClassName: "",
  encryptedClassName: "text-emerald-900",
};

const PrincipalTitle = ({
  name,
  lastName,
  roleLine1,
  roleLine2,
}: PrincipalTitleProps) => {
  return (
    <div
      id="name-logo"
      className="grid grid-cols-[auto_32px_auto] grid-rows-2 text-white"
    >
      <div className="col-start-1 row-start-1 overflow-hidden text-end">
        <p className="text-5xl font-bold animate-slide-in font-orbitron">
          {name}
        </p>
      </div>
      <div className="col-start-1 row-start-2 overflow-hidden text-end font-orbitron">
        <p className="text-5xl opacity-0 slide-in animate-slide-in-delay-100 font-orbitron">
          {lastName}
        </p>
      </div>

      <div
        id="neon-line"
        className="col-start-2 row-span-2 w-0.5 h-full mx-auto bg-indigo-500 shadow-[0_0_25px_5px_#6366f1] rounded-full animate-pulse"
      />

      <div className="col-start-3 row-start-1 self-end w-[232px] text-start flex gap-1">
        <span className="font-mono text-2xl text-amber-400">&lt;</span>
        <DecryptedText text={roleLine1} {...decryptedCommonProps} />
      </div>

      <div className="col-start-3 row-start-2 self-start w-[232px] text-start flex gap-1">
        <DecryptedText text={roleLine2} {...decryptedCommonProps} />
        <span className="font-mono text-2xl text-amber-400">/&gt;</span>
      </div>
    </div>
  );
};

export default PrincipalTitle;
