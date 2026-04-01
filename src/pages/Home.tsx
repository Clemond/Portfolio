import React, { useState } from "react";
import Header from "../components/header-section/Header";
import ProjectSection from "../components/project-section/ProjectSection";
import SkillSection from "../components/skills-section/SkillSection";
import PresentationSection from "../components/presentation-section/PresentationSection";
import ContactSection from "../components/contact-section/ContactSection";
import ResumeSection from "../components/resume-section/ResumeSection";
import IntroductionTextSection from "../components/introduction-text-section/IntroductionTextSection";
import AboutMeSection from "../components/about-me-section/AboutMeSection";
import ContactModal from "../components/contact-modal/ContactModal";
import RevealAnimation from "../components/utils/RevealAnimation";

export const Home: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  return (
    <div>
      <Header onContactClick={() => setIsContactModalOpen(true)} />
      {isContactModalOpen && (
        <ContactModal onClose={() => setIsContactModalOpen(false)} />
      )}
      <RevealAnimation>
        <PresentationSection
          onContactInfoClick={() => setIsContactModalOpen(true)}
        />
      </RevealAnimation>

      <RevealAnimation>
        <IntroductionTextSection />
      </RevealAnimation>

      <RevealAnimation>
        <ProjectSection />
      </RevealAnimation>

      <RevealAnimation>
        <AboutMeSection />
      </RevealAnimation>

      <RevealAnimation>
        <ResumeSection />
      </RevealAnimation>

      <RevealAnimation>
        <SkillSection />
      </RevealAnimation>

      <ContactSection />
    </div>
  );
};
