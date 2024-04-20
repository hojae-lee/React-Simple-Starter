import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/index";
import AboutPage from "./pages/about/index";
import DetailPage from "./pages/detail/index";
import NotFoundPage from "./pages/NotFound";

// Child
import AboutReduxPage from "./pages/about/ReduxPage";
import AboutRecoilPage from "./pages/about/RecoilPage";

// Common
import Header from "@components/common/header/Header";
import Navigation from "@components/common/navigation/Navigation";
import NaviItem from "@components/common/navigation/components/NaviItem";

// Utils
import pathData from "@assets/utils/pathData";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation>
        {pathData.map((item, index) => (
          <NaviItem to={item.path} name={item.name} key={index} />
        ))}
      </Navigation>
      <Routes>
        {/* 가장 기본이 되는 페이지는 index 를 넣어주기 */}
        <Route index path="/" element={<MainPage />} />
        {/* 중첩 라우팅  */}
        <Route path="/about" element={<AboutPage />}>
          <Route path="redux" element={<AboutReduxPage />} />
          <Route path="recoil" element={<AboutRecoilPage />} />
        </Route>
        {/* 동적 라우팅을 이용한 페이지 구성 */}
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
