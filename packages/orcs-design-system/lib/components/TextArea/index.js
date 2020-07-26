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

const Wrapper = styled("div")
  .withConfig({ shouldForwardProp })
  .attrs(props => ({
    "data-testid": props["data-testid"] ? props["data-testid"] : null
  }))(
  props =>
    css({
      position: "relative",
      width: props.fullWidth ? "100%" : "auto"
    }),
  WrapperStyles
);

const Input = styled("textarea")
  .attrs(props => ({
    "data-testid": props["data-testid"] ? props["data-testid"] : null
  }))
  .withConfig({ shouldForwardProp })(
  props =>
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
      bg: props.inverted ? "greyLightest" : "white",
      color: "greyDarkest",
      width: props.fullWidth ? "100%" : "auto",
      padding: "between",
      borderWidth: "1",
      borderStyle: "solid",
      borderColor: props.invalid
        ? "dangerLight"
        : props.valid
        ? "successLight"
        : "black20",
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
            themeGet("colors.danger20")(props)
          : props.valid
          ? themeGet("shadows.thinOutline")(props) +
            " " +
            themeGet("colors.success20")(props)
          : themeGet("shadows.thinOutline")(props) +
            " " +
            themeGet("colors.primary20")(props),
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
  props =>
    css({
      display: "block",
      zIndex: "2",
      textAlign: "left",
      fontSize: "3",
      fontWeight: props.bold ? "2" : "1",
      transition: themeGet("transition.defaultTransition")(props),
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
    label,
    invalid,
    valid,
    fullWidth,
    mandatory,
    bold,
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
        <Input ref={ref} id={id} {...InputStyles} />
      </Wrapper>
    </ThemeProvider>
  );
});

TextArea.propTypes = {
  /** Must be used to specify a unique ID. */
  id: PropTypes.string,
  /** Specifies the text for the TextArea label. */
  label: PropTypes.string,
  /** Set the label text to bold font-weight. */
  bold: PropTypes.bool,
  /** Makes text box take up full width of parent */
  fullWidth: PropTypes.bool,
  /** Applies invalid styles (coloured with "warning" colour from design system) */
  invalid: PropTypes.bool,
  /** Applies valid styles (coloured with "success" colour from design system) */
  valid: PropTypes.bool,
  /** Shows asterisk to denote a mandatory field */
  mandatory: PropTypes.bool,
  /** Set inverted styling for dark backgrounds */
  inverted: PropTypes.bool,
  /** Set additional styles for the `Wrapper` */
  WrapperStyles: PropTypes.object,
  /** Set additional styles for the `Label` */
  LabelStyles: PropTypes.object,
  /** Set additional styles for the `Input` textarea */
  InputStyles: PropTypes.object,
  /** Specifies the design theme object */
  theme: PropTypes.object
};

TextArea.defaultProps = {
  theme: systemtheme
};

export default TextArea;
