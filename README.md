## 📑 프로젝트 소개

WANTED & CODESTATES 프리온보딩 코스 

TEAM 8 팀기업과제 9번 입니다.

<br>

### < 발란 >

PROJECT PERIOD: 2022.02.28 ~ 2022.03.02

<br>

[배포링크]()

<br>

## ✨ 주요 기능

- 고객이 리뷰를 등록 하고 리뷰를 확인할 수 있습니다.
- 리뷰 등록 페이지 : 제목, 이미지 선택, 평점을 등록할 수 있습니다.
- 상품 리뷰 리스트 페이지 : 고객들이 구매한 상품에 대한 전체 리뷰를 무한스크롤을 이용해 정렬되어(최신순, 리뷰카운트 순, 랜덤) 확인 할 수 있는 페이지입니다. 그리드뷰와 리스트뷰를 제공합니다.
- 상품 리뷰 상세 페이지 : 특정 리뷰를 클릭하면 보이는 리뷰 상세 페이지입니다. 댓글달기 기능과 좋아요, 링크공유 기능을 제공합니다.

<br>

### 🧔 메인 



<br>

### 구현한 기능 목록 및 어려웠던 점

<br>

1. 리뷰 등록 페이지

<br>

[ 김희진 ] 

- 구현 내용 & 방법
    - 리뷰입력폼을 제작했습니다.
    - 이미지 업로드 및 미리보기를 제작했습니다.
- 구현하면서 어려웠던 점
    - 현재는 이미지를 fileRoader로 업로드 하지만, 더 적은 용량으로 업로드 할 수 있는 방식이 있다면 개선해 보고 싶습니다.

<br>

[ 김혜영 ]

- 구현 내용 & 방법
    - 별점 컴포넌트 작성
- 구현하면서 어려웠던 점
    - styled-component를 이용하지 않고 작성하는 게 오랜만이어서 다시금 약간 낯설었습니다.
    - 별이 클릭되면 색을 바꾸는 것에 다른 상태를 써야한다고 생각했는데 미리 만들어놓은 배열의 상태에 따라 삼항연산자를 사용해 조건문으로 바꾸면 된다는 것을 깨달았습니다.

<br>

2. 리뷰 리스트 페이지

<br>

[ 김진기 ] 

- 구현 내용 & 방법
    - 무한 스크롤
    - 그리드 뷰, 리스트 뷰
    - 정렬 기준에 따라 뷰 생성
    - 파이썬을 이용한 초기 리뷰 데이터 생성
- 구현하면서 어려웠던 점
    - useEffect를 사용할 때 적용되는 exhaustive-deps 룰을 따라서 작성하는 것이 정말 힘들었습니다. 룰 대로 코드를 작성하면 자꾸 무한 루프가 발생해서 이를 해결하는 것이 어려웠습니다.
    - 뷰 타입(그리드, 리스트)이 바뀔 때 . 옵저버를 먼저 해제하고 리스트가 재생성되면 다시 옵저버로 관찰하는 식으로 해결하였습니다.

<br>

[ 박성현 ] 

- 구현 내용 & 방법
    - 헤더 컴포넌트
    - 정렬 UI 컴포넌트
        - 정렬Tab에 정렬시 필요한 값을 받을 수 있도록 onClick 이벤트를 만들어 주었습니다.
- 구현하면서 어려운점
    - 기존 tag 클릭시 id값을 얻지 못하였는데, tag배열을 만들어서 구현하여 id값을 쉽게 얻을 수 있었습니다.

<br>

3. 리뷰 상세 페이지

<br>

[ 최우철 ] 

- 구현 내용 & 방법
    - 상세페이지의 like, 소셜공유, 상품내용 컨텐츠 컨테이너, 댓글 구조를 제작하였습니다.
- 구현하면서 어려웠던 점
    - date 컨테이너에서 span과 button이 서로 존재할 때 align-items:center 옵션이 부모에 적용되어 있었을 경우, span은 계속 height이 컨텐츠사이즈로 고정이었기 때문에 서로 높이가 안맞게 된다는 사실을 깨닫는 데까지 시간이 오래걸렸습니다.
    - clipboard에 복사하는 기능을 해본적이 없었는데, 기존에 널리 사용되던 방법이 deprecated되어 react에 적용하는 방식을 따로 찾는데에 시간이 조금 걸렸습니다.

<br>

[ 변건오 ]

- 구현 내용 & 방법
    - 
- 구현하면서 어려웠던 점
    - 

<br>

4. 리덕스 세팅

<br>

[ 이승우 ]

- 구현 내용 & 방법
    - 
- 구현하면서 어려웠던 점
    -

<br>

## 🗂 프로젝트 구조

```
component
 ┣ filter
 ┃ ┣ Filter.css
 ┃ ┗ Filter.js
 ┣ header
 ┃ ┣ Header.css
 ┃ ┗ Header.js
 ┣ ratings
 ┃ ┣ Ratings.css
 ┃ ┗ Ratings.js
pages
 ┣ ReviewUpload.js
reducers
 ┣ ReviewReducer.js
 style
 ┣ reviewUpload.css
 ┣ App.css
 ┣ App.js
 ┣ index.css
 ┣ index.js
 ┗ store.js
```

<br>

## 🛠 사용 기술

front-end

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

dev-ops

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

community

![Discord](https://img.shields.io/badge/%3CServer%3E-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Apple](https://img.shields.io/badge/-APPLE-black?style=for-the-badge&logo=apple)
![Ubuntu](https://img.shields.io/badge/-UBUNTU-gray?style=for-the-badge&logo=Ubuntu)


## 팀원소개
|이름|포지션|깃헙|
|:---:|:---:|:---:|
|김혜영(팀장)|Front|[![github](https://img.shields.io/badge/김혜영-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/hit-that-drum)|
|김진기(팀원)|Front|[![github](https://img.shields.io/badge/김진기-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/hatoba29)|
|최우철(팀원)|Front|[![github](https://img.shields.io/badge/최우철-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/chltjdrhd777/)|
|변건오(팀원)|Front|[![github](https://img.shields.io/badge/변건오-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/guno517)|
|박성현(팀원)|Front|[![github](https://img.shields.io/badge/박성현-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/psh9408p)|
|이승우(팀원)|Front|[![github](https://img.shields.io/badge/이승우-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/starhn87)|
|김희진(팀원)|Front|[![github](https://img.shields.io/badge/김희진-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/chloe41297)|
