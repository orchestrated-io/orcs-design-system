import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes, ThemeProvider } from "styled-components";
import colours from "../../colours";
import variables from "../../variables";
import { rgba } from "polished";
import { space, layout } from "styled-system";
import systemtheme from "../../systemtheme";

/* Animations */
const radioOn = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const radioOff = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const Item = styled.div`
  ${space}
  ${layout}
  display: block;
  color: ${props =>
    props.colour === "white" ? colours.white : colours.greyDarkest};
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? "0.5" : "1")};
`;

const Control = styled.input.attrs({
  type: "radio"
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
      border-radius: 10px;
      box-shadow: 0 0 0 3px
        ${props =>
          props.colour && colours[props.colour]
            ? rgba(colours[props.colour], 0.4)
            : rgba(colours.greyDarker, 0.4)};
    }
  }

  /* Targeting circle */
  + div {
    transition: ${variables.defaultTransition};
    > div {
      color: ${props =>
        props.colour && colours[props.colour]
          ? colours[props.colour]
          : colours.greyDarker};
    }
  }

  :checked {
    + div > div {
      animation: ${radioOn} 300ms forwards ease-out;
    }
  }

  + div > div {
    animation: ${radioOff} 300ms forwards ease-out;
  }
`;

const Circle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: solid 2px
    ${props =>
      props.colour && colours[props.colour]
        ? colours[props.colour]
        : colours.greyDarker};
`;

const Dot = styled.div`
  position: absolute;
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 8px;
  transform: scale(0);
  background-color: ${props =>
    props.colour && colours[props.colour]
      ? colours[props.colour]
      : colours.greyDarker};
`;

const Text = styled.div`
  padding-left: 6px;
`;

/**
 * The default radio button (or inverted if on dark background) should be used for the majority of the UI; however, the coloured ones should be used sparingly if required to indicate a particular state or meaning, e.g. If you had two radio buttons for upvote or downvote they could be coloured green and red.
 */

export default function RadioButton({
  name,
  value,
  label,
  colour,
  disabled,
  checked,
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
            value={value}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
          />
          <Circle colour={colour}>
            <Dot colour={colour} />
          </Circle>
          <Text>{label}</Text>
        </Label>
      </Item>
    </ThemeProvider>
  );
}

RadioButton.propTypes = {
  /** Sets a name to define the radio button group */
  name: PropTypes.string,
  /** Sets the value of the radio button */
  value: PropTypes.string,
  /** Sets the label of the radio button */
  label: PropTypes.string,
  /** Sets radio button colour. Default is greyDarker. Use white for inverted styling */
  colour: PropTypes.oneOf(["success", "warning", "danger", "primary", "white"]),
  /** Applies disabled attribute and styling */
  disabled: PropTypes.bool,
  /** Applies checked attribute and styling */
  checked: PropTypes.bool,
  /** Function to call when checked */
  onChange: PropTypes.func,
  /** Specifies the system design theme */
  theme: PropTypes.object
};

RadioButton.defaultProps = {
  theme: systemtheme
};
