import React from "react";
import type { Project } from "../types/projectTypes";
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
      <div>
        <p className="titleText">{project.title}</p>
        <p>{project.description}</p>
        <p>Tech: {project.techStack.join(", ")}</p>
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
