import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Timeline
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>전남대학교 소프트웨어공학 전공</h4>
                <h5>학사 과정</h5>
              </div>
              <h3>2020 ~</h3>
            </div>
            <p>
              게임 개발에 열정을 가지고 C++과 Unreal Engine을 활용한 다양한 프로젝트를 진행하며 역량을 키워왔습니다.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>전남대학교 Software Language and System Lab</h4>
                <h5>학부연구생</h5>
              </div>
              <h3>2023.09 ~</h3>
            </div>
            <p>
              Tree-sitter 엔진 해킹, SmartBlock, ChatGPT기반 VSCode UI 작업 등을 해왔습니다.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>게임 동아리 CTRL 개발부장</h4>
                <h5>전남대학교</h5>
              </div>
              <h3>2023 - 2024</h3>
            </div>
            <p>
              팀 프로젝트를 이끌며 협업 능력을 키우고, 후배 개발자들에게 게임 개발 지식을 공유했습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
