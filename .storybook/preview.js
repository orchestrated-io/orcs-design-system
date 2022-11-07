import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { withA11y } from "@storybook/addon-a11y";
import { default as GlobalStyles } from "../lib/GlobalStyles";
import { default as systemtheme } from "../lib/systemtheme";
import { default as systemThemeCollapsed } from "../lib/systemThemeCollapsed";
import styled, { ThemeProvider } from "styled-components";

library.add(far, fas);

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const FlexItem = styled.div`
  width: 45%;
`;

const ThemeDecorator = (storyFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === "default" ? systemtheme : systemThemeCollapsed;

  switch (theme) {
    case "side-by-side":
      return (
        <FlexWrapper>
          <FlexItem key="default">
            <ThemeProvider theme={systemtheme}>
              <>
                <GlobalStyles />
                {storyFn()}
              </>
            </ThemeProvider>
          </FlexItem>

          <FlexItem key="collapsed">
            <ThemeProvider theme={systemThemeCollapsed}>
              <>
                <GlobalStyles />
                {storyFn()}
              </>
            </ThemeProvider>
          </FlexItem>
        </FlexWrapper>
      );

    default:
      return (
        <ThemeProvider theme={storyTheme}>
          <>
            <GlobalStyles />
            {storyFn()}
          </>
        </ThemeProvider>
      );
  }
};

export const globalTypes = {
  theme: {
    title: "Theme",
    description: "Theme for the components",
    defaultValue: "default",
    toolbar: {
      icon: "sidebar",
      items: [
        { value: "default", title: "Default theme" },
        { value: "collapsed", title: "Collapsed theme" },
        { value: "side-by-side", title: "Side by side" }
      ]
    }
  }
};

addDecorator(withA11y);
addDecorator(ThemeDecorator);

addParameters({
  options: {
    showRoots: true
  },
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  viewMode: "docs"
});
