export interface AutomataItem {
  id: string;
  name: string;
  scientificName?: string;
  description: string;
  detailedDescription: string;
  image: string;
  materials: string[];
  dimensions: string;
  powerSource: string;
  movementDescription: string;
  etsyLink: string;
  priceEstimate: string;
  extraDetails: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "craft" | "power" | "shipping";
}

export interface WorkshopStep {
  number: string;
  title: string;
  description: string;
  focusAccent: string;
  badge: string;
}
