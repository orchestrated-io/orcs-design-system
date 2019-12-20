import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import colours from "../../colours";
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
    let border = "2px solid";
    if (props.large) {
      border = "4px solid";
    }
    return border;
  }};
  border-color: ${props => {
    let border = rgba(0, 0, 0, 0.3);
    if (props.inverted) {
      border = colours.greyDark;
    }
    return border;
  }};
  border-right-color: ${props => {
    let border = rgba(0, 0, 0, 0.7);
    if (props.inverted) {
      border = rgba(255, 255, 255, 0.8);
    }
    return border;
  }};
`;

/**
 * As a general guide, use the large prop for when whole pages or sections are loading, and the default (small) loading for smaller elements.
 */
class Loading extends React.Component {
  render() {
    const { large, centered, inverted } = this.props;
    return <Item large={large} centered={centered} inverted={inverted} />;
  }
}

Loading.propTypes = {
  /** Large loading spinner */
  large: PropTypes.bool,
  /** Centered loading spinner */
  centered: PropTypes.bool,
  /** Changes colours to work on dark background */
  inverted: PropTypes.bool
};

/** @component */
export default Loading;
