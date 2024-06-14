import React, { useState, useEffect, Suspense } from "react";
import { DocsPage, DocsContainer as BaseContainer } from "@storybook/blocks";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { default as GlobalStyles } from "../lib/GlobalStyles";
import { default as systemtheme } from "../lib/systemtheme";
import { default as systemThemeCollapsed } from "../lib/systemThemeCollapsed";
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

const getTheme = (themeName) => {
  return themeName === "default" ? systemtheme : systemThemeCollapsed;
};

const withThemeDecorator = (storyFn, context) => {
  const [finalThemeName, setFinalThemeName] = useState("default");
  const [storyTheme, setStoryTheme] = useState(systemtheme);

  useEffect(() => {
    const themeName = getThemeName(context);
    setStoryTheme(getTheme(themeName));
    setFinalThemeName(themeName);
  }, [get(context, "parameters.theme"), get(context, "globals.theme")]);

  switch (finalThemeName) {
    case "side-by-side":
      return (
        <Suspense fallback={<div>Loading Themed Component</div>}>
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
        </Suspense>
      );

    default:
      return (
        <Suspense fallback={<div>Loading Themed Component</div>}>
          <ThemeProvider theme={storyTheme}>
            <>
              <GlobalStyles />
              {storyFn()}
            </>
          </ThemeProvider>
        </Suspense>
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
      dynamicTitle: true,
      items: [
        { value: "default", title: "Default theme" },
        { value: "collapsed", title: "Collapsed theme" },
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

export const decorators = [withThemeDecorator];
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
// export const tags = ["autodocs"];
