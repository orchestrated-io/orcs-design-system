import React, { useRef, useEffect, useState } from "react";
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
  width: ${(props) =>
    props.containerWidth ? props.containerWidth + "%" : "100%"};
`;

const Fill = styled.div`
  width: ${(props) => {
    if (props.fillWidth && props.containerWidthPx) {
      const sixPxInPercentage = (6 / props.containerWidthPx) * 100;
      const minPixelValue = 1; // Minimum pixel value for visibility
      const minPercentageValue = (minPixelValue / props.containerWidthPx) * 100;
      const calculatedWidth = `calc(${props.fillWidth}% - ${sixPxInPercentage}%)`;
      return `max(${calculatedWidth}, ${minPercentageValue}%)`;
    }
    return "0";
  }};
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
  containerWidth = "100%",
  fillWidth,
  gradient,
  theme,
  ariaLabel = "Progress",
  ...props
}) {
  const backgroundRef = useRef(null);
  const [containerWidthPx, setContainerWidthPx] = useState(0);

  useEffect(() => {
    if (backgroundRef.current) {
      setContainerWidthPx(backgroundRef.current.offsetWidth);
    }
  }, [containerWidth]);

  const component = (
    <Background
      ref={backgroundRef}
      containerWidth={containerWidth}
      {...props}
      aria-label={ariaLabel}
      aria-valuenow={fillWidth}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Fill
        containerWidthPx={containerWidthPx}
        gradient={gradient}
        fillWidth={fillWidth}
      />
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
  theme: PropTypes.object,
  /** Specifies the aria-label for the progress bar */
  ariaLabel: PropTypes.string
};
