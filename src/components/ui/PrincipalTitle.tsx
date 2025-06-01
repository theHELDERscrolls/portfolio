const PrincipalTitle = () => {
  return (
    <div
      id="name-logo"
      className="grid grid-cols-[auto_32px_auto] grid-rows-2 text-white"
    >
      <div className="col-start-1 row-start-1 text-end overflow-hidden  ">
        <p className="slide-in text-5xl font-orbitron font-bold">HELDER</p>
      </div>
      <div className="col-start-1 row-start-2 text-end overflow-hidden  font-orbitron">
        <p className="opacity-0 slide-in slide-in-delay-100 text-5xl font-orbitron">
          RUIZ
        </p>
      </div>
      <div
        id="neon-line"
        className="col-start-2 row-span-2 w-[2px] h-full mx-auto bg-indigo-500 shadow-[0_0_25px_5px_#6366f1] rounded animate-pulse"
      />
      <p className="font-mono col-start-3 row-start-1 text-start text-2xl self-end w-[232px]">
        <span className="text-amber-500">&lt;</span>FullStack
      </p>
      <p className="font-mono col-start-3 row-start-2 text-start text-2xl self-start w-[232px]">
        Developer<span className="text-amber-500">/&gt;</span>
      </p>
    </div>
  );
};

export default PrincipalTitle;
