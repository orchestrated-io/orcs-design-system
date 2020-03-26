import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import colours from "../../colours";
import variables from "../../variables";
import { rgba, darken } from "polished";
import { space, layout } from "styled-system";
import * as systemtheme from "../../systemtheme";

const Item = styled.button`
  ${space}
  ${layout}
  display: flex;
  align-items: center;
  justify-content: center;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  text-decoration: none;
  text-align: center;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
  margin: ${systemtheme.space[3]}px;
  border-radius: ${variables.borderRadius};
  transition: ${variables.defaultTransition};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
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

  color: ${props =>
    props.ghost
      ? colours.primary
      : props.disabled
      ? colours.greyLight
      : colours.white};

  border: solid 1px
    ${props =>
      props.disabled
        ? colours.greyLighter
        : props.colour && colours[props.colour]
        ? colours[props.colour]
        : props.ghost
        ? "transparent"
        : colours.primary};

  background: ${props =>
    props.disabled
      ? colours.greyLighter
      : props.colour && colours[props.colour]
      ? colours[props.colour]
      : props.ghost
      ? rgba(colours.primary, 0.075)
      : colours.primary};

  padding: ${props =>
    props.large ? "14px 24px" : props.small ? "6px 8px" : "10px 16px"};

  &:hover {
    border: solid 1px
      ${props =>
        props.disabled
          ? darken(0.05, colours.greyLighter)
          : props.colour && colours[props.colour]
          ? darken(0.1, colours[props.colour])
          : props.ghost
          ? "transparent"
          : darken(0.1, colours.primary)};

    background: ${props =>
      props.disabled
        ? colours.greyLighter
        : props.colour && colours[props.colour]
        ? darken(0.1, colours[props.colour])
        : props.ghost
        ? rgba(colours.primary, 0.2)
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

/**
 * Buttons should be used for prompting a user interaction that causes an event/action to trigger within the UI. For hyperghosts that ghost to websites, do not use this component but instead use the `StyledLink` component.
 *
 * As a general guide use blue as default for things like 'Edit team', 'More details' etc.
 *
 * Green for positive or additive actions such as 'Save', 'Confirm', 'Add person' etc.
 *
 * Red for irreversible things like 'Delete' or 'Remove'.
 *
 * Ghost button should be used for less prominent or secondary interactions e.g. 'Cancel', 'Exit', 'Back' etc.
 *
 * Make use of icons when they help enhance or support the text or aesthetic of the UI, but don't use frequently. Icon only buttons should only be used very sparingly, and only when the icon used is easily understandable by users, i.e. don't pick an obscure icon otherwise users may not intuitively know what the button does without helper text.
 */
export default function Button({
  large,
  small,
  ghost,
  fullWidth,
  disabled,
  isLoading,
  iconLeft,
  iconRight,
  iconOnly,
  colour,
  children,
  ...props
}) {
  return (
    <Item
      large={large}
      small={small}
      ghost={ghost}
      fullWidth={fullWidth}
      disabled={disabled}
      isLoading={isLoading}
      iconLeft={iconLeft}
      iconRight={iconRight}
      iconOnly={iconOnly}
      colour={colour}
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
  colour: PropTypes.oneOf(["successDark", "danger"]),
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
