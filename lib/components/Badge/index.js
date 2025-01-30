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
      lineHeight: themeGet("fontSizes.1")(props),
      fontWeight: themeGet("fontWeights.2")(props),
      display: "inline-block",
      position: "relative",
      pt: themeGet("space.2")(props),
      pb: `calc(${themeGet("space.2")(props)} + 1px)`,
      px: themeGet("space.3")(props),
      cursor: "default",
      borderRadius: 1,
      color: themeGet("colors.greyDarkest")(props),
      bg: themeGet("colors.greyLighter")(props),
      whiteSpace: props.noWrap ? "nowrap" : "normal",
      ...(props.altStyle
        ? {
            bg: themeGet("colors.white")(props),
            borderColor: themeGet("colors.greyLight")(props),
            borderWidth: "1px",
            p: "1px"
          }
        : {})
    }),
  (props) => {
    if (props.altStyle) {
      return variant({
        variants: {
          default: {},
          success: {
            color: themeGet("colors.success")(props),
            borderColor: themeGet("colors.success")(props)
          },
          successPending: {
            color: themeGet("colors.success")(props),
            borderColor: themeGet("colors.success")(props)
          },
          warning: {
            color: themeGet("colors.warning")(props),
            borderColor: themeGet("colors.warning")(props)
          },
          danger: {
            color: themeGet("colors.danger")(props),
            borderColor: themeGet("colors.danger")(props)
          },
          primaryLight: {
            color: themeGet("colors.primaryLight")(props),
            borderColor: themeGet("colors.primaryLight")(props)
          },
          primary: {
            color: themeGet("colors.primary")(props),
            borderColor: themeGet("colors.primary")(props)
          },
          primaryDark: {
            color: themeGet("colors.primaryDark")(props),
            borderColor: themeGet("colors.primaryDark")(props)
          },
          secondary: {
            color: themeGet("colors.secondary")(props),
            borderColor: themeGet("colors.secondary")(props)
          }
        }
      });
    } else {
      return variant({
        variants: {
          default: {},
          success: {
            color: themeGet("colors.successDarkest")(props),
            bg: themeGet("colors.successLightest")(props)
          },
          successPending: {
            color: themeGet("colors.successDark")(props),
            bg: themeGet("colors.successEvenLighter")(props)
          },
          warning: {
            color: themeGet("colors.warningDarkest")(props),
            bg: themeGet("colors.warningLighter")(props)
          },
          danger: {
            color: themeGet("colors.dangerDarkest")(props),
            bg: themeGet("colors.dangerLightest")(props)
          },
          primaryLight: {
            color: themeGet("colors.primaryDarker")(props),
            bg: themeGet("colors.primaryLightest")(props)
          },
          primary: {
            color: themeGet("colors.primaryDarkest")(props),
            bg: themeGet("colors.primaryLighter")(props)
          },
          primaryDark: {
            color: themeGet("colors.primaryDarkest")(props),
            bg: themeGet("colors.primaryLight")(props)
          },
          secondary: {
            color: themeGet("colors.secondaryDarkest")(props),
            bg: themeGet("colors.secondaryEvenLighter")(props)
          }
        }
      });
    }
  },
  BadgeStyles
);

export default function Badge({ noWrap, children, theme, altStyle, ...props }) {
  const component = (
    <Item noWrap={noWrap} altStyle={altStyle} {...props}>
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
  theme: PropTypes.object,
  /** Specifies use the alternative style */
  altStyle: PropTypes.bool
};
