import React from "react";
import { DocsPage, DocsContainer as BaseContainer } from "@storybook/blocks";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { default as GlobalStyles } from "../lib/GlobalStyles";
import { default as systemtheme } from "../lib/systemtheme";
import { default as systemThemeCollapsed } from "../lib/systemThemeCollapsed";
import { default as systemThemeAccessible } from "../lib/systemThemeAccessible";
import styled, { ThemeProvider } from "styled-components";
import { get } from "lodash";

library.add(far, fas);

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const FlexItem = styled.div`
  flex: 1;
  margin: 0 10px;
`;

const getThemeName = (context) =>
  get(context, "parameters.theme") || get(context, "globals.theme");

const getTheme = (context) => {
  const themeName = getThemeName(context);
  return themeName === "default"
    ? systemtheme
    : themeName === "collapsed"
    ? systemThemeCollapsed
    : systemThemeAccessible;
};

const ThemeDecorator = (storyFn, context) => {
  const themeName = getThemeName(context);
  const storyTheme = getTheme(context);

  switch (themeName) {
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
          <FlexItem key="accessible">
            <ThemeProvider theme={systemThemeAccessible}>
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
        { value: "accessible", title: "Accessible theme" },
        { value: "side-by-side", title: "Side by side" }
      ]
    }
  }
};

export const DocsContainer = ({ children, context }) => {
  const storyTheme = getTheme(context);

  return (
    <BaseContainer context={context}>
      <ThemeProvider theme={storyTheme}>{children}</ThemeProvider>
    </BaseContainer>
  );
};

export const decorators = [ThemeDecorator];
export const parameters = {
  options: {
    showRoots: true
  },
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  a11y: { disable: false },
  viewMode: "docs",
  chromatic: { pauseAnimationAtEnd: true }
};
