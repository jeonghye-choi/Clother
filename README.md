# CLOTHER

DND 동아리 5기 4조 CLOTHER의 `Front-end` repository 입니다.

**디자이너 2명, 프런트엔드 2명, 백엔드 2명**으로 구성으로 프로젝트를 진행했습니다.

### Frontend Member

-   최정혜 - @jeonghye-choi
-   백동우 - @100dongwoo

## Summary

옷으로 기억하는 날씨 앱

-   문제 상황

    -   온도, 습도 등의 수치 정보만으로는 날씨를 체감하기 어렵다.

    -   특정 날씨에 어떤 옷을 입었는지 기억하기 어렵다.

    -   날씨에 대한 예측이 어려워 주변 지인에게 옷차림 조언을 구해본 경험이 많다.

-   프로젝트 목표

    나와 다른 사람의 옷 기록을 통해 확인하는 날씨 앱

<br/>

## Design Frame

![design frame](https://user-images.githubusercontent.com/54584063/169865640-91a751d0-96b1-4b7c-9fa0-b52ac5ceb5f6.png)

<br/>

## Architecture

<img width="1357" alt="스크린샷 2022-05-24 오전 1 28 10" src="https://user-images.githubusercontent.com/54584063/169866148-471afc10-7302-47b5-ad20-76274a27922d.png">

<br/>

## Clother Client

### Getting Started

**Prerequisite**

-   expo v42+
-   react v16+

**Execute**

```bash
# 0. clone
> git clone https://github.com/dnd-side-project/dnd-5th-4-frontend.git
> cd dnd-5th-4-frontend

# 1. 설치하기
> yarn
# 또는
> npm install

# 2. 실행하기
> yarn start
# 또는
> expo start
```

**file structure**

```
.
+-- src/
|   +-- components
|   +-- layout
|   +-- pages
|   +-- styles
|   +-- ...
|
+-- assets
|   +-- ...
|
+-- ...
```

<br/>

## Feature

0. **소셜 로그인**

    <video width="330" src="https://user-images.githubusercontent.com/54584063/169872950-50af5722-d982-4d70-bd84-29c7b1b32411.mp4" type="video/mp4" controls autoplay></video>

1. **메인 화면(Home)**

    날씨 정보를 한 번에 확인할 수 있고, 수치적 정보를 보지 않아도 날씨를 파악할 수 있습니다.

    - 캐릭터와 색상으로 날씨정보 직관적 확인

        <video width="330" src="https://user-images.githubusercontent.com/54584063/169878367-c87b974e-9c87-47e8-b5e9-c8019bc8d810.mp4" type="video/mp4" controls autoplay></video>

    - 내 위치 등록 및 날씨 테이블 확인

        <video width="330" src="https://user-images.githubusercontent.com/54584063/169875329-f3a46700-62fb-44ab-8486-ad4a17cd820c.mp4" type="video/mp4" controls autoplay></video>

        <video width="330" src="https://user-images.githubusercontent.com/54584063/169875336-4153fd3f-d9c4-4c86-9b63-3f6bfa04abbf.mp4" type="video/mp4" controls autoplay></video>

    - 기록 확인

        내가 기록한 날씨 정보와 다른 유저가 기록한 날씨 정보를 리스트 형태로 확인할 수 있습니다.

        - 내 기록

            <video width="330" src="https://user-images.githubusercontent.com/54584063/169873909-8883ca29-9dca-444a-9cec-0bf7265d876f.mp4" type="video/mp4" controls autoplay></video>

        - 다른 유저 기록

            <video width="330" src="https://user-images.githubusercontent.com/54584063/169873930-e0d18100-4cd9-4ef3-a4f1-b621ac9a9555.mp4" type="video/mp4" controls autoplay></video>

2. **옷 날씨 등록**

    위치 정보 설정, 옷차림 기록, 날씨 평가 3가지 단계로 기록할 수 있습니다.

    <video width="330" src="https://user-images.githubusercontent.com/54584063/169878786-622e33b3-ead5-4379-9f05-d9ffa7df3192.mp4" type="video/mp4" controls autoplay></video>

3. **옷 날씨 캘린더**

    캘린더를 통해서 과거 날씨 기록을 볼 수 있습니다.

    - 날짜별 확인

        <video width="330" src="https://user-images.githubusercontent.com/54584063/169874994-eaaaeec4-0579-4588-a4fd-10ce244a074f.mp4" type="video/mp4" controls autoplay></video>

    - 내용 수정

        <video width="330" src="https://user-images.githubusercontent.com/54584063/169875207-14b8c4a0-39b7-4172-8cb3-c88855962e4a.mp4" type="video/mp4" controls autoplay></video>

    - 기록 삭제

        <video width="330" src="https://user-images.githubusercontent.com/54584063/169874337-6f51a81a-e1bb-4df1-be3d-53bc50fffa4c.mp4" type="video/mp4" controls autoplay></video>

4. **설정**

    - 닉네임 변경

        <video width="330" src="https://user-images.githubusercontent.com/54584063/169877014-5ba2b99d-715e-4e6d-b943-a3713b493a53.mp4" type="video/mp4" controls autoplay></video>

    - 알림설정

        <video width="330" src="https://user-images.githubusercontent.com/54584063/169876566-e487b770-4f99-4a4e-ae80-0185aaae34f6.mp4" type="video/mp4" controls autoplay></video>

    - 개인정보 취급 방침

        <video width="330" src="https://user-images.githubusercontent.com/54584063/169877024-ee1bdda5-aac7-4f83-a4c3-d37fcfc26d40.mp4" type="video/mp4" controls autoplay></video>

    - 문의하기

        <video width="330" src="https://user-images.githubusercontent.com/54584063/169876998-390f635c-80db-45fb-89e5-9b2483bfecd6.mp4" type="video/mp4" controls autoplay></video>

    - 로그아웃

        <video width="330" src="https://user-images.githubusercontent.com/54584063/169877406-1e1d85a1-dd8d-4ae3-a05c-2d4c141eaee0.mp4" type="video/mp4" controls autoplay></video>

<br/>
<br/>

## Contributing

### Work flow

**Github Flow 사용**

-   upstream: `main` branch
-   origin: `main` branch
-   origin: `feat_#issueNumber_issueTitle` branch

**Steps**

1. `upstream:main` -> `origin:main`으로 pull 받기
2. issue 생성
3. issue에 해당하는 branch 생성
4. 생성한 branch에 `commit`, `push`
5. `origin:feat_#n_title`branch -> `upstream:main`branch 로 **Pull Request**
6. `conflict`가 났다면 해결
7. review 요청하기
8. review 결과에 따라 merge 진행

<br/>

### Git Convention

**Commit Message**

```
<type>: <short summary>
  │            │
  │            └─⫸ 명령조. 영어로. 커밋이 처리하는 내용 요약. 커밋 메시지 마지막에 마침표는 붙이지 않음.
  │

  └─⫸ build|ci|docs|feat|fix|perf|refactor|test 중 하나
```

-   Type
    -   `**build**`: 빌드 시스템 및 의존 패키지 수정
    -   `**ci**`: 지속적 통합 (CI) 관련
    -   `**docs**`: 문서화 내용 수정
    -   `**feat**`: 새로운 기능 추가
    -   `**fix**`: 버그 수정
    -   `**perf**`: 성능 향상 작업
    -   `**reactor**`: 새로운 기능을 추가하거나, 버그를 수정하지 않는 코드 개선 작업
    -   `**test**`: 테스팅 관련

<br/>

### Tools

-   Slack
-   Notion

    <img width="1275" alt="DND4조대시보드" src="https://user-images.githubusercontent.com/54584063/169879426-783825e1-a8f3-407b-b605-0ae5d4932c3d.png">

    <img width="1275" alt="PLAN&PROCESS" src="https://user-images.githubusercontent.com/54584063/169879493-51ae3b92-29da-44b4-8129-94946faa2d6e.png">
