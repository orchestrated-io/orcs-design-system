import React from "react";
import PropTypes from "prop-types";
import styled, { css, ThemeProvider } from "styled-components";
import colours from "../../colours";
import variables from "../../variables";
import { rgba } from "polished";
import systemtheme from "../../systemtheme";
import { space, layout } from "styled-system";

const Group = styled.div`
  ${space}
  ${layout}
  display: flex;
  align-items: center;
  ${props =>
    props.inverted
      ? css`
          input {
            &:focus {
              + label {
                box-shadow: 0 0 0 3px ${rgba(colours.greyDark, 0.4)};
              }
            }
          }
          label {
            color: ${colours.white};
            &:first-of-type {
              background: ${colours.greyDark};
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
  margin: 0;
  z-index: -1;
  width: 0;
  height: 0;
  /* overflow: hidden; */
  pointer-events: none;

  &:focus {
    + label {
      box-shadow: 0 0 0 3px ${rgba(colours.greyDarker, 0.2)};
    }
  }

  :checked {
    + label {
      background: ${colours.success};
      &:after {
        left: calc(100% - 3px);
        transform: translateX(-100%);
      }
    }
    &:focus {
      + label {
        box-shadow: 0 0 0 3px ${rgba(colours.success, 0.3)};
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
  transition: ${variables.defaultTransition};
  background: ${colours.greyDarker};
  width: ${props => (props.small ? "36px" : "44px")};
  height: ${props => (props.small ? "20px" : "24px")};
  border-radius: ${props => (props.small ? "10px" : "12px")};

  &:after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    background: ${colours.white};
    transition: ${variables.defaultTransition};
    width: ${props => (props.small ? "14px" : "18px")};
    height: ${props => (props.small ? "14px" : "18px")};
    border-radius: ${props => (props.small ? "7px" : "9px")};
  }

  :active {
    &:after {
      width: ${props => (props.small ? "20px" : "24px")};
    }
  }
`;

const Label = styled.label`
  margin: 0;
  padding-left: 8px;
  cursor: pointer;
  font-size: ${props => (props.small ? "1.4rem" : "1.6rem")};
`;

/**
 * `Toggle` should be used for when functionality is required to turn something off/on, hide/show or disable/enable. Default is off (left/grey), this works like a checkbox, so clicking or applying a checked attribute with javascript will turn it on (right/green).
 *
 * As a general rule, the small version should be used in any layout components like `Header`, `Sidebar`, `MobileNav`; whereas the larger one can be used within the page content when required.
 */

export default function Toggle({ ...props }) {
  const { inverted, small, id, label, theme } = props;
  return (
    <ThemeProvider theme={theme}>
      <Group inverted={inverted} {...props}>
        <Input {...props} />
        <Item htmlFor={id} small={small} />
        <Label htmlFor={id} small={small}>
          {label}
        </Label>
      </Group>
    </ThemeProvider>
  );
}

Toggle.propTypes = {
  /** Must be used to specify a unique ID. */
  id: PropTypes.string,
  /** Specifies the text for the label. */
  label: PropTypes.string,
  /** Changes appearance to suit a dark background. */
  inverted: PropTypes.bool,
  /** Makes toggle and label smaller. */
  small: PropTypes.bool,
  /** Specifies the theme for component design */
  theme: PropTypes.object
};

Toggle.defaultProps = {
  inverted: false,
  small: false,
  theme: systemtheme
};
