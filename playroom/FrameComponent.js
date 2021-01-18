import React from "react";
import PropTypes from "prop-types";
import SystemThemeProvider from "../lib/SystemThemeProvider";

const FrameComponent = ({ children }) => {
  return <SystemThemeProvider>{children}</SystemThemeProvider>;
};

FrameComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default FrameComponent;
