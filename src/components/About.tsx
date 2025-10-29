import "./styles/About.css";
import { personalInfo } from "../data/personalInfo";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          {personalInfo.intro.main}
        </p>
        <p className="para">
          {personalInfo.intro.sub}
        </p>
        <div className="about-details">
          <div className="about-detail-item">
            <strong>Email:</strong> {personalInfo.email}
          </div>
          <div className="about-detail-item">
            <strong>Education:</strong> {personalInfo.education}
          </div>
          <div className="about-detail-item">
            <strong>GitHub:</strong>{" "}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
            >
              {personalInfo.github.replace("https://", "")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
