import "./Header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerNameField">
        <p className="headerName">Nicholas Nieminen Jönsson</p>
        <p className="headerJobTitle">iOS & Android Developer</p>
      </div>

      <div className="headerBtnContainer">
        <button
          onClick={() => {
            document.getElementById("projectSection")?.scrollIntoView({
              behavior: "smooth"
            });
          }}
          className="headerBtn"
        >
          Projects
        </button>
        <button
          onClick={() => {
            document.getElementById("resumeSection")?.scrollIntoView({
              behavior: "smooth"
            });
          }}
          className="headerBtn"
        >
          Resume
        </button>
        <button
          onClick={() => {
            document.getElementById("aboutMeSection")?.scrollIntoView({
              behavior: "smooth"
            });
          }}
          className="headerBtn"
        >
          About Me
        </button>
        <button
          onClick={() => {
            document.getElementById("skillsSection")?.scrollIntoView({
              behavior: "smooth"
            });
          }}
          className="headerBtn"
        >
          Skills
        </button>
        <button onClick={() => {}} className="headerBtn">
          Contact
        </button>
      </div>
    </div>
  );
}
