
## 🧨 주제
사용자 편의를 고려한 검색창 설계

## 🚅 배포링크
### https://nutri-search.herokuapp.com/

### [velog 과제 후기](https://velog.io/@yena1025/PreOnboarding6-%EA%B2%80%EC%83%89-%EC%9E%90%EB%8F%99%EC%99%84%EC%84%B1-%EA%B3%BC%EC%A0%9C-%ED%9B%84%EA%B8%B0) 🔔

## 🍱 구현 상세
* 검색 자동완성 기능 구현
* json-server로 mock data를 받아옴
### [사용자가 원하는 영양제를 빠르게 찾을 수 있도록 🧚‍♀️]
1. 특정 성분의 영어를 한글로, 또는 한글을 영어로 인식하도록 처리
 ```
  export const INPUT_TO_ALPHA = {
    비타민에이: '비타민A',
    비타민비: '비타민B',
    비타민씨: '비타민C',
    비타민디: '비타민D',
    비타민이: '비타민E',
    비타민A: '비타민에이',
    비타민B: '비타민비',
    비타민C: '비타민씨',
    비타민D: '비타민디',
    비타민E: '비타민이',
  };
  ```
  <br/>
  
2. 공백(space)으로 구분된 입력어를 **모두 포함**하는 결과값 반환

  + **'토코'까지 입력한 화면** <br/>
  <img src="https://user-images.githubusercontent.com/68722179/154688536-d1bfab62-95fa-4329-a857-c20e34cbd092.png" width="300" /><br/><br/>
  + **'토코'에서 한 칸 띄우고 '타블렛'까지 입력한 화면** <br/>
    <img src="https://user-images.githubusercontent.com/68722179/154689279-b68bfe5a-a89f-4bda-a2ac-f395bd011cc7.png" width="300" />

3. 제품명과 브랜드명 모두 검색결과에 포함<br/><br/>
    (브랜드명이 존재하는 항목일 경우 제품명 위에 브랜드명 표시) <br/>
    <img src="https://user-images.githubusercontent.com/68722179/154787454-f7ef04e3-1ecf-47ef-b469-2c16e1e24041.png" width="300" />

5. 영문 대소문자 상관없이 검색 (예: '비타민c'와 '비타민C')

### [그외 UX를 위한 추가 구현 🧙‍♂️]
* 검색창을 비우면 기존의 자동완성 결과 삭제
* 새로고침 시, X 버튼 클릭 시, 검색결과가 없을 시 Guide 텍스트 보여주기
* 새로고침 시 또는 X 버튼 클릭 시 input창에 autoFocus


## 👸 최적화
### [React 최적화 🍨]
* **debounce**로 **input 입력 최적화**
* useCallback, React.memo로 **memoization** 수행

### [크롬 Lighthouse로 Performance 최적화 🚀]
**첫 측정 결과**<br/>
<img src="https://user-images.githubusercontent.com/68722179/154710686-a9c0b405-2df4-4ff1-ab1c-dde9e0f22d5f.png" width="400" /><br/>
<img src="https://user-images.githubusercontent.com/68722179/154710759-eeaaf9f9-b348-453e-bebe-d839356cd12d.png" width="400" /><br/><br/>
**최종 측정 결과**<br/>
<img src="https://user-images.githubusercontent.com/68722179/154710907-88b295bd-9f7c-4b51-b199-f6328b33d5f3.png" width="400" /><br/>
<img src="https://user-images.githubusercontent.com/68722179/154710937-530a2518-c111-4b7a-8de1-67a956272a87.png" width="400" />

### 해결 과정
* 문제 인식: 폰트 파일 용량으로 인해 첫 로딩 속도가 느려지고 있음을 발견 <br/>
<div>
<img src="https://user-images.githubusercontent.com/68722179/154712187-f3bc309c-256b-4960-ba3c-3e0488054ab2.png" width="500" />
 </div>
<div>
 
* 해결: 기존의 original 폰트를 '서브셋 폰트'(쓰지 않는 한글 조합이 제외된 폰트)로 교체 <br/>
 
* 결과: Performance 점수가 **79점에서 96점**으로 상승 <br/>


## 🌠 리팩토링
 클린코드 관련 영상을 보고 (영상출처: https://www.youtube.com/watch?v=edWbHp_k_9Y)<br/>
    영상에 나온 '**핵심 데이터**'와 '**세부 구현 코드**'라는 개념으로 기존 코드를 분류한 뒤 리팩토링 진행
  ### 리팩토링 진행 내역
 * utils의 constants, hooks 폴더에 본 컴포넌트에 뭉쳐있던 관심사들을 적절히 분리
 * styled-components 코드도 컴포넌트의 동작을 파악하기 위한 핵심적인 데이터가 아니라고 판단, <br/> 개별 폴더에 분리한 뒤 ```import * as S``` 구문으로 가져옴

## 🍒 설치 및 실행 방법
프로젝트 클론 - ```yarn install``` -  ```yarn dev``` 
 
## 🍰 기술스택
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![styled-components](https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 

## 🎷디렉토리 구조

```bash
.
├── components                # 프로젝트 핵심 컴포넌트
│     ├── SearchContainer
│     ├── SearchIcon
│     ├── SearchInput
│     └── SearchView
├── styles 
│     ├── fonts               # 폰트 폴더 (Spoqa Han Sans)
│     ├── global.js
│     └── theme.js
└── utils                     # 상수, Api, 세부 컴포넌트
│     ├── constants
│     │      ├── inputTrans.js     # 영한 trans를 위한 배열
│     │      ├── inputBtnStyle.js     # 돋보기, X 버튼 스타일
│     │      └── jsonKeyString.js         # mock 데이터의 key ('제품명', '브랜드')
│     ├── hooks
│     │      └── getApi.js    # json-server에서 데이터 받아오는 axios 코드
│     ├── SearchGuide.js      # SearchView가 없을 시 보여주는 guide 텍스트
│     └── SearchIcon.js       # 돋보기, X 버튼 아이콘

```


## 🧙‍♀️ 커밋 컨벤션

gitmoji를 사용하여 커밋의 목적이나 의도를 시각적으로 쉽게 식별할 수 있도록 하였습니다.

| gitmoji | 사용 예시 |
| --- | --- |
| :sparkles: | 기능 구현 |
| :bug: | 버그 수정 |
| :lipstick: | CSS 스타일링 |
| :wrench: | 설치 관련 파일 |
| :fire: | 파일 삭제 |
| :truck: | 디렉토리 또는 파일 이동 |
| :recycle: | 리팩토링 |
