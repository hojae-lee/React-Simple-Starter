import styles from "./PageNavi.module.scss";
import arrowLeft from "@assets/icons/arrow-left.svg";
import arrowRight from "@assets/icons/arrow-right.svg";

function PageNavi() {
  return (
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        <button type="button" className={styles.pagination__button}>
          <img src={arrowLeft} alt="arrow-left" />
        </button>
        <span>1</span>
        <button type="button" className={styles.pagination__button}>
          <img src={arrowRight} alt="arrow-right" />
        </button>
      </div>
    </footer>
  );
}

export default PageNavi;
