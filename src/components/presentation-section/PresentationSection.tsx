import ProfilePic from "../../assets/profilePic.jpg";
import "./PresentationSection.css";
import SocialMediaLinks from "./SocialMediaLinks";

export default function PresentationSection() {
  return (
    <div className="presentationSectionContainer">
      <img
        style={{
          borderRadius: "192px",
          height: "250px",
          width: "250px"
        }}
        src={ProfilePic}
        alt="Profile Pic"
      />
      <div>
        <p className="presentationSectionHelloText">Hello, I'm</p>
        <p className="presentationSectionNameText">Nicholas Nieminen Jönsson</p>
        <p className="presentationSectionJobTitle">iOS & Android Developer</p>
        <div className="presentationSectionButtonField">
          <button
            className="presentationSectionBtnStyle"
            onClick={() => window.open("/cv.pdf", "_blank")}
          >
            View & Download CV
          </button>
          <button
            className="presentationSectionBtnStyle"
            onClick={() => alert("TBD")}
          >
            Contact Info
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "12px"
          }}
        >
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
}
