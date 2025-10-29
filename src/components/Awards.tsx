import { FaAward, FaStar } from "react-icons/fa";
import "./styles/Awards.css";
import { awards, activities } from "../data/awardsData";

const Awards = () => {
  return (
    <div className="awards-section section-container">
      <div className="awards-container">
        <h2>
          Awards <span>&</span> Activities
        </h2>
        <div className="awards-grid">
          <div className="awards-column">
            <h3>
              <FaAward className="section-icon" /> Awards
            </h3>
            <div className="awards-list">
              {awards.map((award, index) => (
                <div className="award-item" key={index}>
                  <div className="award-header">
                    <h4>{award.title}</h4>
                    <span className="award-date">{award.date}</span>
                  </div>
                  {award.description && (
                    <p className="award-description">{award.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="awards-column">
            <h3>
              <FaStar className="section-icon" /> Activities
            </h3>
            <div className="awards-list">
              {activities.map((activity, index) => (
                <div className="award-item" key={index}>
                  <div className="award-header">
                    <h4>{activity.title}</h4>
                    <span className="award-date">{activity.period}</span>
                  </div>
                  {activity.description && (
                    <p className="award-description">{activity.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
