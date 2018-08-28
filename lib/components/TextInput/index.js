import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import theme from "../../theme";
import variables from "../../variables";

const Group = styled.div`
  position: ${props => (props.floating ? `relative` : `static`)};
  width: ${props => (props.fullWidth ? `100%` : `auto`)};
`;

const Input = styled.input`
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
  padding: ${props =>
  props.floating ? `25px 12px 6px 12px` : `5px 12px 6px 12px`};
  height: ${props => (props.floating ? `60px` : `40px`)};

  border: 1px solid
    ${props =>
  props.invalid
    ? theme.dangerLight
    : props.valid ? theme.successLight : theme.black.fade(0.8)};

  ${props =>
  props.floating
    ? css`
          &::placeholder {
            color: transparent;
          }
          &:not(:placeholder-shown) {
            ~ label {
              transform: translateY(-10px);
              font-size: 1.2rem;
            }
          }
        `
    : css`
          &::placeholder {
            color: ${theme.grey};
          }
        `} &:hover {
    border: 1px solid
      ${props =>
  props.invalid
    ? theme.dangerDark
    : props.valid ? theme.successDark : theme.primary};
  }

  &:focus {
    outline: 0;

    box-shadow: 0 0 0 3px
      ${props =>
  props.invalid
    ? theme.danger.fade(0.6)
    : props.valid ? theme.success.fade(0.6) : theme.primary.fade(0.6)};

    border: 1px solid
      ${props =>
  props.invalid
    ? theme.dangerDark
    : props.valid ? theme.successDark : theme.primary};

    ${props =>
  props.floating
    ? css`
            &::placeholder {
              color: ${theme.greyLight};
            }
            ~ label {
              transform: translateY(-10px);
              font-size: 1.2rem;
              color: ${props =>
      props.invalid
        ? theme.dangerDark
        : props.valid ? theme.successDark : theme.primary};
            }
          `
    : css``};
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
    : props.invalid ? theme.dangerDark : theme.greyDarkest};

  ${props =>
  props.floating
    ? css`
          padding-left: 13px;
          cursor: text;
          position: absolute;
          top: 22px;
          color: ${props =>
      props.invalid
        ? theme.dangerDark
        : props.valid ? theme.successDark : theme.grey};
        `
    : css``};
      
      ${ props =>
  props.mandatory 
    ? css`
        &:after{ 
          content: " *";
          color : ${theme.danger}; 
        }
      `
    : css``};
  
 `;

class TextInput extends React.Component {
  render() {
    const {
      inverted,
      floating,
      id,
      label,
      invalid,
      valid,
      fullWidth,
      mandatory
    } = this.props;
    return (
      <Group floating={floating} fullWidth={fullWidth}>
        {label && !floating ? (
          <Label
            inverted={inverted}
            invalid={invalid}
            valid={valid}
            htmlFor={id}
            mandatory={mandatory}
          >
            {label}
          </Label>
        ) : null}
        <Input {...this.props} />
        {label && floating ? (
          <Label
            floating={floating}
            invalid={invalid}
            valid={valid}
            htmlFor={id}
            mandatory={mandatory}

          >
            {label}
          </Label>
        ) : null}
      </Group>
    );
  }
}

TextInput.propTypes = {
  /** Must be used to specify a unique ID. */
  id: PropTypes.string,
  /** Specifies the text for the label. */
  label: PropTypes.string,
  /** Specifies the helper/example text for the placeholder. */
  placeholder: PropTypes.string,
  /** Specifies the type of text input, e.g. text, email, password, number */
  type: PropTypes.string,
  /** Applies different styling for a floating animated label aesthetic */
  floating: PropTypes.bool,
  /** Makes text box take up full width of parent */
  fullWidth: PropTypes.bool,
  /** Applies invalid input styles */
  invalid: PropTypes.bool,
  /** Applies valid input styles */
  valid: PropTypes.bool ,
  /** Shows asterisk to denote a mandatory field */
  mandatory: PropTypes.bool
};

/** @component */
export default TextInput;
