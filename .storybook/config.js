import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { colours, GlobalStyles } from "../lib";

configure(require.context("../lib", true, /\.stories\.js$/), module);

const ThemeDecorator = storyFn => {
  return (
    <ThemeProvider theme={colours}>
      <>
        <GlobalStyles />
        {storyFn()}
      </>
    </ThemeProvider>
  );
};
addDecorator(ThemeDecorator);
