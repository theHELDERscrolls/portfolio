const PrincipalTitle = () => {
  return (
    <div id="name-logo" className="grid grid-cols-[auto_16px_auto] grid-rows-2">
      <div className="col-start-1 row-start-1 text-end overflow-hidden w-[210px]">
        <p className="slide-in text-6xl">HELDER</p>
      </div>
      <div className="col-start-1 row-start-2 text-end overflow-hidden w-[210px]">
        <p className="opacity-0 slide-in slide-in-delay-100 text-6xl">RUIZ</p>
      </div>
      <div
        id="neon-line"
        className="col-start-2 row-span-2 w-[2px] h-full mx-auto bg-indigo-500 shadow-[0_0_25px_5px_#6366f1] rounded animate-pulse"
      />
      <p className="col-start-3 row-start-1 text-start text-2xl self-end w-[210px]">
        FullStack
      </p>
      <p className="col-start-3 row-start-2 text-start text-2xl self-start w-[210px]">
        Developer
      </p>
    </div>
  );
};

export default PrincipalTitle;
