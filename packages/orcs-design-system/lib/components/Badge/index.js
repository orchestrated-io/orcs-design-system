import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { space, layout, color, compose, variant } from "styled-system";
import { css } from "@styled-system/css";
import systemtheme from "../../systemtheme";

const BadgeStyles = compose(space, layout, color);

const Item = styled("div")(
  css({
    fontSize: 0,
    fontWeight: 2,
    display: "inline-block",
    textAlign: "center",
    whiteSpace: "nowrap",
    position: "relative",
    py: 2,
    px: 3,
    cursor: "default",
    borderRadius: 1,
    color: "greyDarker",
    bg: "greyLighter"
  }),
  variant({
    variants: {
      default: {},
      success: {
        color: "successDarker",
        bg: "successLighter"
      },
      warning: {
        color: "warningDarker",
        bg: "warningLighter"
      },
      danger: {
        color: "dangerDarker",
        bg: "dangerLighter"
      },
      primaryLight: {
        color: "primaryDarker",
        bg: "primaryLightest"
      },
      primary: {
        color: "primaryDarker",
        bg: "primaryLighter"
      },
      primaryDark: {
        color: "primaryDarkest",
        bg: "primary"
      },
      secondary: {
        color: "secondary",
        bg: "secondaryLightest"
      }
    }
  }),
  BadgeStyles
);

export default function Badge({ children, theme, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <Item {...props}>{children}</Item>
    </ThemeProvider>
  );
}

Badge.propTypes = {
  /** Specifies badge colour. Colours are taken from the standard design system colours. */
  variant: PropTypes.oneOf([
    "success",
    "warning",
    "danger",
    "primaryLight",
    "primary",
    "primaryDark",
    "secondary"
  ]),
  /** The label text on the badge is passed as a child element. */
  children: PropTypes.node,
  /** Specifies the system theme. */
  theme: PropTypes.object
};

Badge.defaultProps = {
  theme: systemtheme
};
