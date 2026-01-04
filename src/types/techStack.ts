export type TechStackItemType = "KNOWN" | "LEARNING";

export interface TechStackItem {
  id: string;
  type: TechStackItemType;
  name: string;
  iconUrl: string;
}
