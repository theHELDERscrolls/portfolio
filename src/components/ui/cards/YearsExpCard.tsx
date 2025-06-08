import { InfoCard } from "../templates";

const YearsExpCard = () => {
  const getYearsOfExperience = () => {
    const start = new Date("2024-05-01");
    const now = new Date();
    const diffYears = now.getFullYear() - start.getFullYear();
    const hasAnniversaryPassed = now.getMonth() >= 4;
    return hasAnniversaryPassed ? diffYears : diffYears - 1;
  };

  return (
    <InfoCard value={`+${getYearsOfExperience()}`} label="experience years" />
  );
};

export default YearsExpCard;
