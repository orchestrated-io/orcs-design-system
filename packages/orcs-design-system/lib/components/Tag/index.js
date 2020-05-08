import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import colours from "../../colours";
import variables from "../../variables";
import { rgba, darken } from "polished";
import systemtheme from "../../systemtheme";
import { space, layout } from "styled-system";

const TagWrapper = styled.button`
  ${space}
  ${layout}
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: block;
  border-radius: 13px;
  font-size: 1.4rem;
  font-weight: 600;
  margin: 3px;
  white-space: nowrap;
  position: relative;
  transition: ${variables.defaultTransition};
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  border: solid 1px
    ${props => (props.disabled ? colours.greyDark : colours.primary)};
  padding: ${props =>
    props.hideCross
      ? "3px 12px 4px 12px;"
      : props.selected
      ? "3px 25px 4px 12px;"
      : "3px 12px 4px 12px;"};

  background: ${props =>
    props.selected
      ? colours.primary
      : props.disabled
      ? colours.greyDark
      : colours.white};

  color: ${props =>
    props.selected
      ? colours.white
      : props.disabled
      ? colours.white
      : colours.primary};

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
            font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 1.8rem;
            font-weight: 600;
            transform-origin: 50% 50%;
            color: ${colours.white};
            transition: ${variables.defaultTransition};
            opacity: ${props => (props.selected ? 1 : 0)};
            transform: ${props =>
              props.selected
                ? "rotate(45deg) scale(1)"
                : "rotate(45deg) scale(0)"};
          }
        `}
`;

/**
 * The top two rows are an example of how tags should be used when they are selectable/unselectable. There is the option to display the cross icon or not.
 *
 * The bottom row is when you want to show tags that aren't editable.
 */

export default function Tag({
  selected,
  disabled,
  hideCross,
  theme,
  ...props
}) {
  return (
    <ThemeProvider theme={theme}>
      <TagWrapper
        selected={selected}
        disabled={disabled}
        hideCross={hideCross}
        {...props}
      />
    </ThemeProvider>
  );
}

Tag.propTypes = {
  /** Adds selected styling to tag */
  selected: PropTypes.bool,
  /** Adds disabled attribute and styling to tag */
  disabled: PropTypes.bool,
  /** Hides the cross icon */
  hideCross: PropTypes.bool,
  /** Specifies the design theme */
  theme: PropTypes.object
};

Tag.defaultProps = {
  selected: true,
  disabled: false,
  hideCross: false,
  theme: systemtheme
};
