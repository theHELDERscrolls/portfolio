import type { ExperienceItem } from "@/types";

const normalizedDate = (date: string) =>
  date === "present" ? "9999-12" : date;

export const sortExperienceByDate = (experience: ExperienceItem[]) =>
  [...experience].sort((a, b) => {
    const startCompare = normalizedDate(b.startDate).localeCompare(
      normalizedDate(a.startDate)
    );

    if (startCompare !== 0) return startCompare;

    return normalizedDate(b.endDate).localeCompare(normalizedDate(a.endDate));
  });
