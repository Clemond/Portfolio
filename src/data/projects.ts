import type { Project } from "../types/projectTypes";
import gigRadar from "../assets/gigRadar.jpg";
import deck21 from "../assets/deck21.jpg";
import voyageVault from "../assets/voyageVault.jpg";
import toDoApp from "../assets/toDoApp.jpg";

export const projects: Project[] = [
  {
    title: "GigRadar",
    techStack: ["React Native", "TypeScript"],
    description:
      "GigRadar is a mobile app built with React Native (Expo), TypeScript, and Firebase. It helps users find upcoming live music events based on their current location or a selected city.",
    githubUrl: "https://github.com/Clemond/GigRadar",
    featured: true,
    imageUrl: gigRadar
  },
  {
    title: "Deck21",
    techStack: ["React Native", "Node"],
    description:
      "A mobile version of the classic Blackjack card game, built with React Native. Play against the dealer, use hit or stand strategies, and try to reach 21 without going bust!",
    githubUrl: "https://github.com/Clemond/Deck21",
    featured: false,
    imageUrl: deck21
  },
  {
    title: "VoyageVault",
    techStack: ["SwiftUI", "Firebase"],
    description:
      "An iOS application developed with a friend during our iOS development studies. This social media travel platform lets you explore vacation spots, save favorites, set countdowns for upcoming trips, and share travel photos with friends for them to see!",
    githubUrl: "https://github.com/Navi9519/VoyageVaultProject",
    featured: false,
    imageUrl: voyageVault
  },
  {
    title: "ToDoApp",
    techStack: ["React Native", "JavaScript", "Expo"],
    description:
      "A To-Do app developed with React Native. This app enables users to add tasks, mark them as completed, and delete them with ease. It focuses on essential React Native concepts such as state management, user input handling, and efficient list rendering",
    githubUrl: "https://github.com/Clemond/ToDoAppReactNative",
    featured: false,
    imageUrl: toDoApp
  }
];
