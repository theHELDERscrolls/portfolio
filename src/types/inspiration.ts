export type InspirationType = "BOOK" | "MUSIC" | "PEOPLE" | "PODCAST";

export default interface Inspiration {
  id: number;
  type: InspirationType;
  name: string;
  description: string;
  imageURL: string;
}
