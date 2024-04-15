# Simple React Project

## 개발환경 셋팅

1. react 프로젝트 설치: `yarn create vite@latest`
2. React 중앙집중식 상태관리 라이브러리 Recoil 설치: `yarn add recoil`
3. 외부 오픈 API 통신을 위한 라이브러리 axios 설치: `yarn add axios`
4. css 스타일링을 위한 sass/scss 설치: `yarn add -D sass`
5. react router 설치: `yarn add react-router-dom localforage match-sorter sort-by`
6. react toast poup: `yarn add react-simple-toasts`

### vite.config.js

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@recoil": fileURLToPath(new URL("./src/recoil", import.meta.url)),
      "@apis": fileURLToPath(new URL("./src/apis", import.meta.url)),
    },
  },
  // scss 전역 사용
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/scss/main.scss";`,
      },
    },
  },
});
```

### React 에서 컴포넌트 간단하게 만들기

“rfce” 를 치면 간단하게 리액트 컴포넌트를 스닛펫으로 만들 수 있음.

### React 라우터 설정 및 동적 페이지 라우팅 예제

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/index";
import AboutPage from "./pages/about/index";
import DetailPage from "./pages/detail/index";

// About Child
import AboutSecondPage from "./pages/about/Second";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 가장 기본이 되는 페이지는 index 를 넣어주기 */}
        <Route index path="/" element={<MainPage />} />
        {/* 중첩 라우팅  */}
        <Route path="/about" element={<AboutPage />}>
          <Route path="second" element={<AboutSecondPage />} />
        </Route>
        {/* 동적 라우팅을 이용한 페이지 구성 */}
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
