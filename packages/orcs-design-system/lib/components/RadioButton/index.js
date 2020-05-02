import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { rgba } from "polished";
import colours from "../../colours";
import variables from "../../variables";

const Item = styled.div`
  display: block;
  transform: translateZ(0);
  color: ${props =>
    props.colour === "white" ? colours.white : colours.greyDarkest};
`;

const getBorderRadius = props => {
  if (props.side === "right") {
    return "0 6px 6px 0";
  }
  if (props.side === "left") {
    return "6px 0 0 6px";
  }
  return "0";
};

const Label = styled.label`
  ${props =>
    props.asButton
      ? css`
          height: 33px;
          border-radius: ${getBorderRadius};
          border-right: ${props =>
            props.side === "right"
              ? `2px solid ${colours["greyDarker"]}`
              : "none"};
          border-top: ${`2px solid ${colours["greyDarker"]}`};
          border-bottom: ${`2px solid ${colours["greyDarker"]}`};
          border-left: ${`2px solid ${colours["greyDarker"]}`};
          display: flex;
          align-items: center;
          margin-top: ${themeGet("space.3")};
          margin-bottom: ${themeGet("space.3")};
          transition: ${themeGet("transition.transitionDefault")};
          font-weight: ${themeGet("fontWeights.1")};
          font-size: ${themeGet("fontSizes.1")};
          padding: 0 ${themeGet("space.3")};
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          box-shadow: none;
          text-decoration: none;
          cursor: ${props => (props.checked ? "default" : "pointer")};
          background-color: ${props =>
            props.checked ? colours["white"] : "#5e686d"};
          color: ${props =>
            props.checked ? colours["greyDarker"] : colours["white"]};
          &:hover {
            background-color: ${props =>
              props.checked ? colours["white"] : colours["primary"]};
          }
        `
      : css`
          display: flex;
          cursor: ${props => (props.disabled ? "default" : "pointer")};
        `};
  align-items: center;
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

  ${props =>
    props.asButton
      ? css`
          :checked {
            + div {
              background-color: ${colours["white"]};
            }
            &:before {
              background-color: ${colours["greyLight"]};
            }
          }
        `
      : css`
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
        `}
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
  onChange,
  asButton,
  side
}) {
  return (
    <Item colour={colour}>
      <Label
        disabled={disabled}
        asButton={asButton}
        checked={checked}
        side={side}
      >
        <Control
          name={name}
          value={value}
          colour={colour}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          asButton={asButton}
        />
        {!asButton && (
          <Circle colour={colour}>
            <Check />
          </Circle>
        )}
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
  onChange: PropTypes.func,
  /** render radio button as button */
  asButton: PropTypes.bool
};
