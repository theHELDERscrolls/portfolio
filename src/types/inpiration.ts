export type InspirationType = "BOOK" | "MUSIC" | "PERSON" | "PODCAST";

export interface Inspiration {
  id: number;
  type: InspirationType;
  name: string;
  description: string;
  imageURL: string;
}
