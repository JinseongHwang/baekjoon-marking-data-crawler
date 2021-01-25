# BOJ 채점 현황 크롤러

### 프로젝트 소개 및 제작 목적
```
알고리즘 문제 풀이(이하 PS) 분야에는 고수들이 넘쳐난다.
하지만 고수들도 분명 초보였던 시절이 존재한다.
처음부터 잘하는 사람은 없다고 가정한다. 그렇게 믿는다.

PS는 정말 인기가 많다.
누군가는 정보 올림피아드에서 좋은 성적을 얻기 위해서,
기업 코딩테스트를 통과하기 위해서,
컴퓨팅적 사고 능력을 기르기 위해서 ... 
다양한 이유로 많은 사람은 PS를 한다.

그렇다면 잘하기 위해서는 어떻게 해야 할까?
문득 "고수들의 발자취를 따라가 보면 어떨까?"라는 생각을 하게 됐다.

Baekjoon Online Judge(이하 BOJ)는 많은 PS 유저들, 고수 회원들을 보유하고 있다.
또한 고수들이 햇병아리 시절부터 풀었던 채점 기록도 가지고 있다.

요즘 '클론 코딩'이 유행인 만큼 '클론 PS'도 유행이 됐으면 좋겠다는 마음을 가진다.
```

### 문제점 분석
```
고수들의 발자취를 따라가고 싶지만, 아쉽게도 BOJ에서는 채점 기록에 대해서 최근 기록부터 제공한다.
Pagination 또한 구현되어 있지 않기 때문에 고수들의 초보 시절을 보려면 아마도 온종일 '다음 페이지'를 클릭해야 할 것이다.
자동화 프로그램을 사용한다면 이 문제를 해결할 수 있겠다는 강한 확신이 든다.
```

### BOJ 플랫폼 소개
- [Baekjoon Online Judge](https://www.acmicpc.net/)
- [나무위키:Baekjoon OJ](https://namu.wiki/w/Baekjoon%20OJ?from=%EB%B0%B1%EC%A4%80)


### 기술 스택

- [JavaScript(ES6)](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Puppeteer](https://pptr.dev/)


### 버전별 기능 소개

**버전 관리는 [Semantic Versioning](https://semver.org/)방식을 따른다.**

<details>
  <summary><strong>version 0.0.1(Beta)</strong></summary>
  
  ![0.0.1(Beta) 실행 결과](https://user-images.githubusercontent.com/52629158/105679290-930bea80-5f31-11eb-8f39-1563ca3c963e.png)    
  ```
  콘솔에서 유저 ID를 입력하면 채점 현황 정보를 콘솔에 출력한다.
  ```
</details>


### 앞으로 어떤 기능들이 추가 될 것인가?

- 채점 데이터가 콘솔이 아닌 엑셀(.xlsx) 파일에 저장되도록 기능 추가.
- [Electron.js](https://www.electronjs.org/)를 활용해서 GUI를 가진 데스크톱 앱 형식으로 구현.