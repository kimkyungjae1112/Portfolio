export interface TechItem {
  name: string;
  image: string;
}

// 게임 개발 기술 스택
export const gameDevTechStack: TechItem[] = [
  {
    name: "C++",
    image: "/images/tech/cpp.webp",
  },
  {
    name: "Unreal Engine",
    image: "/images/tech/unreal.webp",
  },
  {
    name: "Git",
    image: "/images/tech/git.webp",
  },
  {
    name: "Visual Studio",
    image: "/images/tech/visualstudio.webp",
  },
  {
    name: "Blender",
    image: "/images/tech/blender.webp",
  },
];

// 개발 스킬셋
export const developmentSkills = {
  gameEngine: {
    title: "Game Development",
    description:
      "Unreal Engine과 C++을 활용한 게임 개발 전문. 복잡한 게임 로직, AI 시스템, 최적화에 능숙합니다.",
    skills: [
      "C++",
      "Unreal Engine 5.4 / 5.5",
      "게임플레이 프로그래밍",
      "AI 시스템",
      "최적화",
      "애셋 관리",
      "데이터 구조 설계",
      "컴포넌트 아키텍처",
    ],
  },
  tools: {
    title: "Tools & Version Control",
    description:
      "효율적인 협업과 버전 관리를 위한 도구 활용에 능숙합니다.",
    skills: [
      "Git / GitHub",
      "Visual Studio",
      "Unreal Editor",
      "Blender",
      "디버깅 & 프로파일링",
    ],
  },
};
