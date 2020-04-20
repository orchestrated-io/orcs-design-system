import React from "react";
import styled, { css } from "styled-components";
import { get } from "lodash";
import PropTypes from "prop-types";
import colours from "../../colours";
import variables from "../../variables";
import { rgba, darken } from "polished";
import { space, layout, color, border } from "styled-system";
import { themeGet } from "@styled-system/theme-get";

const Item = styled.button`
  ${space}
  ${layout}
  ${color}
  ${border}
  display: flex;
  align-items: center;
  justify-content: center;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  text-decoration: none;
  text-align: center;
  font-family: ${themeGet("font")};
  font-weight: ${themeGet("fontWeights.2")};
  margin: ${themeGet("space.3")};
  border-radius: ${themeGet("radii.2")};
  transition: ${themeGet("transition")};
  cursor: ${props =>
    props.disabled ? "not-allowed" : props.isLoading ? "progress" : "pointer"};
  width: ${props => (props.fullWidth ? "100%" : "auto")};

  font-size: ${props => {
    let size = "1.6rem";

    if (props.iconOnly) {
      if (props.large) {
        size = "2.2rem";
      } else if (props.small) {
        size = "1.4rem";
      } else {
        size = "1.8rem";
      }
    } else if (props.large) {
      size = "1.8rem";
    } else if (props.small) {
      size = "1.4rem";
    }

    return size;
  }};

  padding: ${props =>
    props.large ? "14px 24px" : props.small ? "6px 8px" : "10px 16px"};

  &:hover {
    background: ${props =>
      props.disabled
        ? colours.greyLighter
        : props.colour && colours[props.colour]
        ? darken(0.1, colours[props.colour])
        : props.ghost
        ? rgba(colours.primary, 0.2)
        : darken(0.1, colours.primary)};
    border: solid 1px
      ${props =>
        props.disabled
          ? darken(0.05, colours.greyLighter)
          : props.colour && colours[props.colour]
          ? darken(0.1, colours[props.colour])
          : props.ghost
          ? "transparent"
          : darken(0.1, colours.primary)};

    color: ${props =>
      props.ghost
        ? darken(0.1, colours.primary)
        : props.disabled
        ? colours.greyLight
        : colours.white};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px
      ${props =>
        props.colour && colours[props.colour]
          ? rgba(colours[props.colour], 0.4)
          : rgba(colours.primary, 0.4)};
  }

  svg {
    margin: ${props =>
      props.iconLeft && props.small
        ? "0 6px 0 0;"
        : props.iconLeft
        ? "0 10px 0 0;"
        : props.iconRight && props.small
        ? "0 0 0 6px;"
        : props.iconRight
        ? "0 0 0 10px;"
        : "0;"};
  }

  ${props =>
    props.isLoading
      ? css`
          &:after {
            content: "";
            position: relative;
            animation: loadingSpin 500ms infinite linear;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            margin-left: ${variables.defaultSpacingHalf};
            border: 2px solid rgba(0, 0, 0, 0.2);
            border-right-color: rgba(255, 255, 255, 0.7);
            display: inline-block;
          }
        `
      : css``};
`;

const variantMap = {
  default: {
    buttonColour: "primary",
    buttonColourHover: "primaryDark",
    textColour: "white",
    borderColour: "primary"
  },
  success: {
    buttonColour: "successDark",
    buttonColourHover: "successDarker",
    textColour: "white",
    borderColour: "successDark"
  },
  danger: {
    buttonColour: "danger",
    buttonColourHover: "dangerDark",
    textColour: "white",
    borderColour: "danger"
  },
  disabled: {
    buttonColour: "greyLighter",
    buttonColourHover: "greyLighter",
    textColour: "greyLight",
    borderColour: "greyLighter"
  },
  ghost: {
    buttonColour: "primaryLightest",
    buttonColourHover: "primaryLighter",
    textColour: "primary",
    borderColour: "primaryLightest"
  }
};

export default function Button({
  large,
  small,
  fullWidth,
  isLoading,
  iconLeft,
  iconRight,
  iconOnly,
  variant = "default",
  children,
  ...props
}) {
  const { buttonColour, buttonColourHover, textColour, borderColour } = get(
    variantMap,
    variant,
    {
      buttonColour: "primary",
      buttonColourHover: "primaryDark",
      textColour: "white",
      borderColour: "primary"
    }
  );
  return (
    <Item
      large={large}
      small={small}
      fullWidth={fullWidth}
      isLoading={isLoading}
      iconLeft={iconLeft}
      iconRight={iconRight}
      iconOnly={iconOnly}
      bg={buttonColour}
      bgHover={buttonColourHover}
      color={textColour}
      borderColor={borderColour}
      borderWidth="1px"
      borderStyle="solid"
      {...props}
    >
      {children}
    </Item>
  );
}

Button.propTypes = {
  /** Large button */
  large: PropTypes.bool,
  /** Small button */
  small: PropTypes.bool,
  /** Specifies alternate button colour. Uses system colour scheme for success and danger. */
  variant: PropTypes.oneOf(["success", "danger", "disabled", "ghost"]),
  /** Ghost (light-coloured) button */
  ghost: PropTypes.bool,
  /** Full width button that takes up all available space of parent */
  fullWidth: PropTypes.bool,
  /** Adds disabled attribute and styling to button */
  disabled: PropTypes.bool,
  /** Adds a spinner animation to indicate loading or processing */
  isLoading: PropTypes.bool,
  /** Styles button to fit an icon on the left of text. Uses Icon component. */
  iconLeft: PropTypes.bool,
  /** Styles button to fit an icon on the right of text. Uses Icon component. */
  iconRight: PropTypes.bool,
  /** Styles button to suit having only an icon. Uses Icon component. */
  iconOnly: PropTypes.bool,
  /** The text label on the button is passed as a child. Keep this text short and descriptive. Use an action word or confirmation if possible. */
  children: PropTypes.node
};
