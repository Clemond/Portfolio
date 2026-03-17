import SkillCard from "./SkillCard";
import { skills } from "../../data/skills";
import "./SkillSection.css";

export default function SkillSection() {
  return (
    <div className="skillSectionContainer">
      <p className="skillSectionTitleText">Skills</p>
      {skills.map((category) => (
        <div key={category.title}>
          <h3 className="skillSectionCategoryText">{category.title}:</h3>
          <div className="skillSectionRows">
            {category.skills.map((skill) => (
              <SkillCard key={skill} skillName={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
