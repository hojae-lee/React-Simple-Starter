import PropTypes from "prop-types";

import styles from "./PageNavi.module.scss";

import arrowLeft from "@assets/icons/arrow-left.svg";
import arrowRight from "@assets/icons/arrow-right.svg";

function PageNavi(props) {
  const { totalPageNumber, perPage, pageNumber, paginate } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPageNumber / perPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.slice(
    Math.max(0, pageNumber - 3),
    Math.min(pageNumber + 2, pageNumbers.length)
  );

  return (
    <ul className={styles.pagination}>
      {pageNumber > 1 && (
        <li className={styles.pageItem}>
          <button
            onClick={() => paginate(pageNumber - 1)}
            className={`${styles.pageLink} ${styles.arrow}`}
          >
            <img src={arrowLeft} alt="arrow-left" />
          </button>
        </li>
      )}

      {renderPageNumbers.map((number) => (
        <li
          key={number}
          className={`${styles.pageItem} ${
            number === pageNumber ? styles.active : ""
          }`}
        >
          <button onClick={() => paginate(number)} className={styles.pageLink}>
            {number}
          </button>
        </li>
      ))}

      {pageNumber < pageNumbers.length && (
        <li className={styles.pageItem}>
          <button
            onClick={() => paginate(pageNumber + 1)}
            className={`${styles.pageLink} ${styles.arrow}`}
          >
            <img src={arrowRight} alt="arrow-left" />
          </button>
        </li>
      )}
    </ul>
  );
}

export default PageNavi;

PageNavi.propTypes = {
  totalPageNumber: PropTypes.number,
  perPage: PropTypes.number,
  pageNumber: PropTypes.number,
  paginate: PropTypes.func,
};
