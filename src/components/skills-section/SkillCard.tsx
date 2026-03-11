import "./SkillCard.css";

type Prop = {
  skillName: string;
};

export default function SkillCard({ skillName }: Prop) {
  return (
    <div className="skillCardContainer">
      <p className="skillCardText">{skillName}</p>
    </div>
  );
}
