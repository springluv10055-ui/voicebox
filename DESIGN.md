---
name: 위스테이별내 목소리함
colors:
  background: "#FFFFFF"
  on-background: "#2B2B2E"
  surface: "#FFFFFF"
  on-surface: "#2B2B2E"
  surface-variant: "#F5F5F7"
  on-surface-variant: "#6B6B70"
  primary: "#00A080"
  on-primary: "#FFFFFF"
  primary-strong: "#00875F"
  primary-strong-hover: "#00714E"
  primary-container: "#E3F5F1"
  on-primary-container: "#00614C"
  secondary: "#A068A8"
  on-secondary: "#FFFFFF"
  secondary-container: "#F5EDF6"
  on-secondary-container: "#6B3F72"
  outline: "#D8D8DC"
  outline-variant: "#EAEAEC"
  error: "#D64545"
  on-error: "#FFFFFF"
  error-container: "#FBE7E7"
  on-error-container: "#8C2F2F"
  shadow: "#2B2B2E"
typography:
  title-lg:
    fontFamily: Pretendard
    fontSize: 28px
    fontWeight: "700"
    lineHeight: 36px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Pretendard
    fontSize: 20px
    fontWeight: "700"
    lineHeight: 28px
  title-sm:
    fontFamily: Pretendard
    fontSize: 17px
    fontWeight: "600"
    lineHeight: 24px
  body-lg:
    fontFamily: Pretendard
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 26px
  body-sm:
    fontFamily: Pretendard
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 22px
  meta:
    fontFamily: Pretendard
    fontSize: 13px
    fontWeight: "500"
    lineHeight: 18px
  button:
    fontFamily: Pretendard
    fontSize: 15px
    fontWeight: "600"
    lineHeight: 20px
rounded:
  sm: 6px
  DEFAULT: 10px
  md: 14px
  lg: 20px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin: 24px
elevation:
  sm: "0 1px 2px rgba(43,43,46,0.06)"
  md: "0 4px 12px rgba(43,43,46,0.08)"
  lg: "0 12px 32px rgba(43,43,46,0.12)"
breakpoints:
  mobile: "~767px"
  tablet: "768px ~ 1023px"
  desktop: "1024px ~"
grid:
  desktop:
    columns: 3
    gutter: "{spacing.lg}"
    maxWidth: 1200px
    margin: "{spacing.xl}"
  tablet:
    columns: 2
    gutter: "{spacing.md}"
    margin: "{spacing.lg}"
  mobile:
    columns: 1
    gutter: "{spacing.sm}"
    margin: "{spacing.md}"
components:
  # ---- 페이지 뼈대 (확정 시안 그대로 고정값) ----
  page-header:
    backgroundColor: "{colors.background}"
    border: "1px solid {colors.outline-variant}"
    padding: "12px 20px"
    iconSize: 26px
    orgNameTypography: "13px / 600"
  page-hero:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    padding: "36px 20px 30px"
    align: center
    titleTypography: "26px / 700 / line-height 1.35"
    bodyTypography: "14px / 400 / max-width 420px / opacity .85"
  page-footer:
    borderTop: "1px solid {colors.outline-variant}"
    padding: "22px 24px"
    typography: "{typography.meta}"
    textColor: "{colors.on-surface-variant}"
    align: center
  tab-bar:
    borderBottom: "1px solid {colors.outline-variant}"
    itemCount: 2
    gap: "{spacing.lg}"
    padding: "0 {spacing.md}"
  tab-item:
    typography: "{typography.title-sm}"
    textColor: "{colors.on-surface-variant}"
    padding: "{spacing.sm} {spacing.xs}"
  tab-item-active:
    textColor: "{colors.primary}"
    borderBottom: "2px solid {colors.primary}"

  # ---- 버튼 ----
  button-primary:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm} {spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.primary-strong-hover}"
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    border: "1px solid {colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm} {spacing.md}"
  button-outline-hover:
    backgroundColor: "{colors.primary-container}"
  button-google:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-surface}"
    border: "1px solid {colors.outline}"
    typography: "{typography.button}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm} {spacing.md}"
    iconGap: "{spacing.xs}"
    width: 100%

  # ---- 의견 카드 & 상태/분야 ----
  card-post:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.outline-variant}"
    rounded: "{rounded.md}"
    padding: 14px
    shadow: "{elevation.sm}"
    layout: "flex-row"
    gap: 14px
  card-post-hover:
    shadow: "{elevation.md}"
  card-post-photo:
    size: "88px"
    rounded: "{rounded.sm}"
    backgroundColor: "{colors.surface-variant}"
    border: "1px solid {colors.outline-variant}"
  card-post-title:
    fontSize: 15.5px
    fontWeight: "600"
    lineClamp: 1
  card-post-excerpt:
    fontSize: 13px
    fontWeight: "400"
    lineClamp: 2
    textColor: "{colors.on-surface-variant}"
  card-post-meta:
    fontSize: 12px
    fontWeight: "400"
    textColor: "{colors.on-surface-variant}"
  badge-status-received:
    backgroundColor: "{colors.surface-variant}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.meta}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  badge-status-progress:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.meta}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  badge-status-done:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    typography: "{typography.meta}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  chip:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-surface-variant}"
    border: "1px solid {colors.outline}"
    typography: "{typography.meta}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  chip-active:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    border: "1px solid {colors.primary}"

  # ---- 상태 변경 액션 버튼 (관리자용, 3개 고정) ----
  status-action:
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm} {spacing.md}"
    gap: "{spacing.xs}"
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-surface-variant}"
    border: "1px solid {colors.outline}"
  status-action-received-active:
    backgroundColor: "{colors.surface-variant}"
    textColor: "{colors.on-surface-variant}"
    border: "1px solid {colors.surface-variant}"
  status-action-progress-active:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    border: "1px solid {colors.secondary-container}"
  status-action-done-active:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    border: "1px solid {colors.primary-container}"

  # ---- 입력 폼 (글 저장하기 / 사진 올리기) ----
  input-text:
    backgroundColor: "{colors.surface-variant}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.outline}"
  input-text-focus:
    border: "1px solid {colors.primary}"
  input-text-error:
    border: "1px solid {colors.error}"
    helperTextColor: "{colors.error}"
    helperTypography: "{typography.meta}"
  input-textarea:
    backgroundColor: "{colors.surface-variant}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.md}"
    border: "1px solid {colors.outline}"
    minHeight: 160px
    resize: vertical
  photo-upload:
    size: "120px"
    rounded: "{rounded.sm}"
    backgroundColor: "{colors.surface-variant}"
    border: "1px dashed {colors.outline}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.meta}"
    maxCount: 1
  photo-upload-filled:
    border: "1px solid {colors.outline-variant}"
    removeButton:
      size: 24px
      rounded: "{rounded.full}"
      backgroundColor: "{colors.background}"
      iconColor: "{colors.on-background}"
  form-meta-note:
    typography: "{typography.meta}"
    textColor: "{colors.on-surface-variant}"

  # ---- 리스트 (마이페이지 · 관리자) ----
  list-item:
    backgroundColor: transparent
    padding: "{spacing.sm} {spacing.md}"
    rounded: "{rounded.sm}"
  list-item-hover:
    backgroundColor: "{colors.surface-variant}"
  admin-row:
    borderBottom: "1px solid {colors.outline-variant}"
    padding: "{spacing.sm} {spacing.md}"
    layout: "flex-row / space-between"
  auth-card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.outline-variant}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    maxWidth: 360px
    shadow: "{elevation.sm}"
---

## Brand & Style

위스테이별내사회적협동조합은 국내 최초 협동조합형 공동체 아파트다. "목소리함"은 입주민이 의견·건의를 남기고 답변을 받는 서비스로, 협동조합이라는 공동체적 신뢰와 아파트라는 생활 공간의 편안함을 함께 담아야 한다.

스타일은 **파스텔 미니멀**이다. 큰 색 면, 강한 그림자, 장식적 요소를 배제하고 여백과 절제된 색으로 신뢰감을 준다. 원색을 넓은 면적에 그대로 쓰지 않고, 옅은 컨테이너 톤(`primary-container`, `secondary-container`)으로 눌러서 파스텔 느낌을 유지한다.

## Colors

- **Primary(#00A080, 협동조합 그린):** 제출·확인 등 핵심 행동, 활성 상태, 완료 뱃지. 텍스트가 얹히지 않는 곳(테두리·아이콘·배지 배경 등)에 쓴다.
- **Primary-strong(#00875F):** `primary`와 같은 계열이지만 한 단계 어둡다. `button-primary` 배경 전용. `on-primary`(흰 글자)를 원래 `primary` 위에 얹으면 대비 3.31:1로 WCAG AA(4.5:1) 기준에 못 미쳐서, 흰 글자가 올라가는 자리에만 이 어두운 값을 쓴다.
- **Secondary(#A068A8, 라벤더):** 보조 강조, 진행중 상태, 부가 액션. 주색과 동시에 넓게 쓰지 않는다.
- **Background/Surface(#FFFFFF):** 기본 배경. 카드도 같은 흰색을 쓰고 `outline-variant` 테두리와 `elevation.sm` 그림자만으로 구분한다.
- **Surface-variant(#F5F5F7):** 인풋 배경, 메타 정보 영역, 리스트 hover.
- **Text(#2B2B2E, on-surface):** 본문 기본 글자색. `on-surface-variant`(#6B6B70)는 메타 텍스트(날짜·작성자·카운트) 전용이며 흰 배경 대비 4.5:1 이상을 유지한다.
- **Outline(#D8D8DC / #EAEAEC):** 카드·인풋 테두리. 진한 회색 대신 옅은 두 단계만 쓴다.
- **Shadow:** 항상 `on-background`(#2B2B2E) 기반 무채색 그림자만 쓴다. 브랜드색을 섞은 유색 그림자는 쓰지 않는다.
- **Error(#D64545):** 폼 검증 실패 등 예외 상황 전용. 그 외 화면에서 쓰지 않는다.

## Typography

폰트는 **Pretendard**(fallback: `-apple-system, BlinkMacSystemFont, "Malgun Gothic", sans-serif`)로 통일한다. CLAUDE.md에 지정이 없어 한글 UI 표준 서체로 정했다.

굵기는 **4단계만** 쓴다: `400`(본문), `500`(메타), `600`(버튼·소제목), `700`(제목). 이 밖의 굵기(300, 800 등)는 쓰지 않는다.

| 용도 | 토큰 | 크기 / 굵기 |
|---|---|---|
| 페이지 제목 | `title-lg` | 28px / 700 |
| 섹션 제목 | `title-md` | 20px / 700 |
| 카드·리스트 제목 | `title-sm` | 17px / 600 |
| 본문 | `body-lg` | 16px / 400 |
| 보조 본문 | `body-sm` | 14px / 400 |
| 메타(날짜·작성자·상태) | `meta` | 13px / 500 |
| 버튼 라벨 | `button` | 15px / 600 |

## Layout & Spacing

간격은 **8px 기준 6단계**(`xs 4 / sm 8 / md 16 / lg 24 / xl 40`)만 쓴다. 새로 배치하는 여백·gap은 이 값들의 조합이 아닌 임의의 px(예: 18px, 30px)를 쓰지 않는다. 카드 내부 패딩은 `lg`, 리스트 항목 패딩은 `sm~md`, 섹션 간 세로 간격은 `xl`을 기본으로 한다.

> 예외: 헤더·히어로·푸터·게시글 카드(`page-header`/`page-hero`/`page-footer`/`card-post`)의 수치는 확정한 홈 화면 시안에서 그대로 가져온 고정값이라 6단계 표에 딱 맞지 않는 px(12/20/26/36/14 등)가 섞여 있다. 이미 검증된 화면의 값이므로 그대로 유지하고, **새 화면·새 컴포넌트를 짤 때는 이 예외를 근거로 임의 px를 늘리지 않는다** — 반드시 6단계 스케일을 쓴다. 사진·아바타 크기나 컨테이너 최대폭(88px, 120px, 360px, 640px 등) 같은 "치수"는 이 여백 규칙의 대상이 아니다.

### 반응형 3단 그리드

| 구간 | 폭 | 열 수 | gutter | 좌우 margin |
|---|---|---|---|---|
| 데스크톱 | 1024px 이상 | **3열** | 24px (`lg`) | 40px (`xl`), 컨테이너 최대폭 1200px 중앙 정렬 |
| 태블릿 | 768~1023px | **2열** | 16px (`md`) | 24px (`lg`) |
| 모바일 | ~767px | **1열** | 8px (`sm`) | 16px (`md`) |

모바일은 항상 1열로 쌓는다. 3열 그리드를 모바일에 그대로 축소해서 쓰지 않는다.

## Elevation & Depth

그림자는 **3단계만** 쓴다.

- `elevation.sm` — 기본 카드 (`0 1px 2px rgba(43,43,46,0.06)`)
- `elevation.md` — hover/포커스로 살짝 뜨는 상태 (`0 4px 12px rgba(43,43,46,0.08)`)
- `elevation.lg` — 모달·팝오버 등 최상위 레이어 (`0 12px 32px rgba(43,43,46,0.12)`)

배경과 표면을 모두 흰색으로 통일했으므로 입체감은 톤 차이가 아니라 **얇은 테두리 + 옅은 그림자**로만 표현한다.

## Shapes

모서리는 **4단계 + full**만 쓴다: `sm 6px`(뱃지 내부 아이콘 등 아주 작은 요소) / `DEFAULT 10px`(버튼·인풋) / `md 14px`(카드) / `lg 20px`(모달) / `full`(알약형 뱃지·버튼). 컴포넌트마다 다른 임의의 radius를 새로 만들지 않는다.

## Page Skeleton

확정한 홈 화면 시안(헤더·히어로는 안 1, 목록은 안 3)의 값을 그대로 고정 규격으로 쓴다. 로그인·마이페이지·관리자 화면도 같은 헤더·푸터를 재사용해 서비스 전체의 톤을 통일한다.

- **헤더(`page-header`):** 아이콘 26px + 단체명(13px/600) 가로 배치, 패딩 `12px 20px`, 하단 `outline-variant` 1px 구분선. 모든 화면(홈/로그인/마이페이지/관리자)에 공통 적용한다.
- **히어로(`page-hero`):** `primary-container` 배경, 패딩 `36px 20px 30px`, 가운데 정렬. 제목(위별 목소리함) 26px/700, 설명 14px/400(최대 폭 420px, 불투명도 .85), `button-primary` 1개("의견 남기기"). **홈 화면에만 있다** — 로그인·마이페이지·관리자 화면에는 히어로를 넣지 않는다.
- **탭바(`tab-bar`):** 히어로가 없는 화면(마이페이지, 관리자)에서 헤더 바로 아래 위치. 항목 2개 고정, 밑줄형, 활성 탭만 `primary` 색 + 하단 2px 밑줄, 비활성은 `on-surface-variant`. 탭 개수를 늘리지 않는다.
- **푸터(`page-footer`):** 패딩 `22px 24px`, 가운데 정렬, `meta` 타이포로 단체명 저작권 문구 한 줄. 모든 화면 공통.

## Components

### 게시글 카드 (`card-post`) — 글 저장하기 / 사진 올리기

가로형 카드: 왼쪽 정사각 사진(`card-post-photo`, 88px, 사진 없으면 회색 자리표시자 유지) + 오른쪽 본문. 카드 패딩 14px, 내부 gap 14px, 테두리 `outline-variant` 1px, 모서리 `rounded.md`, 그림자 `elevation.sm`(hover 시 `elevation.md`). 본문 순서: 상태뱃지+분야(가로) → 제목(`card-post-title`, 15.5px/600, 1줄 말줄임) → 본문 앞부분(`card-post-excerpt`, 13px, 2줄 말줄임) → 작성자·작성시간(`card-post-meta`, 12px). 사진은 게시글당 **1장**만 대표 이미지로 쓴다.

### 상태 배지 (`badge-status-*`) — 처리상태 표시

읽기 전용 표시용. 3종 고정: `badge-status-received`(접수, 회색조) / `badge-status-progress`(처리중, 라벤더) / `badge-status-done`(완료, 그린). 색을 임의로 늘리지 않는다. 카드·마이페이지·관리자 목록 어디서나 동일한 배지를 재사용한다.

### 분야 칩 (`chip` / `chip-active`)

목록 필터, 글쓰기 폼의 분야 선택, 관리자의 분야 관리에서 모두 같은 칩을 재사용한다. `flex-wrap`으로 줄바꿈해 분야 개수가 늘어나도 레이아웃이 깨지지 않는다. 선택된 칩만 `chip-active`(연한 그린 배경 + 그린 테두리), 나머지는 흰 배경 + `outline` 테두리.

### 탭 (`tab-bar` / `tab-item`)

2탭 화면 전용 — 마이페이지(`내가 쓴 글` / `내 정보`), 관리자 화면(`의견 관리` / `분야 관리`)에 동일 구조를 쓴다. 탭은 항상 정확히 2개, 더 늘리지 않는다. 콘텐츠 전환 시 위치 이동 없이 내용만 바뀐다.

### 버튼 (`button-primary` / `button-outline` / `button-google`)

`button-primary`는 화면당 핵심 액션 1개(글 등록, 의견 남기기)에만 쓴다. 배경은 `primary`가 아니라 `primary-strong`을 쓴다 — 흰 글자 대비를 4.5:1 이상으로 맞추기 위한 전용 색이다. 보조 액션은 `button-outline`. 구글 인증 버튼(`button-google`)은 흰 배경 + `outline` 테두리로 톤을 낮추고, 너비 100%로 게이트 화면 카드에 꽉 채운다. 로그인 방식은 구글 인증 1가지뿐이므로 이메일·비밀번호 입력 폼은 만들지 않는다.

### 입력 폼 — 글 저장하기 · 사진 올리기

글쓰기 화면은 최대 폭 640px, 가운데 정렬, 필드 간 세로 간격 `lg`(24px). 순서: 분야 선택(칩 단일 선택) → 제목(`input-text`) → 내용(`input-textarea`, 최소 높이 160px, 세로로만 크기조절) → 사진 첨부(`photo-upload`, 120px 정사각, 점선 테두리, 카메라 아이콘 + "사진 추가" 라벨, 선택 시 미리보기로 교체되고 우상단에 삭제 버튼) → 작성자·작성시간 안내(`form-meta-note`, 읽기 전용 — 로그인한 사용자 이름과 등록 시각이 자동으로 채워지며 직접 입력하는 필드가 아니다) → 제출 버튼(`button-primary`, 폼 너비 100%).

제목·내용처럼 필수인 값을 비운 채 제출하면 해당 인풋만 `input-text-error` 상태로 바뀐다: 테두리를 `error` 색으로 바꾸고, 인풋 바로 아래 `meta` 크기의 안내 문구를 `error` 색으로 한 줄 띄운다("제목을 입력해주세요" 등). 전체 폼을 가리는 경고창이나 팝업은 쓰지 않는다.

### 로그인 & 회원가입 게이트 화면 (`/login`, `/signup`)

히어로 없이 헤더 + 화면 정중앙의 `auth-card`(최대 폭 360px, 패딩 `xl`, `elevation.sm`) 하나로 구성한다. 카드 안 구성은 두 화면 모두 동일: 제목(`title-md`, "로그인" 또는 "회원가입") → 한 줄 안내(`body-sm`) → `button-google`("Google로 계속하기") → 다른 화면으로 전환하는 텍스트 링크(`meta`, `primary` 색, 밑줄은 hover 시에만). 이메일 입력창이나 비밀번호 입력창은 넣지 않는다.

### 마이페이지 (`/mypage`, 2탭)

헤더 + `tab-bar`(내가 쓴 글 / 내 정보) + 콘텐츠 + 푸터. **내가 쓴 글** 탭은 홈 화면과 동일한 `card-post` 그리드를 재사용하되 작성자 필터가 "나"로 고정되고 분야 칩 필터는 생략한다. **내 정보** 탭은 항목을 세로로 쌓는다: 라벨(`meta`) + 값(`body-lg`) 쌍을 `spacing.md` 간격으로 나열(이름/이메일/가입일) 하고, 맨 아래 `button-outline`으로 "로그아웃".

### 관리자 화면 (`/admin`, 2탭)

헤더 + `tab-bar`(의견 관리 / 분야 관리) + 콘텐츠 + 푸터. **의견 관리** 탭은 `admin-row` 리스트: 한 행에 제목·분야·작성자·날짜(왼쪽)와 상태 변경 버튼(오른쪽)을 좌우로 배치한다. 상태 변경은 `status-action` 3버튼(접수/처리중/완료, "전체" 없음) 세그먼트로 하며, 현재 상태인 버튼만 해당 배지와 같은 색으로 채워지고(`status-action-*-active`) 나머지 둘은 흰 바탕 아웃라인이다. 클릭하면 즉시 상태가 바뀐다 — 별도 저장 버튼 없음. **분야 관리** 탭은 `chip` 목록을 그대로 나열하고 각 칩 옆에 작은 편집/삭제 아이콘을, 목록 아래에 `input-text` + `button-outline`("분야 추가")를 한 줄로 배치한다. 분야가 늘어나도 `chip`과 동일하게 줄바꿈으로 대응한다.

## 하지 말 것

- 그림자에 primary/secondary 색을 섞어 유색 그림자를 만들지 않는다. (그림자는 항상 `on-background` 기반 무채색)
- primary·secondary를 큰 배경 면(전체 헤더, 전체 카드 배경 등)에 그대로 채우지 않는다. 강조는 컨테이너 톤(`*-container`)이나 버튼·뱃지 같은 작은 요소로 제한한다.
- 폰트 굵기는 400/500/600/700 네 단계 밖의 값을 쓰지 않는다.
- 모서리 radius는 `sm/DEFAULT/md/lg/full` 다섯 값 밖의 임의 값을 쓰지 않는다.
- 간격은 `xs/sm/md/lg/xl` 여섯 값 조합 밖의 임의 px를 쓰지 않는다.
- 본문·메타 텍스트를 배경과 대비 4.5:1 미만으로 쓰지 않는다.
- 모바일 화면에서 그리드를 2열 이상으로 강제하지 않는다. 항상 1열.
- 버튼에 그라데이션이나 과한 장식(외곽선 이중 처리, 반짝임 효과 등)을 넣지 않는다.
- 로그인·회원가입에 이메일/비밀번호 입력 폼을 만들지 않는다. 구글 인증 1가지만 쓴다.
- 작성자·작성시간을 사용자가 직접 입력하는 필드로 만들지 않는다. 로그인 정보와 서버 시각으로 자동 채운다.
- 마이페이지·관리자 화면의 탭은 2개를 넘기지 않는다.
- 관리자 상태 변경 버튼에 "전체"를 넣지 않는다. 접수/처리중/완료 3개만 둔다.
- 게시글 사진을 카드당 2장 이상 나열하지 않는다. 대표 사진 1장만 쓴다.
- 흰 글자가 얹히는 버튼 배경에 원래 `primary`(#00A080)를 직접 쓰지 않는다. 대비 기준(4.5:1)을 못 채우므로 반드시 `primary-strong`을 쓴다.
