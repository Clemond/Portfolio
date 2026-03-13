import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import "./AboutMeHighlights.css";

type prop = {
  name: string;
  img: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
};

export default function AboutMeHighlights(props: prop) {
  return (
    <div className="AboutMeHighlightsContainer">
      <props.img fontSize="medium" />
      <p>{props.name}</p>
    </div>
  );
}
