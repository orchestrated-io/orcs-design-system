import React from "react";
import styled, { css, keyframes, ThemeProvider } from "styled-components";
import { get } from "lodash";
import PropTypes from "prop-types";
import { space, layout, color, border, compose } from "styled-system";
import { rgba } from "polished";
import { themeGet } from "@styled-system/theme-get";
import systemtheme from "../../systemtheme";

const ButtonStyles = compose(space, layout, color, border);

const loadingSpin = keyframes`
  to {
      transform: rotate(1turn);
  }
`;

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

const calculateHeight = ({ iconOnly, small, large }) => {
  if (iconOnly && small) {
    return "31px";
  }
  if (iconOnly && large) {
    return "58px";
  }
  if (iconOnly) {
    return "40px";
  }
  return "auto";
};

const calculateFontSize = ({ iconOnly, small, large }) => {
  if (iconOnly) {
    if (large) {
      return "2.2rem";
    } else if (small) {
      return "1.4rem";
    } else {
      return "1.8rem";
    }
  } else if (large) {
    return "1.8rem";
  } else if (small) {
    return "1.4rem";
  }
  return "1.6rem";
};

const calculateSVGMargin = ({ iconLeft, iconRight, small }) => {
  if (iconLeft) {
    return small ? "0 6px 0 0" : "0 10px 0 0";
  }
  if (iconRight) {
    return small ? "0 0 0 6px" : "0 0 0 10px";
  }
  return "0";
};

const StyledItem = styled.button`
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
  border-radius: ${themeGet("radii.2")};
  transition: ${themeGet("transition.transitionDefault")};
  cursor: ${props =>
    props.disabled ? "not-allowed" : props.isLoading ? "progress" : "pointer"};
  width: ${props => (props.fullWidth ? "100%" : "auto")};
  height: ${calculateHeight};
  font-size: ${calculateFontSize};
  padding: ${props =>
    props.large ? "16px 24px" : props.small ? "5px 9px" : "8px 14px"};

  &:hover {
    background-color: ${getVariantsColour("buttonHoverColour")};
    border: 1px solid ${getVariantsColour("buttonHoverColour")};
    color: ${getVariantsColour("textHoverColour")};
  }

  &:focus {
    outline: 0;
    box-shadow: ${props =>
      `0 0 0 3px ${rgba(getVariantsColour("buttonColour")(props), 0.4)}`}
    }};
  }

  svg {
    margin: ${calculateSVGMargin};
  }

  ${props =>
    props.isLoading
      ? css`
          &:after {
            content: "";
            position: relative;
            animation: ${loadingSpin} 500ms infinite linear;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            margin-left: ${themeGet("space.3")};
            border: 2px solid ${themeGet("colors.black20")};
            border-right-color: ${themeGet("colors.white70")};
            display: inline-block;
          }
        `
      : css``};
`;

const Wrapper = styled(StyledItem)(ButtonStyles);

export default function Button({
  large,
  small,
  fullWidth,
  isLoading,
  iconLeft,
  iconRight,
  iconOnly,
  variant = "default",
  theme,
  children,
  ...props
}) {
  const { buttonColour, textColour, borderColour } = getVariantsColours(
    variant
  );
  return (
    <ThemeProvider theme={theme}>
      <Wrapper
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
      </Wrapper>
    </ThemeProvider>
  );
}

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
  /** Specifies the color theme object. */
  theme: PropTypes.object
};

Button.defaultProps = {
  theme: systemtheme
};
