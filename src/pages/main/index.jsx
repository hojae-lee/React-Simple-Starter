import FooterHello from "@components/common/footer/FooterHello";
import CardList from "./components/CardList";
import CounterBtn from "./components/CounterBtn";

import styles from "./styles/index.module.scss";

function index() {
  const title = "Simple React Stater";
  const desc = "React v18 기반의 간단한 스타터 입니다.";

  return (
    <div className={styles.container}>
      <div className={styles.container__contents}>
        <div className={styles.container__contents__introBox}>
          <div className={styles.container__contents__introBox__wrapper}>
            <span className={styles.wrapper__title}>{title}</span>
            <span className={styles.wrapper__desc}>{desc}</span>
          </div>
        </div>
        <CounterBtn />
        <div className={styles.container__contents__imageBox}>
          <CardList />
          <FooterHello />
        </div>
      </div>
    </div>
  );
}

export default index;
