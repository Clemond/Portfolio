import { aboutMeTxt } from "../../data/AboutMeTxt";
import AboutMeHighlights from "./AboutMeHighlights";
import "./AboutMeSection.css";
import PushPinIcon from "@mui/icons-material/PushPin";
import SchoolIcon from "@mui/icons-material/School";
import DevicesIcon from "@mui/icons-material/Devices";

export default function AboutMeSection() {
  return (
    <div className="AboutMeSectionContainer">
      <p className="AboutMeText">{aboutMeTxt}</p>
      <div className="HighlightSection">
        <AboutMeHighlights name={"Based in Stockholm"} icon={PushPinIcon} />
        <AboutMeHighlights
          name={"Stockholm Technical Institute"}
          icon={SchoolIcon}
        />
        <AboutMeHighlights name={"Web & Mobile Developer"} icon={DevicesIcon} />
      </div>
    </div>
  );
}
