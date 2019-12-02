import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

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
  border: ${props =>
    props.large
      ? "4px solid rgba(0,0,0,0.2)"
      : props.inverted
      ? "2px solid rgba(255,255,255,0.4)"
      : "2px solid rgba(0,0,0,0.3)"};
  border-right-color: ${props =>
    props.large
      ? "rgba(0,0,0,0.6)"
      : props.inverted
      ? "rgba(255,255,255,0.8)"
      : "rgba(0,0,0,0.7)"};
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
