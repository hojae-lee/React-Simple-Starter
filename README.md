# Simple React Project

## 개발환경 셋팅

1. react 프로젝트 설치: `yarn create vite@latest`
2. 외부 오픈 API 통신을 위한 라이브러리 axios 설치: `yarn add axios`
3. css 스타일링을 위한 sass/scss 설치: `yarn add -D sass`
4. react router 설치: `yarn add react-router-dom localforage match-sorter sort-by`
5. react toast poup: `yarn add react-simple-toasts`
6. React 중앙집중식 상태관리 라이브러리 Recoil 설치: `yarn add recoil`
7. Redux 설치: `yarn add @reduxjs/toolkit react-redux`

6,7 번은 둘 중 원하는 거 고고

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

### App.jsx

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/index";
import AboutPage from "./pages/about/index";
import DetailPage from "./pages/detail/index";

// Child
import AboutSecondPage from "./pages/about/Second";

// Common
import Header from "@components/common/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
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
