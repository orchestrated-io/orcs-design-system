import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { space, layout, color } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import shouldForwardProp from "@styled-system/should-forward-prop";

const Item = styled.div.withConfig({ shouldForwardProp })`
  ${space}
  ${layout}
  ${color}
  display: block;
  width: 100%;
  height: ${(props) => (props.thick ? "3px" : "1px")};
  grid-column: ${(props) => (props.spanGrid ? "1 / -1" : "auto")};
  border-bottom: ${(props) =>
    props.dash && props.thick && props.light
      ? `dashed 3px ${themeGet("colors.black10")(props)}`
      : props.dash && props.thick && props.inverted
      ? `dashed 3px ${themeGet("colors.white20")(props)}`
      : props.dash && props.inverted
      ? `dashed 1px ${themeGet("colors.white20")(props)}`
      : props.dash && props.light
      ? `dashed 1px ${themeGet("colors.black10")(props)}`
      : props.dash && props.thick
      ? `dashed 3px ${themeGet("colors.black20")(props)}`
      : props.dash
      ? `dashed 1px ${themeGet("colors.black20")(props)}`
      : "none"};
  background-color: ${(props) =>
    props.dash
      ? "transparent"
      : props.inverted
      ? themeGet("colors.white20")(props)
      : props.light
      ? themeGet("colors.black10")(props)
      : themeGet("colors.black20")(props)};
`;

export default function Divider({
  light,
  thick,
  dash,
  inverted,
  spanGrid,
  theme,
  ...props
}) {
  const component = (
    <Item
      light={light}
      thick={thick}
      dash={dash}
      inverted={inverted}
      spanGrid={spanGrid}
      {...props}
    />
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}

Divider.propTypes = {
  /** Divider will use a lighter grey colour */
  light: PropTypes.bool,
  /** Divider will be 3px instead of 1px */
  thick: PropTypes.bool,
  /** Divider will have a dashed line instead of solid line */
  dash: PropTypes.bool,
  /** Divider will be a darker colour more suited for dark backgrounds */
  inverted: PropTypes.bool,
  /** Divider will span all columns when in a grid so it can be used as a row divider */
  spanGrid: PropTypes.bool,
  /** Specifies the system design theme. */
  theme: PropTypes.object
};
