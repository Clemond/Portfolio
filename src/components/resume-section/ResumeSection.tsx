import { resume } from "../../data/resume";
import "./ResumeSection.css";

export default function ResumeSection() {
  return (
    <div>
      <p className="ResumeSectionTitle">Resume</p>
      <div id="resumeSection" className="ResumeSectionTimeline">
        {resume.map((job) => (
          <div className="ResumeSectionTimelineItem">
            <p className="ResumeSectionTimelineLeft">{job.year}</p>
            <div className="ResumeSectionTimelineRight">
              <h3>{job.title}</h3>
              <p>{job.location}</p>
              <p>
                {job.description.map((desc) => (
                  <p> - {desc}</p>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
