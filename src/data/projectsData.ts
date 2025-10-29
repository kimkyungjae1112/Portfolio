export interface Project {
  id: string;
  order: number;
  name: string;
  category: string;
  platform: string;
  genre: string;
  teamSize: string;
  period: string;
  tools: string;
  summary: string;
  features: string[];
  github: string;
  video: string;
  images: {
    src: string;
    caption: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "blackspace",
    order: 1,
    name: "Black Space",
    category: "개인 프로젝트",
    platform: "PC (Windows)",
    genre: "소울라이크",
    teamSize: "1명 (개인 프로젝트)",
    period: "2025.07.12 ~ 2025.08.22",
    tools: "C++, Unreal Engine 5.5",
    summary:
      "게임을 진행하며 얻는 장비들을 조합하며 성장한 뒤 최종 보스를 처치하는 소울라이크 게임",
    features: [
      "무기 클래스가 참조하는 데이터를 에디터에서 교체해 여러 종류의 무기 구현",
      "플레이어의 공격을 인식하고 회피/방어를 실행하는 적 AI",
      "오브젝트 풀링을 활용한 인벤토리 데이터 관리",
      "각 기능들을 컴포넌트로 만들어 플레이어와 적 AI가 같은 컴포넌트를 공유할 수 있도록 구현",
    ],
    github: "https://github.com/kimkyungjae1112/BlackSpace",
    video: "https://youtu.be/vjcz6WjcW7I",
    images: [
      {
        src: "/images/projects/blackspace/MixtureWeapon.gif",
        caption: "무기 조합",
      },
      {
        src: "/images/projects/blackspace/EnemyDefense.gif",
        caption: "적 AI 방어&반격",
      },
      {
        src: "/images/projects/blackspace/Dodge.gif",
        caption: "적 AI 회피",
      },
    ],
  },
  {
    id: "zerosector",
    order: 2,
    name: "Zero Sector",
    category: "팀 프로젝트",
    platform: "PC (Windows)",
    genre: "추리 & FPS",
    teamSize: "5명 (팀 프로젝트)",
    period: "2025.03.11 ~ 2025.06.09",
    tools: "C++, Unreal Engine 5.4",
    summary:
      "1인칭 슈터 장르로 좀비를 헤치우고 NPC와 대화, 추리를 통해 백신 개발에 대한 실마리를 찾는 게임. 게임의 시간으로 총 7일 동안 진행되며 하루마다 하나의 챕터를 점령해나가고, 최종적으로 마지막 챕터 점령 후 백신 개발자(NPC)를 찾아 탈출하는 스토리로 진행",
    features: [
      "UI(작전판, HUD, 강화판 제외)와 단서 데이터 관리 로직을 제외한 모든 게임 요소를 C++로 개발",
      "애셋 지연 로딩으로 메모리 최적화",
      "컴포넌트 간 통신 시스템 설계",
    ],
    github: "https://github.com/kimkyungjae1112/ZeroSectorProject",
    video: "https://youtu.be/DqUxcDsUQzw",
    images: [
      {
        src: "/images/projects/zerosector/Normal_Dialogue.gif",
        caption: "일반 대화",
      },
      {
        src: "/images/projects/zerosector/Interview_Dialogue.gif",
        caption: "면담 대화",
      },
      {
        src: "/images/projects/zerosector/Battle.gif",
        caption: "전투",
      },
    ],
  },
  {
    id: "noface",
    order: 3,
    name: "No-Face",
    category: "팀 프로젝트",
    platform: "PC (Windows)",
    genre: "로그라이크",
    teamSize: "4명 (팀 프로젝트)",
    period: "2024.09.06 ~ 2024.12.04",
    tools: "C++, Unreal Engine 5.4",
    summary:
      "PCG 알고리즘을 활용해 자동 맵 생성이 되는 쿼터뷰 로그라이크 게임. 게임을 새로 시작할 때마다 맵이 자동으로 랜덤하게 바뀌며, 보스 방에 가까워질수록 스폰되는 몬스터들이 강화되어 다회차 플레이를 즐길 수 있는 게임",
    features: [
      "PCG 알고리즘을 제외한 모든 게임 요소를 C++로 개발",
      "함수 객체를 활용한 지역 타겟팅 스킬 구현",
    ],
    github: "https://github.com/kimkyungjae1112/No-Face",
    video: "https://youtu.be/4CyI_gF_lA0",
    images: [
      {
        src: "/images/projects/noface/Sword_Battle.gif",
        caption: "검 전투",
      },
      {
        src: "/images/projects/noface/Bow_Battle.gif",
        caption: "활 전투",
      },
      {
        src: "/images/projects/noface/Staff_Battle.gif",
        caption: "스테프 전투",
      },
    ],
  },
];
