# Simple React Project

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

7,8 번은 둘 중 원하는 거 고고

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

### Recoil 간단 설명 추가

props drilling 을 해결하기 위해 페이스북에서 만든 공식 라이브러리로 redux 대신 사용하는 상태관리 라이브러리 입니다.

atoms 기반의 상태관리를 사용하여 컴포넌트 간 상태를 유기적으로 관리할 수 있습니다.

redux 보다 편함.

```jsx
yarn add recoil
```

최상단 루트로 가서 RecoilRoot를 이용하여 recoil 을 사용하겠다고 명시해주면 됩니다.

```jsx
import React from "react";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}
```

### Atoms

상태의 단위로 업데이트, 구독이 가능함.

atom이 업데이트 되면서 각각 구독된 컴포넌트는 새로운 값을 반영하여 다시 렌더링 된다.

```jsx
const countState = atom({
  key: "countState",
  default: 0,
});
```

atom 을 이용해서 state 를 선언하며, key는 고유한 id, default 는 기본값을 셋팅할 수 있습니다.

이제 컴포넌트에서 atom 을 사용할려면 `useRecoilState` 훅을 사용하면 됩니다.

```jsx
import { useRecoilState } from "recoil";

const countState = atom({
  key: "countState",
  default: 0,
});

function CountButton() {
  const [count, setCount] = useRecoilState(countState);
  return <button onClick={() => setCount(count + 1)}>count++</button>;
}
```

useRecoilState 사용방법은 useState 와 동일합니다. count 로 선언해주고 set 을 이용해서 업데이트 해줍니다. 이렇게 셋팅하면 redux 와 비교했을 때 훨씬 가볍게 셋팅할 수 있는 것을 확인할 수 있습니다.

이제 src 밑에 recoil 폴더를 만들고 필요한 atom.js 파일을 만들어서 상태를 관리해주면 상태 관리를 좀 더 쉽게 할 수 있습니다!

추가적으로 useRecoilValue 를 사용하여 atom 항목의 value 값을 사용할 수 있습니다.

```jsx
const todoListState = atom({
  key: "todoListState",
  default: [],
});
```

```jsx
const todoList = useRecoilValue(todoListState);
```

기존 todo 리스트를 기반으로 새로운 todo 아이템을 생성하기 위해서 setter만 얻기 위해서는 useSetRecoilState 를 사용하면 됩니다!

```jsx
const setTodoList = useSetRecoilState(todoListState);
```

이제 src 밑에 recoil 폴더를 만들고 필요한 atom.js 파일을 만들어서 상태를 관리해주면 상태 관리를 좀 더 쉽게 할 수 있습니다!

### Selectors

selector를 사용하는 것은 주로 상태의 변환, 조합 또는 계산을 위한 용도로 사용되며 key, get 을 저장해주면 됩니다.

순수 함수에 전달된 상태의 결과물로 같은 인풋이 들어오면 같은 인풋을 리턴하고, side effect가 존재하지 않는 함수입니다.

```jsx
const Selector = selector({
  key: "키값",
  get: ({ get }) => {
    const 원본 = get(아톰);
    return 원본변형값;
  },
});
```

예시로 어떤 온도를 계산하는 예제

```jsx
import { atom, selector } from "recoil";

// 섭씨 온도를 저장하는 Recoil atom
const celsiusTemperatureState = atom({
  key: "celsiusTemperatureState",
  default: 0, // 초기값은 0도로 설정
});

// 화씨 온도를 계산하는 Recoil selector
const fahrenheitTemperatureSelector = selector({
  key: "fahrenheitTemperatureSelector",
  get: ({ get }) => {
    const celsius = get(celsiusTemperatureState);
    return (celsius * 9) / 5 + 32; // 섭씨를 화씨로 변환하는 공식
  },
});

// Recoil 상태를 사용하는 컴포넌트
function TemperatureComponent() {
  const celsius = useRecoilValue(celsiusTemperatureState);
  const fahrenheit = useRecoilValue(fahrenheitTemperatureSelector);

  return (
    <div>
      <p>Celsius: {celsius}</p>
      <p>Fahrenheit: {fahrenheit}</p>
    </div>
  );
}
```
