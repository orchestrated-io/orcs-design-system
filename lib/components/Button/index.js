import React from "react";
import styled, { ThemeProvider, css } from "styled-components";
import PropTypes from "prop-types";
import { space, layout, color, border, compose } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";
import Icon from "../Icon";
import Loading from "../Loading";
import { themeGet } from "@styled-system/theme-get";
import { Link } from "react-router-dom";
import { omit } from "lodash";

export const VARIANT_COLORS = {
  default: {
    background: "colors.primary",
    color: "colors.white",
    borderColor: "colors.primary",
    hovered: {
      background: "colors.primaryDark",
      color: "colors.white",
      borderColor: "colors.primaryDark"
    }
  },
  success: {
    background: "colors.success",
    color: "colors.white",
    borderColor: "colors.success",
    hovered: {
      background: "colors.successDark",
      color: "colors.white",
      borderColor: "colors.successDark"
    },
    focused: { outline: "colors.successDarker" }
  },
  successAlternate: {
    background: "colors.greyLightest",
    color: "colors.success",
    borderColor: "colors.greyLightest",
    hovered: {
      background: "colors.greyLighter",
      color: "colors.success",
      borderColor: "colors.greyLighter"
    },
    focused: { outline: "colors.successLight" }
  },
  danger: {
    background: "colors.danger",
    color: "colors.white",
    borderColor: "colors.danger",
    hovered: {
      background: "colors.dangerDark",
      color: "colors.white",
      borderColor: "colors.dangerDark"
    },
    focused: { outline: "colors.dangerDarker" }
  },
  dangerAlternate: {
    background: "colors.greyLightest",
    color: "colors.danger",
    borderColor: "colors.greyLightest",
    hovered: {
      background: "colors.greyLighter",
      color: "colors.danger",
      borderColor: "colors.greyLighter"
    },
    focused: { outline: "colors.dangerLight" }
  },
  disabled: {
    background: "colors.greyLighter",
    color: "colors.grey",
    borderColor: "colors.greyLighter",
    hovered: {
      background: "colors.greyLighter",
      color: "colors.grey",
      borderColor: "colors.greyLighter"
    }
  },
  ghost: {
    background: "colors.primaryLightest",
    color: "colors.primaryDark",
    borderColor: "colors.primaryLightest",
    hovered: {
      background: "colors.primaryLighter",
      color: "colors.primaryDarker",
      borderColor: "colors.primaryLighter"
    },
    focused: { outline: "colors.primaryLight" }
  }
};

const getOutlineStyle = (color) => css`
  outline: 0;
  box-shadow: ${(props) =>
    [themeGet("shadows.thinOutline")(props), themeGet(color)(props)].join(" ")};
`;

const addVariantColors = (key) => {
  const variantStyle = VARIANT_COLORS[key];
  return css`
    background: ${themeGet(variantStyle.background)};
    color: ${themeGet(variantStyle.color)};
    border-color: ${themeGet(variantStyle.borderColor)};

    &:hover {
      background: ${themeGet(variantStyle.hovered.background)};
      color: ${themeGet(variantStyle.hovered.color)};
      border-color: ${themeGet(variantStyle.hovered.borderColor)};
    }

    ${variantStyle.focused &&
    css`
      &:focus {
        ${getOutlineStyle(variantStyle.focused.outline)}
      }
    `}
  `;
};

const getVariantStyle = (props) => {
  const styles = Object.keys(VARIANT_COLORS).reduce((obj, key) => {
    obj[key] = css`
      ${addVariantColors(key)}
    `;

    return obj;
  }, {});

  if (props.disabled) return styles.disabled;

  return styles[props.variant] || styles.default;
};

const getSpace = (getter) => (props) =>
  themeGet(`space.${getter(props)}`)(props);

const buttonStyles = css`
  background: ${themeGet(VARIANT_COLORS.default.background)};
  color: ${themeGet(VARIANT_COLORS.default.color)};
  border-color: ${themeGet("colors.primary")};
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  box-shadow: none;
  margin: 0;
  text-decoration: none;
  text-align: center;
  font-family: ${themeGet("fonts.main")};
  font-weight: ${themeGet("fontWeights.2")};
  border-radius: ${themeGet("radii.2")};
  transition: ${themeGet("transition.transitionDefault")};
  border-width: ${themeGet("borderWidths.1")};
  cursor: ${(props) =>
    props.disabled ? "not-allowed" : props.isLoading ? "progress" : "pointer"};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  height: auto;
  font-size: ${(props) => {
    let fontSize = 2;

    if (props.large && props.iconOnly) fontSize = 5;
    if (props.large) fontSize = 3;
    if (props.small) fontSize = 1;

    return themeGet(`fontSizes.${fontSize}`)(props);
  }};

  padding: ${getSpace((props) =>
      props.large ? "s" : props.small ? "xxs" : "xs"
    )}
    ${getSpace((props) => (props.large ? "r" : props.small ? "s" : "between"))};

  svg {
    margin-right: ${getSpace((props) =>
      !props.iconLeft ? "" : props.small ? "xs" : "s"
    )};
    margin-left: ${getSpace((props) =>
      !props.iconRight ? "" : props.small ? "xs" : "s"
    )};
  }
  &:hover {
    background: ${themeGet(VARIANT_COLORS.default.hovered.background)};
    border-color: ${themeGet("colors.primaryDark")};
    border-width: ${themeGet("borderWidths.1")};
    border-style: solid;
  }
  &:focus {
    outline: 0;
    box-shadow: ${themeGet("shadows.thinOutline")}
      ${themeGet("colors.primaryDarker")};
  }

  ${getVariantStyle}
  ${compose(space, layout, color, border)}
`;

const attrs = (props) => ({
  "data-testid": props.dataTestId || props["data-testid"],
  disabled: props.disabled || props.variant == "disabled",
  className: `${props.className || ""} variant-${props.variant || "default"}`
});

const StyledButton = styled("button")
  .withConfig({ shouldForwardProp })
  .attrs(attrs)`
    ${buttonStyles}
  `;

const linkStyles = css`
  width: ${(props) => props.width || "fit-content"};
  display: ${(props) =>
    props.height || props.width ? "flex" : props.display || "inline-block"};
  align-items: ${(props) => props.alignItems || "center"};
`;

const StyledButtonLink = styled.a
  .withConfig({ shouldForwardProp })
  .attrs(attrs)`
    ${buttonStyles}
    ${linkStyles}
  `;

const StyledReactButtonLink = styled(Link)
  .withConfig({ shouldForwardProp })
  .attrs(attrs)`
    ${buttonStyles}
    ${linkStyles}
  `;

const buttonPropTypes = {
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

const renderButton = (ButtonComponent, props) => (
  <ButtonComponent
    borderStyle="solid"
    {...props.ButtonStyles}
    {...props}
    ref={props.ref}
  >
    {props.leftIcon && (
      <Icon icon={props.leftIcon} mr={props.small ? "xxs" : "xs"} />
    )}
    {props.children}
    {props.rightIcon && (
      <Icon icon={props.rightIcon} ml={props.small ? "xxs" : "xs"} />
    )}
    {props.isLoading && <Loading inverted ml="s" />}
  </ButtonComponent>
);

export const ButtonLink = React.forwardRef((props, ref) => {
  const { theme } = props;

  const component = renderButton(
    props.to ? StyledReactButtonLink : StyledButtonLink,
    { ...omit(props, "isLoading"), ref }
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
});

ButtonLink.propTypes = {
  ...buttonPropTypes,
  target: PropTypes.string,
  /** Link to navigate user to */
  href: PropTypes.string
};

ButtonLink.defaultProps = {
  variant: "default"
};

export const Button = React.forwardRef((props, ref) => {
  const { theme } = props;

  const component = renderButton(StyledButton, { ...props, ref });

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
});

export default Button;

Button.propTypes = {
  ...buttonPropTypes,
  /** Function to run when the `Button` is clicked */
  onClick: PropTypes.func
};

Button.defaultProps = {
  variant: "default"
};
