import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import "./ProjectSection.css";

export default function ProjectSection() {
  return (
    <div id="projectSection">
      <p className="ProjectTitleText">Projects</p>
      <div className="ProjectCardContainer">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}
      </div>
    </div>
  );
}
