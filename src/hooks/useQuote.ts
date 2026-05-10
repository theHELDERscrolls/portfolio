import { QuotesApiNinjaService } from "@/api";
import type { QuoteElement } from "@/types";
import { useEffect, useState } from "react";

export const useQuote = () => {
  const [quote, setQuote] = useState<QuoteElement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuote = async () => {
    try {
      setError(null);

      const saved = sessionStorage.getItem("quote");
      
      if (saved) {
        setQuote(JSON.parse(saved));
        setLoading(false);
        return;
      }

      const data = await QuotesApiNinjaService.getInspirationalQuote();

      if (!data || data.length === 0) {
        setError("No quote available.");
        return;
      }

      const selectedQuote = data[0];
      setQuote(selectedQuote);

      sessionStorage.setItem("quote", JSON.stringify(selectedQuote));
    } catch (error) {
      setError("No quote available.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return { quote, loading, error };
};
