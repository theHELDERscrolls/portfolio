import * as z from "zod";

export const TechStackItemSchema = z.object({
  id: z.string(),
  type: z.enum(["KNOWN", "LEARNING"]),
  name: z.string(),
  iconUrl: z.string(),
});

export type TechStackItem = z.infer<typeof TechStackItemSchema>;
