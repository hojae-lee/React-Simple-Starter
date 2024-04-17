import styles from "./Card.module.scss";

function Card(params) {
  const { imageUrl, alt } = params;

  const openDialog = () => {
    console.log("open dialog");
  };

  return (
    <div className={styles.card} onClick={openDialog}>
      <img
        src={imageUrl}
        alt={alt}
        className={styles.card__image}
        loading="lazy"
      />
    </div>
  );
}

export default Card;
