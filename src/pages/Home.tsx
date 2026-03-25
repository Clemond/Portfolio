import React from "react";
import Header from "../components/header-section/Header";
import ProjectSection from "../components/project-section/ProjectSection";
import SkillSection from "../components/skills-section/SkillSection";
import PresentationSection from "../components/presentation-section/PresentationSection";
import ContactSection from "../components/contact-section/ContactSection";
import ResumeSection from "../components/resume-section/ResumeSection";
import IntroductionTextSection from "../components/introduction-text-section/IntroductionTextSection";

export const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <PresentationSection />
      <IntroductionTextSection />
      <ProjectSection />
      <ResumeSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
};
