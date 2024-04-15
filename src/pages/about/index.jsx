import { Outlet } from "react-router-dom";

// 동적 라우팅을 이용한 페이지 구성
function About() {
  return (
    <div>
      About 페이지 입니다.<Outlet></Outlet>
    </div>
  );
}

export default About;
