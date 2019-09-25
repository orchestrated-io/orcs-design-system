import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import colours from "../../colours";
import variables from "../../variables";
import { rgba, darken } from "polished";

const Tag = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: block;
  border-radius: 13px;
  font-size: 1.4rem;
  margin: 3px;
  white-space: nowrap;
  position: relative;
  transition: ${variables.defaultTransition};
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  border: solid 1px
    ${props => (props.disabled ? colours.greyDark : colours.primary)};
  padding: ${props =>
    props.hideCross ? "3px 12px 4px 12px;" : props.selected ? "3px 25px 4px 12px;" : "3px 12px 4px 12px;"};

  background: ${props =>
    props.selected
      ? colours.primary
      : props.disabled ? colours.greyDark : colours.white};

  color: ${props =>
    props.selected
      ? colours.white
      : props.disabled ? colours.white : colours.primary};

  ${props =>
    props.disabled
      ? css``
      : css`
          &:hover {
            border: solid 1px ${darken(0.1, colours.primary)};
            color: ${props =>
              props.selected ? colours.white : darken(0.2, colours.primary)};
            background: ${props =>
              props.selected ? darken(0.11, colours.primary) : colours.white};
          }
        `} &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px ${rgba(colours.primary, 0.4)};
  }

  ${props =>
    props.hideCross
      ? css``
      : css`
        &::after {
          content: "+";
          display: block;
          position: absolute;
          right: 7px;
          top: 1px;
          font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 1.8rem;
          font-weight: 600;
          transform-origin: 50% 50%;
          color: ${colours.white};
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
