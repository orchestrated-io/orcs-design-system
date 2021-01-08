import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { default as GlobalStyles } from "./GlobalStyles";
import systemtheme from "./systemtheme";

const SystemThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={systemtheme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};

SystemThemeProvider.propTypes = {
  children: PropTypes.node
};

export default SystemThemeProvider;
