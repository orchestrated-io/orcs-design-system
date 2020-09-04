import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { space, layout } from "styled-system";
import systemtheme from "../../systemtheme";
import { themeGet } from "@styled-system/theme-get";

/* Animations */
const checkboxOn = keyframes`
  0% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      15px 2px 0 11px;
  }
  50% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px 2px 0 11px;
  }
  100% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px;
  }
`;

const checkboxOff = keyframes`
  0% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px,
      0 0 0 0 inset;
  }
  25% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px,
      0 0 0 0 inset;
  }
  50% {
    transform: rotate(45deg);
    margin-top: -4px;
    margin-left: 6px;
    width: 0px;
    height: 0px;
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      15px 2px 0 11px,
      0 0 0 0 inset;
  }
  51% {
    transform: rotate(0deg);
    margin-top: -2px;
    margin-left: -2px;
    width: 20px;
    height: 20px;
    box-shadow:
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0px 0px 0 10px inset;
  }
  100% {
    transform: rotate(0deg);
    margin-top: -2px;
    margin-left: -2px;
    width: 20px;
    height: 20px;
    box-shadow:
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0px 0px 0 0px inset;
  }
`;

const rippleOn = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: scale(13,13);
  }
`;

const rippleOff = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: scale(13,13);
  }
`;

const Item = styled.div`
  ${space}
  ${layout}
  display: block;
  transform: translateZ(0);
  color: ${props =>
    props.colour === "white"
      ? themeGet("colors.white")
      : themeGet("colors.greyDarkest")};
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? "0.5" : "1")};
`;

const Control = styled.input.attrs({
  type: "checkbox"
})`
  opacity: 0;
  position: absolute;
  margin: 0;
  z-index: -1;
  width: 0;
  height: 0;
  overflow: hidden;
  pointer-events: none;

  &:focus {
    + div {
      border-radius: 2px;
      box-shadow: ${props =>
        props.colour
          ? themeGet("shadows.thinOutline")(props) +
            " " +
            themeGet("colors." + props.colour + "30")(props)
          : themeGet("shadows.thinOutline")(props) +
            " " +
            themeGet("colors.black30")};
    }
  }

  /* Targeting box */
  + div {
    transition: ${themeGet("transition.transitionDefault")};
    &:before {
      background-color: ${props =>
        props.colour
          ? themeGet("colors." + props.colour)
          : themeGet("colors.greyDarker")};
    }
    > div {
      color: ${props =>
        props.colour
          ? themeGet("colors." + props.colour)
          : themeGet("colors.greyDarker")};
    }
  }

  :not(:checked) + div:before {
    animation: ${rippleOff} 700ms forwards ease-out;
  }

  :checked + div:before {
    animation: ${rippleOn} 700ms forwards ease-out;
  }

  /* Targeting Check */
  :focus + div div:after {
    opacity: 0.2;
  }

  :checked {
    + div div:before {
      box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px,
        0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;
      animation: ${checkboxOn} 300ms forwards ease-out;
    }
    + div div:after {
      animation: ${rippleOn} 700ms forwards ease-out;
    }
  }

  :not(:checked) + div div:after {
    animation: ${rippleOff} 700ms forwards ease-out;
  }

  + div div:before {
    animation: ${checkboxOff} 300ms forwards ease-out;
  }
`;

const Box = styled.div`
  position: relative;
  height: 20px;
  width: 20px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 8px;
    top: 8px;
    height: 4px;
    width: 4px;
    border-radius: 100%;
    z-index: 1;
    opacity: 0;
    margin: 0;
    pointer-events: none;
    /*transform: scale3d(2.3, 2.3, 1);*/
    background-color: ${themeGet("colors.black50")};
  }
`;

const Check = styled.div`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid;
  border-radius: ${themeGet("radii.1")};
  overflow: hidden;
  z-index: 1;
  color: ${themeGet("colors.greyDarker")};

  :before {
    content: "";
    position: absolute;
    transform: rotate(45deg);
    display: block;
    margin-top: -4px;
    margin-left: 6px;
    width: 0;
    height: 0;
    box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0,
      0 0 0 0 inset;
    /*animation: checkboxOff 300ms forwards ease-out;*/
  }
`;

const Text = styled.div`
  padding-left: 8px;
`;
/**
 * The default checkbox (or inverted if on dark background) should be used for the majority of the UI; however, the coloured ones can be used in situations where the colour corresponds with some indication of status, e.g. in a task list, green could denote task completed, red could denote task overdue.
 */
export default function Checkbox({
  name,
  label,
  colour,
  disabled,
  checked,
  onClick,
  onChange,
  theme,
  ...props
}) {
  return (
    <ThemeProvider theme={theme}>
      <Item colour={colour} {...props}>
        <Label disabled={disabled}>
          <Control
            name={name}
            colour={colour}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
          />
          <Box colour={colour} onClick={onClick}>
            <Check />
          </Box>
          <Text>{label}</Text>
        </Label>
      </Item>
    </ThemeProvider>
  );
}

Checkbox.propTypes = {
  /** Sets the colour of the checkbox. Colours used are the design system standard colours. */
  colour: PropTypes.oneOf(["success", "warning", "danger", "primary", "white"]),
  /** Applies disabled attribute and styling */
  disabled: PropTypes.bool,
  /** Applies checked attribute and styling */
  checked: PropTypes.bool,
  /** Input name attribute (should be unique id) */
  name: PropTypes.string,
  /** On checkbox input change handler */
  onChange: PropTypes.func,
  /** On checkbox click handler */
  onClick: PropTypes.string,
  /** Text label to display beside the checkbox */
  label: PropTypes.string,
  /** Specifies the system design theme. */
  theme: PropTypes.object
};

Checkbox.defaultProps = {
  theme: systemtheme
};
