// import { useEffect, useState } from "react";

interface NinjaQuote {
  quote: string;
  author: string;
  category?: string;
}

const defaultQuote: NinjaQuote = {
  quote:
    "Time is like a river made up of the events which happen, and a violent stream; for as soon as a thing has been seen, it is carried away, and another comes in its place.",
  author: "Marcus Aurelius",
};

const QuoteCard = () => {
  // const [quote, setQuote] = useState<NinjaQuote | null>(null);

  // const fetchData = async () => {
  //   try {
  //     const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
  //       headers: {
  //         "X-Api-Key": import.meta.env.VITE_API_KEY,
  //       },
  //     });

  //     if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

  //     const jsonData: NinjaQuote[] = await res.json();
  //     setQuote(jsonData[0]);
  //   } catch (error) {
  //     console.error("Fetch error: ", error);
  //     setQuote(defaultQuote);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <blockquote className="flex flex-col justify-center w-[min(90vw,380px)] min-h-20 font-mono text-neutral-400 text-xs border border-indigo-500 bg-indigo-500/10 shadow-[0_0_5px_#6366f1] rounded-2xl p-4 animate-fade-in-delay-100">
      {defaultQuote?.quote}
      <footer className="text-end text-amber-400 mt-2">
        {defaultQuote?.author}
      </footer>
    </blockquote>
  );
};

export default QuoteCard;
