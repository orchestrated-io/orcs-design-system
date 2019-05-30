import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import colours from "../../colours";
import variables from "../../variables";
import { rgba } from "polished";

const Group = styled.div`
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
  overflow: hidden;
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

class Toggle extends React.Component {
  render() {
    const { inverted, id, label, small } = this.props;
    return (
      <Group inverted={inverted}>
        <Input {...this.props} />
        <Item htmlFor={id} small={small} />
        <Label htmlFor={id} small={small}>
          {label}
        </Label>
      </Group>
    );
  }
}

Toggle.propTypes = {
  /** Must be used to specify a unique ID. */
  id: PropTypes.string,
  /** Specifies the text for the label. */
  label: PropTypes.string,
  /** Changes appearance to suit a dark background. */
  inverted: PropTypes.bool,
  /** Makes toggle and label smaller. */
  small: PropTypes.bool
};

/** @component */
export default Toggle;
