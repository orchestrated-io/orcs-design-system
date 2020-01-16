import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";
import orcsTheme from "./orcstheme";
import { ThemeProvider } from "styled-components";

import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { withA11y } from "@storybook/addon-a11y";
import colours from "../lib/colours";
import GlobalStyles from "../lib/globalStyles";

import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

library.add(far, fas);

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

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  options: {
    name: "Orcs Design System",
    url: "#",
    theme: orcsTheme,
    sidebarAnimations: true
  }
});
