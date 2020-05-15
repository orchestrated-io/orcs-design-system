import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
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
    ${props =>
      props.disabled
        ? systemtheme.colors.greyDark
        : systemtheme.colors.primary};
  padding: ${props =>
    props.hideCross
      ? "3px 12px 4px 12px;"
      : props.selected
      ? "3px 25px 4px 12px;"
      : "3px 12px 4px 12px;"};

  background: ${props =>
    props.selected
      ? systemtheme.colors.primary
      : props.disabled
      ? systemtheme.colors.greyDark
      : systemtheme.colors.white};

  color: ${props =>
    props.selected
      ? systemtheme.colors.white
      : props.disabled
      ? systemtheme.colors.white
      : systemtheme.colors.primary};

  ${props =>
    props.disabled
      ? css``
      : css`
          &:hover {
            border: solid 1px ${darken(0.1, systemtheme.colors.primary)};
            color: ${props =>
              props.selected
                ? systemtheme.colors.white
                : darken(0.2, systemtheme.colors.primary)};
            background: ${props =>
              props.selected
                ? darken(0.11, systemtheme.colors.primary)
                : systemtheme.colors.white};
          }
        `} &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px ${rgba(systemtheme.colors.primary, 0.4)};
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
            color: ${systemtheme.colors.white};
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
  selected: false,
  disabled: false,
  hideCross: false,
  theme: systemtheme
};
