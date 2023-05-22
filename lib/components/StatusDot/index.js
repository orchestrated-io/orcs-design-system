import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { space, layout, color, compose, variant } from "styled-system";
import { css } from "@styled-system/css";
import systemtheme from "../../systemtheme";
import { themeGet } from "@styled-system/theme-get";

const StatusDotStyles = compose(space, layout, color);

const StatusDotItem = styled("div")(
  (props) =>
    css({
      width: props.icon ? "18px" : "10px",
      height: props.icon ? "18px" : "10px",
      borderRadius: "50%",
      bg: themeGet("colors.secondary")(props),
      fontSize: themeGet("fontSizes.0")(props),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: "0"
    }),
  (props) =>
    variant({
      variants: {
        default: {},
        success: {
          bg: themeGet("colors.success")(props)
        },
        warning: {
          bg: themeGet("colors.warning")(props)
        },
        danger: {
          bg: themeGet("colors.danger")(props)
        }
      }
    }),
  StatusDotStyles
);

export default function StatusDot({ theme, icon, children, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <StatusDotItem {...props} icon={icon}>
        {children}
      </StatusDotItem>
    </ThemeProvider>
  );
}

StatusDot.propTypes = {
  /** Specifies StatusDot colour. Colours are taken from the standard design system colours. */
  variant: PropTypes.oneOf(["success", "warning", "danger"]),
  /** Specifies that this StatusDot contains an icon */
  icon: PropTypes.bool,
  /** Can specify an Icon componet as a child item */
  children: PropTypes.node,
  /** Specifies the system design theme. */
  theme: PropTypes.object
};

StatusDot.defaultProps = {
  theme: systemtheme
};
