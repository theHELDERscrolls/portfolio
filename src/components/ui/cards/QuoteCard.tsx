// import { useEffect, useState } from "react";

interface NinjaQuote {
  quote: string;
  author: string;
  category?: string;
}

const defaultQuote: NinjaQuote = {
  quote:
    "It is not death that a man should fear, but he should fear never beginning to live.",
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
    <blockquote className="flex flex-col text-base sm:text-lg justify-center mx-4 max-w-xl min-h-20 font-mono text-neutral-400 border border-indigo-500 bg-indigo-800/10 shadow-[0_0_5px_#6366f1] rounded-2xl p-4 animate-fade-in-delay-100">
      {defaultQuote?.quote}
      <footer className="mt-2 text-end text-amber-400">
        {defaultQuote?.author}
      </footer>
    </blockquote>
  );
};

export default QuoteCard;
