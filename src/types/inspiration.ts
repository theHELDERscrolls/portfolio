export type InspirationType = "BOOK" | "MUSIC" | "PEOPLE" | "PODCAST";

export interface Inspiration {
  id: number;
  type: InspirationType;
  name: string;
  description: string;
  imageURL: string;
}
