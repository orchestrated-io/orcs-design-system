import React from "react";
import PropTypes from "prop-types";
import styled, { css, ThemeProvider } from "styled-components";
import { space, layout } from "styled-system";
import { themeGet } from "@styled-system/theme-get";

const vars = {
  trackHeight: "4px",
  thumbDiameter: "20px"
};

const thumb = (props) => `
    margin-top: -8px;
    box-sizing: border-box;
    border: none;
    width: ${vars.thumbDiameter};
    height: ${vars.thumbDiameter};
    border-radius: ${vars.thumbDiameter};
    background: ${themeGet("colors.primary")(props)};
`;

const track = (props) => `
    box-sizing: border-box;
    border: none;
    width: 100%;
    height: ${vars.trackHeight};
	  background: ${themeGet("colors.greyLight")(props)};
    border-radius: 4px;
`;

const Wrapper = styled.div`
  ${space}
  ${layout}
    position:relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &:before {
    content: "${(props) => props.min}";
    font-size: 10px;
    font-weight: bold;
  }

  &:after {
    content: "${(props) => props.max}";
    font-size: 10px;
    font-weight: bold;
  }

  ${(props) =>
    props.inverted
      ? css`
          &:before,
          &:after {
            color: ${themeGet("colors.white")(props)};
          }
          input {
            &:focus {
              background: rgba(255, 255, 255, 0.1);
            }
            &::-webkit-slider-runnable-track {
              background: ${themeGet("colors.greyDark")(props)};
            }
            &::-moz-range-track {
              background: ${themeGet("colors.greyDark")(props)};
            }
            &::-ms-track {
              background: ${themeGet("colors.greyDark")(props)};
            }
          }
          output {
            color: ${themeGet("colors.white")(props)};
          }
        `
      : css``}
`;

const Input = styled.input.attrs({
  type: "range"
})`
  flex: 1;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: ${vars.thumbDiameter};
  background: transparent;
  cursor: ew-resize;
  padding: 10px 10px;
  border-radius: 25px;
  transition: ${(props) => themeGet("transition.transitionDefault")(props)};

  &:focus {
    outline: none;
    background: rgba(0, 0, 0, 0.05);
  }

  &,
  &::-webkit-slider-thumb {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  &::-webkit-slider-runnable-track {
    ${track};
  }

  &::-moz-range-track {
    ${track};
  }

  &::-ms-track {
    ${track};
  }

  &::-webkit-slider-thumb {
    ${thumb};
  }

  &::-moz-range-thumb {
    ${thumb};
  }

  &::-ms-thumb {
    ${thumb};
  }

  &::-ms-tooltip {
    display: none;
  }
`;

const Output = styled.output`
  display: block;
  user-select: none;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  pointer-events: none;
  text-align: center;
  flex: 1 1 100%;
  order: 4;
  color: ${(props) => themeGet("colors.greyDarker")(props)};
`;
/**
 * Range component is pretty self explanatory, used to select a number out of a range, make sure to set a min, max and default value.
 */
export default function Range({
  min,
  max,
  inverted,
  defaultValue,
  theme,
  ...props
}) {
  const component = (
    <Wrapper min={min} max={max} inverted={inverted}>
      <Input {...props} />
      <Output>{defaultValue}</Output>
    </Wrapper>
  );
  return theme ? (
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  ) : (
    component
  );
}

Range.propTypes = {
  /** Sets the minimum value for the range */
  min: PropTypes.number,
  /** Sets the maximum value for the range */
  max: PropTypes.number,
  /** Sets the default value for the range */
  defaultValue: PropTypes.number,
  /** Changes appearance to suit dark backgrounds */
  inverted: PropTypes.bool,
  /** Specifies the system design theme. */
  theme: PropTypes.object
};
