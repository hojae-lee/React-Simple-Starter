import React from "react";
import PropTypes from "prop-types";

/**
 * 타이틀 컴포넌트 입니다.
 */
function Title({ title }) {
  return <div>{title}</div>;
}

export default Title;

Title.propTypes = {
  title: PropTypes.string,
};
