import { useState, useEffect } from "react";

const icons = ["hr", "rocket", "design", "blub"];
const titles = ["HELDER RUIZ", "PERFORMANCE", "DESIGN", "INNOVATION"];

export const MorphLogo = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-1 cursor-default">
      <div className="flex items-center justify-end overflow-hidden">
        <svg
          id="svg-title"
          aria-hidden
          
          className="text-amber-400 animate-slide-in-down w-25 h-25"
        >
          <use xlinkHref={`/spriteSheet.svg#icon-${icons[index]}`} />
        </svg>
      </div>

      <span className="max-w-xl w-full h-0.5 bg-indigo-500/50 rounded-full animate-change-width"></span>

      <div className="flex items-center justify-center py-1 overflow-hidden">
        <p
          id="title"
          className="text-3xl font-bold text-center sm:text-6xl font-orbitron animate-slide-in-up text-neutral-200"
        >
          {titles[index]}
        </p>
      </div>
    </div>
  );
};
