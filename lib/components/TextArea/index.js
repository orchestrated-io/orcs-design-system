import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { space, layout, typography, color, compose } from "styled-system";
import { css } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { themeGet } from "@styled-system/theme-get";

const WrapperStyles = compose(space, layout);

const LabelStyles = compose(space, layout, typography, color);

const InputStyles = compose(space, layout, typography, color);

const Wrapper = styled("div").withConfig({ shouldForwardProp })(
  (props) =>
    css({
      position: "relative",
      width: props.fullWidth ? "100%" : "auto"
    }),
  WrapperStyles
);

const Input = styled("textarea")
  .withConfig({ shouldForwardProp })
  .attrs((props) => ({
    "data-testid": props["data-testid"] ? props["data-testid"] : null
  }))(
  (props) =>
    css({
      display: "block",
      cursor: "text",
      appearance: "none",
      boxShadow: "none",
      fontFamily: themeGet("fonts.main")(props),
      fontSize: themeGet("fontSizes.2")(props),
      zIndex: "1",
      borderRadius: themeGet("radii.2")(props),
      transition: themeGet("transition.transitionDefault")(props),
      background: props.disabled
        ? themeGet("colors.greyLightest")(props)
        : themeGet("colors.white")(props),
      color: props.disabled
        ? themeGet("colors.grey")(props)
        : themeGet("colors.greyDarkest")(props),
      width: props.fullWidth ? "100%" : "auto",
      padding: "between",
      borderWidth: themeGet("borderWidths.1")(props),
      borderStyle: "solid",
      borderColor: props.invalid
        ? themeGet("colors.dangerLight")(props)
        : props.valid
        ? themeGet("colors.successLight")(props)
        : themeGet("colors.black30")(props),
      resize: props.resize || "both",
      "&:hover": {
        borderColor: props.invalid
          ? themeGet("colors.dangerDark")(props)
          : props.valid
          ? themeGet("colors.successDark")(props)
          : themeGet("colors.primary")(props)
      },
      "&:focus": {
        outline: "0",
        boxShadow: props.invalid
          ? themeGet("shadows.thickOutline")(props) +
            " " +
            themeGet("colors.danger30")(props)
          : props.valid
          ? themeGet("shadows.thickOutline")(props) +
            " " +
            themeGet("colors.success30")(props)
          : themeGet("shadows.thickOutline")(props) +
            " " +
            themeGet("colors.primary30")(props),
        borderColor: props.invalid
          ? themeGet("colors.dangerDark")(props)
          : props.valid
          ? themeGet("colors.successDark")(props)
          : themeGet("colors.primary")(props)
      }
    }),
  InputStyles
);

const Label = styled("label").withConfig({ shouldForwardProp })(
  (props) =>
    css({
      display: "block",
      zIndex: "2",
      textAlign: "left",
      fontSize: themeGet("fontSizes.1")(props),
      fontWeight: props.bold
        ? themeGet("fontWeights.2")(props)
        : themeGet("fontWeights.1")(props),
      transition: themeGet("transition.transitionDefault")(props),
      mb: props.floating ? 0 : "xs",
      span: {
        color: themeGet("colors.danger")(props),
        fontWeight: themeGet("fontWeights.2")(props)
      },
      color: props.inverted
        ? props.valid
          ? themeGet("colors.successLightest")(props)
          : props.invalid
          ? themeGet("colors.dangerLightest")(props)
          : themeGet("colors.white")(props)
        : props.valid
        ? themeGet("colors.successDark")(props)
        : props.invalid
        ? themeGet("colors.dangerDark")(props)
        : themeGet("colors.greyDarkest")(props)
    }),
  LabelStyles
);

const Asterisk = () => {
  return <span> *</span>;
};

const TextArea = React.forwardRef((props, ref) => {
  const {
    inverted,
    id,
    value,
    disabled,
    label,
    invalid,
    valid,
    fullWidth,
    mandatory,
    bold,
    cols,
    rows,
    resize,
    onChange,
    defaultValue,
    autoFocus,
    theme,
    WrapperStyles,
    LabelStyles,
    ariaLabel,
    onKeyDown,
    InputStyles
  } = props;

  const component = (
    <Wrapper fullWidth={fullWidth} {...WrapperStyles}>
      {label && (
        <Label
          inverted={inverted}
          invalid={invalid}
          valid={valid}
          htmlFor={id}
          mandatory={mandatory}
          bold={bold}
          {...LabelStyles}
        >
          {label} {mandatory && <Asterisk />}
        </Label>
      )}
      <Input
        ref={ref}
        id={id}
        fullWidth={fullWidth}
        cols={cols}
        disabled={disabled}
        rows={rows}
        resize={resize}
        autoFocus={autoFocus}
        valid={valid}
        invalid={invalid}
        onChange={onChange}
        data-testid={props["data-testid"]}
        defaultValue={defaultValue}
        aria-label={ariaLabel}
        onKeyDown={onKeyDown}
        {...InputStyles}
      >
        {value}
      </Input>
    </Wrapper>
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
});

TextArea.propTypes = {
  /** Must be used to specify a unique ID. */
  id: PropTypes.string.isRequired,
  /** Use value to specify text in text area. */
  value: PropTypes.string,
  /** Specifies the text for the TextArea label. */
  label: PropTypes.string,
  /** Specifies aria-label for TextArea. This is only required if not using the label prop.*/
  ariaLabel: (props, propName) => {
    if (!props.label && (props[propName] == null || props[propName] === "")) {
      return new Error(
        `Missing prop \`${propName}\` not specified for TextArea component. When \`label\` is not provided, \`${propName}\` is required.`
      );
    }
    if (props[propName] && typeof props[propName] !== "string") {
      return new Error(
        `Invalid propType \`${propName}\` supplied to TextArea component. Expected \`string\`, received \`${typeof props[
          propName
        ]}\`.`
      );
    }
    return null;
  },
  /** Set the label text to bold font-weight. */
  bold: PropTypes.bool,
  /** Sets disabled attribute and styling */
  disabled: PropTypes.bool,
  /** Makes text box take up full width of parent */
  fullWidth: PropTypes.bool,
  /** Sets specified width of input area in columns */
  cols: PropTypes.string,
  /** Sets specified height of input area in rows */
  rows: PropTypes.string,
  /** Applies invalid styles (coloured with "warning" colour from design system) */
  invalid: PropTypes.bool,
  /** Applies valid styles (coloured with "success" colour from design system) */
  valid: PropTypes.bool,
  /** Shows asterisk to denote a mandatory field */
  mandatory: PropTypes.bool,
  /** Set inverted styling for dark backgrounds */
  inverted: PropTypes.bool,
  /** Set additional styles for the `Wrapper` if needed */
  WrapperStyles: PropTypes.object,
  /** Set additional styles for the `Label` if needed */
  LabelStyles: PropTypes.object,
  /** Set additional styles for the `Input` textarea if needed */
  InputStyles: PropTypes.object,
  /** Specifies `data-testid` for testing */
  "data-testid": PropTypes.string,
  /** Specifies whether TextArea should automatically get focus */
  autoFocus: PropTypes.bool,
  /** Specifies `onChange` function */
  onChange: PropTypes.func,
  /** Specifies `textarea` default value (different from placeholder) */
  defaultValue: PropTypes.string,
  /** Specifies the design theme object */
  theme: PropTypes.object,
  /** Controls how the textarea can be resized (none, both, horizontal, vertical) */
  resize: PropTypes.oneOf(["none", "both", "horizontal", "vertical"]),
  onKeyDown: PropTypes.func
};

export default TextArea;
