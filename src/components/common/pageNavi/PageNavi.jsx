import PropTypes from "prop-types";

import styles from "./PageNavi.module.scss";

function PageNavi(props) {
  const { totalPageNumber, perPage, pageNumber, paginate } = props;
  // 페이지네이션 컴포넌트
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
            {"<"}
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
            {">"}
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
