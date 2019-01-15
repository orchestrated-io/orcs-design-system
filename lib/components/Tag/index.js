import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import theme from "../../theme";
import variables from "../../variables";

const Tag = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  display: block;
  border-radius: 13px;
  font-size: 1.4rem;
  margin: 3px;
  white-space: nowrap;
  position: relative;
  transition: ${variables.defaultTransition};
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  border: solid 1px
    ${props => (props.disabled ? theme.greyDark : theme.primary)};
  padding: ${props =>
    props.hideCross ? "3px 12px 3px 12px;" : props.selected ? "3px 25px 3px 12px;" : "3px 12px 3px 12px;"};

  background: ${props =>
    props.selected
      ? theme.primary
      : props.disabled ? theme.greyDark : theme.white};

  color: ${props =>
    props.selected
      ? theme.white
      : props.disabled ? theme.white : theme.primary};

  ${props =>
    props.disabled
      ? css``
      : css`
          &:hover {
            border: solid 1px ${theme.primary.darken(0.2)};
            color: ${props =>
              props.selected ? theme.white : theme.primary.darken(0.3)};
            background: ${props =>
              props.selected ? theme.primary.darken(0.2) : theme.white};
          }
        `} &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px ${theme.primary.fade(0.6)};
  }

  ${props =>
    props.hideCross
      ? css``
      : css`
        &::after {
          content: "+";
          display: block;
          position: absolute;
          right: 8px;
          top: 2px;
          transform-origin: 50% 50%;
          color: ${theme.white};
          transition: ${variables.defaultTransition};
          opacity: ${props => (props.selected ? 1 : 0)};
          transform: ${props =>
            props.selected ? "rotate(45deg) scale(1)" : "rotate(45deg) scale(0)"};
        }
      `
  }

`;

Tag.propTypes = {
  /** Adds selected styling to tag */
  selected: PropTypes.bool,
  /** Adds disabled attribute and styling to tag */
  disabled: PropTypes.bool,
  /** Hides the cross icon */
  hideCross: PropTypes.bool
};

/** @component */
export default Tag;
