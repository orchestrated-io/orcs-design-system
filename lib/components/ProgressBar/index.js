import React from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes, ThemeProvider } from "styled-components";
import { space, layout } from "styled-system";
import { themeGet } from "@styled-system/theme-get";

const expandWidth = keyframes`
  0% { width: 0; }
`;

const Background = styled.div`
  ${space}
  ${layout}
  position: relative;
  background: ${(props) => themeGet("colors.greyLighter")(props)};
  height: 16px;
  border-radius: 8px;
`;

const Fill = styled.div`
  position: absolute;
  left: 3px;
  top: 3px;
  height: 10px;
  border-radius: 5px;
  animation: ${expandWidth} 1000ms ease-in-out 1;
  transition: ${(props) => themeGet("transition.transitionDefault")(props)};
  ${(props) =>
    props.gradient
      ? css`
          background: linear-gradient(
            to right,
            ${themeGet("colors.danger")(props)} 0%,
            ${themeGet("colors.warning")(props)} 50%,
            ${themeGet("colors.success")(props)} 100%
          );
        `
      : css`
          background: ${themeGet("colors.primary")(props)};
        `};
`;

/**
 * Progress bar is not intended to be used for loading (that's what the Loading component is for). The intended use is for indicating progress through steps or progress towards a goal.
 *
 * A percentage width of the container (grey background) can be specified using the containerWidth prop, in most cases this should be 100. If not set the container is rendered without a CSS width property.
 *
 * A percentage width of the fill (coloured element) can be specified using the fillWidth prop. On page load the fill will animate from 0 to set value, and on change of the fillWidth prop value the fill will automatically animate to the new width value.
 */

export default function ProgressBar({
  containerWidth,
  fillWidth,
  gradient,
  theme,
  ...props
}) {
  const component = (
    <Background style={{ width: containerWidth + "%" }} {...props}>
      <Fill gradient={gradient} style={{ width: fillWidth + "%" }} />
    </Background>
  );

  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}

ProgressBar.propTypes = {
  /** Sets the percentage width of the parent container */
  containerWidth: PropTypes.number,
  /** Sets the percentage width of the fill */
  fillWidth: PropTypes.number,
  /** Changes fill to have a gradient */
  gradient: PropTypes.bool,
  /** Specifies the system design theme. */
  theme: PropTypes.object
};
