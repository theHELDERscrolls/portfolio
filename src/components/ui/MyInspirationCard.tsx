import { useEffect, useState } from "react";
import { books, music, people, podcasts } from "../../data/inspirations";
import type { Inspiration } from "../../types/inspiration";

const MyInspirationalCard = () => {
  const [inspiration, setInspiration] = useState<Inspiration | null>(null);

  useEffect(() => {
    const allInspirations: Inspiration[] = [
      ...books,
      ...music,
      ...people,
      ...podcasts,
    ];

    const randomIndex = Math.floor(Math.random() * allInspirations.length);
    const randomInspiration = allInspirations[randomIndex];

    setInspiration(randomInspiration);
  }, []);

  if (!inspiration) return null;

  return (
    <div
      id="my-inspiration"
      className="flex flex-col gap-4 w-xs h-auto text-xs border border-indigo-500 bg-indigo-800/10 shadow-[0_0_5px_#6366f1] rounded-2xl p-4"
    >
      <h3 className="flex items-center">
        <span id="my-inspiration-type" className="text-indigo-500 font-bold text-base ">
          {inspiration.type}
        </span>
        | that inspires me
      </h3>
      <div className="flex items-center gap-4 border-l-1 border-l-indigo-500 pl-4">
        <img
          src={inspiration.imageURL}
          alt={`Imagen de ${inspiration.name}`}
          className="w-14 h-14 object-cover aspect-square border border-amber-400 shadow-[0_0_5px_#FFB900] rounded-2xl"
        />

        <div className="flex flex-col gap-2">
          <h4 id="my-inspiration-name" className="text-amber-400">
            {inspiration.name}
          </h4>
          <p id="my-inspiration-desc" className="text-balance">{inspiration.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MyInspirationalCard;
