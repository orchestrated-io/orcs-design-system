import React from "react";
import PropTypes from "prop-types";
import { pick } from "lodash";
import styled, { ThemeProvider } from "styled-components";
import { space, layout, compose, variant, typography } from "styled-system";
import { css } from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";

const RadioButtonStyles = compose(space, layout);

const RadioButtonItem = styled("div")(
  (props) =>
    css({
      color: themeGet("colors.greyDarkest")(props)
    }),
  (props) =>
    variant({
      variants: {
        default: {},
        white: {
          color: themeGet("colors.white")(props)
        }
      }
    }),
  RadioButtonStyles
);

const RadioButtonLabel = styled("label")((props) =>
  css({
    display: "flex",
    alignItems: "center",
    cursor: props.disabled ? "default" : "pointer",
    opacity: props.disabled ? "0.5" : "1"
  })
);

const RadioButtonControl = styled.input.attrs({ type: "radio" })(
  (props) =>
    css({
      opacity: "0",
      position: "absolute",
      margin: "0",
      zIndex: "-1",
      width: "0",
      height: "0",
      overflow: "hidden",
      pointerEvents: "none",
      "+ div > div": {
        transform: "scale(0)"
      },
      "&:checked + div > div": {
        transform: "scale(1)"
      },
      "&:focus + div": {
        boxShadow:
          themeGet("shadows.thickOutline")(props) +
          " " +
          themeGet("colors.black30")(props)
      }
    }),
  (props) =>
    variant({
      variants: {
        default: {},
        white: {
          "&:focus + div": {
            boxShadow:
              themeGet("shadows.thickOutline")(props) +
              " " +
              themeGet("colors.white30")(props)
          }
        },
        primary: {
          "&:focus + div": {
            boxShadow:
              themeGet("shadows.thickOutline")(props) +
              " " +
              themeGet("colors.primary30")(props)
          }
        },
        success: {
          "&:focus + div": {
            boxShadow:
              themeGet("shadows.thickOutline")(props) +
              " " +
              themeGet("colors.success30")(props)
          }
        },
        warning: {
          "&:focus + div": {
            boxShadow:
              themeGet("shadows.thickOutline")(props) +
              " " +
              themeGet("colors.warning30")(props)
          }
        },
        danger: {
          "&:focus + div": {
            boxShadow:
              themeGet("shadows.thickOutline")(props) +
              " " +
              themeGet("colors.danger30")(props)
          }
        }
      }
    })
);

const RadioButtonCircle = styled("div")(
  (props) =>
    css({
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "20px",
      height: "20px",
      borderRadius: "10px",
      border: "solid 2px",
      borderColor: themeGet("colors.greyDarker")(props),
      transition: themeGet("transition.transitionDefault")(props)
    }),
  (props) =>
    variant({
      variants: {
        default: {},
        white: {
          borderColor: themeGet("colors.white")(props)
        },
        primary: {
          borderColor: themeGet("colors.primary")(props)
        },
        success: {
          borderColor: themeGet("colors.success")(props)
        },
        warning: {
          borderColor: themeGet("colors.warning")(props)
        },
        danger: {
          borderColor: themeGet("colors.danger")(props)
        }
      }
    })
);

const RadioButtonDot = styled("div")(
  (props) =>
    css({
      position: "absolute",
      display: "block",
      width: "10px",
      height: "10px",
      borderRadius: "8px",
      transform: "scale(0)",
      backgroundColor: themeGet("colors.greyDarker")(props),
      transition: themeGet("transition.transitionDefault")(props)
    }),
  (props) =>
    variant({
      variants: {
        default: {},
        white: {
          backgroundColor: themeGet("colors.white")(props)
        },
        primary: {
          backgroundColor: themeGet("colors.primary")(props)
        },
        success: {
          backgroundColor: themeGet("colors.success")(props)
        },
        warning: {
          backgroundColor: themeGet("colors.warning")(props)
        },
        danger: {
          backgroundColor: themeGet("colors.danger")(props)
        }
      }
    })
);

const RadioButtonText = styled("div")(
  (props) =>
    css({
      paddingLeft: "s",
      fontSize: themeGet("fontSizes.2")(props),
      fontWeight: themeGet("fontWeights.1")(props)
    }),
  typography
);

export default function RadioButton({
  name,
  value,
  label,
  variant,
  disabled,
  checked,
  onChange,
  theme,
  ariaLabel,
  ...props
}) {
  const component = (
    <RadioButtonItem variant={variant} {...props}>
      <RadioButtonLabel disabled={disabled}>
        <RadioButtonControl
          name={name}
          variant={variant}
          value={value}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          aria-label={ariaLabel}
        />
        <RadioButtonCircle variant={variant}>
          <RadioButtonDot variant={variant} />
        </RadioButtonCircle>
        <RadioButtonText {...pick(props, typography.propNames)}>
          {label}
        </RadioButtonText>
      </RadioButtonLabel>
    </RadioButtonItem>
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}

RadioButton.propTypes = {
  /** Sets a name to define the radio button group */
  name: PropTypes.string,
  /** Sets the value of the radio button */
  value: PropTypes.string,
  /** Sets the label of the radio button */
  label: PropTypes.string,
  // ariaLabel prop must be specified if label is not provided
  ariaLabel: (props, propName) => {
    if (!props.label && (props[propName] == null || props[propName] === "")) {
      return new Error(
        `Missing prop \`${propName}\` not specified for Radio component. When \`label\` is not provided, \`${propName}\` is required.`
      );
    }
    if (props[propName] && typeof props[propName] !== "string") {
      return new Error(
        `Invalid propType \`${propName}\` supplied to Radio component. Expected \`string\`, received \`${typeof props[
          propName
        ]}\`.`
      );
    }
    return null;
  },
  /** Sets radio button colour. Default is greyDarker. Use white for inverted styling */
  variant: PropTypes.oneOf([
    "success",
    "warning",
    "danger",
    "primary",
    "white"
  ]),
  /** Applies disabled attribute and styling */
  disabled: PropTypes.bool,
  /** Applies checked attribute and styling */
  checked: PropTypes.bool,
  /** Function to call when checked */
  onChange: PropTypes.func,
  /** Specifies the system design theme */
  theme: PropTypes.object
};
