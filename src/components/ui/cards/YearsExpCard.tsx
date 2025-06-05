const YearsExpCard = () => {
  const getYearsOfExperience = () => {
    const start = new Date("2024-05-01");
    const now = new Date();
    const diffYears = now.getFullYear() - start.getFullYear();
    const hasAnniversaryPassed = now.getMonth() >= 4;
    return hasAnniversaryPassed ? diffYears : diffYears - 1;
  };

  return (
    <div className="w-30 h-24 flex flex-col items-center gap-2 p-4 font-mono text-xs border rounded bg-amber-800/10 border-amber-900 hover:border-amber-400 hover:shadow-[0_0_5px_#FFB900] transition">
      <p className="text-2xl text-amber-400">+{getYearsOfExperience()}</p>
      <p className="text-center ">experience years</p>
    </div>
  );
};

export default YearsExpCard;
