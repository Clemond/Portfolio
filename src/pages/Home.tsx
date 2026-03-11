import React from "react";
import Header from "../components/header/Header";
import PresentationCard from "../components/intro-card/PresentationCard";
import ProjectSection from "../components/project-section/ProjectSection";
import SkillSection from "../components/skills-section/SkillSection";

export const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <PresentationCard />
      <ProjectSection />
      <SkillSection />
    </div>
  );
};
