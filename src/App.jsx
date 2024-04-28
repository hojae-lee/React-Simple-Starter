import { Outlet } from "react-router-dom";

// Common
import Header from "@components/common/header/Header";
import Navigation from "@components/common/navigation/Navigation";
import NaviList from "@components/common/navigation/components/NaviList";
import GoTopV1 from "@components/common/goTop/GoTopV1";

function App() {
  return (
    <>
      <Header />
      <Navigation>
        <NaviList />
      </Navigation>
      <Outlet></Outlet>
      <GoTopV1 />
    </>
  );
}

export default App;
