import z from "zod";

export const ExperienceTypeSchema = z.enum(["work", "academic"]);

export const FieldSchema = z.enum(["sports-science", "software-development"]);

const YearMonthSchema = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, "Date must be in YYYY-MM format");

export const ExperienceSchema = z.object({
  type: ExperienceTypeSchema,
  field: FieldSchema,

  title: z.string().min(3),
  organization: z.string().min(2),

  description: z.string().min(5).optional(),
  location: z.string().min(3).optional(),

  startDate: YearMonthSchema,
  endDate: z.union([YearMonthSchema, z.literal("present")]),

  tech: z.array(z.string().min(1)).optional(),
});

export type ExperienceItem = z.infer<typeof ExperienceSchema>;
