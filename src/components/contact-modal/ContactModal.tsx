import SocialMediaLinks from "../presentation-section/SocialMediaLinks";
import "./ContactModal.css";

type props = {
  onClose: () => void;
};

export default function ContactModal({ onClose }: props) {
  return (
    <div className="ContactModalOverlay" onClick={onClose}>
      <div className="ContactModalCard" onClick={(e) => e.stopPropagation()}>
        <h2>Contact Me</h2>
        <p>Email: nicholas.nieminenjonsson@gmail.com</p>
        <p>LinkedIn: Nicholas Nieminen Jönsson</p>
        <p>Github: Clemond</p>
        <div className="ContactModalSocialMediaLinks">
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
}
