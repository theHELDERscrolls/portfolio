import { useEffect, useState } from "react";
import { books, music, people, podcasts } from "../../../data";
import type { Inspiration } from "../../../types/inspiration";

const MyInspirationCard = () => {
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
      className="flex flex-col h-auto gap-4 p-4 font-mono text-xs border border-indigo-900 w-xs bg-indigo-800/10 rounded-2xl hover:border-indigo-500 hover:shadow-[0_0_5px_#6366f1] transition"
    >
      <h3 className="flex items-center">
        <span
          id="my-inspiration-type"
          className="text-base font-bold text-indigo-500 "
        >
          {inspiration.type}
        </span>
        | that inspires me
      </h3>
      <div className="flex gap-4 pl-4 border-l-1 border-l-indigo-500">
        <img
          src={inspiration.imageURL}
          alt={`Imagen de ${inspiration.name}`}
          className="object-cover border rounded w-14 h-14 aspect-square border-amber-400"
        />

        <div className="flex flex-col gap-2">
          <h4 id="my-inspiration-name" className="text-amber-400">
            {inspiration.name}
          </h4>
          <p id="my-inspiration-desc" className="text-balance">
            {inspiration.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyInspirationCard;
