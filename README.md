# 올마이투어
<img width="1425" alt="139083858-a84281c6-b141-443c-87eb-aa8214605271" src="https://user-images.githubusercontent.com/79790476/139539860-55263127-ec15-4ead-9826-a30bb2fce81b.png">

### <a href="https://www.youtube.com/watch?v=VA8rSx0cG7Q&ab_channel=%EA%B9%80%EC%98%81%ED%98%B8">🎥 올마이투어 시연영상 보러가기</a>

### <a href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1638c9fc-9074-41ce-bf91-77d64f2ce5ef/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%86%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%90%E1%85%AE%E1%84%8B%E1%85%A5_%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A5%E1%84%89%E1%85%B3_%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB_%E1%84%89%E1%85%B5%E1%84%8B%E1%85%A1%E1%86%AB.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211030T002355Z&X-Amz-Expires=86400&X-Amz-Signature=bfc1f4e10b9d442066fcb750c4010ad662314f509fdb73c85f16e27a68f46ddc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%258B%25E1%2585%25A9%25E1%2586%25AF%25E1%2584%2586%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2590%25E1%2585%25AE%25E1%2584%258B%25E1%2585%25A5%2520%25E1%2584%2586%25E1%2585%25A6%25E1%2584%258B%25E1%2585%25B5%25E1%2584%258F%25E1%2585%25A5%25E1%2584%2589%25E1%2585%25B3%2520%25E1%2584%2583%25E1%2585%25B5%25E1%2584%258C%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AB%2520%25E1%2584%2589%25E1%2585%25B5%25E1%2584%258B%25E1%2585%25A1%25E1%2586%25AB.pdf%22">🎨 올마이투어 디자인 시안</a>

## 올마이투어 팀원
- F.E<br>
  김영호<br>
  김태수<br>
  <br>
- B.E<br>
  고준영<br>
  박지원<br>
  윤현묵<br>
  최현수<br>
  <br>
  
### 개발 인원 및 기간
- 개발기간 : 2021/10/04 ~ 2021/10/29
- 개발 인원 : 프론트엔드 2명, 백엔드 4명
<br>

### 올마이투어 메이커스 프로젝트
- 코로나 이후 로컬 투어를 컨셉으로 하는 올마이투어 메이커스 런칭을 준비하고 있으며, 해당 프로젝트를 개발을 진행하였습니다.
- 회사 측에 소속된 로컬 가이드의 직접적인 여행 상품 등록을 위한 회원가입, 로그인, 지원하기, 수정하기 등의 서비스를 제공하는 사이트입니다.
<br>

## 적용 기술 및 구현 기능

### 적용 기술

> -Front-End : JSX, React, Hooks, Styled Component, Context API<br>
> -Back-End : Python 3.8, Django 3.2.7, MySQL 8.0.23, Unittest<br>
> -Common : Postman, Slack, Flow, Trello<br>
<br>

### 구현 기능<br>

직접 구현한 기능은 ✅, 팀원이 구현한 기능은 ✔️로 표시했습니다.

1. 회원가입 / 로그인 페이지<br>
✔️ 회원가입 유효성 검사 시, 객체로 로직 분리하여 `useEffect` 활용<br>
✔️ `Custom Hook`을 활용하여 useToggle 컴포넌트를 통해 체크박스 상태 넘겨주기 구현<br>
✔️ `Portals`를 통한 부모 컴포넌트의 외부 DOM에 Modal 컴포넌트 렌더링<br>
✔️ 특정 DOM을 선택하는 `useRef`를 이용한 이메일, 휴대폰 인증 타이머 구현<br>
✔️ 크로스 브라우징, 자동 JSON 데이터 변환을 지원하는 `Axios` 라이브러리를 통한 백엔드와의 통신 진행<br>
2. 내비게이션 바<br>
✔️ `!!`연산자를 통해 token 여부에 따른 로그인, 마이페이지 버튼 전환과 `useHistory`를 통한 페이지 이동<br>
3. 메이커스 지원하기<br>
✅ `Custom Hook` useApplyInput을 활용하여 Input값 수정, 넘겨주기 구현 <br>
✅ `Context API`를 활용해 hover창, 선택한 투어 서비스 지역 리스트의 상태값을 글로벌하게 관리  
✅ `Portals`를 통한 부모 컴포넌트의 외부 DOM에 Modal 컴포넌트 렌더링 <br>
✅ `FornData`와 `Axios` 라이브러리를 통해 이미지 백엔드 전송 구현 <br>
✅ `FileReader`를 통해 이미지 미리보기, 크기 표시, 크기 체크, 이름 표시 구현 <br>
✅ `useRef`를 이용해 기존의 input file 태그를 커스텀한 파일 업로드 버튼에 연결 <br>
✅ `정규표현식`을 이용해 계좌번호 입력란에 숫자값만 들어가도록 구현 <br>
✅ data.js를 통한 `map` 활용한 메이커스 지원하기 레이아웃 구현 <br>
4. 메이커스 수정하기<br>
✅ 기존 지원하기 페이지에서 `useEffect`, `useLocation`을 활용하여 마이 페이지에서 histoy.push로 전달 받은 mode 값이 modify이면 백엔드 통신을 통해 기존에 지원했던 정보를 렌더 및 조건부 렌더링을 통해 수정하기 버튼으로 전환  <br>
✅ 백엔드에서 base64로 넘겨준 이미지를 `File 생성자`을 활용해 다시 이미지 파일로 전환 <br>
5. 마이 페이지<br>
✔️: data.js를 통한 `map` 활용한 마이페이지 레이아웃 구현<br>
✔️ `useEffect`를 활용하여 Get Method를 통한 백엔드와의 통신으로 User 정보(이름, 이메일, 메이커스 지원 여부)에 따른 조건부 렌더링<br>
6. 빌드, 배포<br>
✔️ `NCP 서버`(CentOS 7.8) 환경에서 NginX, Node Express 서버를 활용한 배포 경험<br>
<br>
- 실무 수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
<hr />
<br>
올마이투어 프로젝트는 회사 측에서 제공해준 디자인 시안 PDF 파일을 통해서 구현되었습니다. 해당 파일 이외에 제공된 내용은 없으며, 모든 기능은 백지 상태에서 구현되었음을 밝힙니다.
