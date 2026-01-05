import { useQuote } from "@/hooks";
import type { QuoteElement } from "@/types";

const DEFAULT_QUOTE: QuoteElement = {
  quote: "Luck is what happens when preparation meets opportunity.",
  author: "Seneca",
  work: "",
  categories: ["wisdom"],
};

export const QuoteCard = () => {
  const { quote, loading } = useQuote();

  const displayedQuote = !loading && quote ? quote : DEFAULT_QUOTE;

  return (
    <blockquote className="flex flex-col items-center justify-center max-w-xl gap-1 p-5 border border-indigo-500/10 rounded-xl bg-indigo-800/10 shadow-[0_0_5px_#7C86FF] cursor-default">
      <p className="font-mono text-base text-neutral-400">
        {displayedQuote.quote}
      </p>
      <span className="w-full font-bold text-end text-amber-400 font-orbitron">
        {displayedQuote.author}
      </span>
    </blockquote>
  );
};
