# UnTitled Community Site

Next.js로 구축된 커뮤니티 사이트입니다.

## 시작하기

먼저 의존성을 설치하세요:

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

환경 변수를 설정하세요:

1. 프로젝트 루트에 `.env` 파일을 생성하세요
2. `.env.example` 파일을 참고하여 필요한 환경 변수를 입력하세요:

```bash
cp .env.example .env
```

`.env` 파일을 열어 다음 값들을 설정하세요:

- `AUTH_SECRET`: NextAuth 시크릿 키 (랜덤 문자열 생성: `openssl rand -base64 32`)
- `AUTH_URL`: 애플리케이션 URL (개발 시: `http://localhost:3000`)
- `AUTH_GOOGLE_ID`: Google OAuth 클라이언트 ID
- `AUTH_GOOGLE_SECRET`: Google OAuth 클라이언트 시크릿

**주의**: `.env` 파일은 Git에 커밋되지 않습니다. 실제 값은 로컬에서만 관리하세요.

개발 서버를 실행하세요:

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 프로젝트 구조

- `app/` - Next.js App Router 디렉토리
  - `layout.tsx` - 루트 레이아웃
  - `page.tsx` - 홈 페이지
  - `globals.css` - 글로벌 스타일

## 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 실행
