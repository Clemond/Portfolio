import { aboutMeData } from "../../data/aboutMe";
import "./aboutMeSection.css";

export default function AboutMeSection() {
  return (
    <div id="aboutMeSection">
      <p className="AboutMeSectionTitle">About Me</p>
      <div className="AboutMeSectionContainer">
        {aboutMeData.map((item) => (
          <div className="AboutMeCard">
            <h2 className="AboutMeItemTitle">{item.title}</h2>
            <p className="AboutMeText">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
