import "./IntroductionHighlights.css";

type prop = {
  name: string;
  icon: React.ElementType;
};

export default function IntroductionHighlights(props: prop) {
  return (
    <div className="IntroductionHighlightsContainer">
      <props.icon fontSize="medium" />
      <p className="IntroductionHighlightsText">{props.name}</p>
    </div>
  );
}
