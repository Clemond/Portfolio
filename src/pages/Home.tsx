import React from "react";
import Header from "../components/header/Header";
import ProjectSection from "../components/project-section/ProjectSection";
import SkillSection from "../components/skills-section/SkillSection";
import AboutMeSection from "../components/about-me-section/AboutMeSection";
import PresentationSection from "../components/presentation-section/PresentationSection";
import ContactSection from "../components/contact-section/ContactSection";
import ResumeSection from "../components/resume-section/ResumeSection";

export const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <PresentationSection />
      <AboutMeSection />
      <ProjectSection />
      <ResumeSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
};
