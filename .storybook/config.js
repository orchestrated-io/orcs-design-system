import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import colours from "../lib/colours";
import GlobalStyles from "../lib/globalStyles";
import "storybook-chromatic";

library.add(far, fas);
configure(
  [
    require.context("../lib", true, /\.stories\.mdx$/),
    require.context("../lib", true, /\.stories\.js$/)
  ],
  module
);

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

addDecorator(withA11y);
addDecorator(ThemeDecorator);
