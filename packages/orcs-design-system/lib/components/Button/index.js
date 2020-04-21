import React from "react";
import styled, { css } from "styled-components";
import { get } from "lodash";
import PropTypes from "prop-types";
import { space, layout, color, border } from "styled-system";
import { rgba } from "polished";
import { themeGet } from "@styled-system/theme-get";

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
    textHoverColour: "primaryDarker"
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

const getVariantsColour = (props, colourName) => {
  const variantsColours = getVariantsColours(props.variant);
  const variantsColour = get(variantsColours, colourName);
  return get(props, ["theme", "colors", variantsColour]);
};

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
    background-color: ${props => getVariantsColour(props, "buttonHoverColour")};
    border: 1px solid ${props => getVariantsColour(props, "buttonHoverColour")};
    color: ${props => getVariantsColour(props, "textHoverColour")};
  }

  &:focus {
    outline: 0;
    box-shadow: ${props =>
      `0 0 0 3px ${rgba(getVariantsColour(props, "buttonColour"), 0.4)}`};
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
            margin-left: ${themeGet("space.3")};
            border: 2px solid rgba(0, 0, 0, 0.2);
            border-right-color: rgba(255, 255, 255, 0.7);
            display: inline-block;
          }
        `
      : css``};
`;

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
  const { buttonColour, textColour, borderColour } = getVariantsColours(
    variant
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
      variant={variant}
      bg={buttonColour}
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
