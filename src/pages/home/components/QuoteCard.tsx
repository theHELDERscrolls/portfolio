import { useQuote } from "@/hooks";

export const QuoteCard = () => {
  const { quote } = useQuote();
  
  return (
    <blockquote className="flex flex-col items-center justify-center max-w-xl gap-1 p-5 border border-indigo-500/10 rounded-xl bg-indigo-800/10 shadow-[0_0_5px_#6366f1] cursor-default">
      <p className="font-mono text-base text-neutral-400">{quote?.quote}</p>
      <span className="w-full font-bold text-end text-amber-400 font-orbitron">
        {quote?.author}
      </span>
    </blockquote>
  );
};
