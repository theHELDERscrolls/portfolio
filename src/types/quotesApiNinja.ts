import * as z from "zod";

export const QuoteElementSchema = z.object({
  quote: z.string(),
  author: z.string(),
  work: z.string(),
  categories: z.array(z.string()),
});
export type QuoteElement = z.infer<typeof QuoteElementSchema>;
