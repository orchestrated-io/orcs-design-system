import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import colours from "../../colours";
import systemtheme from "../../systemtheme";
import { space, layout } from "styled-system";

const StatusDotWrapper = styled.div`
  ${space}
  ${layout}
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props =>
    props.on
      ? colours.success
      : props.warning
      ? colours.warning
      : colours.danger};
`;

/**
 * Status dot component is used to specify a true/false, met/not met or on/off state. One, or multiple can be used to represent different things. If no properties are specified, StatusDot is rendered using the `warning` colour from the design system colours.
 *
 * The horizontal layout and tooltip functionality comes from other components (`Flex` and `Popover` respectively).
 */

export default function StatusDot({ theme, on, warning, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <StatusDotWrapper on={on} warning={warning} {...props} />
    </ThemeProvider>
  );
}

StatusDot.propTypes = {
  /** Specifies that this has an on/met/true (green) state */
  on: PropTypes.bool,
  /** Specifies that this has a warning (yellow) state */
  warning: PropTypes.bool,
  /** Specifies the system design theme. */
  theme: PropTypes.object
};

StatusDot.defaultProps = {
  on: false,
  warning: false,
  theme: systemtheme
};
