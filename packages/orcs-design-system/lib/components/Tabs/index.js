import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { css } from "@styled-system/css";
import { space, background } from "styled-system";
import systemtheme from "../../systemtheme";

export const TabsContainerItem = styled("div")(
  css({
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    bg: "transparent"
  }),
  space
);

export const TabItem = styled("div")(
  css({
    marginRight: 3,
    a: {
      borderRadius: 2,
      bg: "greyLighter",
      // fix this -> add mapping or conditional
      transition: "transition",
      px: 3,
      py: 4,
      fontSize: 1,
      fontWeight: 2,
      // fix this -> add mapping or conditional
      color: "primary",
      display: "block",
      position: "relative",
      cursor: "default",
      whiteSpace: "nowrap",
      textDecoration: "none",
      textAlign: "center",
      textTransform: "uppercase"
    }
  }),
  space,
  background
);

const inactiveStyle = css`
  &:hover,
  &:focus {
    background: ${themeGet("colors.greyLight")};
    color: ${themeGet("colors.greyDark")};
    outline: 0;
    }
  }
`;

const notificationStyle = notification => css`
  :after {
    width: ${themeGet("space.5")};
    height: ${themeGet("space.5")};
    font-size: ${themeGet("fontSizes.0")};
    font-weight: ${themeGet("fontWeights.2")};
    color: ${themeGet("colors.white")};
    background-color: ${themeGet("colors.danger")};
    content: "${notification}";
    position: absolute;
    top: -8px;
    right: -6px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    border-radius: 100%;
  }
`;

export const Tab = ({ theme, children }) => {
  return <TabItem theme={theme}>{children}</TabItem>;
};

export const TabsContainer = ({ theme, children }) => {
  return <TabsContainerItem theme={theme}>{children}</TabsContainerItem>;
};

Tab.defaultProps = {
  theme: systemtheme
};
