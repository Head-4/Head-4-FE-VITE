# univon

<div align="center">
<img alt="image" src="https://github.com/user-attachments/assets/c901ef67-dd42-45b1-a407-bfa4f03babf1">

</div>

# 
> **상명대학교 개발 동아리** <br/> **개발기간: 2024.12 ~ 2025.03**

## 배포 주소

> **서버** : [https://www.univ-on.com/](https://www.univ-on.com/)<br>

## 팀 소개

|      성지훈       |          박준형         |       엄지호         |                                                                                                               
| :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | 
| Front-end | Back-end | Back-end |

## 프로젝트 소개

원하는 키워드를 설정하면 대학교 공지사항을 1시간 간격으로 모니터링하여, 맞춤형 알림을 메신저로 전달해주는 서비스입니다.


## Stacks 

### Development
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)

---
## 화면 구성
| 메인 페이지  |  알림 페이지   |
| :-------------------------------------------: | :------------: |
|  <img width="200" height="350" src="https://github.com/user-attachments/assets/90a73ba2-d493-42ca-88a9-9a4eb167551c"/> |  <img width="200" height="350" src="https://github.com/user-attachments/assets/a5972767-5c33-45aa-b9dc-3a8d77b5608b"/>|  
| 키워드 설정 페이지   |  학교 설정 페이지   |  
| <img width="200"  height="350" src="https://github.com/user-attachments/assets/629e8bd7-9649-4ae7-9a53-29f2f2590d5b"/>   |  <img width="200" height="350" src="https://github.com/user-attachments/assets/8e7c82ff-c0a7-4131-aedf-9975ae989bf1"/>     |

---
## 주요 기능

### ⭐️ PWA
- Progressive Web App(PWA)를 통해 앱을 모바일 환경에 최적화하여 설치 없이도 앱처럼 사용할 수 있는 사용자 경험 제공

### ⭐️ 공지 알림 기능
- Firebase Cloud Messaging(FCM)을 이용한 푸시 알림 기능 구현
- Service Worker를 설정하여 웹과 앱 환경에서도 실시간 알림 수신 가능

### ⭐️ 간편 로그인
- 카카오 계정을 활용한 소셜 로그인 기능 제공

### ⭐️ 서버 상태 관리
- TanStack Query를 통해 서버 데이터의 캐싱, 상태 관리, 비동기 처리 간소화
- 무한 스크롤 기능을 연동하여 콘텐츠를 부드럽고 효율적으로 로딩 가능

---
## 아키텍쳐

### 디렉토리 구조
```bash
│  .env
│  .gitignore
│  eslint.config.js
│  index.html
│  package.json
│  README.md
│  tsconfig.app.json
│  tsconfig.json
│  tsconfig.node.json
│  vite.config.ts
│  yarn.lock
├─public
│  └─icons
└─src
    ├─apis
    │  ├─fcm
    │  ├─keyword
    │  ├─login
    │  ├─main
    │  ├─notification
    │  └─university
    ├─assets
    │  ├─Aside
    │  ├─Common
    │  ├─faq
    │  ├─KeyWord
    │  ├─Layout
    │  │  └─Header
    │  ├─Login
    │  ├─Logo
    │  └─Search
    ├─components
    ├─hooks
    │  ├─alertBox
    │  └─auth
    ├─layout
    │  ├─Aside
    │  │  ├─components
    │  │  └─hooks
    │  └─Header
    │      └─components
    ├─pages
    │  ├─faq
    │  ├─keyword
    │  │  ├─components
    │  │  └─hooks
    │  ├─login
    │  │  └─components
    │  ├─main
    │  │  ├─components
    │  │  └─hooks
    │  ├─notification
    │  │  ├─components
    │  │  └─hooks
    │  ├─search
    │  ├─university
    │  │  ├─components
    │  │  └─hooks
    │  └─utilPages
    │      └─hooks
    ├─router
    ├─store
    │  └─AsideStore
    ├─styles
    │  └─Common
    ├─tanstack-query
    ├─types
    └─utils
        └─const

```
