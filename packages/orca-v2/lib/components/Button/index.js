import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import colours from "../../colours";
import variables from "../../variables";
import { rgba, darken } from "polished";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  text-decoration: none;
  text-align: center;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

Button.propTypes = {
  /** Large button */
  large: PropTypes.bool,
  /** Small button */
  small: PropTypes.bool,
  /** ghost style button*/
  ghost: PropTypes.bool,
  /** Full width button that takes up all available space of parent */
  fullWidth: PropTypes.bool,
  /** Adds disabled attribute and styling to button */
  disabled: PropTypes.bool,
  /** Adds loading spinner */
  isLoading: PropTypes.bool,
  /** Styles button to fit an icon on the left of text */
  iconLeft: PropTypes.bool,
  /** Styles button to fit an icon on the right of text */
  iconRight: PropTypes.bool,
  /** Styles button to suit having only an icon */
  iconOnly: PropTypes.bool,
  /** Specifies alternate button colour */
  colour: PropTypes.oneOf(["successDark", "danger"])
};

/** @component */
export default Button;
