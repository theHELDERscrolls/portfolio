const CoffeConsumptionCard = () => {
  return (
    <div className="w-30 h-24 flex flex-col items-center gap-2 p-4 font-mono text-xs border rounded bg-amber-800/10 border-amber-900 hover:border-amber-400 hover:shadow-[0_0_5px_#FFB900] transition">
      <p className="text-2xl text-amber-400">&infin;</p>
      <p className="text-center">coffee consumption</p>
    </div>
  );
};

export default CoffeConsumptionCard;
