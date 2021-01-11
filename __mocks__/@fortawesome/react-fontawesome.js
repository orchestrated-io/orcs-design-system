/* eslint-disable import/prefer-default-export */
/**
 * Mocks @fortawesome/react-fontawesome.js to return a simple, empty <svg> element
 * with the correct class name for the given `icon` prop. We use this to keep full
 * <svg> content out of our rendered component tests.
 */
import React from "react";
import PropTypes from "prop-types";

FontAwesomeIcon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),
  className: PropTypes.string
};

export function FontAwesomeIcon(props) {
  const { icon, className } = props;
  const classNames = ["svg-inline--fa"];

  if (className) {
    classNames.push(className);
  }

  if (typeof icon === "string") {
    classNames.push(icon);
  } else {
    classNames.push(`fa-${icon.iconName}`);
  }

  return <svg className={classNames.join(" ")} />;
}
