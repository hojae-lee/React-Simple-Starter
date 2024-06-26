import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        <span className={styles.header__logoBox__title}>
          ✏️ React Simple Starter
        </span>
      </div>
      <div className={styles.header__profileBox}>
        <span className={styles.header__profileBox__userName}>
          hojaelee | https://github.com/hojae-lee
        </span>
      </div>
    </header>
  );
}

export default Header;
