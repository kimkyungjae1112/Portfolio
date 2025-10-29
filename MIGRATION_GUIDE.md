# Portfolio Migration Guide

이 문서는 ProfilePage의 콘텐츠를 Portfolio-Website로 마이그레이션한 내역을 설명합니다.

## 📝 완료된 작업

### 1. 데이터 구조 생성 ✅
- `src/data/personalInfo.ts` - 개인 정보 (이름, 연락처, 학력 등)
- `src/data/projectsData.ts` - 게임 프로젝트 3개 상세 정보
- `src/data/awardsData.ts` - 수상 및 활동 내역
- `src/data/techStack.ts` - 기술 스택 정보

### 2. 이미지 마이그레이션 ✅
- ProfilePage의 모든 게임 GIF 이미지 복사 완료
- `public/images/projects/blackspace/` - Black Space 프로젝트 이미지
- `public/images/projects/zerosector/` - Zero Sector 프로젝트 이미지
- `public/images/projects/noface/` - No-Face 프로젝트 이미지
- `public/images/profile.jpg` - 프로필 사진
- `public/images/welcome.mp4` - 인트로 비디오

### 3. 컴포넌트 업데이트 ✅
- **Landing.tsx** - 김경재님 이름과 "Game Developer" 포지셔닝
- **About.tsx** - 실제 자기소개 및 연락처 정보
- **WhatIDo.tsx** - 게임 개발 스킬셋 (C++, Unreal Engine 등)
- **Career.tsx** - 교육 타임라인 (전남대, 군 복무, 동아리)
- **Work.tsx** - 3개 게임 프로젝트 (GitHub, Video 링크 포함)
- **Contact.tsx** - 실제 연락처 + CV/Portfolio PDF 링크
- **Awards.tsx** (신규) - 수상 및 활동 내역 섹션
- **TechStack.tsx** - 제목 변경 및 placeholder 이미지 사용

### 4. MainContainer 업데이트 ✅
- Awards 컴포넌트를 레이아웃에 추가
- 섹션 순서: Landing → About → WhatIDo → Career → Work → TechStack → Awards → Contact

## 🔧 추가 작업 필요

### 기술 스택 이미지 교체
현재 TechStack 컴포넌트는 placeholder 이미지를 사용하고 있습니다. 다음 이미지를 준비해주세요:

#### 필요한 이미지:
1. **C++** 로고 - cpp.webp
2. **Unreal Engine** 로고 - unreal.webp
3. **Git** 로고 - git.webp
4. **Visual Studio** 로고 - visualstudio.webp
5. **Blender** 로고 - blender.webp

#### 이미지 추가 방법:
```bash
# 1. 이미지를 다운로드하거나 준비
# 2. 파일명을 위와 같이 변경 (webp 형식 권장)
# 3. 다음 디렉토리에 배치
public/images/tech/

# 4. TechStack.tsx 파일 수정 (14-24줄)
# placeholder 이미지 URL을 실제 이미지로 교체:
const imageUrls = [
  "/images/tech/cpp.webp",
  "/images/tech/unreal.webp",
  "/images/tech/git.webp",
  "/images/tech/visualstudio.webp",
  "/images/tech/blender.webp",
];
```

## 🚀 실행 방법

```bash
cd Portfolio-Website
npm install
npm run dev
```

개발 서버가 시작되면 브라우저에서 확인할 수 있습니다.

## 📦 빌드 및 배포

```bash
npm run build
npm run preview
```

## 🎨 추가 커스터마이징

### 개인 정보 수정
`src/data/personalInfo.ts` 파일을 수정하여 정보를 업데이트할 수 있습니다.

### 프로젝트 추가/수정
`src/data/projectsData.ts` 파일에서 프로젝트 정보를 추가하거나 수정할 수 있습니다.

### 수상 및 활동 추가
`src/data/awardsData.ts` 파일에서 수상 및 활동 내역을 관리할 수 있습니다.

## 📝 변경 내역 요약

| 항목 | 이전 | 이후 |
|------|------|------|
| 이름 | MONCY YOHANNAN | 김경재 (Kim Kyung Jae) |
| 포지션 | Designer/Developer | Game Developer |
| 기술 스택 | Web Dev (React, Node.js 등) | Game Dev (C++, Unreal Engine 등) |
| 프로젝트 수 | 6개 (placeholder) | 3개 (실제 게임 프로젝트) |
| Career | 회사 경력 | 교육 타임라인 |
| 추가 섹션 | 없음 | Awards & Activities |

## ✨ 주요 기능

- ✅ 3D 캐릭터 모델 애니메이션
- ✅ GSAP 스크롤 애니메이션
- ✅ Three.js 기반 3D 기술 스택 시각화
- ✅ 반응형 디자인
- ✅ 게임 프로젝트 쇼케이스
- ✅ 수상 및 활동 내역 표시

## 🔍 문제 해결

### TypeScript 에러가 발생하는 경우
```bash
npm run build
```
위 명령어로 TypeScript 컴파일 에러를 확인할 수 있습니다.

### 이미지가 표시되지 않는 경우
1. 이미지 경로가 올바른지 확인
2. 이미지 파일이 `public/` 디렉토리에 있는지 확인
3. 파일 확장자가 정확한지 확인

### GSAP 애니메이션이 작동하지 않는 경우
GSAP Club 플러그인은 trial 버전으로 로컬에서만 작동합니다. 배포를 위해서는 공식 라이센스가 필요합니다.

## 📧 연락처

문제가 있거나 도움이 필요하면 kimkyungjae1112@gmail.com으로 연락주세요.
