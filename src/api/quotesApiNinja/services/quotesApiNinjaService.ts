import type { QuoteElement } from "@/types";
import { QuotesApiNinjaClient } from "../client";

const API_KEY = import.meta.env.VITE_QUOTES_API_NINJA_KEY;

export class QuotesApiNinjaService {
  private static api = new QuotesApiNinjaClient().instance;

  public static async getInspirationalQuote(): Promise<
    QuoteElement[] | undefined
  > {
    if (!API_KEY) {
      console.error("Missing Ninja Quotes API key (VITE_QUOTES_API_NINJA_KEY)");
    }

    try {
      const response = await this.api.get<QuoteElement[]>("/randomquotes", {
        params: { categories: "inspirational,wisdom" },
        headers: { "X-Api-Key": API_KEY },
      });

      return response.data;
    } catch (error) {
      console.error("Ninja quotes API error:", error);
    }
  }
}
