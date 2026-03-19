import SocialMediaLinks from "../presentation-section/SocialMediaLinks";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <div className="contactSectionContainer">
      <div className="contactSectionLinks">
        <SocialMediaLinks />
      </div>
      <p>© 2026 Nicholas Nieminen Jönsson</p>
    </div>
  );
}
