import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { space, layout, compose } from "styled-system";
import { css as sscss } from "@styled-system/css";
import {
  createShouldForwardProp,
  props
} from "@styled-system/should-forward-prop";
import Icon from "../Icon";
import { themeGet } from "@styled-system/theme-get";

const InputStyles = compose(space, layout);

const shouldForwardProp = createShouldForwardProp([
  ...props,
  "type",
  "placeholder",
  "defaultValue",
  "disabled",
  "maxLength",
  "pattern",
  "required",
  "autocomplete",
  "autofocus",
  "step",
  "readonly"
]);

const Group = styled("div").withConfig({ shouldForwardProp })(
  (props) =>
    sscss({
      position: "relative",
      width: props.fullWidth ? "100%" : "auto"
    }),
  InputStyles
);

const IconWrapper = styled.label`
  svg {
    opacity: 0.4;
    position: absolute;
  }
  ${(props) =>
    props.iconLeft && !props.floating
      ? css`
          svg {
            bottom: 12px;
            left: 12px;
          }
        `
      : props.iconLeft && props.floating
      ? css`
          svg {
            bottom: 22px;
            left: 12px;
          }
        `
      : props.iconRight && !props.floating
      ? css`
          svg {
            right: 12px;
            bottom: 12px;
          }
        `
      : props.iconRight && props.floating
      ? css`
          svg {
            right: 12px;
            bottom: 22px;
          }
        `
      : css``};
`;

const InputStyle = css`
  display: block;
  cursor: text;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  box-shadow: none;
  font-size: 1.4rem;
  z-index: 1;
  border-radius: ${themeGet("radii.2")};
  transition: ${themeGet("transition.transitionDefault")};
  background: ${themeGet("colors.white")};
  color: ${themeGet("colors.greyDarkest")};
  width: ${(props) => (props.fullWidth ? `100%` : `auto`)};
  height: ${(props) => (props.floating ? `58px` : `40px`)};
  padding: ${(props) => {
    let left = props.iconLeft ? 40 : 12;
    let right = props.iconRight ? 40 : 12;
    let top = props.floating ? 25 : 5;
    let bottom = 6;
    return `${top}px ${right}px ${bottom}px ${left}px`;
  }};
  border: 1px solid
    ${(props) =>
      props.invalid
        ? themeGet("colors.danger")
        : props.valid
        ? themeGet("colors.success")
        : themeGet("colors.black30")};

  ${(props) =>
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
          &:-ms-input-placeholder:not(:focus) {
            ~ label {
              transform: translateY(-10px);
              font-size: 1.2rem;
            }
          }
          &:not(:-ms-input-placeholder) {
            ~ label {
              transform: translateY(-10px);
              font-size: 1.2rem;
            }
          }
        `
      : css`
          &::placeholder {
            color: ${themeGet("colors.grey")};
          }
        `} &:hover {
    border: 1px solid
      ${(props) =>
        props.invalid
          ? themeGet("colors.dangerDark")
          : props.valid
          ? themeGet("colors.successDark")
          : themeGet("colors.primary")};
  }

  &:focus {
    outline: 0;
    box-shadow: ${(props) =>
      props.invalid
        ? themeGet("shadows.thinOutline")(props) +
          " " +
          themeGet("colors.danger30")(props)
        : props.valid
        ? themeGet("shadows.thinOutline")(props) +
          " " +
          themeGet("colors.success30")(props)
        : themeGet("shadows.thinOutline")(props) +
          " " +
          themeGet("colors.primary30")(props)};

    border: 1px solid
      ${(props) =>
        props.invalid
          ? themeGet("colors.dangerDark")
          : props.valid
          ? themeGet("colors.successDark")
          : themeGet("colors.primary")};

    ${(props) =>
      props.floating
        ? css`
            &::placeholder {
              color: ${themeGet("colors.greyLight")};
            }
            ~ label {
              transform: translateY(-10px);
              font-size: 1.2rem;
              color: ${(props) =>
                props.invalid
                  ? themeGet("colors.dangerDark")
                  : props.valid
                  ? themeGet("colors.successDark")
                  : themeGet("colors.primary")};
            }
          `
        : css``};
  }
`;

const Input = styled("input").attrs((props) => ({
  "data-testid": props["data-testid"] ? props["data-testid"] : null
}))`
  ${InputStyle}
`;

const NumberInput = styled(NumberFormat).attrs((props) => ({
  "data-testid": props["data-testid"] ? props["data-testid"] : null
}))`
  ${InputStyle}
`;

const Label = styled.label`
  display: block;
  z-index: 2;
  text-align: left;
  font-size: 1.4rem;
  transition: ${themeGet("transition.transitionDefault")};
  padding-right: ${(props) =>
    props.floating && props.iconRight ? `40px` : `12px`};
  margin-bottom: ${(props) => (props.floating ? 0 : themeGet("space.xs"))};

  color: ${(props) =>
    props.inverted
      ? themeGet("colors.white")
      : props.valid
      ? themeGet("colors.successDark")
      : props.invalid
      ? themeGet("colors.dangerDark")
      : themeGet("colors.greyDarkest")};

  ${(props) =>
    props.floating
      ? css`
          padding-left: ${(props) => (props.iconLeft ? "41px" : "13px")};
          cursor: text;
          position: absolute;
          top: 20px;
          color: ${(props) =>
            props.invalid
              ? themeGet("colors.dangerDark")
              : props.valid
              ? themeGet("colors.successDark")
              : themeGet("colors.grey")};
        `
      : css``};

  ${(props) =>
    props.mandatory
      ? css`
          &:after {
            content: " *";
            color: ${themeGet("colors.danger")};
          }
        `
      : css``};
`;

const TextInput = React.forwardRef((props, ref) => {
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
  } = props;

  // Strip numberProps from props for Input
  const { numberProps, ...rest } = props;

  let getNumberInputRef = null;
  if (numberProps && ref) {
    getNumberInputRef = (node) => {
      ref.current = node;
    };
  }

  return (
    <Group fullWidth={fullWidth} {...InputStyles}>
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
      {numberProps ? (
        <NumberInput
          getInputRef={getNumberInputRef}
          data-testid={props["data-testid"]}
          {...rest}
          {...numberProps}
        />
      ) : (
        <Input data-testid={props["data-testid"]} ref={ref} {...rest} />
      )}
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
});

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
  valid: PropTypes.bool,
  /** Shows asterisk to denote a mandatory field */
  mandatory: PropTypes.bool,
  /** Applies an icon to the left of the text box with specified name. */
  iconLeft: PropTypes.array,
  /** Applies an icon to the right of the text box with specified name. */
  iconRight: PropTypes.array,
  /** Number format props, to render a number input textbox */
  numberProps: PropTypes.object,
  /** Set inverted styling for dark backgrounds */
  inverted: PropTypes.bool,
  /** Specifies the `data-testid` attribute for testing. */
  "data-testid": PropTypes.string,
  /** Specifies any additional `space` and `layout` props for the entire component */
  InputStyles: PropTypes.object
};

export default TextInput;
