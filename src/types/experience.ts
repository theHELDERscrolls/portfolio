export type ExperienceType = "work" | "academic";

export type Field = "sports-science" | "software-development";

export interface ExperienceItem {
  type: ExperienceType;
  field: Field;

  title: string;
  organization: string;

  description?: string;
  location?: string;

  startDate: string;
  endDate: string | "present";

  tech?: string[];
}
