import "./Header.css";

export default function Header() {
  return (
    <div className="container">
      <div className="nameField">
        <p className="name">Nicholas Nieminen Jönsson</p>
        <p className="jobTitle">iOS & Android Developer</p>
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
          Portfolio
        </button>
        <button onClick={() => {}} className="headerBtn">
          Resume
        </button>
        <button onClick={() => {}} className="headerBtn">
          About Me
        </button>
        <button onClick={() => {}} className="headerBtn">
          Skills
        </button>
        <button onClick={() => {}} className="headerBtn">
          Contact
        </button>
      </div>
    </div>
  );
}
