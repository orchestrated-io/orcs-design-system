import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import theme from "../../theme";
import variables from "../../variables";

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
  font-size: 1.4rem;
  z-index: 1;
  border-radius: ${variables.borderRadius};
  transition: ${variables.defaultTransition};
  background: ${theme.white};
  color: ${theme.greyDarkest};
  width: ${props => (props.fullWidth ? `100%` : `auto`)};
  padding: 12px;
  border: 1px solid
    ${props =>
      props.invalid
        ? theme.dangerLight
        : props.valid
        ? theme.successLight
        : theme.black.fade(0.8)};
  &:hover {
    border: 1px solid
      ${props =>
        props.invalid
          ? theme.dangerDark
          : props.valid
          ? theme.successDark
          : theme.primary};
  }

  &:focus {
    outline: 0;

    box-shadow: 0 0 0 3px
      ${props =>
        props.invalid
          ? theme.danger.fade(0.6)
          : props.valid
          ? theme.success.fade(0.6)
          : theme.primary.fade(0.6)};

    border: 1px solid
      ${props =>
        props.invalid
          ? theme.dangerDark
          : props.valid
          ? theme.successDark
          : theme.primary};
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
      ? theme.white
      : props.valid
      ? theme.successDark
      : props.invalid
      ? theme.dangerDark
      : theme.greyDarkest};

  ${props =>
    props.mandatory
      ? css`
          &:after {
            content: " *";
            color: ${theme.danger};
          }
        `
      : css``};
`;

class TextArea extends React.Component {
  render() {
    const {
      inverted,
      id,
      label,
      invalid,
      valid,
      fullWidth,
      mandatory
    } = this.props;
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
        <Input {...this.props} />
      </Group>
    );
  }
}

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
