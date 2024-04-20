import PropTypes from "prop-types";
import styles from "./Navigation.module.scss";

function Navigation({ children }) {
  return <div className={styles.navi__container}>{children}</div>;
}

export default Navigation;

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};
