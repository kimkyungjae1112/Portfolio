export interface Award {
  title: string;
  date: string;
  description?: string;
}

export interface Activity {
  title: string;
  period: string;
  description?: string;
}

export const awards: Award[] = [
  {
    title: "캡스톤 성과발표회 금상",
    date: "2024.12.04",
  },
  {
    title: "전남대학교 프로그래밍 경진대회 장려상",
    date: "2024.06",
  },
  {
    title: "전국통계활용대회 은상",
    date: "2019",
    description: '주제: "게임중독은 질병인가?"',
  },
];

export const activities: Activity[] = [
  {
    title: '전남대학교 게임 동아리 "CTRL" 개발부장',
    period: "2023 ~ 2024",
  },
  {
    title: "육군 11사단 기갑수색대대 척후병 만기 전역",
    period: "2021 ~ 2022",
  },
  {
    title: '전남대학교 게임 개발 동아리 "PIMM"',
    period: "2020 ~ 2021",
  },
];
