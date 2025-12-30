import * as z from "zod";

export const TechStackItemSchema = z.object({
  type: z.enum(["KNOWN", "LEARNING"]),
  name: z.string(),
  iconUrl: z.string().url(),
});

export type TechStackItem = z.infer<typeof TechStackItemSchema>;
