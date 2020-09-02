import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { space, layout, compose, variant } from "styled-system";
import { css } from "@styled-system/css";
import systemtheme from "../../systemtheme";

const RadioButtonStyles = compose(space, layout);

const RadioButtonItem = styled("div")(
  css({
    color: "greyDarkest"
  }),
  variant({
    variants: {
      default: {},
      white: {
        color: "white"
      }
    }
  }),
  RadioButtonStyles
);

const RadioButtonLabel = styled("label")(props =>
  css({
    display: "flex",
    alignItems: "center",
    cursor: props.disabled ? "default" : "pointer",
    opacity: props.disabled ? "0.5" : "1"
  })
);

const RadioButtonControl = styled.input.attrs({ type: "radio" })(
  props =>
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
          systemtheme.shadows.thinOutline + " " + systemtheme.colors.black30
      }
    }),
  props =>
    variant({
      variants: {
        default: {},
        white: {
          "&:focus + div": {
            boxShadow:
              systemtheme.shadows.thinOutline + " " + systemtheme.colors.white30
          }
        },
        primary: {
          "&:focus + div": {
            boxShadow:
              systemtheme.shadows.thinOutline +
              " " +
              systemtheme.colors.primary30
          }
        },
        success: {
          "&:focus + div": {
            boxShadow:
              systemtheme.shadows.thinOutline +
              " " +
              systemtheme.colors.success30
          }
        },
        warning: {
          "&:focus + div": {
            boxShadow:
              systemtheme.shadows.thinOutline +
              " " +
              systemtheme.colors.warning30
          }
        },
        danger: {
          "&:focus + div": {
            boxShadow:
              systemtheme.shadows.thinOutline +
              " " +
              systemtheme.colors.danger30
          }
        }
      }
    })
);

const RadioButtonCircle = styled("div")(
  css({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    borderRadius: "10px",
    border: "solid 2px",
    borderColor: "greyDarker",
    transition: "transitionDefault"
  }),
  variant({
    variants: {
      default: {},
      white: {
        borderColor: "white"
      },
      primary: {
        borderColor: "primary"
      },
      success: {
        borderColor: "success"
      },
      warning: {
        borderColor: "warning"
      },
      danger: {
        borderColor: "danger"
      }
    }
  })
);

const RadioButtonDot = styled("div")(
  css({
    position: "absolute",
    display: "block",
    width: "10px",
    height: "10px",
    borderRadius: "8px",
    transform: "scale(0)",
    backgroundColor: "greyDarker",
    transition: "transitionDefault"
  }),
  variant({
    variants: {
      default: {},
      white: {
        backgroundColor: "white"
      },
      primary: {
        backgroundColor: "primary"
      },
      success: {
        backgroundColor: "success"
      },
      warning: {
        backgroundColor: "warning"
      },
      danger: {
        backgroundColor: "danger"
      }
    }
  })
);

const RadioButtonText = styled("div")(
  css({
    paddingLeft: "xs",
    fontSize: "1",
    fontWeight: "1"
  })
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
  ...props
}) {
  return (
    <ThemeProvider theme={theme}>
      <RadioButtonItem variant={variant} {...props}>
        <RadioButtonLabel disabled={disabled}>
          <RadioButtonControl
            name={name}
            variant={variant}
            value={value}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
          />
          <RadioButtonCircle variant={variant}>
            <RadioButtonDot variant={variant} />
          </RadioButtonCircle>
          <RadioButtonText>{label}</RadioButtonText>
        </RadioButtonLabel>
      </RadioButtonItem>
    </ThemeProvider>
  );
}

RadioButton.propTypes = {
  /** Sets a name to define the radio button group */
  name: PropTypes.string,
  /** Sets the value of the radio button */
  value: PropTypes.string,
  /** Sets the label of the radio button */
  label: PropTypes.string,
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

RadioButton.defaultProps = {
  theme: systemtheme
};
