export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: ServiceCategory;
}

export type ServiceCategory =
  | "software"
  | "hardware"
  | "training"
  | "ai"
  | "design";

export interface ServiceSection {
  id: number;
  title: string;
  description?: string;
  category: ServiceCategory;
  services: Service[];
}
