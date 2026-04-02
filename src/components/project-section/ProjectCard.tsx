import React from "react";
import type { Project } from "../../types/projectTypes";
import "./ProjectCard.css";

type Props = {
  project: Project;
};

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="card">
      <img
        src={project.imageUrl}
        alt={`${project.title} screenshot`}
        className="projectImage"
      />
      <div className="cardContent">
        <p className="titleText">{project.title}</p>
        <p className="descriptionText">{project.description}</p>
        <p className="ProjectCardTechText">
          Tech: {project.techStack.map((tech) => `[${tech}]`).join(" ")}
        </p>
        <a href={project.githubUrl} target="_blank">
          GitHub
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank">
            Live
          </a>
        )}
      </div>
    </div>
  );
};
