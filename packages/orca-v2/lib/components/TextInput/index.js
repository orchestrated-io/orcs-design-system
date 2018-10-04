import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import theme from "../../theme";
import variables from "../../variables";
import Icon from "../components/Icon"

const Group = styled.div`
  position: relative;
  width: ${props => (props.fullWidth ? `100%` : `auto`)};
`;

const IconWrapper = styled.label`
  svg {
    opacity: 0.4;
    position: absolute;
  }
  ${props => props.iconLeft && !props.floating ? css`
    svg {
      bottom: 12px;
      left: 12px;
    }
  `
  : props.iconLeft && props.floating ? css`
    svg {
      bottom: 22px;
      left: 12px;
    }
  `
  : props.iconRight && !props.floating ? css`
    svg {
      right: 12px;
      bottom: 12px;
    }
  `
  : props.iconRight && props.floating ? css`
    svg {
      right: 12px;
      bottom: 22px;
    }
  `
  : css``
  };
`

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
  height: ${props => (props.floating ? `60px` : `40px`)};
  padding: ${props => {
      let left = props.iconLeft ? 40 : 12;
      let right = props.iconRight ? 40 : 12;
      let top = props.floating ? 25 : 5;
      let bottom = 6;
      return `${top}px ${right}px ${bottom}px ${left}px`;
    }
  };
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
  padding-right: ${props =>
    props.floating && props.iconRight ? `40px` 
  : `12px`};
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
          padding-left: ${props => props.iconLeft ? "41px" : "13px"};
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
      mandatory,
      iconLeft,
      iconRight
    } = this.props;
    return (
      <Group fullWidth={fullWidth}>
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
          iconRight={iconRight}
          iconLeft={iconLeft}
          
          >
            {label}
          </Label>
        ) : null}
        {iconLeft ? (
          <div>
            <IconWrapper htmlFor={id} iconLeft={iconLeft} floating={floating}>
              <Icon icon={iconLeft} htmlFor={id} color="black" />
            </IconWrapper>
          </div>
        ) : null}
        {iconRight ? (
          <div>
            <IconWrapper htmlFor={id} iconRight={iconRight} floating={floating}>
              <Icon icon={iconRight} htmlFor={id} color="#black" />
            </IconWrapper>
          </div>
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
  mandatory: PropTypes.bool,
  /** Applies an icon to the left of the text box with specified name. */
  iconLeft: PropTypes.array,
  /** Applies an icon to the right of the text box with specified name. */
  iconRight: PropTypes.array
};

/** @component */
export default TextInput;
