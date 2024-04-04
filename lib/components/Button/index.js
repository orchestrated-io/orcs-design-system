import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { space, layout, color, border, variant, compose } from "styled-system";
import { css } from "@styled-system/css";
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
      bg: themeGet("colors.primary")(props),
      color: themeGet("colors.white")(props),
      borderColor: themeGet("colors.primary")(props),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      appearance: "none",
      boxShadow: "none",
      margin: "0",
      textDecoration: "none",
      textAlign: "center",
      verticalAlign: "center",
      fontFamily: themeGet("fonts.main")(props),
      fontWeight: themeGet("fontWeights.2")(props),
      borderRadius: themeGet("radii.2")(props),
      transition: themeGet("transition.transitionDefault")(props),
      borderWidth: themeGet("borderWidths.1")(props),
      cursor: props.disabled
        ? "not-allowed"
        : props.isLoading
        ? "progress"
        : "pointer",
      width: props.fullWidth ? "100%" : "auto",
      height: "auto",
      fontSize: props.small
        ? themeGet("fontSizes.1")(props)
        : props.large && props.iconOnly
        ? themeGet("fontSizes.5")(props)
        : props.large
        ? themeGet("fontSizes.3")(props)
        : themeGet("fontSizes.2")(props),
      py: props.large ? "s" : props.small ? "xxs" : "xs",
      px: props.large ? "r" : props.small ? "s" : "between",
      svg: {
        marginRight: !props.iconLeft ? "" : props.small ? "xs" : "s",
        marginLeft: !props.iconRight ? "" : props.small ? "xs" : "s"
      },
      "&:hover": {
        bg: themeGet("colors.primaryDark")(props),
        borderColor: themeGet("colors.primaryDark")(props),
        borderWidth: themeGet("borderWidths.1")(props),
        borderStyle: "solid"
      },
      "&:focus": {
        outline: "0",
        boxShadow:
          themeGet("shadows.thinOutline")(props) +
          " " +
          themeGet("colors.primaryDarker")(props)
      }
    }),
  (props) =>
    variant({
      variants: {
        default: {},
        success: {
          bg: themeGet("colors.success")(props),
          color: themeGet("colors.white")(props),
          borderColor: themeGet("colors.success")(props),
          "&:hover": {
            bg: themeGet("colors.successDark")(props),
            borderColor: themeGet("colors.successDark")(props)
          },
          "&:focus": {
            outline: "0",
            boxShadow:
              themeGet("shadows.thinOutline")(props) +
              " " +
              themeGet("colors.successDarker")(props)
          }
        },
        successAlternate: {
          bg: themeGet("colors.greyLightest")(props),
          color: themeGet("colors.success")(props),
          borderColor: themeGet("colors.greyLightest")(props),
          "&:hover": {
            bg: themeGet("colors.greyLighter")(props),
            borderColor: themeGet("colors.greyLighter")(props)
          },
          "&:focus": {
            outline: "0",
            boxShadow:
              themeGet("shadows.thinOutline")(props) +
              " " +
              themeGet("colors.successLight")(props)
          }
        },
        danger: {
          bg: themeGet("colors.danger")(props),
          color: themeGet("colors.white")(props),
          borderColor: themeGet("colors.danger")(props),
          "&:hover": {
            bg: themeGet("colors.dangerDark")(props),
            borderColor: themeGet("colors.dangerDark")(props)
          },
          "&:focus": {
            outline: "0",
            boxShadow:
              themeGet("shadows.thinOutline")(props) +
              " " +
              themeGet("colors.dangerDarker")(props)
          }
        },
        dangerAlternate: {
          bg: themeGet("colors.greyLightest")(props),
          color: themeGet("colors.danger")(props),
          borderColor: themeGet("colors.greyLightest")(props),
          "&:hover": {
            bg: themeGet("colors.greyLighter")(props),
            borderColor: themeGet("colors.greyLighter")(props)
          },
          "&:focus": {
            outline: "0",
            boxShadow:
              themeGet("shadows.thinOutline")(props) +
              " " +
              themeGet("colors.dangerLight")(props)
          }
        },
        disabled: {
          bg: themeGet("colors.greyLighter")(props),
          color: themeGet("colors.grey")(props),
          borderColor: themeGet("colors.greyLighter")(props),
          "&:hover": {
            bg: themeGet("colors.greyLighter")(props),
            color: themeGet("colors.grey")(props),
            borderColor: themeGet("colors.greyLighter")(props)
          }
        },
        ghost: {
          bg: themeGet("colors.primaryLightest")(props),
          color: themeGet("colors.primaryDark")(props),
          borderColor: themeGet("colors.primaryLightest")(props),
          "&:hover": {
            bg: themeGet("colors.primaryLighter")(props),
            borderColor: themeGet("colors.primaryLighter")(props),
            color: themeGet("colors.primaryDarker")(props)
          },
          "&:focus": {
            outline: "0",
            boxShadow:
              themeGet("shadows.thinOutline")(props) +
              " " +
              themeGet("colors.primaryLight")(props)
          }
        }
      }
    }),
  (props) =>
    props.disabled
      ? css({
          bg: themeGet("colors.greyLighter")(props),
          color: themeGet("colors.grey")(props),
          borderColor: themeGet("colors.greyLighter")(props),
          "&:hover": {
            bg: themeGet("colors.greyLighter")(props),
            color: themeGet("colors.grey")(props),
            borderColor: themeGet("colors.greyLighter")(props)
          }
        })
      : css(),
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
    leftIcon,
    rightIcon,
    children,
    onClick,
    ButtonStyles,
    theme,
    ariaLabel
  } = props;

  const component = (
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
      borderStyle="solid"
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      aria-label={ariaLabel}
      {...ButtonStyles}
      {...props}
    >
      {leftIcon && <Icon icon={leftIcon} mr={small ? "xxs" : "xs"} />}
      {children}
      {rightIcon && <Icon icon={rightIcon} ml={small ? "xxs" : "xs"} />}
      {isLoading && <Loading inverted ml="s" />}
    </StyledButton>
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
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
    "successAlternate",
    "danger",
    "dangerAlternate",
    "ghost",
    "disabled",
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
  /** Specifies aria-label for iconOnly buttons. This is only required if the iconOnly button is used, as it doesn't have supporting text for accessibility.*/
  ariaLabel: (props, propName) => {
    if (props.iconOnly && (props[propName] == null || props[propName] === "")) {
      return new Error(
        `Missing prop \`${propName}\` not specified for Button component. When \`iconOnly\` is true, \`${propName}\` is required.`
      );
    }
    if (props[propName] && typeof props[propName] !== "string") {
      return new Error(
        `Invalid propType for \`${propName}\` supplied to Button component. Expected \`string\`, received \`${typeof props[
          propName
        ]}\`.`
      );
    }
    return null;
  },
  /** Specifies the color theme object. */
  theme: PropTypes.object
};

Button.defaultProps = {
  variant: "default"
};
