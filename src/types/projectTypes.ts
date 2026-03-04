export type Tech =
  | "React"
  | "TypeScript"
  | "JavaScript"
  | "Node"
  | "PostgreSQL"
  | "React Native"
  | "SwiftUI"
  | "Firebase"
  | "Expo"
  | "NativeWind";

export type Project = {
  title: string;
  techStack: Tech[];
  description: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean; // set this to true if you want this project to be displayed at the top of the projects list
};
