import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colours from "../../colours";
import variables from "../../variables";
import { rgba } from "polished";

const Item = styled.div`
  display: block;
  transform: translateZ(0);
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
    &:before {
      background-color: ${props =>
        props.colour && colours[props.colour]
          ? colours[props.colour]
          : colours.greyDarker};
    }
    > div {
      color: ${props =>
        props.colour && colours[props.colour]
          ? colours[props.colour]
          : colours.greyDarker};
    }
  }

  :not(:checked) + div:before {
    animation: rippleOff 700ms forwards ease-out;
  }

  :checked + div:before {
    animation: rippleOn 700ms forwards ease-out;
  }

  /* Targeting Check */
  :focus + div div:after {
    opacity: 0.2;
  }

  :checked {
    + div div:before {
      box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px,
        0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;
      animation: checkboxOn 300ms forwards ease-out;
    }
    + div div:after {
      animation: rippleOn 700ms forwards ease-out;
    }
  }

  :not(:checked) + div div:after {
    animation: rippleOff 700ms forwards ease-out;
  }

  + div div:before {
    animation: checkboxOff 300ms forwards ease-out;
  }
`;

const Circle = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 10px;

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
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Check = styled.div`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid;
  overflow: hidden;
  z-index: 1;
  color: ${colours.greyDarker};

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
 * The default radio button (or inverted if on dark background) should be used for the majority of the UI; however, the coloured ones should be used sparingly if required to indicate a particular state or meaning, e.g. If you had two radio buttons for upvote or downvote they could be coloured green and red.
 */

export default function RadioButton({
  name,
  value,
  label,
  colour,
  disabled,
  checked,
  onChange
}) {
  return (
    <Item colour={colour}>
      <Label disabled={disabled}>
        <Control
          name={name}
          value={value}
          colour={colour}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
        />
        <Circle colour={colour}>
          <Check />
        </Circle>
        <Text>{label}</Text>
      </Label>
    </Item>
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
  onChange: PropTypes.func
};
