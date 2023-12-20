import React from "react";
import PropTypes from "prop-types";
import styled, { css, ThemeProvider } from "styled-components";
import { space, layout } from "styled-system";
import { themeGet } from "@styled-system/theme-get";

const Group = styled.div`
  ${space}
  ${layout}
  display: flex;
  align-items: center;
  ${(props) =>
    props.inverted
      ? css`
          input {
            &:focus {
              + label {
                box-shadow: ${themeGet("shadows.thickOutline")(props) +
                " " +
                themeGet("colors.black")(props)};
              }
            }
          }
          label {
            &:first-of-type {
              background: ${themeGet("colors.greyDark")(props)};
            }
          }
        `
      : css``};
`;

const Input = styled.input.attrs({
  type: "checkbox"
})`
  opacity: 0;
  position: absolute;
  visibility: ${(props) => (props.srHide ? "hidden" : "visible")};
  margin: 0;
  z-index: -1;
  width: 0;
  height: 0;
  /* overflow: hidden; */
  pointer-events: none;
  &:focus {
    + label {
      box-shadow: ${(props) =>
        themeGet("shadows.thickOutline")(props) +
        " " +
        themeGet("colors.black20")(props)};
    }
  }

  :checked {
    + label {
      background: ${(props) => themeGet("colors.success")(props)};
      &:after {
        left: calc(100% - 3px);
        transform: translateX(-100%);
      }
    }
    &:focus {
      + label {
        box-shadow: ${(props) =>
          themeGet("shadows.thinOutline")(props) +
          " " +
          themeGet("colors.success30")(props)};
      }
    }
  }
`;

const Item = styled.label`
  cursor: pointer;
  flex: 0 0 auto;
  margin: 0;
  display: block;
  position: relative;
  transition: ${(props) => themeGet("transition.transitionDefault")(props)};
  background: ${(props) => themeGet("colors.greyDarker")(props)};
  width: ${(props) => (props.small ? "36px" : "44px")};
  height: ${(props) => (props.small ? "20px" : "24px")};
  border-radius: ${(props) => (props.small ? "10px" : "12px")};

  &:after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    background: ${(props) => themeGet("colors.white")(props)};
    transition: ${(props) => themeGet("transition.transitionDefault")(props)};
    width: ${(props) => (props.small ? "14px" : "18px")};
    height: ${(props) => (props.small ? "14px" : "18px")};
    border-radius: ${(props) => (props.small ? "7px" : "9px")};
  }

  :active {
    &:after {
      width: ${(props) => (props.small ? "20px" : "24px")};
    }
  }
  ${(props) =>
    props.disabled
      ? css`
          opacity: 0.5;
        `
      : css``};
`;

const Label = styled.label`
  margin: 0;
  padding-left: 8px;
  cursor: pointer;
  font-size: ${(props) =>
    props.small
      ? themeGet("fontSizes.1")(props)
      : themeGet("fontSizes.2")(props)};
  color: ${(props) =>
    props.disabled
      ? themeGet("colors.grey")(props)
      : props.inverted
      ? themeGet("colors.white")(props)
      : themeGet("colors.greyDarkest")(props)};
`;

/**
 * `Toggle` should be used for when functionality is required to turn something off/on, hide/show or disable/enable. Default is off (left/grey), this works like a checkbox, so clicking or applying a checked attribute with javascript will turn it on (right/green).
 *
 * As a general rule, the small version should be used in any layout components like `Header`, `Sidebar`, `MobileNav`; whereas the larger one can be used within the page content when required.
 */

export default function Toggle({
  inverted,
  id,
  small,
  theme,
  label,
  checked,
  disabled,
  srHide,
  ...props
}) {
  const component = (
    <Group inverted={inverted}>
      <Input
        id={id}
        checked={checked}
        disabled={disabled}
        srHide={srHide}
        {...props}
      />
      <Item htmlFor={id} small={small} disabled={disabled} />
      <Label inverted={inverted} disabled={disabled} htmlFor={id} small={small}>
        {label}
      </Label>
    </Group>
  );
  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}

Toggle.propTypes = {
  /** Must be used to specify a unique ID. */
  id: PropTypes.string,
  /** Specifies the text for the label. */
  label: PropTypes.string,
  /** Specifies whether the `checkbox` for Toggle is on or not. */
  checked: PropTypes.bool,
  /** Changes appearance to suit a dark background. */
  inverted: PropTypes.bool,
  /** Applies disabled attribute and styles */
  disabled: PropTypes.bool,
  /** Makes toggle and label smaller. */
  small: PropTypes.bool,
  /** Hides toggle from screen-reader. Only to be used when toggle alters visual presentation, not functional. */
  srHide: PropTypes.bool,
  /** Specifies the theme for component design */
  theme: PropTypes.object
};

Toggle.defaultProps = {
  inverted: false,
  small: false
};
