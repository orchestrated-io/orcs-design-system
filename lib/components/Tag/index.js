import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import systemtheme from "../../systemtheme";
import { space, layout } from "styled-system";
import { themeGet } from "@styled-system/theme-get";

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
  transition: ${themeGet("transition.transitionDefault")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  border: solid 1px
    ${(props) =>
      props.disabled
        ? themeGet("colors.greyDark")
        : themeGet("colors.primary")};
  padding: ${(props) =>
    props.hideCross
      ? "3px 12px 4px 12px;"
      : props.selected
      ? "3px 25px 4px 12px;"
      : "3px 12px 4px 12px;"};

  background: ${(props) =>
    props.selected
      ? themeGet("colors.primary")
      : props.disabled
      ? themeGet("colors.greyDark")
      : themeGet("colors.white")};

  color: ${(props) =>
    props.selected
      ? themeGet("colors.white")
      : props.disabled
      ? themeGet("colors.white")
      : themeGet("colors.primary")};

  ${(props) =>
    props.disabled
      ? css``
      : css`
          &:hover {
            border: solid 1px ${themeGet("colors.primaryDark")};
            color: ${(props) =>
              props.selected
                ? themeGet("colors.white")
                : themeGet("colors.primaryDark")};
            background: ${(props) =>
              props.selected
                ? themeGet("colors.primaryDark")
                : themeGet("colors.white")};
          }
        `} &:focus {
    outline: 0;
    box-shadow: ${(props) =>
      themeGet("shadows.thinOutline")(props) +
      " " +
      themeGet("colors.primary30")(props)};
  }

  ${(props) =>
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
            color: ${themeGet("colors.white")};
            transition: ${themeGet("transition.transitionDefault")};
            opacity: ${(props) => (props.selected ? 1 : 0)};
            transform: ${(props) =>
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
