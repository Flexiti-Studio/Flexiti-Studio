export interface ValueCardT {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconWeight?: number;
}

export interface CoreValue {
  id: number;
  title: string;
  icon: string;
  description?: string;
}

export interface MissionVision {
  id: number;
  type: "mission" | "vision";
  title: string;
  description: string;
  icon: string;
  iconWeight?: number;
}
