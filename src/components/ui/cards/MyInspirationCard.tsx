import { useEffect, useRef, useState } from "react";
import { books, music, people, podcasts } from "../../../data";
import type Inspiration from "../../../types/inspiration";
import { useMediaQuery } from "../../../hooks";

interface MyInspirationCardProps {
  infoPassTime?: number;
}

const MyInspirationCard = ({ infoPassTime }: MyInspirationCardProps) => {
  const [inspiration, setInspiration] = useState<Inspiration | null>(null);
  const prevIndex = useRef<number | null>(null);
  const isSmallScreen = useMediaQuery("(max-width: 395px)");

  const getRandomInspiration = (): Inspiration => {
    const allInspirations: Inspiration[] = [
      ...books,
      ...music,
      ...people,
      ...podcasts,
    ];

    let newIndex: number;

    do {
      newIndex = Math.floor(Math.random() * allInspirations.length);
    } while (newIndex === prevIndex.current);

    prevIndex.current = newIndex;

    return allInspirations[newIndex];
  };

  useEffect(() => {
    setInspiration(getRandomInspiration());

    const interval = setInterval(() => {
      setInspiration(getRandomInspiration());
    }, infoPassTime);

    return () => clearInterval(interval);
  }, [infoPassTime]);

  if (!inspiration) return null;

  return (
    <div
      id="my-inspiration"
      className={`${
        isSmallScreen ? "h-70" : "h-52"
      } flex flex-col max-w-lg md:h-auto gap-4 p-4 font-mono border border-indigo-900 bg-indigo-800/10 rounded-2xl hover:border-indigo-500 hover:shadow-[0_0_5px_#6366f1] transition-all duration-300`}
    >
      <h3 className="flex items-center">
        <span
          key={prevIndex.current}
          className="text-xl font-bold text-indigo-500 md:text-2xl text-end animate-fade-in"
        >
          {inspiration.type}
        </span>
        | that inspires me
      </h3>
      <div
        key={prevIndex.current}
        className="flex items-center gap-4 pl-4 mb-12 md:mb-0 border-l-1 border-l-indigo-500 animate-fade-in"
      >
        <img
          src={inspiration.imageURL}
          alt={`Imagen de ${inspiration.name}`}
          className="object-cover w-20 h-20 border rounded aspect-square border-amber-400"
        />

        <div className="flex flex-col gap-2">
          <h4
            id="my-inspiration-name"
            className="text-base text-amber-400 md:text-xl"
          >
            {inspiration.name}
          </h4>
          <p
            id="my-inspiration-desc"
            className="text-xs text-balance md:text-base"
          >
            {inspiration.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyInspirationCard;
