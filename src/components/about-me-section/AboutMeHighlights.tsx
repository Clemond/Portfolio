import "./AboutMeHighlights.css";

type prop = {
  name: string;
  icon: React.ElementType;
};

export default function AboutMeHighlights(props: prop) {
  return (
    <div className="AboutMeHighlightsContainer">
      <props.icon fontSize="medium" />
      <p>{props.name}</p>
    </div>
  );
}
