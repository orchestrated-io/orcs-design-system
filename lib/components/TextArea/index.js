import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { space, layout, typography, color, compose } from "styled-system";
import { css } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import themeGet from "@styled-system/theme-get";
import systemtheme from "../../systemtheme";

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
      fontFamily: "main",
      fontSize: "2",
      zIndex: "1",
      borderRadius: "2",
      transition: "transitionDefault",
      background: props.disabled
        ? themeGet("colors.greyLightest")(props)
        : themeGet("colors.white")(props),
      color: props.disabled
        ? themeGet("colors.grey")(props)
        : themeGet("colors.greyDarkest")(props),
      width: props.fullWidth ? "100%" : "auto",
      padding: "between",
      borderWidth: "1",
      borderStyle: "solid",
      borderColor: props.invalid
        ? "dangerLight"
        : props.valid
        ? "successLight"
        : "black30",
      "&:hover": {
        borderColor: props.invalid
          ? "dangerDark"
          : props.valid
          ? "successDark"
          : "primary"
      },
      "&:focus": {
        outline: "0",
        boxShadow: props.invalid
          ? themeGet("shadows.thinOutline")(props) +
            " " +
            themeGet("colors.danger30")(props)
          : props.valid
          ? themeGet("shadows.thinOutline")(props) +
            " " +
            themeGet("colors.success30")(props)
          : themeGet("shadows.thinOutline")(props) +
            " " +
            themeGet("colors.primary30")(props),
        borderColor: props.invalid
          ? "dangerDark"
          : props.valid
          ? "successDark"
          : "primary"
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
      fontSize: "1",
      fontWeight: props.bold ? "2" : "1",
      transition: themeGet("transition.transitionDefault")(props),
      mb: props.floating ? 0 : "xs",
      span: {
        color: "danger",
        fontWeight: "2"
      },
      color: props.labelColor
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
    onChange,
    defaultValue,
    autoFocus,
    theme
  } = props;

  var labelColor;
  if (inverted) {
    if (valid) {
      labelColor = "successLightest";
    } else if (invalid) {
      labelColor = "dangerLightest";
    } else labelColor = "white";
  } else {
    if (valid) {
      labelColor = "successDark";
    } else if (invalid) {
      labelColor = "dangerDark";
    } else labelColor = "greyDarkest";
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper fullWidth={fullWidth} {...WrapperStyles}>
        {label && (
          <Label
            inverted={inverted}
            invalid={invalid}
            valid={valid}
            htmlFor={id}
            mandatory={mandatory}
            bold={bold}
            labelColor={labelColor}
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
          autoFocus={autoFocus}
          valid={valid}
          invalid={invalid}
          onChange={onChange}
          data-testid={props["data-testid"]}
          defaultValue={defaultValue}
          {...InputStyles}
        >
          {value}
        </Input>
      </Wrapper>
    </ThemeProvider>
  );
});

TextArea.propTypes = {
  /** Must be used to specify a unique ID. */
  id: PropTypes.string,
  /** Use value to specify text in text area. */
  value: PropTypes.string,
  /** Specifies the text for the TextArea label. */
  label: PropTypes.string,
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
  theme: PropTypes.object
};

TextArea.defaultProps = {
  theme: systemtheme
};

export default TextArea;
