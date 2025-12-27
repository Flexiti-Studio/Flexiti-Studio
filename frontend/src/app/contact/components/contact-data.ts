import { ContactChannel, ProjectType } from "./types";

export const contactChannels: ContactChannel[] = [
  {
    id: 1,
    title: "Chat on WhatsApp",
    description: "Typically replies in minutes",
    icon: "sms",
    iconColor: "text-[#25D366]",
    href: "https://wa.me/1234567890",
  },
  {
    id: 2,
    title: "Send us an Email",
    description: "hello@flexitistudio.com",
    icon: "mail",
    iconColor: "text-cyan-400",
    href: "mailto:hello@flexitistudio.com",
  },
  {
    id: 3,
    title: "Call Us",
    description: "+1 (555) 123-4567",
    icon: "call",
    iconColor: "text-green-400",
    href: "tel:+15551234567",
  },
];

export const projectTypes: ProjectType[] = [
  { id: 1, value: "", label: "Select a project type" },
  { id: 2, value: "mobile-app", label: "Mobile App" },
  { id: 3, value: "ai-system", label: "AI System" },
  { id: 4, value: "web-platform", label: "Web Platform" },
  { id: 5, value: "hardware", label: "Hardware" },
  { id: 6, value: "training", label: "Digital Training" },
  { id: 7, value: "custom", label: "Custom Solution" },
];

export const budgetOptions = [
  { value: 0, label: "$5k" },
  { value: 33, label: "$20k" },
  { value: 66, label: "$50k" },
  { value: 100, label: "$100k+" },
];

export const initialFormData = {
  fullName: "",
  workEmail: "",
  projectType: "",
  budget: 50,
  message: "",
};
