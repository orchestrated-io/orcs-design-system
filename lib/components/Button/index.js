import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { space, layout, color, border, variant, compose } from "styled-system";
import { css } from "@styled-system/css";
import systemtheme from "../../systemtheme";
import shouldForwardProp from "@styled-system/should-forward-prop";
import Icon from "../Icon";
import Loading from "../Loading";
import { themeGet } from "@styled-system/theme-get";

const ButtonStyles = compose(space, layout, color, border);

const StyledButton = styled("button")
  .withConfig({ shouldForwardProp })
  .attrs((props) => ({
    "data-testid": props.dataTestId
      ? props.dataTestId
      : props["data-testid"]
      ? props["data-testid"]
      : null,
    disabled: props.disabled ? true : props.variant == "disabled" ? true : false
  }))(
  (props) =>
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
      py: props.large ? "s" : props.small ? "xxs" : "xs",
      px: props.large ? "r" : props.small ? "s" : "between",
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
        boxShadow:
          themeGet("shadows.thinOutline")(props) +
          " " +
          themeGet("colors.primary30")(props)
      }
    }),
  (props) =>
    variant({
      variants: {
        default: {},
        success: {
          bg: "success",
          color: "white",
          borderColor: "success",
          "&:hover": {
            bg: "successDark",
            borderColor: "successDark"
          },
          "&:focus": {
            outline: "0",
            boxShadow:
              themeGet("shadows.thinOutline")(props) +
              " " +
              themeGet("colors.success30")(props)
          }
        },
        successAlternate: {
          bg: "greyLightest",
          color: "success",
          borderColor: "greyLightest",
          "&:hover": {
            bg: "greyLighter",
            borderColor: "greyLighter"
          },
          "&:focus": {
            outline: "0",
            boxShadow:
              themeGet("shadows.thinOutline")(props) +
              " " +
              themeGet("colors.success30")(props)
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
              themeGet("shadows.thinOutline")(props) +
              " " +
              themeGet("colors.danger30")(props)
          }
        },
        dangerAlternate: {
          bg: "greyLightest",
          color: "danger",
          borderColor: "greyLightest",
          "&:hover": {
            bg: "greyLighter",
            borderColor: "greyLighter"
          },
          "&:focus": {
            outline: "0",
            boxShadow:
              themeGet("shadows.thinOutline")(props) +
              " " +
              themeGet("colors.danger30")(props)
          }
        },
        disabled: {
          bg: "greyLighter",
          color: "grey",
          borderColor: "greyLighter",
          "&:hover": {
            bg: "greyLighter",
            color: "grey",
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
              themeGet("shadows.thinOutline")(props) +
              " " +
              themeGet("colors.primary20")(props)
          }
        }
      }
    }),
  ButtonStyles
);

export const Button = React.forwardRef((props, ref) => {
  const {
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
    leftIcon,
    rightIcon,
    children,
    onClick,
    ButtonStyles
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <StyledButton
        large={large}
        small={small}
        fullWidth={fullWidth}
        isLoading={isLoading}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        iconLeft={iconLeft}
        iconRight={iconRight}
        iconOnly={iconOnly}
        dataTestId={dataTestId}
        borderWidth="1px"
        borderStyle="solid"
        disabled={disabled}
        variant={disabled ? "disabled" : null}
        onClick={onClick}
        ref={ref}
        {...ButtonStyles}
        {...props}
      >
        {leftIcon && <Icon icon={leftIcon} mr={small ? "xxs" : "xs"} />}
        {children}
        {rightIcon && <Icon icon={rightIcon} ml={small ? "xxs" : "xs"} />}
        {isLoading && (
          <Loading inverted ml="s" />
        )}
      </StyledButton>
    </ThemeProvider>
  );
});

export default Button;

Button.propTypes = {
  /** Large button */
  large: PropTypes.bool,
  /** Small button */
  small: PropTypes.bool,
  /** Specifies alternate button colours/styles. */
  variant: PropTypes.oneOf([
    "success",
    "danger",
    "disabled",
    "ghost",
    "default"
  ]),
  /** Full width button that takes up all available space of parent */
  fullWidth: PropTypes.bool,
  /** Adds a spinner animation to indicate loading or processing */
  isLoading: PropTypes.bool,
  /** Styles button to fit an icon on the left of text. Uses Icon component. */
  iconLeft: PropTypes.bool,
  /** Styles button to fit an icon on the right of text. Uses Icon component. */
  iconRight: PropTypes.bool,
  /** New functionality to specify an `Icon` on the left side without having to include it as a child. */
  leftIcon: PropTypes.array,
  /** New functionality to specify an `Icon` on the right side without having to include it as a child. */
  rightIcon: PropTypes.array,
  /** Styles button to suit having only an icon. Uses Icon component. */
  iconOnly: PropTypes.bool,
  /** Specifies whether the button is disabled. */
  disabled: PropTypes.bool,
  /** Function to run when the `Button` is clicked */
  onClick: PropTypes.func,
  /** The text label on the button is passed as a child. Keep this text short and descriptive. Use an action word or confirmation if possible. */
  children: PropTypes.node,
  /** Adds additional styling to the rendered `<button>` using `space`, `layout`, `color` and `border` prop categories */
  ButtonStyles: PropTypes.object,
  /** Specifies the `data-testid` attribute for testing. */
  dataTestId: PropTypes.string,
  /** Specifies the color theme object. */
  theme: PropTypes.object
};

Button.defaultProps = {
  theme: systemtheme
};
