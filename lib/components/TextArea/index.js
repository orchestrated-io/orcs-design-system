import React from "react";
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
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
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

/**
 * The TextArea component should be used wherever a multi line form entry is required. Some examples of this could be enquiries, descriptions, summaries, questions etc.
 *
 * Examples include three validation states: default, invalid, valid.
 *
 * Ensure to use a unique id for each text area.
 *
 * Specify size using `cols` and `rows` like shown in the example. adding `fullWidth` prop will override the cols value and make the text input 100% width of parent container.
 */

export default function TextArea({ ...props }) {
  const { inverted, id, label, invalid, valid, fullWidth, mandatory } = props;
  const InputForward = React.forwardRef((props, ref) => (
    <Input ref={ref} {...props} />
  ));
  const ref = React.createRef();
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
      <InputForward ref={ref} {...props} />
    </Group>
  );
}

TextArea.propTypes = {
  /** Must be used to specify a unique ID. */
  id: PropTypes.string,
  /** Specifies the text for the TextArea label. */
  label: PropTypes.string,
  /** Makes text box take up full width of parent */
  fullWidth: PropTypes.bool,
  /** Applies invalid styles (coloured with "warning" colour from design system) */
  invalid: PropTypes.bool,
  /** Applies valid styles (coloured with "success" colour from design system) */
  valid: PropTypes.bool,
  /** Shows asterisk to denote a mandatory field */
  mandatory: PropTypes.bool,
  /** Set inverted styling for dark backgrounds */
  inverted: PropTypes.bool
};
