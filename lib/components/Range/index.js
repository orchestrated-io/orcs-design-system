import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import theme from "../../theme";

const vars = {
  trackHeight: "4px",
  thumbDiameter: "20px"
};

const thumb = props => `
    margin-top: -8px;
    box-sizing: border-box;
    border: none;
    width: ${vars.thumbDiameter};
    height: ${vars.thumbDiameter};
    border-radius: ${vars.thumbDiameter};
    background: ${props.theme.primary};
`;

const track = props => `
    box-sizing: border-box;
    border: none;
    width: 100%;
    height: ${vars.trackHeight};
	  background: ${props.theme.greyLight};
    border-radius: 4px;
`;

const Wrapper = styled.div`
    position:relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    
    &:before {
      content: "${props => props.min}";
      font-size: 10px;
      font-weight: bold;
    }
    
    &:after {
      content: "${props => props.max}";
      font-size: 10px;
      font-weight: bold;
    }
    
    ${props =>
      props.inverted
        ? css`
            &:before,
            &:after {
              color: ${theme.white};
            }
            input {
              &:focus {
                background: rgba(255, 255, 255, 0.1);
              }
              &::-webkit-slider-runnable-track {
                background: ${props.theme.greyDark};
              }
              &::-moz-range-track {
                background: ${props.theme.greyDark};
              }
              &::-ms-track {
                background: ${props.theme.greyDark};
              }
            }
            output {
              color: ${theme.white};
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
  transition: all 200ms ease-in-out;

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
  color: ${theme.greyDarker};
`;

class Range extends React.Component {
  render() {
    const { min, max, inverted, defaultValue } = this.props;
    return (
      <Wrapper min={min} max={max} inverted={inverted}>
        <Input {...this.props} />
        <Output>{defaultValue}</Output>
      </Wrapper>
    );
  }
}

Range.propTypes = {
  /** Sets the minimum value for the range */
  min: PropTypes.number,
  /** Sets the maximum value for the range */
  max: PropTypes.number,
  /** Sets the default value for the range */
  defaultValue: PropTypes.number,
  /** Changes appearance to suit dark backgrounds */
  inverted: PropTypes.bool
};

/** @component */
export default Range;
