import { people, books, music } from "@/data";
import type { Inspiration } from "@/types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface InspirationCardProps {
  infoPassTime?: number;
}

export const InspirationCard = ({
  infoPassTime = 7000,
}: InspirationCardProps) => {
  const [inspiration, setInspiration] = useState<Inspiration | null>(null);
  const prevIndex = useRef<number | null>(null);

  const allInspirations = useMemo(() => [...people, ...books, ...music], []);

  const getRandomInspiration = useCallback((): Inspiration => {
    let newIndex: number;

    do {
      newIndex = Math.floor(Math.random() * allInspirations.length);
    } while (newIndex === prevIndex.current);

    prevIndex.current = newIndex;
    return allInspirations[newIndex];
  }, [allInspirations]);

  useEffect(() => {
    setInspiration(getRandomInspiration());

    const interval = setInterval(() => {
      setInspiration(getRandomInspiration());
    }, infoPassTime);

    return () => clearInterval(interval);
  }, [infoPassTime, getRandomInspiration]);

  if (!inspiration) return null;

  return (
    <div className="flex flex-col items-center justify-center max-w-[500px] px-4 py-2 border rounded-xl border-indigo-500/10 bg-indigo-800/10 shadow-[0_0_5px_#6366f1] cursor-default overflow-hidden">
      <header className="flex items-center justify-start w-full gap-2 font-orbitron">
        <h3
          key={inspiration.type}
          className="text-xl sm:text-2xl font-extrabold text-indigo-400 drop-shadow-[0_0_5px_#6366f1] animate-slide-in-to-right"
        >
          {inspiration.type}
        </h3>
        <span className="w-0.5 h-5 sm:h-8 bg-indigo-400 rounded-full"></span>
        <p className="text-xs font-semibold text-indigo-100 sm:text-sm">
          that inspires my
        </p>
      </header>

      <main
        key={prevIndex.current}
        className="flex flex-col lg:flex-row items-center justify-center w-full h-full gap-2 lg:gap-8 min-h-[280px] lg:min-h-[200px] mt-2 animate-fade-in"
      >
        <img
          src={inspiration.imageURL}
          alt={`Imagen de ${inspiration.name}`}
          loading="lazy"
          className="object-cover max-w-25 max-h-25 aspect-square ring-2 ring-amber-400 rounded-xl"
        />

        <div className="flex flex-col items-center justify-center gap-2 font-mono lg:items-start">
          <h4 className="text-lg font-bold text-amber-400">
            {inspiration.name}
          </h4>
          <p className="text-sm text-left lg:text-left text-balance text-neutral-300">
            {inspiration.description}
          </p>
        </div>
      </main>
    </div>
  );
};
