import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import colours from "../../colours";
import variables from "../../variables";
import { rgba } from "polished";

const Group = styled.div`
  position: relative;
  width: ${props => (props.fullWidth ? `100%` : `auto`)};
`;

const Input = styled.textarea`
  display: block;
  cursor: text;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1.4rem;
  z-index: 1;
  border-radius: ${variables.borderRadius};
  transition: ${variables.defaultTransition};
  background: ${colours.white};
  color: ${colours.greyDarkest};
  width: ${props => (props.fullWidth ? `100%` : `auto`)};
  padding: 12px;
  border: 1px solid
    ${props =>
      props.invalid
        ? colours.dangerLight
        : props.valid
        ? colours.successLight
        : rgba(colours.black, 0.2)};
  &:hover {
    border: 1px solid
      ${props =>
        props.invalid
          ? colours.dangerDark
          : props.valid
          ? colours.successDark
          : colours.primary};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px
      ${props =>
        props.invalid
          ? rgba(colours.danger, 0.4)
          : props.valid
          ? rgba(colours.success, 0.4)
          : rgba(colours.primary, 0.4)};

    border: 1px solid
      ${props =>
        props.invalid
          ? colours.dangerDark
          : props.valid
          ? colours.successDark
          : colours.primary};
  }
`;

const Label = styled.label`
  display: block;
  z-index: 2;
  text-align: left;
  font-size: 1.4rem;
  transition: ${variables.defaultTransition};
  margin-bottom: ${props =>
    props.floating ? 0 : variables.defaultSpacingQuarter};

  color: ${props =>
    props.inverted
      ? colours.white
      : props.valid
      ? colours.successDark
      : props.invalid
      ? colours.dangerDark
      : colours.greyDarkest};

  ${props =>
    props.mandatory
      ? css`
          &:after {
            content: " *";
            color: ${colours.danger};
          }
        `
      : css``};
`;

const TextArea = forwardRef((props, ref) => {
  const { inverted, id, label, invalid, valid, fullWidth, mandatory } = props;
  return (
    <Group fullWidth={fullWidth}>
      <Label
        inverted={inverted}
        invalid={invalid}
        valid={valid}
        htmlFor={id}
        mandatory={mandatory}
      >
        {label}
      </Label>
      <Input ref={ref} {...props} />
    </Group>
  );
});

TextArea.propTypes = {
  /** Must be used to specify a unique ID. */
  id: PropTypes.string,
  /** Specifies the text for the label. */
  label: PropTypes.string,
  /** Makes text box take up full width of parent */
  fullWidth: PropTypes.bool,
  /** Applies invalid styles */
  invalid: PropTypes.bool,
  /** Applies valid styles */
  valid: PropTypes.bool,
  /** Shows asterisk to denote a mandatory field */
  mandatory: PropTypes.bool
};

/** @component */
export default TextArea;
