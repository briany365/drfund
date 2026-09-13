# 자금조달 컨설팅 사이트

정병현 · 임두만 두 전문가를 소개하는 자금조달(금융자금 · 정책자금) 전문 사이트입니다.
이 폴더 안의 파일을 **그대로** GitHub 저장소에 올리면 배포까지 끝납니다.

---

## 1. 올리는 방법

이 폴더(`drbriany-fund`) **안의 내용물 전부**를 저장소 최상단에 올립니다.
`drbriany-fund` 폴더째로 올리면 경로가 한 단계 깊어지니, 폴더를 열고 그 안의 파일과
폴더를 올려 주세요. 숨김 파일인 `.github`, `.gitignore`도 함께 올라가야 합니다.

**GitHub 웹에서 올리는 경우** — 저장소 화면에서 `Add file` → `Upload files`로
드래그하면 됩니다. 다만 웹 업로드는 `.github` 같은 숨김 폴더가 빠질 수 있어,
아래 명령줄 방식이 더 확실합니다.

**명령줄로 올리는 경우**

```bash
cd drbriany-fund
git init
git add -A
git commit -m "자금조달 컨설팅 사이트"
git branch -M main
git remote add origin https://github.com/briany365/drfund.git
git push -u origin main
```

`node_modules`와 `dist`는 `.gitignore`에 들어 있어 자동으로 빠집니다.

---

## 2. 배포 설정 (둘 중 하나만)

### 방법 A — 자동 빌드 (권장)

저장소 **Settings → Pages → Source**를 `GitHub Actions`로 바꿉니다. 한 번만 하면 됩니다.

이후에는 파일을 고쳐서 커밋할 때마다 `.github/workflows/deploy.yml`이 알아서 빌드하고
배포합니다. 사례 문구나 프로필을 수정할 때 따로 빌드할 필요가 없습니다.

### 방법 B — 빌드 없이 바로 (더 간단)

저장소 **Settings → Pages → Source**를 `Deploy from a branch`,
브랜치 `main`, 폴더 `/docs`로 지정합니다.

이미 빌드해 둔 결과가 `docs/` 폴더에 들어 있어서 바로 화면이 뜹니다.
대신 내용을 고친 뒤에는 로컬에서 `npm run build:docs`를 한 번 돌리고 다시 올려야
반영됩니다.

---

## 3. 주소

- 기본 주소: `https://briany365.github.io/drfund/`
- 서브도메인을 쓰려면: 가비아에서 CNAME 레코드 `fund` → `briany365.github.io` 를 추가하고,
  Settings → Pages → Custom domain에 `fund.drbriany.com` 을 입력합니다.
  루트 도메인 drbriany.com은 기존 저장소가 쓰고 있으니 그대로 두시면 됩니다.

`vite.config.js`의 `base`가 `'./'`라서 하위 경로든 서브도메인이든 이미지와 CSS 경로가
깨지지 않습니다.

---

## 4. 로컬에서 확인하기

```bash
npm install
npm run dev          # http://localhost:3100
npm run build        # dist/ 생성
npm run build:docs   # docs/ 갱신 (방법 B를 쓸 때만)
```

---

## 5. 자주 고칠 파일

| 내용 | 파일 |
| --- | --- |
| 조달 사례 4건 (슬라이드 버전에서도 그대로 사용) | `src/data/cases.js` |
| 두 전문가 프로필 · 경력 · 담당 영역 | `src/data/experts.js` |
| 색상 · 여백 · 폰트 토큰 | `src/index.css` |
| 메뉴 항목 | `src/components/Header.jsx` |
| 연락처 · 진단 신청 | `src/components/Contact.jsx`, `src/components/Footer.jsx` |

### 임두만 대표 프로필 — 확인 후 교체 필요

`src/data/experts.js`의 두 번째 항목에서 `// CHECK` 주석이 붙은 값
(`role`, `tagline`, `intro`, `credentials`)을 확인된 경력으로 바꿔 주세요.
이 파일만 고치면 히어로 · 전문가 섹션 · 푸터에 함께 반영됩니다.
연락처는 임의로 넣지 않았습니다.

---

## 6. 사례 슬라이드 버전

`src/data/cases.js`의 각 사례는 아래 필드로 통일되어 있습니다.

```
no       사례 번호
sector   업종 / 사업자 형태
subject  한 줄 대상 설명
title    사례 제목 (슬라이드 헤드라인)
before   조달 이전 상황 3줄
blocked  막혀 있던 이유 한 줄
approach 바꾼 내용 3줄
figures  결과 수치 [{ value, label }]
result   결과 요약 한 줄
effect   조달 이후 효과 한 줄
```

슬라이드는 이 배열을 그대로 불러와 한 사례당 한 장으로 만들면 되고,
사이트와 숫자가 어긋날 일이 없습니다.

---

## 7. 이미지

`public/images/experts/`

- `jung-byunghyun.jpg`, `lim-duman.jpg` — 사이트에서 쓰는 톤 통일 버전
- `*-color.jpg` — 같은 구도의 컬러 원본 (쓰려면 `experts.js`의 `photo` 값을 `photoColor` 경로로 교체)

두 사진 모두 4:5 비율, 동일 크기, 얼굴 크기와 눈높이를 맞춰 잘라 두었습니다.
다른 사진으로 교체할 때도 4:5로 맞추면 배치가 흐트러지지 않습니다.

---

## 8. 표기 원칙

- 학위는 Ph.D.(경영학박사)로 표기합니다.
- 승인 · 금리 · 한도를 보장하는 표현은 쓰지 않았습니다. 사례 섹션과 푸터에
  조건이 달라질 수 있다는 문구를 넣어 두었습니다.
