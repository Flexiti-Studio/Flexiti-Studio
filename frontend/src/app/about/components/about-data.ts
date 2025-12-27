import { CoreValue, MissionVision } from "./types";

export const missionVisionData: MissionVision[] = [
  {
    id: 1,
    type: "mission",
    title: "Our Mission",
    description:
      "To empower businesses by creating innovative, reliable, and high-performance digital products that solve real-world challenges.",
    icon: "adjust",
    iconWeight: 300,
  },
  {
    id: 2,
    type: "vision",
    title: "Our Vision",
    description:
      "To be a leading force in digital transformation, shaping a future where technology is seamless, intelligent, and accessible to all.",
    icon: "visibility",
    iconWeight: 300,
  },
];

export const coreValues: CoreValue[] = [
  {
    id: 1,
    title: "Quality",
    icon: "verified",
    description:
      "Excellence in every line of code, every design decision, and every user experience.",
  },
  {
    id: 2,
    title: "Innovation",
    icon: "lightbulb",
    description:
      "Pushing boundaries with creative solutions and cutting-edge technologies.",
  },
  {
    id: 3,
    title: "Flexibility",
    icon: "splitscreen",
    description:
      "Adapting to your needs with agile processes and responsive collaboration.",
  },
  {
    id: 4,
    title: "Performance",
    icon: "rocket_launch",
    description:
      "Building products that are fast, reliable, and scalable for any challenge.",
  },
];

export const aboutHero = {
  title: "Building the Future of Digital Products.",
  description:
    "Flexiti Software is a creative software company helping businesses build reliable digital products. We specialize in web development, mobile apps, backend engineering, and intelligent systems.",
};

export const ctaSection = {
  title: "Ready to build with us?",
  description:
    "Let's turn your idea into a high-performance digital product that stands out and delivers results.",
  buttonText: "Contact Us",
  buttonHref: "/contact",
};
