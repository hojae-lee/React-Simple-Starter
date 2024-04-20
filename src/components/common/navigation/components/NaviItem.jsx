import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NaviItem.module.scss";

function NaviItem({ to, name }) {
  return (
    <div className={styles.navi__item__box}>
      <Link to={to}>{name}</Link>
    </div>
  );
}

export default NaviItem;

NaviItem.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
};
