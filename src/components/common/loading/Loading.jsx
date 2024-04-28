import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading__container}>
      <div className={styles.loading__spinner}></div>
      <div className={styles.loading__text}>Loading...</div>
    </div>
  );
};

export default Loading;
