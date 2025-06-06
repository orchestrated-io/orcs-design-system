import React, { useMemo, useRef, useEffect } from "react";
import { NumericFormat } from "react-number-format";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { space, layout, compose } from "styled-system";
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
    css({
      position: "relative",
      width: props.fullWidth ? "100%" : "auto",
      minHeight: (props) =>
        props.height ??
        themeGet(
          props.floating
            ? "appScale.inputHeightLarge"
            : "appScale.inputHeightDefault"
        )(props)
    }),
  InputStyles
);

const IconWrapper = styled.label`
  display: flex;
  align-items: center;
  min-height: inherit;
  position: absolute;
  width: fit-content;
  bottom: 0;
  padding: 0 10px;
  svg {
    opacity: 0.4;
  }
  ${(props) =>
    props.iconLeft && !props.floating
      ? css`
          left: 0;
        `
      : props.iconLeft && props.floating
      ? css`
          left: 0;
          bottom: 11px;
        `
      : props.iconRight && !props.floating
      ? css`
          right: 0;
        `
      : props.iconRight && props.floating
      ? css`
          right: 0;
          bottom: 11px;
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
  font-size: ${(props) => themeGet("fontSizes.2")(props)};
  z-index: 1;
  border-radius: ${(props) => themeGet("radii.2")(props)};
  transition: ${(props) => themeGet("transition.transitionDefault")(props)};
  background: ${(props) =>
    props.disabled
      ? themeGet("colors.greyLightest")(props)
      : themeGet("colors.white")(props)};
  color: ${(props) =>
    props.disabled
      ? themeGet("colors.grey")(props)
      : themeGet("colors.greyDarkest")(props)};
  width: ${(props) => (props.fullWidth ? `100%` : `auto`)};
  height: ${(props) =>
    props.height
      ? props.height
      : props.floating
      ? themeGet("appScale.inputHeightLarge")(props)
      : themeGet("appScale.inputHeightDefault")(props)};
  padding: ${(props) => {
    let left = props.iconLeft ? 36 : 10;
    let right = props.iconRight ? 36 : 10;
    let top = props.floating ? 25 : 5;
    let bottom = 6;
    return `${top}px ${right}px ${bottom}px ${left}px`;
  }};
  border: 1px solid
    ${(props) =>
      props.invalid
        ? themeGet("colors.danger")(props)
        : props.valid
        ? themeGet("colors.success")(props)
        : themeGet("colors.black30")(props)};

  ${(props) =>
    props.floating
      ? css`
          &::placeholder {
            color: transparent;
          }
          &:not(:placeholder-shown) {
            ~ label {
              transform: translateY(-10px);
              font-size: ${themeGet("fontSizes.0")(props)};
            }
          }
          &:-ms-input-placeholder:not(:focus) {
            ~ label {
              transform: translateY(-10px);
              font-size: ${themeGet("fontSizes.0")(props)};
            }
          }
          &:not(:-ms-input-placeholder) {
            ~ label {
              transform: translateY(-10px);
              font-size: ${themeGet("fontSizes.0")(props)};
            }
          }
        `
      : css`
          &::placeholder {
            color: ${themeGet("colors.grey")(props)};
          }
        `} &:hover {
    border: 1px solid
      ${(props) =>
        props.invalid
          ? themeGet("colors.dangerDark")(props)
          : props.valid
          ? themeGet("colors.successDark")(props)
          : themeGet("colors.primary")(props)};
  }

  &:focus {
    outline: 0;
    box-shadow: ${(props) =>
      props.invalid
        ? themeGet("shadows.thickOutline")(props) +
          " " +
          themeGet("colors.danger30")(props)
        : props.valid
        ? themeGet("shadows.thickOutline")(props) +
          " " +
          themeGet("colors.success30")(props)
        : themeGet("shadows.thickOutline")(props) +
          " " +
          themeGet("colors.primary30")(props)};

    border: 1px solid
      ${(props) =>
        props.invalid
          ? themeGet("colors.dangerDark")(props)
          : props.valid
          ? themeGet("colors.successDark")(props)
          : themeGet("colors.primary")(props)};

    ${(props) =>
      props.floating
        ? css`
            &::placeholder {
              color: ${themeGet("colors.greyLight")(props)};
            }
            ~ label {
              transform: translateY(-10px);
              font-size: ${themeGet("fontSizes.0")(props)};
              color: ${(props) =>
                props.invalid
                  ? themeGet("colors.dangerDark")(props)
                  : props.valid
                  ? themeGet("colors.successDark")(props)
                  : themeGet("colors.primary")(props)};
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

const NumberInput = styled(NumericFormat).attrs((props) => ({
  "data-testid": props["data-testid"] ? props["data-testid"] : null
}))`
  ${InputStyle}
`;

const Label = styled.label`
  display: block;
  z-index: 2;
  text-align: left;
  font-size: ${(props) => themeGet("fontSizes.1")(props)};
  font-weight: ${(props) =>
    props.bold
      ? themeGet("fontWeights.2")(props)
      : themeGet("fontWeights.1")(props)};
  transition: ${(props) => themeGet("transition.transitionDefault")(props)};
  padding-right: ${(props) =>
    props.floating && props.iconRight ? `40px` : `12px`};
  margin-bottom: ${(props) =>
    props.floating ? 0 : themeGet("space.xs")(props)};

  color: ${(props) =>
    props.inverted
      ? themeGet("colors.white")(props)
      : props.valid
      ? themeGet("colors.successDark")(props)
      : props.invalid
      ? themeGet("colors.dangerDark")(props)
      : themeGet("colors.greyDarkest")(props)};

  ${(props) =>
    props.floating
      ? css`
          padding-left: ${(props) => (props.iconLeft ? "37px" : "11px")};
          cursor: text;
          position: absolute;
          top: ${(props) => {
            let inputHeight = themeGet("appScale.inputHeightLarge")(props);
            return `calc(${inputHeight} / 3)`;
          }};
          color: ${(props) =>
            props.invalid
              ? themeGet("colors.dangerDark")(props)
              : props.valid
              ? themeGet("colors.successDark")(props)
              : themeGet("colors.greyDark")(props)};
        `
      : css``};

  ${(props) =>
    props.mandatory
      ? css`
          &:after {
            content: " *";
            color: ${themeGet("colors.danger")(props)};
          }
        `
      : css``};
`;

const TextInput = React.forwardRef((props, ref) => {
  const {
    inverted,
    floating,
    id,
    bold,
    invalid,
    valid,
    fullWidth,
    mandatory,
    iconLeft,
    iconRight,
    InputStyles,
    height,
    focus,
    ariaLabel
  } = props;

  const inputRef = useRef(null);
  const { numberProps, ...rest } = props;

  useEffect(() => {
    if (focus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focus]);

  // Forward the ref
  useEffect(() => {
    if (ref) {
      if (typeof ref === "function") {
        ref(inputRef.current);
      } else {
        ref.current = inputRef.current;
      }
    }
  }, [ref]);

  let getNumberInputRef = null;
  if (numberProps && inputRef) {
    getNumberInputRef = (node) => {
      inputRef.current = node;
    };
  }

  const label = useMemo(() => {
    if (numberProps && numberProps.prefix) {
      return `${props.label} ${numberProps.prefix}`;
    }

    return props.label;
  }, [props.label, numberProps]);

  return (
    <Group fullWidth={fullWidth} height={height} {...InputStyles}>
      {label && !floating ? (
        <Label
          inverted={inverted}
          invalid={invalid}
          valid={valid}
          bold={bold}
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
          id={id}
          aria-label={ariaLabel}
          {...rest}
          height={height}
          {...numberProps}
        />
      ) : (
        <Input
          data-testid={props["data-testid"]}
          height={height}
          ref={inputRef}
          id={id}
          aria-label={ariaLabel}
          {...rest}
        />
      )}
      {label && floating ? (
        <Label
          floating={floating}
          invalid={invalid}
          valid={valid}
          bold={bold}
          htmlFor={id}
          mandatory={mandatory}
          iconRight={iconRight}
          iconLeft={iconLeft}
        >
          {label}
        </Label>
      ) : null}
      {iconLeft ? (
        <IconWrapper htmlFor={id} iconLeft={iconLeft} floating={floating}>
          <Icon icon={iconLeft} htmlFor={id} color="black" />
        </IconWrapper>
      ) : null}
      {iconRight ? (
        <IconWrapper htmlFor={id} iconRight={iconRight} floating={floating}>
          <Icon icon={iconRight} htmlFor={id} color="#black" />
        </IconWrapper>
      ) : null}
    </Group>
  );
});

TextInput.propTypes = {
  /** Must be used to specify a unique ID. */
  id: PropTypes.string.isRequired,
  /** Can be used to set a specific height. */
  height: PropTypes.string,
  /** Specifies the text for the label. */
  label: PropTypes.string,
  /** Specifies aria-label for TextArea. This is only required if not using the label prop.*/
  ariaLabel: (props, propName) => {
    if (!props.label && (props[propName] == null || props[propName] === "")) {
      return new Error(
        `Missing prop \`${propName}\` not specified for TextInput component. When \`label\` is not provided, \`${propName}\` is required.`
      );
    }
    if (props[propName] && typeof props[propName] !== "string") {
      return new Error(
        `Invalid propType \`${propName}\` supplied to TextInput component. Expected \`string\`, received \`${typeof props[
          propName
        ]}\`.`
      );
    }
    return null;
  },
  /** Makes label text bold */
  bold: PropTypes.bool,
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
  InputStyles: PropTypes.object,
  /** Focus on input */
  focus: PropTypes.bool
};

export default TextInput;
