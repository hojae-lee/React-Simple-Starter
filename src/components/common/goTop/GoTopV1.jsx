import styles from "./GoTopV1.module.scss"; // SCSS 파일

const GoTopV1 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.scroll__to__top__button} onClick={scrollToTop}>
      TOP
    </div>
  );
};

export default GoTopV1;
