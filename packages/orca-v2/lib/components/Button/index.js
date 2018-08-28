import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import theme from "../../theme";
import variables from "../../variables";

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
      ? theme.primary
      : props.disabled ? theme.greyLight : theme.white};

  border: solid 1px
    ${props =>
      props.disabled
        ? theme.greyLighter.darken(0.05)
        : props.secondary
          ? theme.success.darken(0.05)
          : props.ghost ? "transparent" : theme.primary.darken(0.05)};

  background: ${props =>
    props.disabled
      ? theme.greyLighter
      : props.secondary
        ? theme.success
        : props.ghost ? "transparent" : theme.primary};

  padding: ${props =>
    props.large ? "14px 24px" : props.small ? "6px 8px" : "10px 16px"};

  &:hover {
    border: solid 1px
      ${props =>
        props.disabled
          ? theme.greyLighter.darken(0.05)
          : props.secondary
            ? theme.success.darken(0.2)
            : props.ghost ? "transparent" : theme.primary.darken(0.2)};

    background: ${props =>
      props.disabled
        ? theme.greyLighter
        : props.secondary
          ? theme.success.darken(0.15)
          : props.ghost
            ? theme.primary.fade(0.85)
            : theme.primary.darken(0.15)};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px
      ${props =>
        props.secondary ? theme.success.fade(0.6) : theme.primary.fade(0.6)};
  }

  ${props =>
    props.iconLeft
      ? css`
          svg {
            margin-right: ${variables.defaultSpacingHalf};
          }
        `
      : props.iconRight
        ? css`
            svg {
              margin-left: ${variables.defaultSpacingHalf};
            }
          `
        : css``} ${props =>
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
  /** Secondary button */
  secondary: PropTypes.bool,
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
  isLoading: PropTypes.bool
};

/** @component */
export default Button;
