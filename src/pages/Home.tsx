import React from "react";
import Header from "../components/header/Header";
import ProjectSection from "../components/project-section/ProjectSection";
import SkillSection from "../components/skills-section/SkillSection";
import AboutMeSection from "../components/about-me-section/AboutMeSection";
import PresentationSection from "../components/presentation-section/PresentationSection";

export const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <PresentationSection />
      <AboutMeSection />
      <ProjectSection />
      <SkillSection />
    </div>
  );
};
