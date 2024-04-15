import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import AboutPage from "./pages/about/index";
import DetailPage from "./pages/Detail";

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
