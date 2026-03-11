type SkillCategory = {
  title: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "Firebase"
    ]
  },
  {
    title: "Native",
    skills: ["React Native", "Kotlin", "Swift"]
  },
  {
    title: "Styling & Design",
    skills: ["CSS", "TailwindCSS", "Figma", "UI/UX design process"]
  },
  {
    title: "Miscellaneous",
    skills: [
      "Git",
      "Gitea",
      "Agile methodology",
      "Docker",
      "REST APIs",
      "PostGreSQL"
    ]
  }
];
