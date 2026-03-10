import React from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/project-section/ProjectCard";
import Header from "../components/header/Header";
import PresentationCard from "../components/intro-card/PresentationCard";

export const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <PresentationCard />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}
      </div>
    </div>
  );
};
