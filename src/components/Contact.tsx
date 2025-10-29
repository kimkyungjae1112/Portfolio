import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { personalInfo } from "../data/personalInfo";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href={`mailto:${personalInfo.email}`}
                data-cursor="disable"
              >
                {personalInfo.email}
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href={`tel:${personalInfo.phone}`} data-cursor="disable">
                {personalInfo.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Links</h4>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href={personalInfo.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              CV (Resume) <MdArrowOutward />
            </a>
            <a
              href={personalInfo.portfolioLink}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio PDF <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Portfolio of <br /> <span>{personalInfo.name.ko}</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
