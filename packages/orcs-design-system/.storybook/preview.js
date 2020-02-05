import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { withA11y } from "@storybook/addon-a11y";
import GlobalStyles from "../lib/globalStyles";
import * as systemtheme from "../lib/systemtheme";

library.add(far, fas);

const ThemeDecorator = storyFn => {
  return (
    <ThemeProvider theme={systemtheme}>
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
  viewMode: "docs"
});
