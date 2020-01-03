import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import { rgba } from "polished";

const Item = styled.div`
  position: relative;
  border-radius: 50%;
  animation: ${props =>
    props.large
      ? "loadingSpin 800ms infinite linear"
      : "loadingSpin 500ms infinite linear"};
  width: ${props => (props.large ? "50px" : "16px")};
  height: ${props => (props.large ? "50px" : "16px")};
  margin: ${props => (props.centered ? "0 auto" : "0")};

  border: ${props => {
    let borderStyle = "2px solid";
    if (props.large) {
      borderStyle = "4px solid";
    }
    return borderStyle;
  }};
  border-color: ${props => {
    let borderColour = rgba(0, 0, 0, 0.3);
    if (props.large) {
      borderColour = rgba(0, 0, 0, 0.2);
    }
    if (props.inverted) {
      borderColour = rgba(255, 255, 255, 0.4);
    }
    return borderColour;
  }};
  border-right-color: ${props => {
    let borderRightColour = rgba(0, 0, 0, 0.7);
    if (props.large) {
      borderRightColour = rgba(0, 0, 0, 0.7);
    }
    if (props.inverted) {
      borderRightColour = rgba(255, 255, 255, 0.9);
    }
    return borderRightColour;
  }};
`;

/**
 * As a general guide, use the large prop for when whole pages or sections are loading, and the default (small) loading for smaller elements.
 */
export default function Loading({ large, centered, inverted }) {
  return <Item large={large} centered={centered} inverted={inverted} />;
}

Loading.propTypes = {
  /** Large loading spinner */
  large: PropTypes.bool,
  /** Centered loading spinner */
  centered: PropTypes.bool,
  /** Changes colours to work on dark background */
  inverted: PropTypes.bool
};
