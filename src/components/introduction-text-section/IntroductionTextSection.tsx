import { aboutMeTxt } from "../../data/AboutMeTxt";
import "./IntroductionTextSection.css";
import PushPinIcon from "@mui/icons-material/PushPin";
import SchoolIcon from "@mui/icons-material/School";
import DevicesIcon from "@mui/icons-material/Devices";
import IntroductionHighlights from "./IntroductionHighlights";

export default function IntroductionTextSection() {
  return (
    <div className="IntroductionSectionContainer">
      <p className="IntroductionText">{aboutMeTxt}</p>
      <div className="IntroductionHighlightSection">
        <IntroductionHighlights
          name={"Based in Stockholm"}
          icon={PushPinIcon}
        />
        <IntroductionHighlights
          name={"Stockholm Technical Institute"}
          icon={SchoolIcon}
        />
        <IntroductionHighlights
          name={"Web & Mobile Developer"}
          icon={DevicesIcon}
        />
      </div>
    </div>
  );
}
