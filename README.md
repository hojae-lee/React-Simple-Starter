# Simple React Project

뭔가 개발하는 것보다는 심플한 리액트 프로젝트에 요고저고 해보는 곳

## 개발환경 셋팅 💻

1. react 프로젝트 설치: `yarn create vite@latest`
2. 외부 오픈 API 통신을 위한 라이브러리 axios 설치: `yarn add axios`
3. css 스타일링을 위한 sass/scss 설치: `yarn add -D sass`
4. 추가적인 스타일 컴포넌트를 원한다: `yarn add styled-components`
5. react router 설치: `yarn add react-router-dom localforage match-sorter sort-by`
6. react toast poup: `yarn add react-simple-toasts`
7. React 중앙집중식 상태관리 라이브러리 Recoil 설치: `yarn add recoil`
8. Redux 설치: `yarn add @reduxjs/toolkit react-redux`
9. prop-types 설치: `yarn add prop-types`
10. zustand 설치: `yarn add zustand`
11. storybook 설치: `npx storybook@latest init`

상태 관리 라이브러리는 개인적으로 zustand 가 제일 나은듯?

### 스타일 🎨

1. `assets/styles/scss/main.scss`: 전체 공통 스타일 부분
2. `color.scss, font.scss`: 공통으로 사용할 color, font 가 들어있음.
3. 컴포넌트별로 필요한 스타일은 components 별 styles 폴더를 만들어서 관리.
4. scss 를 안쓰고 싶은 경우, `styled-components` 를 이용해서 사용

### vite.config.js ⚡︎

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
      "@store": fileURLToPath(new URL("./src/store", import.meta.url)),
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

먼저 코드 라인을 하나씩 살펴보겠습니다.

1. `new URL("./src", import.meta.url)`:

   - 이 코드는 현재 모듈을 기준으로 상대 경로 "./src"를 가리키는 URL 객체를 만듭니다.
   - `import.meta.url`은 현재 모듈의 URL을 나타냅니다.

2. `fileURLToPath(new URL("./src", import.meta.url))`:
   - `new URL("./src", import.meta.url)`를 통해 생성된 URL 객체를 `fileURLToPath` 함수에 전달합니다.
   - `fileURLToPath` 함수는 파일 URL을 파일 경로 문자열로 변환합니다.

여기서 한 번 예를 들어보겠습니다.

가정: 현재 모듈의 URL이 "file:///Users/username/project/index.js" 라고 가정합니다.

1. `new URL("./src", import.meta.url)`:

   - 현재 모듈을 기준으로 "./src"에 대한 URL을 만듭니다.
   - 결과: "file:///Users/username/project/src"

2. `fileURLToPath(new URL("./src", import.meta.url))`:
   - 위에서 얻은 URL 객체를 `fileURLToPath` 함수에 전달하여 파일 경로 문자열로 변환합니다.
   - 결과: "/Users/username/project/src"

따라서, 전체 코드가 실행되면 상대 경로 "./src"가 포함된 현재 모듈의 파일 경로를 나타내는 문자열이 반환됩니다.

좀 더 효율적으로 할라면, alias 를 만들어주는 함수를 별도로 만들어서 관리해주면 됨.

아래 처럼 getAliasPath 라는 콜백함수를 하나 만들어서 관리해주도록 하자.

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

// alias path 를 만들어주는 콜백함수
const getAliasPath = (path) => {
  return fileURLToPath(new URL(path, import.meta.url));
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": getAliasPath("./src"),
      "@assets": getAliasPath("./src/assets"),
      "@components": getAliasPath("./src/components"),
      "@pages": getAliasPath("./src/pages"),
      "@recoil": getAliasPath("./src/recoil"),
      "@store": getAliasPath("./src/store"),
      "@apis": getAliasPath("./src/apis"),
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
