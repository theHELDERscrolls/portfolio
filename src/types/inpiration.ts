import { z } from "zod";

export const InspirationTypeSchema = z.enum([
  "BOOK",
  "MUSIC",
  "PERSON",
  "PODCAST",
]);

export const InspirationSchema = z.object({
  id: z.number().int(),
  type: InspirationTypeSchema,
  name: z.string().min(1),
  description: z.string().min(1),
  imageURL: z.string(),
});
export type Inspiration = z.infer<typeof InspirationSchema>;
