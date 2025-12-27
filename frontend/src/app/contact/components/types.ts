export interface ContactChannel {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  href: string;
}

export interface ProjectType {
  id: number;
  value: string;
  label: string;
}

export interface ContactFormData {
  fullName: string;
  workEmail: string;
  projectType: string;
  budget: number;
  message: string;
}
