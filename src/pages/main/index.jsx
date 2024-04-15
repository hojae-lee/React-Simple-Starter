import styles from "./styles/index.module.scss";
import test from "@assets/images/test.png";

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
        <div className={styles.container__contents__imageBox}>
          <img src={test} alt="image" width="360" height="360" />
        </div>
      </div>
    </div>
  );
}

export default index;
