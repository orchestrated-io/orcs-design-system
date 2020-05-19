import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { space, layout, color, compose, variant } from "styled-system";
import { css } from "@styled-system/css";
import systemtheme from "../../systemtheme";
import Icon from "../Icon";

const StatusDotStyles = compose(space, layout, color);

const StatusDotItem = styled("div")(
  props =>
    css({
      width: props.icon ? "18px" : "10px",
      height: props.icon ? "18px" : "10px",
      borderRadius: "50%",
      bg: "secondary",
      fontSize: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }),
  variant({
    variants: {
      default: {},
      success: {
        bg: "success"
      },
      warning: {
        bg: "warning"
      },
      danger: {
        bg: "danger"
      }
    }
  }),
  StatusDotStyles
);

export default function StatusDot({ theme, icon, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <StatusDotItem {...props} icon={icon}>
        {icon ? <Icon icon={icon} color="white" size="xs" /> : null}
      </StatusDotItem>
    </ThemeProvider>
  );
}

StatusDot.propTypes = {
  /** Specifies StatusDot colour. Colours are taken from the standard design system colours. */
  variant: PropTypes.oneOf(["success", "warning", "danger"]),
  /** Specifies an icon. */
  icon: PropTypes.array,
  /** Specifies the system design theme. */
  theme: PropTypes.object
};

StatusDot.defaultProps = {
  theme: systemtheme
};
