export interface workExperienceProps {
  role: string;
  company: string;
  description: string;
  isCurrent: boolean;
  startDate: string;
  endDate: string;
  location?: string;
  tech?: string[];
}
