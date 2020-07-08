import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { space, layout, color, border, variant, compose } from "styled-system";
import { rgba } from "polished";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import systemtheme from "../../systemtheme";
import shouldForwardProp from "@styled-system/should-forward-prop";
import Icon from "../Icon";

const ButtonStyles = compose(space, layout, color, border);

const Item = styled("button")
  .attrs(props => ({
    "data-testid": props.dataTestId
      ? props.dataTestId
      : props["data-testid"]
      ? props["data-testid"]
      : null,
    disabled: props.disabled ? true : props.variant == "disabled" ? true : false
  }))
  .withConfig({ shouldForwardProp })(
  props =>
    css({
      bg: "primary",
      color: "white",
      borderColor: "primary",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      appearance: "none",
      boxShadow: "none",
      textDecoration: "none",
      textAlign: "center",
      verticalAlign: "center",
      fontFamily: "main",
      fontWeight: "2",
      borderRadius: "2",
      transition: "transitionDefault",
      cursor: props.disabled
        ? "not-allowed"
        : props.isLoading
        ? "progress"
        : "pointer",
      width: props.fullWidth ? "100%" : "auto",
      height: "auto",
      fontSize: props.small
        ? "1"
        : props.large && props.iconOnly
        ? "5"
        : props.large
        ? "3"
        : "2",
      py: props.small ? "xxs" : props.large ? "s" : "xs",
      px: props.large ? "r" : props.small ? "xs" : "s",
      svg: {
        marginRight: !props.iconLeft ? "" : props.small ? "xs" : "s",
        marginLeft: !props.iconRight ? "" : props.small ? "xs" : "s"
      },
      "&:hover": {
        bg: "primaryDark",
        borderColor: "primaryDark",
        borderWidth: "1px",
        borderStyle: "solid"
      },
      "&:focus": {
        outline: "0",
        boxShadow: "0 0 0 3px " + rgba(themeGet("colors.primary")(props), 0.4)
      }
    }),
  props =>
    variant({
      variants: {
        default: {},
        success: {
          bg: "successDark",
          color: "white",
          borderColor: "successDark",
          "&:hover": {
            bg: "successDarker",
            borderColor: "successDarker"
          },
          "&:focus": {
            outline: "0",
            boxShadow:
              "0 0 0 3px " + rgba(themeGet("colors.successDark")(props), 0.4)
          }
        },
        danger: {
          bg: "danger",
          color: "white",
          borderColor: "danger",
          "&:hover": {
            bg: "dangerDark",
            borderColor: "dangerDark"
          },
          "&:focus": {
            outline: "0",
            boxShadow:
              "0 0 0 3px " + rgba(themeGet("colors.dangerDark")(props), 0.4)
          }
        },
        disabled: {
          bg: "greyLighter",
          color: "greyLight",
          borderColor: "greyLighter",
          "&:hover": {
            bg: "greyLighter",
            color: "greyLight",
            borderColor: "greyLighter"
          }
        },
        ghost: {
          bg: "primaryLightest",
          color: "primary",
          borderColor: "primaryLightest",
          "&:hover": {
            bg: "primaryLighter",
            borderColor: "primaryLighter",
            color: "primaryDark"
          },
          "&:focus": {
            outline: "0",
            boxShadow:
              "0 0 0 3px " +
              rgba(themeGet("colors.primaryLightest")(props), 0.4)
          }
        }
      }
    }),
  ButtonStyles
);

export const Button = ({
  large,
  small,
  fullWidth,
  isLoading,
  iconLeft,
  iconRight,
  iconOnly,
  dataTestId,
  disabled,
  theme,
  children,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Item
        large={large}
        small={small}
        fullWidth={fullWidth}
        isLoading={isLoading}
        iconLeft={iconLeft}
        iconRight={iconRight}
        iconOnly={iconOnly}
        dataTestId={dataTestId}
        borderWidth="1px"
        borderStyle="solid"
        disabled={disabled}
        variant={disabled ? "disabled" : null}
        {...props}
      >
        {children}
        {isLoading ? <Icon icon={["fas", "spinner"]} spin ml="s" /> : null}
      </Item>
    </ThemeProvider>
  );
};

export default Button;

Button.propTypes = {
  /** Large button */
  large: PropTypes.bool,
  /** Small button */
  small: PropTypes.bool,
  /** Specifies alternate button colours/styles. */
  variant: PropTypes.oneOf(["success", "danger", "disabled", "ghost"]),
  /** Full width button that takes up all available space of parent */
  fullWidth: PropTypes.bool,
  /** Adds a spinner animation to indicate loading or processing */
  isLoading: PropTypes.bool,
  /** Styles button to fit an icon on the left of text. Uses Icon component. */
  iconLeft: PropTypes.bool,
  /** Styles button to fit an icon on the right of text. Uses Icon component. */
  iconRight: PropTypes.bool,
  /** Styles button to suit having only an icon. Uses Icon component. */
  iconOnly: PropTypes.bool,
  /** Specifies whether the button is disabled. */
  disabled: PropTypes.bool,
  /** The text label on the button is passed as a child. Keep this text short and descriptive. Use an action word or confirmation if possible. */
  children: PropTypes.node,
  /** Specifies the `data-testid` attribute for testing. */
  dataTestId: PropTypes.string,
  /** Specifies the color theme object. */
  theme: PropTypes.object
};

Button.defaultProps = {
  theme: systemtheme
};
