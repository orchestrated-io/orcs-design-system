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

const Group = styled("div").withConfig({ shouldForwardProp })(
  props =>
    css({
      position: "relative",
      width: props.fullWidth ? "100%" : "auto"
    }),
  WrapperStyles
);

const Input = styled("textarea")
  .attrs(props => ({
    "data-testid": props.dataTestId
      ? props.dataTestId
      : props["data-testid"]
      ? props["data-testid"]
      : null
  }))
  .withConfig({ shouldForwardProp })(props =>
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
  })
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
      color: props.inverted
        ? "white"
        : props.inverted && props.valid
        ? "successLightest"
        : props.inverted && props.invalid
        ? "dangerLightest"
        : props.valid
        ? "successDark"
        : props.invalid
        ? "dangerDark"
        : "greyDarkest",
      span: {
        color: "danger",
        fontWeight: "2"
      }
    }),
  LabelStyles
);

const Asterisk = () => {
  return <span> *</span>;
};

/**
 * The TextArea component should be used wherever a multi line form entry is required. Some examples of this could be enquiries, descriptions, summaries, questions etc.
 *
 * Examples include three validation states: default, invalid, valid.
 *
 * Ensure to use a unique id for each text area.
 *
 * Specify size using `cols` and `rows` like shown in the example. adding `fullWidth` prop will override the cols value and make the text input 100% width of parent container.
 */

const TextArea = React.forwardRef((props, ref) => {
  const {
    inverted,
    id,
    label,
    invalid,
    valid,
    fullWidth,
    mandatory,
    dataTestId,
    bold,
    theme
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <Group fullWidth={fullWidth} {...WrapperStyles}>
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
        <Input ref={ref} id={id} dataTestId={dataTestId} {...props} />
      </Group>
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
  /** Specifies `data-testid`. Can use `dataTestId="value"` or `data-testid="value"` */
  dataTestId: PropTypes.string,
  /** Specifies the design theme object */
  theme: PropTypes.object
};

TextArea.defaultProps = {
  theme: systemtheme
};

export default TextArea;
