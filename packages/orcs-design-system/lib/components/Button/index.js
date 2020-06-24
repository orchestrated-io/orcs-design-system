import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { get } from "lodash";
import PropTypes from "prop-types";
import { space, layout, color, border, compose } from "styled-system";
import { rgba } from "polished";
import { css } from "@styled-system/css";
import systemtheme from "../../systemtheme";
import Icon from "../Icon";

const ButtonStyles = compose(space, layout, color, border);

const variantMap = {
  default: {
    buttonColour: "primary",
    textColour: "white",
    borderColour: "primary",
    buttonHoverColour: "primaryDark",
    textHoverColour: "white"
  },
  success: {
    buttonColour: "successDark",
    textColour: "white",
    borderColour: "successDark",
    buttonHoverColour: "successDarker",
    textHoverColour: "white"
  },
  danger: {
    buttonColour: "danger",
    textColour: "white",
    borderColour: "danger",
    buttonHoverColour: "dangerDark",
    textHoverColour: "white"
  },
  disabled: {
    buttonColour: "greyLighter",
    textColour: "greyLight",
    borderColour: "greyLighter",
    buttonHoverColour: "greyLighter",
    textHoverColour: "greyLight"
  },
  ghost: {
    buttonColour: "primaryLightest",
    textColour: "primary",
    borderColour: "primaryLightest",
    buttonHoverColour: "primaryLighter",
    textHoverColour: "primaryDark"
  }
};

const getVariantsColours = variant =>
  get(variantMap, variant, {
    buttonColour: "primary",
    textColour: "white",
    borderColour: "primary",
    buttonHoverColour: "primaryDark",
    textHoverColour: "white"
  });

const getVariantsColour = colourName => props => {
  const variantsColours = getVariantsColours(props.variant);
  const variantsColour = get(variantsColours, colourName);
  return get(props, ["theme", "colors", variantsColour]);
};

const Item = styled("button").attrs(props => ({
  "data-testid": props.dataTestId
    ? props.dataTestId
    : props["data-testid"]
    ? props["data-testid"]
    : null
}))(
  props =>
    css({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      appearance: "none",
      boxShadow: "none",
      textDecoration: "none",
      textAlign: "center",
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
      height: !props.iconOnly
        ? "auto"
        : props.iconOnly && props.small
        ? "l"
        : props.iconOnly && props.large
        ? "xxl"
        : "xl",
      fontSize:
        !props.iconOnly && props.small
          ? "1"
          : props.iconOnly && props.small
          ? "1"
          : props.iconOnly && props.large
          ? "4"
          : !props.iconOnly && props.small
          ? "1"
          : !props.IconOnly && props.large
          ? "3"
          : "2",
      px: props.large ? "l" : props.small ? "s" : "r",
      py: props.large ? "r" : props.small ? "xs" : "s",
      "&:hover": {
        bg: getVariantsColour("buttonHoverColour"),
        borderColor: getVariantsColour("buttonHoverColour"),
        borderWidth: "1px",
        borderStyle: "solid",
        color: getVariantsColour("textHoverColour")
      },
      "&:focus": {
        outline: "0",
        boxShadow:
          "0 0 0 3px " + rgba(getVariantsColour("buttonColour")(props), 0.4)
      },
      svg: {
        marginRight: !props.iconLeft ? "" : props.small ? "xs" : "s",
        marginLeft: !props.iconRight ? "" : props.small ? "xs" : "s"
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
  variant = "default",
  dataTestId,
  theme,
  children,
  ...props
}) => {
  const { buttonColour, textColour, borderColour } = getVariantsColours(
    variant
  );
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
        variant={variant}
        bg={buttonColour}
        color={textColour}
        borderColor={borderColour}
        dataTestId={dataTestId}
        borderWidth="1px"
        borderStyle="solid"
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
