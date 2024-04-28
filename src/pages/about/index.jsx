import { Outlet, useLoaderData } from "react-router-dom";
import styles from "./styles/index.module.scss";

// 동적 라우팅을 이용한 페이지 구성
function About() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className={styles.container}>
      About 페이지 입니다.
      <Outlet></Outlet>
    </div>
  );
}

export default About;
