import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { space, layout, color, compose, variant } from "styled-system";
import { css } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { themeGet } from "@styled-system/theme-get";

const BadgeStyles = compose(space, layout, color);

const Item = styled("span")
  .withConfig({ shouldForwardProp })
  .attrs((props) => ({
    "data-testid": props["data-testid"] ? props["data-testid"] : null
  }))(
  (props) =>
    css({
      fontSize: themeGet("fontSizes.0")(props),
      fontWeight: themeGet("fontWeights.2")(props),
      display: "inline-block",
      position: "relative",
      py: 2,
      px: 3,
      cursor: "default",
      borderRadius: 1,
      color: themeGet("colors.greyDarkest")(props),
      bg: themeGet("colors.greyLighter")(props),
      whiteSpace: props.noWrap ? "nowrap" : "normal"
    }),
  variant({
    variants: {
      default: {},
      success: {
        color: themeGet("colors.successDarkest"),
        bg: themeGet("colors.successLightest")
      },
      successPending: {
        color: themeGet("colors.successDark"),
        bg: themeGet("colors.successEvenLighter")
      },
      warning: {
        color: themeGet("colors.warningDarkest"),
        bg: themeGet("colors.warningLightest")
      },
      danger: {
        color: themeGet("colors.dangerDarkest"),
        bg: themeGet("colors.dangerLightest")
      },
      primaryLight: {
        color: themeGet("colors.primaryDarker"),
        bg: themeGet("colors.primaryLightest")
      },
      primary: {
        color: themeGet("colors.primaryDarkest"),
        bg: themeGet("colors.primaryLighter")
      },
      primaryDark: {
        color: themeGet("colors.primaryDarkest"),
        bg: themeGet("colors.primaryLight")
      },
      secondary: {
        color: themeGet("colors.secondaryDarker"),
        bg: themeGet("colors.secondaryLightest")
      },
      secondaryPending: {
        color: themeGet("colors.secondary"),
        bg: themeGet("colors.secondaryEvenLighter")
      }
    }
  }),
  BadgeStyles
);

export default function Badge({ noWrap, children, theme, ...props }) {
  const component = (
    <Item noWrap={noWrap} {...props}>
      {children}
    </Item>
  );
  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
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
  /** Specified whether the badge text should be able to wrap or not */
  noWrap: PropTypes.bool,
  /** The label text on the badge is passed as a child element. */
  children: PropTypes.node,
  /** Specifies the system theme. */
  theme: PropTypes.object
};
