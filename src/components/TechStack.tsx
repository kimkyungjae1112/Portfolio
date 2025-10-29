import Marquee from "react-fast-marquee";
import "./styles/TechStack.css";

const techStack = [
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Unreal Engine 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg",
  },
  {
    name: "Blender",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
  },
  {
    name: "Git/GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>Game Dev Tech Stack</h2>

      <div className="tech-marquee-container">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="tech-marquee"
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="tech-item">
              <div className="tech-icon-wrapper">
                <img src={tech.icon} alt={tech.name} className="tech-icon" />
              </div>
              <p className="tech-name">{tech.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
